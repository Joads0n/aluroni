import pratoStyles from './Prato.module.scss';
import { Route, Routes, useNavigate, useParams } from 'react-router-dom';
import cardapio from 'data/cardapio.json';
import TagsPrato from 'components/Tags';
import NotFound from 'pages/NotFound';
import PaginaPadrao from 'components/PaginaPadrao';

export default function Prato() {
  const { id } = useParams();
  const navigate = useNavigate();
  const prato = cardapio.find(item => item.id === Number(id));
  if(!prato){
    return <NotFound />;
  }
  return (
    <Routes>
      <Route path='*' element={<PaginaPadrao />}>
        <Route index element={
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
                <TagsPrato {...prato} />
              </div>
            </section>
          </>
        } />
      </Route>
    </Routes>
  );
}