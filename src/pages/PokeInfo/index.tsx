import React, { useState, useEffect } from 'react';
import Header from '../../Components/header/Header';
import { useRouteMatch, Link } from 'react-router-dom';
import api from '../../services/api';
import IPokemon  from '../../services/interfaces';
import {FiArrowLeft} from 'react-icons/fi';
import PokeCard, { Loading } from './styles';
import Footer from '../../Components/footer/Footer'

interface PokemonParams {
    name: string,
}

const PokeInfo: React.FC = () => {
  const [pokemon, setPokemon] = useState<IPokemon | null>(null);
  console.log(pokemon);
  const { params } = useRouteMatch<PokemonParams>();
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true);
    async function loadData(): Promise<void> {
      const response = (await api.get(`/${params.name}`)).data;
      setPokemon(response);
      setLoading(false);
    }
    loadData();
  }, [params.name]);
    if(loading === true) {
      return (
      <>
        <Header/>
          <PokeCard>
            <Loading/>
          </PokeCard>
          <Footer/>
      </>); 
    }
    return (
        <>
        <Header/>
          <PokeCard>
            <div className={'card_' + pokemon?.types[0].type.name}>
                 <Link className="back_page" to={'/'}>
                    <FiArrowLeft size={24} />
                 </Link>
                <p className="id_poke">{pokemon?.id}</p>
                <img key={pokemon?.id}src={pokemon?.sprites.front_default} alt={pokemon?.name}/>
                <div className="container">
                    <h4><b>{pokemon?.name}</b></h4>
                    <p>Altura: {pokemon?.height / 10} m</p>
                    <p>Peso: {pokemon?.weight / 10} kg</p>
                    <p>Tipo: {pokemon?.types[0].type.name.toUpperCase()}</p>
                    
                    
                </div>
            </div>
            </PokeCard>
            <Footer/>
            

            
        </>


    )
}

export default PokeInfo;
