import React from 'react'
import { useState } from 'react';
import imgRickMorty from '../img/rick-morty.png';
import {Link} from 'react-router-dom';
import Characters from './Characters';



export default function Home() {

    const[characters, setCharacters]=useState(null);

    const regApi= async () =>{
        const api=await fetch("https://rickandmortyapi.com/api/character");
    
        const characterApi=await api.json();
    
        setCharacters(characterApi.results);
        
    }


  return (
    <div>
        <header className="App-header" >
        <h1 className="title">Rick & Morty</h1>

        {characters ? (
           <Characters  characters={characters} setCharacters={setCharacters}/>
        ):(
          <>
            
            <img src={imgRickMorty} alt="Rick & Morty" className='img-home'/>
            <button onClick={regApi} className="btn-search">
              Buscar personajes
            </button>
            <button className="btn-search">
              <Link   to="/AboutMe">
                About Me
              </Link>
            </button>

            
          
          </>

        )}
        


        </header>
    </div>
  )
}
