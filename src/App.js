import check from './checkmark.svg';
import wrong from './wrong.svg';
import './App.css';
 
function App() { 
  
  const animate = (e) =>{
    var abox = document.getElementsByClassName("acerto")[0];
    e.preventDefault(); 
    if(abox != null){  
      abox.classList.toggle("move-a");   
    }else{
      alert("elemento nao encontrado: certo");
    }
  }

  const error = (e) =>{
    var errado = document.getElementsByClassName("erro")[0];
    e.preventDefault();
    if(errado != null){  
      errado.classList.toggle("move-a");   
    }else{
      alert("elemento nao encontrado: errado");
    }
  }

  return (
    <div className="App">
      <header className="App-header">            
        <img src={check} className="defaultImage acerto" alt="logo"  /> 
        <img src={wrong} className="defaultImage erro" alt="erro" />
          <div>
            <button class="button-default button-green" onClick={animate}>Acerto</button>
            <button class="button-default button-red"   onClick={error}>Erro</button>
          </div>
      </header>
    </div>
  );
}

export default App;
