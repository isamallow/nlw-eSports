// JSX: JavaScript + XML (HTML)
// Componentes: função que retorna tags HTML, pode reutilizar 
// Propriedades: conjunto de valores que são passados para os componentes do React 
// Estado: variável que precisa provocar uma diferença no conteúdo visual da página {useState}

import { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import './styles/main.css';
import logoImg from './assets/logo-nlw-esports.svg';
import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';
import { CreateAdModal } from './components/CreateAdModal';
import axios from 'axios';


interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

function App() {
  // lista de games é um estado
  // a variável games é um array de objetos que tem o formato da interface
  const [ games, setGames] = useState<Game[]>([]);

  // array vazio o código da função vai executar uma única vez
  useEffect(() => {
    axios("http://localhost:3333/games").then(response => {
      setGames(response.data);
    });
  }, []);


  return (
    <div className="max-w[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} />
      
      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="bg-nlw-gradient text-transparent bg-clip-text">duo</span> está aqui.
        </h1>

        <div className="grid grid-cols-6 gap-6 mt-16">
          {games.map(game => {
            return (
              <GameBanner 
              key={game.id}
              bannerUrl={game.bannerUrl} 
              title={game.title} 
              adsCount={game._count.ads} 
              />
            )
          })}
        </div>

        <Dialog.Root>

        <CreateAdBanner />
        <CreateAdModal />

        </Dialog.Root>
    </div>
  )
}

export default App


