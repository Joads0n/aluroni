import paginaPadraoStyles from './PaginaPadrao.module.scss';
import { Outlet } from 'react-router-dom';
import TemaStyles from 'styles/Tema.module.scss';

export default function PaginaPadrao() {
  return (
    <>
      <header className={paginaPadraoStyles.header}>
        <div className={paginaPadraoStyles.header__text}>
          A casa do código e da massa
        </div>
      </header>
      <div className={TemaStyles.container}>
        <Outlet />
      </div>
    </>
  );
}