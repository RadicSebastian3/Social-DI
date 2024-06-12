import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { NotFound } from '../pages/template/NotFound';
import { Login } from '../pages/Login/Login';
import { Home } from '../pages/Home/Home';
import { Profile } from '../pages/Profile';
import { PeopleLocal } from '../pages/Local';


export const RouteList = () => {
    return <>
        <Routes>
            <Route
                path='/'
                element={<Login />}
            />
            <Route
                path='/Home'
                element={<Home />}
            />
            <Route
                path='/Profile'
                element={<Profile />}
            />
            <Route
                path='/People'
                element={<PeopleLocal />}
            />
             <Route
                path='*'
                element={<NotFound />}
            />
        </Routes>
    </>
}
