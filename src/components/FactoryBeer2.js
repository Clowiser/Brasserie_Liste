import React, {useEffect, useState} from 'react';
import axios from "axios";
import Factory from "./Factory";

const FactoryBeer2 = () => {
    // 1 - RECHERCHE VIA INPUT TEXTE
    const [data, setData] = useState([]);
    const [filtered, setFiltered] = useState(data);

    // 2 - INPUT RADIO
    const [choseCountry, setChoseCountry] = useState(''); // variable pour choisir en fonction des pays qui vont être relié au inputs radios
    const radios = ['England', 'Ireland', 'Scotland', 'United States']; // variable pour les inputs radio en tableau

    // 1 - Methode pour la recherche sans le bouton
    // const blockSearch = (event) => {
    //     let element = event.target.value;
    //     // let maj = element[0].toUpperCase()
    //     // let suiteMinus = element.slice(1)
    //     // let mot = maj + suiteMinus;
    //     let result = [];
    //     result = data.filter((data) => {
    //         return data.city.search(element) !== -1;
    //     });
    //     setFiltered(result);
    //     // filtered(result);
    //     // console.log(result);
    //     console.log(setFiltered(result));
    // }

    function blockSearch() {
        let element = document.getElementById("search").value;
        let result = [];
        result = data.filter((data) => {
            return data.city.toLowerCase().search(element) !== -1;
        });
        setFiltered(result);
    }

    function blockClear() {
        const test = document.getElementById('buttonclear')
        test.addEventListener('click', function () {
            setChoseCountry('')
            document.getElementById("search").value = "";
            blockSearch();
        })
    }

    useEffect(() => {
        axios('https://raw.githubusercontent.com/Clowiser/openbrewerydb/master/breweries.json')
        // axios('https://api.openbrewerydb.org/breweries')
            .then(res => {
                setData(res.data)
                setFiltered(res.data);
                // console.log(res.data);
            })
            .catch(error => {
                console.log('Erreur' + error)
            })
    }, []);


    return (
        <div>

            <ul>
                {radios.map((radio => { //  la fonction callback fournie en argument est exécutée une fois pour chacun des éléments du tableau radios, dans l'ordre du tableau Angleterre, etc.
                        return (
                            <li className="inputradio" key={radio}>
                                <input type="radio" value={radio} id="radio" name="radiofalse" checked={radio === choseCountry}
                                       onChange={event => setChoseCountry(event.target.value)} />
                                {/*Pour les boutons radio et les cases à cocher, l'événement onchange se produit lorsque l'état coché a été modifié.*/}
                                {/*checked pour sélectionner l'input radio correspondant*/}
                                <label htmlFor={radio}>{radio}</label>
                            </li>
                        )
                    }
                ))}
            </ul>


            <input type="text" placeholder="Ecrire la ville en minuscule" id="search"/>
            <button type="submit" className="search" onClick={blockSearch} id="buttonsearch">Rechercher</button>
            <button type="reset" className="clear" onClick={blockClear} id="buttonclear">Vider</button>


            {/* 1 - Methode pour la recherche sans le bouton*/}
            {/*/!*<input type="text" placeholder="Ecrire ici" onChange={(event) => blockSearch(event)}/>*!/*/}

            <hr/>
            <div id="scroll">
            {filtered
                .filter((element) =>element.country.includes(choseCountry))
                .map((element) => {
                    if(element.country === 'United States'){
                        return(
                            <div key={element.obdb_id}>
                                <a href={<Factory />}><h3>{element.name}</h3></a>
                                <h4>{element.country}</h4>
                                <p>{element.city} - {element.state}</p>
                            </div>)
                    }
                   else{
                        return (
                            <div key={element.obdb_id}>
                                <a href={<Factory />}><h3>{element.name}</h3></a>
                                <h4>{element.country}</h4>
                                <p>{element.city}</p>
                            </div>)
                    }
                })
            }
            </div>

        </div>)
}


export default FactoryBeer2;
