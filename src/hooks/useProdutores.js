import { useState, useEffect} from 'react';

import { carregaProdutores } from '../servicos/carregaDados';

export default function useProdutores() {
    const [titulo, setTitulo] = useState('');
    const [lista, setLista] = useState([]);

    /* 
      Função do próprio react que está funcionando de
      maneira semelhante a função do topo "componentDidMount"
      pelo simples fato de possuir o colchetes[] depois, a
      função executa após os componentes serem carregados
    */
    useEffect(() => {
      const retorno = carregaProdutores();
      retorno.lista.sort(
        (produtor1, produtor2) => produtor1.distancia - produtor2.distancia,
      );
      setTitulo(retorno.titulo);
      setLista(retorno.lista);
    }, []);

    return [titulo, lista];
}