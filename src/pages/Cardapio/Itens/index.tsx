import cardapio from './itens.json';
import Item from './Item';
import itensStyles from './Itens.module.scss'

export default function Itens() {
    return (
        <div className={itensStyles.itens}>
            {cardapio.map(item => (
                <Item key={item.id} />
            ))}
        </div>
    );
}