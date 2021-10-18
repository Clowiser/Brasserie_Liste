import './App.css';

function App() {
  return (
      <>
          {/*<header>Trouver votre brasserie !</header>*/}
          <h1>A quelques clics de trouver la brasserie de votre coeur !</h1>
          <form>
              <input className="navSearch" type="search" placeholder="Saisissez votre recherche"/>
              <button className="search">Rechercher</button>
              <button className="triangle">Vider</button>
          </form>
          {/*<footer>Copyright 2021</footer>*/}
          {/*<div>*/}
          {/*    <h1>Voulez-vous jouer à un jeu ?</h1>*/}
          {/*</div>*/}
      </>
  );
}

export default App;

