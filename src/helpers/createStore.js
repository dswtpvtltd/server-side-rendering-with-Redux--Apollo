import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../client/store/reducers/index';
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

export default (req) => {
    const client = new ApolloClient({

        link: createHttpLink({
            uri: 'http://sailcorp.com:8888/graphql',
            credentials: 'same-origin',
            headers: {
                cookie: req.header('Cookie'),
            },
        }),
        cache: new InMemoryCache(),
    });

    const store = createStore(reducers, {}, applyMiddleware(thunk.withExtraArgument(client)));

    return { store, client };
}

