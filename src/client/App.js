import React from 'react';
import { renderRoutes } from 'react-router-config';
import { fetchCurrentUser } from './store/actions';

const App = ({ route }) => {
    return (<div>
        {renderRoutes(route.routes)}
    </div>);
}

export default {
    loadData: ({ dispatch }) => dispatch(fetchCurrentUser()),
    component: App
}