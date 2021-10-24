// import React, {useEffect, useState} from 'react';
// import axios from "axios";
// // import Factory from "./Factory";
//
// const FactoryBeer = () => {
//     const [data, setData] = useState([]); // les données
//     const [filter, setFilter] = useState(''); // pour filtrer
//     // const [choseCountry, setChoseCountry] = useState('');
//     const radios =['Angleterre', 'Irlande', 'Ecosse', 'Etats-Unis'];
//
//     const filteredData = data.filter( // filtrer
//         element =>
//             // element.city.toLowerCase().toString().indexOf(filter) || element.name.toLowerCase().toString().indexOf(filter) || element.state.toLowerCase().toString().indexOf(filter)
//             element.name.toLowerCase().toString().indexOf(filter)
//     );
//
//     // const elementToDisplay = filter ? filteredData : data; // if... else -> revoir cette écriture de code
//     function elementToDisplay(filter){
//         if(filter){
//             return data
//         }else{
//             return filteredData
//         }
//     }
//     const test = elementToDisplay(filter);
//
//
//     useEffect(() => { // les données
//         // axios('https://raw.githubusercontent.com/Clowiser/openbrewerydb/master/breweries.json')
//         //axios.get('https://raw.githubusercontent.com/Clowiser/openbrewerydb/master/breweries.json')
//         axios('https://api.openbrewerydb.org/breweries')
//             .then(res => {
//                 setData(res.data);
//             })
//     }, []);
//
//     return (
//         <div>
//             <ul>
//                 {radios.map((radio => {
//                         return (
//                             <li className="inputradio" key={radio}>
//                                 <input type="radio" value={radio} id={radio}/>
//                                 <label htmlFor={radio}>{radio}</label>
//                             </li>
//                         )
//                     }
//                 ))}
//             </ul>
//
//             <input type="text" onChange={event => setFilter(event.target.value.toLowerCase())} placeholder="écrire ici"/>
//             <button className="search" >Rechercher</button>
//             {/*<button className="triangle">Vider</button>*/}
//
//             <hr />
//             {!filteredData.length && (<div>Ecrire pour afficher le résultat de votre recherche</div>)}
//             {test.map(element => (
//                 <div key={element.name}>
//                     <h3>{element.name}</h3>
//                     {/*<h4>{element.country}</h4>*/}
//                     {/*<p>{element.state}</p>*/}
//                     {/*<p>{element.city}</p>*/}
//                 </div>
//             ))}
//
//             {/*<ul>*/}
//             {/*    {data.filter(element => element.toString().indexOf(filter)).map(element => (<Factory element={element} key={element.obdb_id}/>))}*/}
//             {/*</ul>*/}
//
//         </div>)
// };
//
// // faire un premier tri en fonction de england ireland scotland et united-states par des inputs radios puis la barre de recherche
// // Constat : efface, mais sélectionne bien
//
// // axios : Axios est basé sur Promise, ce qui vous permet de profiter des avantages d’async de JavaScript et await pour un code asynchrone plus lisible.
//
// export default FactoryBeer;
//












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