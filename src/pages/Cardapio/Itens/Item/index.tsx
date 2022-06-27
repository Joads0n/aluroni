import itemStyles from './Item.module.scss';
import { Prato } from 'types/Pratos';
import TagsPrato from 'components/Tags';
import { useNavigate } from 'react-router-dom';

export default function Item(props : Prato) {
  const { id, title, description, photo } = props;
  const navigate = useNavigate();
  return (
    <div className={itemStyles.item} onClick={() => navigate(`/prato/${id}`)}>

      <div className={itemStyles.item__imagem}>
        <img src={photo} alt={title} />
      </div>

      <div className={itemStyles.item__descricao}>
                
        <div className={itemStyles.item__titulo}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <TagsPrato {...props} />

      </div>

    </div>
  );
}