import cardapio from 'data/cardapio.json';
import inicioStyles from './Inicio.module.scss';

export default function Inicio() {
  let pratosRecomendados = [...cardapio];
  pratosRecomendados = pratosRecomendados.sort(() => 0.5 - Math.random()).splice(0,3);
  return (
    <section>
      <h3 className={inicioStyles.titulo}>
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
    </section>
  );
}