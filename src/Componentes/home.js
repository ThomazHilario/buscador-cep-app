import '../styles/home.css'
import axios from 'axios'
import {useState} from 'react'


export default function Home(){
    // state - input
    const [input,setInput] = useState('')

    // state - cep
    const [cep,setCep] = useState({})

    // seachCep
    function seachCep(e){
        // Cancelando formulario
        e.preventDefault()

        async function loadCep(){
            try{
                const response = await axios.get(`https://viacep.com.br/ws/${input}/json/`)
                const data = response.data

                // armazenando o objeto na state cep
                setCep(data)
            }catch(e){
                console.log(e)
                alert('Cep invalido!!')
            }
        }

        loadCep()
    }


    return(
        <main id="container">
            <form>
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
                <button onClick={seachCep}>Buscar</button>
            </form>
            {console.log(cep)}
            {cep.hasOwnProperty('cep') ? <div id='container_informacoes'>
                <h1 className='Cep'>{cep.cep}</h1>
                <h2 className='Cidade'>Cidade: {cep.localidade}</h2>
                <h2 className='Estado'>Estado: {cep.uf}</h2>
                <h2 className='Rua'>Rua: {cep.logradouro !== '' ? cep.logradouro : 'Nao tem'}</h2>
                <h2 className='Bairro'>Bairro: {cep.bairro !== '' ? cep.bairro : 'Nao tem'}</h2>
            </div> : <p>Pesquise um cep</p>}

            
        </main>
    )
}