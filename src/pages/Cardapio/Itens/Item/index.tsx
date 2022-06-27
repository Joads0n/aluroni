import itemStyles from './Item.module.scss';
import classNames from 'classnames';
import { Prato } from 'types/Pratos';

export default function Item(props : Prato) {
  const { title, description, category, size, serving, price, photo} = props;
  return (
    <div className={itemStyles.item}>

      <div className={itemStyles.item__imagem}>
        <img src={photo} alt={title} />
      </div>

      <div className={itemStyles.item__descricao}>
                
        <div className={itemStyles.item__titulo}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <div className={itemStyles.item__tags}>
          <div className={classNames({
            [itemStyles.item__tipo]: true,
            [itemStyles[`item__tipo__${category.label.toLocaleLowerCase()}`]]: true
          })}
          >
            {category.label}
          </div>
          <div className={itemStyles.item__porcao}>{size}g</div>
          <div className={itemStyles.item__qtdpessoas}>Serve {serving} pessoa{serving === 1 ? '' : 's'}</div>
          <div className={itemStyles.item__valor}>R$ {price.toFixed(2)}</div>
        </div>

      </div>

    </div>
  );
}