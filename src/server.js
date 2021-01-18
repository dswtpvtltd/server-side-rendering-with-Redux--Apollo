import 'babel-polyfill';//without this server site rending by lifecyle methods will not work
import 'cross-fetch/polyfill';
import 'isomorphic-fetch';
import '@apollo/react-ssr';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
import proxy from 'express-http-proxy';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();

app.use(express.static('public'));

//create a proxy for token athentication for login
app.use('/graphql', proxy('http://sailcorp.com:8888', {
    proxyReqOptDecorator(Opts) {
        Opts.headers['x-forwarded-host'] = 'localhost:3000';
        return Opts;
    }
}));

app.get('*', (req, res) => {
    const store = createStore(req);

    //return an array of pending promises in network request
    const promises = matchRoutes(Routes, req.path).map(({ route }) => {
        // pass server side store data for reference
        return route.loadData ? route.loadData(store.store) : null;
    }).map(promise => {
        if (promise) {
            return new Promise(async (resolve, reject) => {
                await promise.then(resolve).catch(resolve);
            });
        }
    });

    //complete all pending request before 
    //sending response on browser
    Promise.all(promises)
        .then(() => {
            const context = {};

            const contents = renderer(req, store, context, res);
        })
        .catch(ex => {
            console.log("[server.js]", ex.message);
        });
});

app.listen(4000, () => {
    console.log("server running on port 4000");
});