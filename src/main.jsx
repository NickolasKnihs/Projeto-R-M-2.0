import React from 'react'; // Importa o React
import ReactDOM from 'react-dom/client'; // Importa o ReactDOM para renderização do DOM
import App from './App.jsx'; // Importa o componente App
import './index.css'; // Importa o arquivo CSS para estilização
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; // Importa funções do React Router para lidar com rotas
import Tarefas from './tarefas/tarefas-componente.jsx'; // Importa o componente Tarefas
import Cabecalho from './componente-cabecalho/cabecalho.jsx'; // Importa o componente Cabecalho
import ConsultaRAM from './consulta-ram/consulta-ram.jsx'; // Importa o componente ConsultaRAM
import ConsultaRAM2 from './consulta-ram/consulta-ram2.jsx'; // Importa o componente ConsultaRAM2
import PersonagemDetalhes from './consulta-ram/personagem-detalhes.jsx'; // Importa o componente PersonagemDetalhes
import EpisodioDetalhes from './consulta-ram/episodio-detalhes.jsx'; // Importa o componente EpisodioDetalhes 

// Cria as rotas da aplicação usando o createBrowserRouter
const routes = createBrowserRouter([
  {
    path: '/', // Rota raiz
    element: <Cabecalho />, // Componente a ser renderizado na raiz
    children: [ // Rotas filhas
      {
        path: '/tarefas', // Rota para a página de tarefas
        element: <Tarefas /> // Componente a ser renderizado na rota de tarefas
      },
      {
        path: '/consulta-ram2', // Rota para a página de consulta de personagens (versão 2)
        element: <ConsultaRAM2/> // Componente a ser renderizado na rota de consulta de personagens (versão 2)
      },
      {
        path: '/consulta-ram', // Rota para a página de consulta de personagens
        element: <ConsultaRAM /> // Componente a ser renderizado na rota de consulta de personagens
      },
      {
        path: '/personagem/:id', // Rota dinâmica para os detalhes de um personagem
        element: <PersonagemDetalhes /> // Componente a ser renderizado na rota dos detalhes de um personagem
      },
      {
        path: '/episodios/:id', // Rota dinâmica para os detalhes de um episódio
        element: <EpisodioDetalhes /> // Componente a ser renderizado na rota dos detalhes de um episódio
      }
    ]
  }
]);

// Renderiza a aplicação dentro do elemento com o ID 'root'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} /> {/* Fornece as rotas para a aplicação usando o RouterProvider */}
  </React.StrictMode>,
);
