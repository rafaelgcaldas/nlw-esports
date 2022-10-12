import { useEffect, useState } from 'react';

import * as Dialog from '@radix-ui/react-dialog';
import { GameController } from 'phosphor-react';

import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';

import logo from './assets/logo-nlw-esports.png';

import './styles/main.css';


interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number
  }
}

function App() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch('http://localhost:3333/games')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setGames(data)
      })
  }, [])

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logo} alt="Logo" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16 mx-2">
        {games.map(game => (
          <GameBanner
          key={game.id}
            bannerUrl={game.bannerUrl}
            title={game.title}
            adsCount={game._count.ads}
          />
        ))}
      </div>

      <Dialog.Root>
        <CreateAdBanner />

        <Dialog.Portal>
          <Dialog.Overlay  className="bg-black/60 inset-0 fixed"/>

          <Dialog.Content className="fixed bg-[#2A2334] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg">
            <Dialog.Title className="text-3xl font-black">
              Publique um anúncio
            </Dialog.Title>
            
            <Dialog.Content>
              <form>
                <div>
                  <label htmlFor="game">Qual o game?</label>
                  <input type="text" placeholder="Selecione o game que deseja jogar" id="game" />
                </div>

                <div>
                  <label htmlFor="name">Seu nome (ou nickname)?</label>
                  <input type="text" placeholder="Como te chamam dentro do jogo" id="name" />
                </div>

                <div>
                  <div>
                    <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
                    <input type="number" placeholder="Tudo bem ser zero" id="yearsPlaying" />
                  </div>

                  <div>
                    <label htmlFor="discord">Qual seu discord?</label>
                    <input type="text" placeholder="Usuario#0000" id="discord" />
                  </div>
                </div>

                <div>
                  <div>
                    <label htmlFor="weekDays">Quando costuma jogar?</label>
                  </div>

                  <div>
                    <label htmlFor="hourStart">Qual horário do dia?</label>
                    <div>
                      <input type="time" placeholder="De" id="hourStart" />
                      <input type="time" placeholder="Até" id="hourEnd" />
                    </div>
                  </div>
                </div>

                <div>
                  <input type="checkbox" />
                  Costumo me conectar ao chat de voz
                </div>

                <footer>
                  <button>Cancelar</button>
                  <button type="submit">
                    <GameController />
                    Encontrar duo
                  </button>
                </footer>

              </form>
            </Dialog.Content>
          </Dialog.Content>
        </Dialog.Portal>

      </Dialog.Root>
    </div>
  )
}

export default App
