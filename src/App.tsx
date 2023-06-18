import React, {lazy, Suspense} from 'react';
import {Container} from "react-bootstrap";
import FullScreenSpinner from "./components/common/Spinner";
import Pokedex from './components/pokedex/Pokedex';

const Header = lazy(() => import('./components/header/Header'));
// const Pokedex = lazy(() => import('./components/pokedex/Pokedex'));

export default function App() {
    return (
            <Suspense fallback={<FullScreenSpinner/>}>
                <Header/>
                <Pokedex/>
            </Suspense>
    );
}
