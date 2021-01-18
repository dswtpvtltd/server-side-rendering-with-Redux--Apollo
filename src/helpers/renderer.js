import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript';
import { Helmet } from 'react-helmet';
import { StaticRouter } from 'react-router-dom';
import Routes from '../client/Routes';
import { ApolloProvider } from '@apollo/client';
import { getDataFromTree, renderToStringWithData } from "@apollo/client/react/ssr";

export default async (req, store, context, res) => {

    // we can replace renderToString to renderToNodeStream for better TTFB
    const App = (
        <ApolloProvider client={store.client}>
            <Provider store={store.store}>
                <StaticRouter location={req.path} context={context}>
                    <div>{renderRoutes(Routes)}</div>
                </StaticRouter>
            </Provider >
        </ApolloProvider>
    );

    await renderToStringWithData(App)
        .then(async content => {

            const state = await store.client.extract();
            const helmet = Helmet.renderStatic();

            const html = (
                <html>
                    <body>
                        <div id="root" dangerouslySetInnerHTML={{ __html: content }} />
                        <script dangerouslySetInnerHTML={{
                            __html: `window.__APOLLO_STATE__=${JSON.stringify(state).replace(/</g, '\\u003c')};`,
                        }} />
                        <script dangerouslySetInnerHTML={{
                            __html: `window.INITIAL_STATE=${JSON.stringify(store.store.getState()).replace(/</g, '\\u003c')};`,
                        }} />
                    </body>
                </html>
            );
            res.send(`<!doctype html>\n${ReactDOMServer.renderToStaticMarkup(html)}`);
            res.end();
        });
}