import { Link, Outlet } from "react-router-dom"; // Importa o Link para navegação entre rotas e Outlet para renderizar rotas filhas

function Cabecalho() { // Define o componente Cabecalho
    return (
        <>
            <h1>Meu primeiro projeto React</h1> {/* Título do cabeçalho */}
            <Link to={'/tarefas'}>Tarefas</Link> {/* Link para a rota '/tarefas' */}
            <br></br> {/* Quebra de linha */}
            <Link to={'/consulta-ram'}>Personagens Rick and Morty (consulta-ram)</Link> {/* Link para a rota '/consulta-ram' */}
            <br></br> {/* Quebra de linha */}
            <Link to={'/consulta-ram2'}>Rota2  - Consulta com clique na foto (consulta-ram2)</Link> {/* Link para a rota '/consulta-ram2' */}
            <Outlet /> {/* Renderiza as rotas filhas */}
        </>
    );
}

export default Cabecalho; // Exporta o componente Cabecalho
