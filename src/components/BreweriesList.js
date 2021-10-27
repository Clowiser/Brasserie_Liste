import React, {useEffect, useState} from 'react';
import axios from "axios";
import Brewery from "./Brewery";

import angleterre from "../assets/img/angleterre.png";
import ecosse from "../assets/img/ecosse.png";
import etatsunis from "../assets/img/etatsunis.png";
import ireland from "../assets/img/ireland.png";
import beerr from "../assets/img/beerr.png";


const BreweriesList = () => {
    // RECHERCHE VIA INPUT TEXTE
    const [data, setData] = useState([]);
    const [filtered, setFiltered] = useState(data);

    // API ERREUR CHARGEMENT
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false)

    // INPUT RADIO
    const [choseCountry, setChoseCountry] = useState(''); // variable pour choisir en fonction des pays qui vont être relié au inputs radios
    const radios = ['England', 'Ireland', 'Scotland', 'United States']; // variable pour les inputs radio en tableau


    // BOUTON RECHERCHE
    function blockSearch() {
        let element = document.getElementById("searchbarre").value;
        let result = [];
        result = data.filter((data) => {
            return data.city.toLowerCase().search(element) !== -1;
        });
        setFiltered(result);
    }

    // BOUTON VIDER
    function blockClear() {
        const test = document.getElementById('buttonclear')
        test.addEventListener('click', function () {
            setChoseCountry('')
            document.getElementById("searchbarre").value = "";
            blockSearch();
        })
    }

    // HIDE
    // function affiche() {
    //     document.getElementById("hide").style.display = "block";
    // }
    // let d1 = document.getElementById("test");
    // let p1 = document.getElementById("hide");
    // d1.addEventListener("click", () => {p1.style.display = "block";});
    // d1.addEventListener("mouseout", () => {p1.style.display = "none";});


    // DONNEES
    useEffect(() => {
        setLoading(true)
        axios.get('https://raw.githubusercontent.com/Clowiser/openbrewerydb/master/breweries.json')
        // axios('https://api.openbrewerydb.org/breweries')
            .then(res => {
                setData(res.data)
                setFiltered(res.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                console.log(error)
            })
    }, []);

    if (error) return `We are sorry, we can't load information for the moment, try again later!`;
    if (loading) return `Loading, please wait...`;

    // POUR TOUT AU-DESSUS, TU ME RETOURNE
    return (
        <div>
            <div id="imgRadios">
                    <img src={angleterre} alt='angleterre' name='England' className="pays" />
                    <img src={ireland} alt='ireland' name='Ireland' className="pays" />
                    <img src={ecosse} alt='ecosse' name='Scotland' className="pays" />
                    <img src={etatsunis} alt='etatsunis' name='United States' className="pays" id="us"/>
            </div>
            {/* INPUT RADIO */}
                <ul className="inputradio">
                    {radios.map((radio => { //  la fonction callback fournie en argument est exécutée une fois pour chacun des éléments du tableau radios, dans l'ordre du tableau Angleterre, etc.
                            return (
                                <li key={radio}>
                                    <input type="radio" value={radio} id="radio" name="radiofalse"
                                           checked={radio === choseCountry}
                                           onChange={event => setChoseCountry(event.target.value)}/>
                                    <label htmlFor={radio}>{radio}</label>
                                </li>
                            )
                        }
                    ))}
                </ul>

            {/* RECHERCHE AVEC BOUTONS */}
            <div id="search">
                <input type="text" placeholder="   Write the name of city in lowercase" id="searchbarre"/>
                <button type="submit" className="search" onClick={blockSearch} id="buttonsearch">Search</button>
                <button type="reset" className="clear" onClick={blockClear} id="buttonclear">Clear</button>
            </div>


            {/* BARRE SEPARATRICE */}
            <hr id="spacehr"/>
            <h1>Beweries List :</h1>

            {/* AFFICHAGE */}

            <div id="scroll">
            {filtered
                .filter((element) =>element.country.includes(choseCountry))
                .map((element) => {
                    if(element.country === 'United States'){
                        return(
                            <div className="infos" key={element.obdb_id}>
                                   <img src={beerr} alt="logoBreweries" className="logoBreweries"/><h3>{element.name}</h3>
                                    <h4>{element.country}</h4>
                                    <p>{element.city} - {element.state}</p>
                                {/*<Factory />*/}
                                {/*<button onClick={affiche} id="test">Afficher</button>*/}
                                {/*    <div id="hide"> <Factory /> </div>*/}
                                <br/>
                            </div>)
                    }
                   else{
                        return (
                            <div className="infos" key={element.obdb_id}>
                                <img src={beerr} alt="logoBreweries" className="logoBreweries"/><h3>{element.name}</h3>
                                <h4>{element.country}</h4>
                                <p>{element.city}</p>
                                {/*<Factory className="hide"/>*/}
                                <br/>
                            </div>)
                    }
                })
            }
            </div>

        </div>)
}

export default BreweriesList;