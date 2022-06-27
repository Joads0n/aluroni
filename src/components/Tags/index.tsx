import classNames from 'classnames';
import { Prato } from 'types/Pratos';
import tagsPratosStyles from './TagsPrato.module.scss';

export default function TagsPrato({ category, size, serving, price }: Prato) {
  return (
    <div className={tagsPratosStyles.tags}>
      <div className={classNames({
        [tagsPratosStyles.tags__tipo]: true,
        [tagsPratosStyles[`tags__tipo__${category.label.toLocaleLowerCase()}`]]: true
      })}
      >
        {category.label}
      </div>
      <div className={tagsPratosStyles.tags__porcao}>{size}g</div>
      <div className={tagsPratosStyles.tags__qtdpessoas}>Serve {serving} pessoa{serving === 1 ? '' : 's'}</div>
      <div className={tagsPratosStyles.tags__valor}>R$ {price.toFixed(2)}</div>
    </div>
  );
}