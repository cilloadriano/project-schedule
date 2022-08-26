import React, {useState, useEffect} from "react";
import { Button, Table } from "react-bootstrap";
import { useHistory} from "react-router-dom";
import api from "../../services/api";
import './style.css'
import Highlight from './highlight'

interface IViewsPerson {
  id: number;
  person_Name: string;
  person_Email: string;
}

const ViewPerson: React.FC = () => {
 
  // const Find Word
  const [ word, setWord ] = useState('')

  // const redirect Functions
  const history = useHistory();
  const [ viewPersons, setViewPerson ] = useState<IViewsPerson[]>([])
  
  // render controller get
  useEffect(() => {
      loadView()
    },[]); 
  
  // function Find Word
  function handleChange (func) {
      return (e) => {
        func(e.target.value)
      }
  }

  // Direction functions Controllers
  async function loadView() {
    const response = await api.get('/person');
    setViewPerson(response.data);
  }

  function newParticipant(){
    history.push('/person')
  }

  function editParticipant(id: number){
    history.push(`/person/${id}`)
  }

  async function deleteParticipant(id: number){
    await api.delete(`/person/${id}`);
    loadView();
  }

  // End Direction functions Controllers

  return (
    <div className="container">
      <br />
      <div className="view">
        <h1>Pessoas</h1>
        <input 
        type="text" 
        placeholder="Pesquisar"
        value={word} onChange={handleChange(setWord)} />
        <Button variant="dark" size="sm" onClick={newParticipant}>Cadastrar Pessoas</Button>
      </div>
      <br />
      <Table striped bordered hover className="text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Ações</th>
          </tr>
        </thead>
       
        <tbody>
          {
            viewPersons.map(viewPerson => (
              <tr key={viewPerson.id}>
                <td>{ viewPerson.id }</td>
                <td><Highlight
                    children={ viewPerson.person_Name }
                    toHighlight={word} />
                </td>
                <td>{ viewPerson.person_Email }</td>
                <td>
                  <Button size="sm" variant="primary" onClick={() => editParticipant(viewPerson.id)}>Editar</Button>{' '}
                  <Button size="sm" variant="danger" onClick={() => deleteParticipant(viewPerson.id)}>Excluir</Button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
   </div>
  );
}

export default ViewPerson;