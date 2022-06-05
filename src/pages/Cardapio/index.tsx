import cardapioStyles from './Cardapio.module.scss';
import {ReactComponent as Logo } from 'assets/logo.svg';
import Buscador from './Buscador';
import { useState } from 'react';

export default function Cardapio() {
    const [busca, setBusca] = useState("");
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
            </section>
        </main>
    );
}