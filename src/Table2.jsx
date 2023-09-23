import React, {Component} from 'react'
const TableHeader = () =>{
    return(
        <thead>
                <tr>
                    <th>Nome</th>
                    <th>Disciplina</th>
                    <th>Horários</th>
                </tr>
            </thead>
    )
}
const TableBody = (props) =>{
    const rows = props.agenda.map( (row,index) => {
        return (
            <tr key={index}>
                <td>{row.nome}</td>
                <td>{row.turma}</td>
                <td>{row.horario}</td>
                <Apagar removerLinha = {props.removerAluno} idx={index}/>
            </tr>

            
        )
    })
    return (
        <tbody>
            {rows}       
        </tbody>
    )
}
const Apagar = (props) =>{
    return(
        <td>
            <button onClick={() => props.removerLinha(props.idx)}>Apagar</button>
        </td>
    )
}
class Table extends Component{
    render(){ 
        const {agenda, removerAluno} = this.props
        return(
            <table>
                <TableHeader />
                <TableBody agenda={agenda} 
                removerAluno={removerAluno}/> 

                          
            </table>)
    } 
} 

export default Table
