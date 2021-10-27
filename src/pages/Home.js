import React from 'react';
import botw from "../assets/img/botw.png"
import BreweriesList from "../components/BreweriesList";
import '../assets/index.css';

function Home() {
    return (
        <div className="accueil">
            <div className="titrelogo">
                <img src={botw} alt='logo'/>
                <h1>Just a few clicks away from finding the brewery of your heart !</h1>
            </div>
            <div id="space">
              <BreweriesList />
            </div>
        </div>
    );
}

export default Home;