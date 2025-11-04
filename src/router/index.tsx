import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';

export const routes = [
    {
        path: '/',
        element: <Home />,
    },
    // Add new routes here
];

export const AppRouter: React.FC = () => {
    return (
        <Routes>
            {routes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
            ))}
        </Routes>
    );
};

