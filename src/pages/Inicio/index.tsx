import cardapio from 'data/cardapio.json';
import inicioStyles from './Inicio.module.scss';
import TemaStyles from 'styles/Tema.module.scss';
import nossaCasa from 'assets/nossa_casa.png';
import { useNavigate } from 'react-router-dom';
import { Prato } from 'types/Pratos';

export default function Inicio() {
  let pratosRecomendados = [...cardapio];
  pratosRecomendados = pratosRecomendados.sort(() => 0.5 - Math.random()).splice(0,3);
  const navigate = useNavigate();

  function redirecionarParaDetalhes(prato: Prato) {
    navigate(`/prato/${prato.id}`, { state: { prato }, replace: true });
  }

  return (
    <section>
      <h3 className={TemaStyles.titulo}>
          Recomendações da cozinha
      </h3>
      <div className={inicioStyles.recomendados}>
        {pratosRecomendados.map(item => (
          <div key={item.id} 
            className={inicioStyles.recomendado}
          >
            <div className={inicioStyles.recomendado__imagem}>
              <img src={item.photo} alt={item.title} />
            </div>
            <button className={inicioStyles.recomendado__botao}
              onClick={() => redirecionarParaDetalhes(item)}
            >
              Ver mais
            </button>
          </div>
        ))}
      </div>
      <h3 className={TemaStyles.titulo}>Nossa casa</h3>
      <div className={inicioStyles.nossaCasa}>
        <img src={nossaCasa} alt="Casa do aluroni" />
        <div className={inicioStyles.nossaCasa__endereco}>
          Rua Vergueiro, 3185 <br/> <br/> Vila Mariana - SP
        </div>
      </div>
    </section>
  );
}