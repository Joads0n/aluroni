import itemStyles from './Item.module.scss';
import logo from 'assets/logo.svg';

export default function Item() {
    return (
        <div className={itemStyles.item}>

            <div className={itemStyles.item__imagem}>
                <img src={logo} alt="imagem" />
            </div>

            <div className={itemStyles.item__descricao}>
                
                <div className={itemStyles.item__titulo}>
                    <h2>Macarao</h2>
                    <p>Descriçao macarão</p>
                </div>

                <div className={itemStyles.item__tags}>
                    <div className={itemStyles.item__tipo}>
                       Massa 
                    </div>

                    <div className={itemStyles.item__porcao}>
                       400g 
                    </div>

                    <div className={itemStyles.item__qtdpessoas}>
                       Serve 2 pessoas 
                    </div>

                    <div className={itemStyles.item__valor}>
                       R$ 50,00 
                    </div>
                </div>

            </div>

        </div>
    );
}