import { useState } from "react";

function Tarefas() {
    const [listaTarefas, setListaTarefas] = useState([]);

    function adicionarTarefa() {
        listaTarefas.push(
            {
                descricao: 'Tarefa',
                finalizado: false
            }
        );
        setListaTarefas(listaTarefas.slice());
        console.log('Cadastrado');
    }

    function atualizarTarefa(tarefaAtual) {
        tarefaAtual.finalizado = !tarefaAtual.finalizado;
        setListaTarefas(listaTarefas.slice());
    }

    function pegaEstilo(tarefaAtual) {
        if (tarefaAtual.finalizado) {
            return 'line-through';
        }
        return 'none';
    }

    return (
        <div>
            <button onClick={adicionarTarefa}>Cadastrar</button>
            <br />
            <div>
                {
                    listaTarefas.map(tarefaAtual => {
                        return <div style={
                            {
                                margin: '10px',
                                color: 'white',
                                backgroundColor: 'aqua',
                                textDecoration: pegaEstilo(tarefaAtual)
                            }
                        } onClick={() => atualizarTarefa(tarefaAtual)}>{tarefaAtual.descricao}</div>
                    })
                }
            </div>
        </div>
    );
}
export default Tarefas;