import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../home'

export default function RoutesPage(){
    return(
        // Arena de navegacao das rotas
        <BrowserRouter>

        {/*  Renderizacao das rotas */}
        <Routes>
            <Route path='/' element={<Home/>}/>
        </Routes>
        </BrowserRouter>
    )
}