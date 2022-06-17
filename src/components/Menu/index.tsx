import {ReactComponent as Logo } from 'assets/logo.svg';
import menuStyles from './Menu.module.scss';
import { Link } from 'react-router-dom';

export default function Menu() {
  const rotas = [
    {
      label: 'Inicio',
      to: '/'
    },
    {
      label: 'Cardapio',
      to: '/cardapio'
    },
    {
      label: 'Sobre',
      to: '/sobre'
    }
  ];
  return (
    <nav className={menuStyles.menu}>
      <Logo />
      <ul className={menuStyles.menu__list}>
        {rotas.map((rota, index) => (
          <li key={index}
            className={menuStyles.menu__link}
          >
            <Link to={rota.to}>
              {rota.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}