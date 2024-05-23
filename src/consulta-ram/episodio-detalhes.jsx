import React, { useState, useEffect } from 'react'; // Importa o React e os hooks useState e useEffect
import { useParams } from 'react-router-dom'; // Importa o hook useParams do React Router

function EpisodioDetalhes() {
    const { id } = useParams(); // Extrai o parâmetro 'id' da URL usando o hook useParams
    const [episodio, setEpisodio] = useState(null); // Define o estado 'episodio' e a função 'setEpisodio' para atualizá-lo

    // useEffect é usado para realizar efeitos colaterais em componentes funcionais
    // Este useEffect é executado sempre que o valor de 'id' é atualizado
    useEffect(() => {
        // Faz uma requisição GET para a API de Rick and Morty para obter os detalhes do episódio com o ID fornecido
        fetch(`https://rickandmortyapi.com/api/episode/${id}`)
            .then(response => {
                if (!response.ok) { // Verifica se a resposta da requisição é bem-sucedida
                    throw new Error('Erro ao carregar os detalhes do episódio'); // Lança um erro se a resposta não for bem-sucedida
                }
                return response.json(); // Converte a resposta para JSON se for bem-sucedida
            })
            .then(data => setEpisodio(data)) // Atualiza o estado 'episodio' com os detalhes do episódio obtidos da API
            .catch(error => console.error(error)); // Lida com qualquer erro que ocorra durante o processo
    }, [id]); // O useEffect é executado sempre que o valor de 'id' é atualizado

    // Se 'episodio' ainda não foi carregado, exibe uma mensagem de "Carregando..."
    if (!episodio) {
        return <div>Carregando...</div>;
    }

    // Renderiza os detalhes do episódio
    return (
        <div>
            <h1>{episodio.name}</h1> {/* Renderiza o nome do episódio */}
            <p>Air Date: {episodio.air_date}</p> {/* Renderiza a data de lançamento do episódio */}
            <p>Episode: {episodio.episode}</p> {/* Renderiza o número e a temporada do episódio */}
            <h2>Characters:</h2>
            <ul>
                {/* Mapeia os URLs dos personagens do episódio e renderiza um link para cada um */}
                {episodio.characters.map((characterUrl, index) => {
                    const characterId = characterUrl.split('/').pop(); // Extrai o ID do personagem a partir do URL
                    return (
                        <li key={index}>
                            <a href={`/personagem/${characterId}`}>Character {characterId}</a> {/* Renderiza o link para o detalhes do personagem */}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

// Exporta o componente EpisodioDetalhes para ser utilizado em outros arquivos
export default EpisodioDetalhes;
