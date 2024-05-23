import React, { useEffect, useState } from 'react'; // Importa o React e os hooks useEffect e useState
import { Link } from 'react-router-dom'; // Importa o componente Link do React Router

function ConsultaRAM2() {
    // Define o estado 'personagens' e a função 'setPersonagens' para atualizá-lo
    const [personagens, setPersonagens] = useState([]); 
    // Define o estado 'pagina' e a função 'setPagina' para controlar a página atual da paginação
    const [pagina, setPagina] = useState(1); 
    // Define o estado 'totalPaginas' e a função 'setTotalPaginas' para armazenar o total de páginas disponíveis
    const [totalPaginas, setTotalPaginas] = useState(1); 

    // useEffect é usado para realizar efeitos colaterais em componentes funcionais
    // Este useEffect é executado sempre que o valor de 'pagina' é atualizado
    useEffect(() => {
        console.log('Consultar API'); // Loga no console para indicar que está consultando a API
        // Faz uma requisição GET para a API de Rick and Morty com a página atual
        fetch(`https://rickandmortyapi.com/api/character/?page=${pagina}`)
            .then((resposta) => resposta.json()) // Converte a resposta para JSON
            .then((resultadoConsulta) => {
                setPersonagens(resultadoConsulta.results); // Atualiza o estado 'personagens' com os resultados da consulta
                setTotalPaginas(resultadoConsulta.info.pages); // Atualiza o estado 'totalPaginas' com o número total de páginas disponíveis
            });
    }, [pagina]); // O useEffect é executado sempre que o valor de 'pagina' é atualizado

    // Função para lidar com o clique nos botões de páginação
    const handlePaginaClick = (numeroPagina) => {
        setPagina(numeroPagina); // Atualiza o estado 'pagina' com o número da página clicada
    };

    // Função para renderizar os botões de paginação
    const renderizarBotoesPaginacao = () => {
        const botoes = []; // Array para armazenar os botões de páginação
        const numPaginasVisiveis = 3; // Número de páginas visíveis na páginação
        const inicio = pagina > numPaginasVisiveis ? pagina - numPaginasVisiveis : 1; // Página inicial da páginação
        const fim = Math.min(totalPaginas, inicio + numPaginasVisiveis - 1); // Página final da páginação

        // Adiciona o botão "Anterior" se a página atual não for a primeira
        if (pagina !== 1) {
            botoes.push(
                <button key="anterior" onClick={() => handlePaginaClick(pagina - 1)}>
                    Anterior
                </button>
            );
        }

        // Loop para adicionar os botões de páginação
        for (let i = inicio; i <= fim; i++) {
            botoes.push(
                <button
                    key={i}
                    onClick={() => handlePaginaClick(i)}
                    style={{ margin: '0 5px', backgroundColor: pagina === i ? 'lightgray' : 'white' }}
                >
                    {i}
                </button>
            );
        }

        // Adiciona o botão "Próximo" se a página atual não for a última
        if (pagina !== totalPaginas) {
            botoes.push(
                <button key="proximo" onClick={() => handlePaginaClick(pagina + 1)}>
                    Próximo
                </button>
            );
        }

        return botoes; // Retorna os botões de páginação
    };

    // Renderização do componente
    return (
        <>
            <div>
                {personagens.map(personagem => (
                    <div key={personagem.id}>
                        <h2>{personagem.name}</h2> {/* Renderiza o nome do personagem */}
                        <Link to={`/personagem/${personagem.id}`}> {/* Link para os detalhes do personagem */}
                            <img src={personagem.image} alt={personagem.name} /> {/* Renderiza a imagem do personagem */}
                        </Link>
                    </div>
                ))}
            </div>
            <div>
                {renderizarBotoesPaginacao()} {/* Renderiza os botões de páginação */}
            </div>
        </>
    );
}

// Exporta o componente ConsultaRAM2 para ser utilizado em outros arquivos
export default ConsultaRAM2;
