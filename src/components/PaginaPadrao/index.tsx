import paginaPadraoStyles from './PaginaPadrao.module.scss';
import { Outlet } from 'react-router-dom';

export default function PaginaPadrao() {
  return (
    <>
      <header className={paginaPadraoStyles.header}>
        <div className={paginaPadraoStyles.header__text}>
          A casa do código e da massa
        </div>
      </header>
      <div>
        <Outlet />
      </div>
    </>
  );
}