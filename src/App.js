import './App.css';
import {ToastContainer} from 'react-toastify'
import RoutesPage from './Componentes/Routes/routes'
function App() {
  return (
    <div className="App">
      <ToastContainer autoClose={1500} position='top-center' theme='colored'/>
      <RoutesPage/>
    </div>
  );
}

export default App;
