import React, {useEffect, useState} from 'react';
import axios from "axios";
// import Factory from "./Factory";

const FactoryBeer = () => {
    const [data, setData] = useState([]); // variable pour les données
    const [filter, setFilter] = useState(''); // variable pour filtrer

    // const [sortedData, setSortedData] = useState([]);

    const [choseCountry, setChoseCountry] = useState(''); // variable pour choisir en fonction des pays qui vont être relié au inputs radios
    const radios = ['Angleterre', 'Irlande', 'Ecosse', 'Etats-Unis']; // variable pour les inputs radio en tableau



    // FUNCTION POUR FILTRER LES DONNEES AVEC LA BARRE DE RECHERCHE
    const filteredData = data.filter(
        element =>
            // element.city.toLowerCase().toString().indexOf(filter) || element.name.toLowerCase().toString().indexOf(filter)
            element.name.toLowerCase().toString().indexOf(filter) // filtrer par le nom en minulscule, en texte et filtrer par index
            // element.country.toLowerCase().toString().indexOf(filter)
    );

    // FUNCTION POUR AFFICHER ELEMENT FILTRER AVEC LA BARRE DE RECHERCHE
    function elementToDisplay(element) { // function pour afficher l'élément que l'on fitre
        if (element) { // si élement
            return filteredData // retourne l'élément filtrer
        } else {
            return data
        }
    }
    const displayResult = elementToDisplay(filter);



    useEffect(() => {

        // axios('https://raw.githubusercontent.com/Clowiser/openbrewerydb/master/breweries.json')
        axios('https://api.openbrewerydb.org/breweries')
            .then(res => {
                setData(res.data);
            })
            }, []);


    return (
            <div>

                {/* 1 - INPUT RADIOS */}
                <ul>
                    {radios.map((radio => { //  la fonction callback fournie en argument est exécutée une fois pour chacun des éléments du tableau radios, dans l'ordre du tableau Angleterre, etc.
                            return (
                                <li className="inputradio" key={radio}>
                                    <input type="radio" value={radio} id={radio} checked={radio === choseCountry}
                                           onChange={event => setChoseCountry(event.target.value)} />
                                    {/*Pour les boutons radio et les cases à cocher, l'événement onchange se produit lorsque l'état coché a été modifié.*/}
                                    {/*checked pour sélectionner l'input radio correspondant*/}
                                    <label htmlFor={radio}>{radio}</label>
                                </li>
                            )
                        }
                    ))}
                </ul>


                {/*/!* 2 - BARRE DE RECHERCHE *!/*/}
                <input type="text" onChange={event => setFilter(event.target.value.toLowerCase())}
                       placeholder="écrire ici"/>
                {/*<button className="search" >Rechercher</button>*/}
                {/*<button className="triangle">Vider</button>*/}

                <hr/>

                {displayResult.map(element => (
                    <div key={element.obdb_id}>
                        <h3>{element.name}</h3>
                        <h4>{element.country}</h4>
                        <p>{element.state}</p>
                        <p>{element.city}</p>
                    </div>
                ))}

                {/*<ul>*/}
                {/*    {data.filter(element => element.toString().indexOf(filter)).map(element => (<Factory element={element} key={element.obdb_id}/>))}*/}
                {/*</ul>*/}

            </div>
        )
    };



// export default FactoryBeer;













// partie affichage données
// return (
//     <div>
//         <ul>
//             {radios.map((radio => {
//                     return (
//                         <li className="inputradio" key={radio}>
//                             <input type="radio" value={radio} id={radio}/>
//                             <label htmlFor={radio}>{radio}</label>
//                         </li>
//                     )
//                 }
//             ))}
//         </ul>
//
//         <input type="text" onChange={event => setFilter(event.target.value.toLowerCase())} placeholder="écrire ici"/>
//         <button className="search" >Rechercher</button>
//         {/*<button className="triangle">Vider</button>*/}
// {!filteredData.length && (<div>Ecrire pour afficher le résultat de votre recherche</div>)}
// {test.map(element => (
//     <div key={element.obdb_id}>
//         <h3>{element.name}</h3>
//         {/*<h4>{element.country}</h4>*/}
//         {/*<p>{element.state}</p>*/}
//         {/*<p>{element.city}</p>*/}
//     </div>
// ))}
// {/*        {data.filter(element => element.toString().indexOf(filter)).map(element => (<Factory element={element} key={element.obdb_id}/>))}*/}
// {/*    </ul>*/}


// second essai
// import React, {useEffect, useState} from 'react';
// import axios from "axios";
// import Factory from "./Factory";
//
//
// const FactoryBeer = () => {
//     const [data, setData] = useState([]); // c'est par le setData que l'on va faire évoluer le data
//     const [filter, setFilter] = useState(data);
//
//     // similaire à componentDidMount et componenetDidUpdate
//     useEffect(() => {
//         axios
//             .get('https://raw.githubusercontent.com/Clowiser/openbrewerydb/master/breweries.json')
//             .then((res) => setData(res.data));
//
//     }, []); // le tableau vide permet d'avoir un seul appel -> éviter la boucle infini
//
//     return <div>
//         <input id="filter" name="filter" type="text" value={filter} onChange={event => setFilter(event.target.value)}/>
//         <button className="search" >Rechercher</button>
//         {/*<button className="triangle">Vider</button>*/}
//         <ul>
//             {data.filter(element => element.toString().indexOf(filter) || filter === '').map(element => (<Factory element={element} key={element.obdb_id}/>))}
//         </ul>
//     </div>
// };
//
// // {fruit.filter(f => f.includes(filter) || filter === '').map(f => <li key={f}>    {f}</li>)}
// // {people.filter(person => person.age < 60).map(filteredPerson => (<li>{filteredPerson.name} </li>
//
// export default FactoryBeer;
// </div>)
// };


// code bde base
// import React, {useEffect, useState} from 'react';
// import axios from "axios";
// import Factory from "./Factory";
//
//
// const FactoryBeer = () => {
//     const [data, setData] = useState([]); // c'est par le setData que l'on va faire évoluer le data
//
//
//     useEffect(() => {
//         axios
//             .get('https://raw.githubusercontent.com/Clowiser/openbrewerydb/master/breweries.json')
//             .then((res) => setData(res.data));
//
//     }, []);
//
//     return <div>
//         <ul>
//             {data.filter(element => element.state = 'Oregon').map((element) => (
//                 <Factory element={element} key={element.obdb_id}/>
//             ))}
//         </ul>
//     </div>
// };
//
//
// export default FactoryBeer;