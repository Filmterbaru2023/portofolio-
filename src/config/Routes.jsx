import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Detail from '../pages/detail/Detail';

const Film = () => {
    return (
            <Routes>
    
                <Route exact path='/' Component={Home}/>

                <Route path='/:category/' Component={Catalog} />

                <Route path='/:category/:id' Component={Detail} />

                <Route path='/:category/search/:keyword' Component={Catalog} />

            </Routes>
    );
}

export default Film;