import notFoundStyles from './NotFound.module.scss';
import { ReactComponent as NotFoundImage} from 'assets/not_found.svg';
import classNames from 'classnames';
import temaStyles from 'styles/Tema.module.scss';
import { useNavigate } from 'react-router-dom';

export default function NotFound(){
  const navigate = useNavigate();

  return (
    <div className={classNames({
      [notFoundStyles.container]: true,
      [temaStyles.container]: true
    })} >

      <div className={notFoundStyles.voltar}>
        <button onClick={() => navigate(-1)}>
          {'< Voltar'}
        </button>
      </div>
      <NotFoundImage  />

    </div>
  );
}