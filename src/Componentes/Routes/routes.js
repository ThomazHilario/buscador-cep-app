import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../home'
import NotFound from '../error'

export default function RoutesPage(){
    return(
        // Arena de navegacao das rotas
        <BrowserRouter>

        {/*  Renderizacao das rotas */}
        <Routes>
            <Route path='/' element={<Home/>}/>

            {/* Pagina Not Found */}
            <Route path='*' element={<NotFound/>}/>
        </Routes>
        </BrowserRouter>
    )
}