import ordenadorStyles from './Ordenador.module.scss';
import opcoes from './opcoes.json';
import React, { useState } from 'react';
import classNames from 'classnames';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

interface Props {
    ordenador: string,
    setOrdenador: React.Dispatch<React.SetStateAction<string>>
}

export default function Ordenador({ ordenador, setOrdenador }: Props) {
  const [aberto, setAberto] = useState(false);
  const nomeOrdenador = ordenador && opcoes.find(opcao => opcao.value === ordenador)?.nome;
  return (
    <button className={classNames({
      [ordenadorStyles.ordenador]: true,
      [ordenadorStyles['ordenador--ativo']]: ordenador !== '',
    })}
    onClick={() => setAberto(!aberto)}
    onBlur={() => setAberto(false)}
    >
      <span>{nomeOrdenador || 'Ordenar Por'}</span>
      {aberto ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} />}
      <div className={classNames({
        [ordenadorStyles.ordenador__options]: true,
        [ordenadorStyles['ordenador__options--ativo']]: aberto
      })}
      >
                
        {opcoes.map(opcao => (
          <div key={opcao.value}
            className={ordenadorStyles.ordenador__option} 
            onClick={() => setOrdenador(opcao.value)}
          >
            {opcao.nome}
          </div>
        ))}

      </div>
    </button>
  );
}