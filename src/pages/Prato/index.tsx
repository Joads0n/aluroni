import pratoStyles from './Prato.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import classNames from 'classnames';
import cardapio from 'data/cardapio.json';

export default function Prato() {
  const { id } = useParams();
  const navigate = useNavigate();
  const prato = cardapio.find(item => item.id === Number(id));
  if(!prato){
    return '';
  }
  return (
    <>
      <button className={pratoStyles.voltar}
        onClick={() => navigate(-1)}
      >
        {'< Voltar'}
      </button>
      <section className={pratoStyles.container}>
        <h1 className={pratoStyles.titulo}>
          {prato.title}
        </h1>
        <div className={pratoStyles.imagem}>
          <img src={prato.photo} alt={prato.title} />
        </div>
        <div className={pratoStyles.conteudo}>
          <p className={pratoStyles.conteudo__descricao}>
            {pratoStyles.description}
          </p>
          <div className={pratoStyles.tags}>
            <div className={classNames({
              [pratoStyles.tags__tipo]: true,
              [pratoStyles[`tags__tipo__${prato.category.label.toLowerCase()}`]]: true
            })}>
              {prato.category.label}
            </div>
            <div className={pratoStyles.tags__porcao}>
              {prato.size}g
            </div>
            <div className={pratoStyles.tags__qtdpessoas}>
              Serve {prato.serving} pessoa{prato.serving === 1 ? '' : 's'}
            </div>
            <div className={pratoStyles.tags__valor}>
              R$ {prato.price.toFixed(2)}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}