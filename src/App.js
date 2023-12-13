import './App.css';
import Login from './Login';
import List from './List';
import{Routes , Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element= {<Login/>}/>
        <Route path="/List" element ={<List/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
