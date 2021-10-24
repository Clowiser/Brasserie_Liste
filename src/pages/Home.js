import React from 'react';
import verres_bieres from "../styles/img/verres_bieres.jpg";
// import FactoryBeer from "../components/FactoryBeer";
import FactoryBeer2 from "../components/FactoryBeer2";
import '../styles/index.css';

function Home() {

    return (
        <div className="accueil">
            {/*<Navigation /> -> Test pour naviguer*/}
            <h2>Santé !</h2>
            <img src={verres_bieres} alt='verres'/>
            <h1>A quelques clics de trouver la brasserie de votre coeur !</h1>
            {/*<FactoryBeer />*/}
            <FactoryBeer2 />
        </div>
    );
}

export default Home;








// code de base
// import React from 'react';
// // import FactoryBeer from "../components/FactoryBeer";
// // import Navigation from "../components/Navigation";
// import verres_bieres from "../styles/img/verres_bieres.jpg";
// import '../styles/index.css';
// import FactoryBeer from "../components/FactoryBeer";
//
// function Home() {
//     return (
//         <div className="accueil">
//             {/*<Navigation /> -> Test pour naviguer*/}
//             <h2>Santé !</h2>
//             <img src={verres_bieres} alt='verres' />
//             <h1>A quelques clics de trouver la brasserie de votre coeur !</h1>
//
//             <form>
//                 <input className="navSearch" type="search" placeholder="Saisissez votre recherche"/>
//                 <button className="search">Rechercher</button>
//                 <button className="triangle">Vider</button>
//             </form>
//             <FactoryBeer />
//         </div>
//     );
// }
//
// export default Home;


