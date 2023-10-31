import '../styles/error.css'
import {Link} from 'react-router-dom'
export default function PageError(){
    return(
        <main>
            <h1>Error 404</h1>
            <p>Esta página não existe!</p>
            <Link to="/">Voltar</Link>
        </main>
    )
}