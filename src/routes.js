import PaginaPadrao from 'pages/PaginaPadrao';
import Home from 'pages/Home';
import Categoria from 'pages/Categoria';
import Carrinho from 'pages/Carrinho';
import Anuncie from 'pages/Anuncie'

import { BrowserRouter, Route, Routes } from "react-router-dom"

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PaginaPadrao />}>
                    <Route index element={<Home />} />
                    <Route path='/categoria/:nomeCategoria' element={<Categoria />} />
                    <Route path='/carrinho/' element={<Carrinho />} />
                    <Route path='/anuncie/' element={<Anuncie />} />
                    <Route path='anuncie/:nomeCategoria' element={<Anuncie />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}