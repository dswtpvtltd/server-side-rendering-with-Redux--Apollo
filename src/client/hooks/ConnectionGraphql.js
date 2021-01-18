import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

export const ConnectionGraphql = (req) => {
    const client = new ApolloClient({
        ssrMode: true,
        link: createHttpLink({
            uri: 'https://lbh240.com:8890',
            headers: {
                cookie: req.header('Cookie'),
            },
        }),
        cache: new InMemoryCache()
    });

    return { client };
}