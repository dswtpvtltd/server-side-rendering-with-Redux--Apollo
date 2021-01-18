import 'babel-polyfill';//without this server site rending by lifecyle methods will not work
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Routes from './Routes';
import reducers from './store/reducers/index';
import { ApolloClient, ApolloProvider } from '@apollo/client';
import 'isomorphic-fetch';

const client = new ApolloClient({
    link: "http://sailcorp.com:8888/graphql",
    cache: new InMemoryCache().restore(JSON.parse(window.__APOLLO_STATE__))
});

const store = createStore(reducers, window.INITIAL_STATE, applyMiddleware(thunk.withExtraArgument(client)));

ReactDOM.rehydrating(
    <ApolloProvider client={client}>
        <Provider store={store}>
            <BrowserRouter>
                <div>{renderRoutes(Routes)}</div>
            </BrowserRouter>
        </Provider>
    </ApolloProvider>,
    document.querySelector("#root"));
