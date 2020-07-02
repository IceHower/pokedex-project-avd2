
import React, {FormEvent, useState, useEffect} from 'react';
import Header from '../../Components/header/Header';
import Footer from '../../Components/footer/Footer';
import api from '../../services/api';
import IPokemon  from '../../services/interfaces'
import { Link, useHistory } from 'react-router-dom';
import {ToastContainer, toast, Zoom} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {FiArrowLeft, FiArrowRight} from 'react-icons/fi';
import PageHome, { Pagination } from './styles'


const Home: React.FC = () => {
    const history = useHistory();
    const [searchPoke, setSearchPoke] = useState('');
    const [pokemons, setPokemon] = useState<IPokemon[]>([]);
    const [curPage, setCurPage] = useState('');
    const [nextPage, setNextPage] = useState('');
    const [prevPage, setPrevPage] = useState('');


    async function filterPokes(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(searchPoke);
        try {
        await api.get(`/${searchPoke}`);
        } catch(err) {
        return toast.error('Por favor inserir o nome de um pokemon', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
            });
        }
        if(searchPoke === '') {
        return toast.error('Por favor inserir o nome de um pokemon', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
            });
        }
        
        history.push(`/pokemon/${searchPoke}`)
    }
    async function loadPokemons() {
        await api.get(curPage).then(response => {
            setPokemon(response.data.results);
            setNextPage(response.data.next);
            setPrevPage(response.data.prev);
            console.log(response.data.results);
        })
      }
    function NextPage() {
        setCurPage(nextPage);
    }
    function PrevPage() {
        setCurPage(prevPage);
    }

      useEffect(() => {
        loadPokemons();
      }, [curPage]);
    
    return (
        <>
        <PageHome>
            <Header/>
            <ToastContainer draggable={false} transition={Zoom} autoClose={1200} />
            <form onSubmit={filterPokes}>
                <input
                type='name'
                id='name'
                name='name'
                value={searchPoke}
                onChange={e => setSearchPoke(e.target.value)}
                placeholder="Digite o nome do pokemon aqui."
                    />
                <button type="submit">Pesquisar</button>
            </form>
            <p>Ou escolha um abaixo</p>
            <ul>
             {pokemons.map(p => (
                 <li key={p.name}>
                    <Link to={`/pokemon/${p.name}`}>{p.name.toUpperCase()}</Link>
                 </li>))
              }
            </ul>
        <Pagination>
            <Link to={'/'} onClick={PrevPage} className="arrowLeft"><FiArrowLeft/></Link>
            <Link to={'/'} onClick={NextPage}><FiArrowRight/></Link>
        </Pagination>
        
        </PageHome>
        <Footer/>
        </>

    )

}

export default Home;