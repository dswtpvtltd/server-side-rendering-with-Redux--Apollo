import App from './App';
import HomePage from '../client/pages/Homepage';
import NotFoundPage from '../client/pages/NotFound';

export default [
    {
        ...App,
        routes: [
            {
                ...HomePage,
                path: "/",
                exact: true
            },
            {
                ...NotFoundPage,
                path: "*"
            }
        ]
    }
];
