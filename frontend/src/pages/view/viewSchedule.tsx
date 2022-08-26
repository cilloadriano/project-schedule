import React, {useState, useEffect} from "react";
import { Button, Table } from "react-bootstrap";
import api from "../../services/api";
import moment from 'moment';
import './style.css'
import { useHistory } from "react-router-dom";
import Highlight from "./highlight";

interface IViewsEvents {
  id: number;
  event_Name: string;
  event_Participants: string;
  event_Date: Date;
 }

const ViewSchedule: React.FC = () => {
 
  // const Find Word
  const [ word, setWord ] = useState('')
  
   // const redirect Functions
   const history = useHistory();
   const [ viewEvents, setViewEvents ] = useState<IViewsEvents[]>([])

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

   // Format Date Moment
  function formatDate(date: Date) {
    return moment(date).format("DD/MM/YYYY, h:mm:ss a")
  }

  // Direction functions Controllers
  async function loadView() {
    const response = await api.get('/schedule');
    console.log(response);
    setViewEvents(response.data);
  }
   
  function newEvent (){
    history.push('/schedule')
  }

  function editEvent(id: number){
    history.push(`/schedule/${id}`)
  }

  async function deleteEvent(id: number){
    await api.delete(`/schedule/${id}`);
    loadView();
  }
// End Direction functions Controllers
  return (
    <div className="container">
      <br />
      <div className="view">
        <h1>Agendamento</h1>
        <input 
        type="text" 
        placeholder="Pesquisar"
        value={word} onChange={handleChange(setWord)} />
        <Button variant="dark" size="sm" onClick={newEvent}>Agendar Evento</Button>
      </div>
      <br />
      <Table striped bordered hover className="text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>Evento</th>
            <th>Participantes</th>
            <th>Data</th>
            <th>Ações</th>
          </tr>
        </thead>
       
        <tbody>
          {
            viewEvents.map(viewEvent => (
              <tr key={viewEvent.id}>
                <td>{ viewEvent.id }</td>
                <td>{ viewEvent.event_Name }</td>
                <td><Highlight
                    children={ viewEvent.event_Participants }
                    toHighlight={word} />
                </td>
                <td>{ formatDate(viewEvent.event_Date) }</td>
                <td>
                <Button size="sm" variant="primary" onClick={() => editEvent(viewEvent.id)}>Editar</Button>{' '}
                  <Button size="sm" variant="danger" onClick={() => deleteEvent(viewEvent.id)}>Excluir</Button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
   </div>
  );
}

export default ViewSchedule;