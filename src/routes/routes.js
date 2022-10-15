import {lazy} from 'react';


const Home = lazy(()=>import("../views/Home"));

const routes = [
    {
        path: '/',
        component: Home
    }
];

export default routes;