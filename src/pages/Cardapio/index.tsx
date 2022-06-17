import cardapioStyles from './Cardapio.module.scss';
import {ReactComponent as Logo } from 'assets/logo.svg';
import Buscador from './Buscador';
import { useState } from 'react';
import Filtros from './Filtros';
import Ordenador from './Ordenador';
import Itens from './Itens';

export default function Cardapio() {
  const [busca, setBusca] = useState('');
  const [filtro, setFiltro] = useState<number | null>(null);
  const [ordenador , setOrdenador] = useState('');
  return (
    <main>
      <nav className={cardapioStyles.menu}>
        <Logo />
      </nav>
      <header className={cardapioStyles.header}>
        <div className={cardapioStyles.header__text}>
                    A casa do código e da massa
        </div>
      </header>
      <section className={cardapioStyles.cardapio}>  
        <h3 className={cardapioStyles.cardapio__titulo}>Cardápio</h3>
        <Buscador busca={busca} setBusca={setBusca} />
        <div className={cardapioStyles.cardapio__filtros}>
          <Filtros filtro={filtro} setFiltro={setFiltro} />
          <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
        </div>
        <Itens busca={busca} filtro={filtro} ordenador={ordenador} />
      </section>
    </main>
  );
}