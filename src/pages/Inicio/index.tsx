import cardapio from 'data/cardapio.json';
import inicioStyles from './Inicio.module.scss';
import TemaStyles from 'styles/Tema.module.scss';
import nossaCasa from 'assets/nossa_casa.png';

export default function Inicio() {
  let pratosRecomendados = [...cardapio];
  pratosRecomendados = pratosRecomendados.sort(() => 0.5 - Math.random()).splice(0,3);
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
            <button className={inicioStyles.recomendado__botao}>
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