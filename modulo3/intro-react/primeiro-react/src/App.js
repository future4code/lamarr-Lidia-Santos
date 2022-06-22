// import logo from './logo.svg';
import avatar from './imagens/avatar.png';
import './App.css';

function App() {
  function mensagem (){
    alert ("Boa noite!")
  }
  return (
    <div className="App">
      <h1>Olá, eu sou lidia lee!</h1>
      <img src={avatar}/>
      <p>Este é o meu primeiro site react!</p>
      <button onClick= {mensagem} >Aperte aqui</button>
    </div>
  );
}

export default App;
