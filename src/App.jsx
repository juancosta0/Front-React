import React, { Component } from 'react'
import Table from './Table2'
import Form from './form'


class App extends Component {
  state = {
    agenda: [

    ]
  }
  removerAluno = (index) => {
    const { agenda } = this.state
    this.setState(
      {
        agenda: agenda.filter((aluno, i) => {
          return i !== index
        })
      }
    )
  }
  
  handleSubmit = (alunoDisc) => {


    this.setState(
      {
        agenda: [...this.state.agenda, alunoDisc]
      }
    )

  }
  render() {
    const { agenda } = this.state
    return (
      <div className="container">
        <h1 className='text-center'>Agenda Semanal</h1>
        <Table agenda={agenda}
          removerAluno={this.removerAluno} />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }


}
export default App;