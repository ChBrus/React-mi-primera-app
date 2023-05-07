import logo from './logo.svg';
import './App.css';

/** 
 * Cabe recalcar que no sé de React XDXD
*/
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Piedra papel o tijeras</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className='App-game'>
        <div className='item'>
          <label>Piedra</label>
          <i className="fa-solid fa-hand-fist" id='piedra'></i>
        </div>
        <div className='item'>
          <label>Papel</label>
          <i className="fa-solid fa-hand" id='papel'></i>
        </div>
        <div className='item'>
          <label>Tijera</label>
          <i className="fa-solid fa-hand-scissors" id='tijera'></i>
        </div>
      </div>
      <div className='App-error'>
        <div className='line'></div>
        <p>No supe como hacer esto de forma dinámica TT AYUDA</p>
        <div className='line'></div>
      </div>
    </div>
  );
}

export default App;