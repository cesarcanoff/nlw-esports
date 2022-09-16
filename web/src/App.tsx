// Componentes e Propriedades
import "./styles/main.css";
import { useState, useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import logoImage from "./assets/logo-nlw-esports.svg";
import { GameBanner } from "./components/GameBanner";
import { CreateAdBanner } from "./components/CreateAdBanner";
import { GameController } from "phosphor-react";
import { Input } from "./components/Form/input";

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

function App() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch("http://localhost:3333")
      .then((response) => response.json())
      .then((data) => {
        setGames(data);
      });
  }, []);

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImage} />
      <h1 className="text-6xl font-black text-white mt-20">
        Seu{" "}
        <span className="text-transparent bg-nlw-gradient bg-clip-text">
          duo{" "}
        </span>
        está aqui
      </h1>

      {games.map((game) => {
        return (
          <GameBanner
            key={game.id}
            bannerUrl={game.bannerUrl}
            title={game.title}
            adsCount={game._count.ads}
          />
        );
      })}
      <Dialog.Root>
        <CreateAdBanner />
        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/60 inset-0 fixed">
            <Dialog.Content className="fixed bg-[#2a2634] py-8 px-14 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
              <Dialog.Title className="text-3xl font-black">
                Publique um anúncio
              </Dialog.Title>
              <form className="mt-8 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="game" className="font-semibold">
                    Qual o Game?
                  </label>
                  <Input
                    id="game"
                    placeholder="Selecione o jogo que deseja jogar"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="">Seu nome (ou nickname)</label>
                  <Input
                    id="name"
                    placeholder="Como te chamam dentro do game?"
                  />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="yearsPlaying">Joga a quantos anos?</label>
                    <Input
                      id="yearsPlaying"
                      type="number"
                      placeholder="Tudo bem ser ZERO"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="discord">Discord</label>
                    <Input
                      id="discord"
                      type="text"
                      placeholder="Usuario#0000"
                    />
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="weekDays">Quando costuma jogar?</label>
                    <div className="grid grid-cols-4 gap-2">
                      <button
                        title="Domingo"
                        className="w-8 h-8 rounded bg-zinc-900"
                      >
                        D
                      </button>

                      <button
                        title="Segunda-feira"
                        className="w-8 h-8 rounded bg-zinc-900"
                      >
                        S
                      </button>
                      <button
                        title="Terça-feira"
                        className="w-8 h-8 rounded bg-zinc-900"
                      >
                        T
                      </button>
                      <button
                        title="Quarta-feira"
                        className="w-8 h-8 rounded bg-zinc-900"
                      >
                        Q
                      </button>
                      <button
                        title="Quinta-feira"
                        className="w-8 h-8 rounded bg-zinc-900"
                      >
                        Q
                      </button>
                      <button
                        title="Sexta-feira"
                        className="w-8 h-8 rounded bg-zinc-900"
                      >
                        S
                      </button>
                      <button
                        title="Sábado"
                        className="w-8 h-8 rounded bg-zinc-900"
                      >
                        S
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 flex-1">
                    <label htmlFor="hourStart">Qual horário do dia?</label>
                    <div className="grid grid-cols-2 gap-1">
                      <Input id="HourStart" type="time" placeholder="De" />
                      <Input id="HourEnd" type="time" placeholder="Até" />
                    </div>
                  </div>
                </div>
                <div className="mt-2 flex gap-2 text-sm">
                  <Input type="checkbox" />
                  Costumo me conectar ao chat de voz
                </div>

                <footer className="mt-4 flex justify-end gap-4">
                  <Dialog.Close
                    type="button"
                    className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600"
                  >
                    Cancelar
                  </Dialog.Close>
                  <button
                    className="bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600"
                    type="submit"
                  >
                    <GameController size={24} />
                    Encontrar duo
                  </button>
                </footer>
              </form>
            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}

export default App;
