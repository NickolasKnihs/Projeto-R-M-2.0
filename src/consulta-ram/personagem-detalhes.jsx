import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function PersonagemDetalhes() {
    const { id } = useParams();
    const [personagem, setPersonagem] = useState(null);
    const [episodios, setEpisodios] = useState([]);
    const [mostrarEpisodios, setMostrarEpisodios] = useState(false);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then(response => response.json())
            .then(data => setPersonagem(data));
    }, [id]);

    const carregarEpisodios = () => {
        if (personagem) {
            const promises = personagem.episode.map(url =>
                fetch(url).then(response => response.json())
            );
            Promise.all(promises).then(results => setEpisodios(results));
        }
    };

    const handleEpisodiosClick = () => {
        if (!mostrarEpisodios) {
            carregarEpisodios();
        }
        setMostrarEpisodios(!mostrarEpisodios);
    };

    if (!personagem) {
        return <div>Carregando...</div>;
    }

    return (
        <div>
            <h1>{personagem.name}</h1>
            <img src={personagem.image} alt={personagem.name} />
            <p>Status: {personagem.status}</p>
            <p>Species: {personagem.species}</p>
            <p>Gender: {personagem.gender}</p>
            <p>Origin: {personagem.origin.name}</p>
            <p>Location: {personagem.location.name}</p>
            <button onClick={handleEpisodiosClick}>
                {mostrarEpisodios ? 'Ocultar Episódios' : 'Mostrar Episódios'}
            </button>
            {mostrarEpisodios && (
                <ul>
                    {episodios.map(episodio => (
                        <li key={episodio.id}>
                            <Link to={`/episodio/${episodio.id}`}>
                                {episodio.name} (S{episodio.episode.split('S')[1].split('E')[0]}E{episodio.episode.split('E')[1]})
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default PersonagemDetalhes;
