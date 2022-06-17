import React from 'react';
import filtros from './filtros.json';
import filtroStyles from './Filtro.module.scss';
import classNames from 'classnames';

interface IOpcao {
    id: number;
    label: string;
}

interface Props {
    filtro: number | null;
    setFiltro: React.Dispatch<React.SetStateAction<number | null>>
}

export default function Filtros({ filtro, setFiltro }: Props) {

  function selecionarFiltro(opcao : IOpcao) {
    if(filtro === opcao.id){
      return setFiltro(null);
    }
    return setFiltro(opcao.id);
  }

  return (
    <div className={filtroStyles.filtros}>
      {filtros.map(opcao => (
        <button className={classNames({
          [filtroStyles.filtros__filtro]: true,
          [filtroStyles['filtros__filtro--ativo']]: filtro === opcao.id
        })} key={opcao.id}
        onClick={() => selecionarFiltro(opcao)}
        >
          {opcao.label}
        </button>
      ))}
    </div>
  );
}