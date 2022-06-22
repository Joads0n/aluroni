import sobreStyles from './Sobre.module.scss';
import temaStyles from 'styles/Tema.module.scss';
import casa from 'assets/sobre/casa.png';
import massa1 from 'assets/sobre/massa1.png';
import massa2 from 'assets/sobre/massa2.png';

const imagens = [massa1, massa2];

export default function Sobre() {
  return (
    <section>
      <h3 className={temaStyles.titulo}>Sobre</h3>
      <div className={sobreStyles.sobreNos}>
        <img src={casa} alt="Casa Aluroni" />
        <div className={sobreStyles.sobreNos__texto}>
          <p>
            Nós do Aluroni oferecemos a vocês, nossos queridos clientes, a Massa Italiana Caseira mais saborosa e sofisticada de São Paulo! Prezamos pelos ingredientes tradicionais da culinária Italiana, frescos e de excelente qualidade para que sua experiência seja ainda mais intensa!
          </p>
          <p>
            Também possuímos uma cardápio de carnes com muitas opções de acordo com o seu gosto!
          </p>
          <p>
            Para acompanhar as massas italianas, Aluroni possui uma reserva de vinhos especiais, que harmonizam perfeitamente com o seu parto, seja carne ou massa!
          </p>
        </div>
      </div>
      <div className={sobreStyles.imagens}>
        {imagens.map((imagem, index) => (
          <div key={index} 
            className={sobreStyles.imagens__imagem}
          >
            <img src={imagem} alt="imagem da massa" />
          </div>
        ))}
      </div>
    </section>
  );
}