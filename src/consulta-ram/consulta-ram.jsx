import { useEffect } from "react"; // Importa o hook useEffect do React
import { useState} from "react"; // Importa o hook useState do React

function ConsultaRAM() {
    // Define o estado 'personagens' e a função 'setPersonagens' para atualizá-lo
    const [personagens, setPersonagens] = useState([]); 
    
    // useEffect é usado para realizar efeitos colaterais em componentes funcionais
    // Este useEffect é executado apenas uma vez quando o componente é montado ([] indica que não há dependências)
    useEffect(() => {
        console.log('Consultar API'); // Loga no console para indicar que está consultando a API
        // Faz uma requisição GET para a API de Rick and Morty
        fetch('https://rickandmortyapi.com/api/character')
        .then((resposta) => resposta.json()) // Converte a resposta para JSON
        .then((resultadoConsulta) => {
            setPersonagens(resultadoConsulta.results); // Atualiza o estado 'personagens' com os resultados da consulta
        });
    }, []); // As chaves vazias indicam que o useEffect é executado apenas uma vez quando o componente é montado

    // Renderização do componente
    return (
        <>
            {
                // Mapeia os 'personagens' e renderiza um bloco para cada um
                personagens.map(personagem => (
                    <div key={personagem.id}> {/* Define a chave única para cada bloco */}
                        <h2>{personagem.name}</h2> {/* Renderiza o nome do personagem */}
                        <img src={personagem.image} alt={personagem.name} /> {/* Renderiza a imagem do personagem */}
                        <p>{personagem.gender}</p> {/* Renderiza o gênero do personagem */}
                    </div>
                ))
            }
        </>
    );
}

// Exporta o componente ConsultaRAM para ser utilizado em outros arquivos
export default ConsultaRAM;
