import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import { carregaTopo } from "../../../servicos/carregaDados";
import logo from "../../../assets/logo.png";

/* Componente de Classe */
class Topo extends React.Component {
    state = {
      topo:{
        boasVindas: "",
        legenda: "",
      },
    }

    /* 
      Uma função foi criada, e assim foi também criada
      uma constante de retorno, que está recebendo um
      dos arquivos que simula uma API de carregamento
      dos dados. Após isso, é setado no estado o retor-
      no.
    */

    atualizaTopo() {
        const retorno = carregaTopo();
        this.setState({ topo: retorno });
    }
    
    /* assim que os componentes são renderizados, esta função é ativada */
    componentDidMount() {
        this.atualizaTopo();
    }

    /* 
      A função "render()" irá retornar o que será escrito e que está
      carregado na API.
    */

    render() {
        return <View style={estilos.topo}>
            <Image style={estilos.imagem} source={logo} />
            <Text style={estilos.boasVindas}>{ this.state.topo.boasVindas }</Text>
            <Text style={estilos.legenda}>{ this.state.topo.legenda }</Text>
        </View>
    }
}

const estilos = StyleSheet.create({
    topo: {
        backgroundColor: "#F6F6F6",
        padding: 16,
    },
    imagem: {
        width: 70,
        height: 28,
    },
    boasVindas: {
        marginTop: 24,
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
        color: "#464646",
    },
    legenda: {
        fontSize: 16,
        lineHeight: 26,
        color: "#A3A3A3",
    },
});

export default Topo;