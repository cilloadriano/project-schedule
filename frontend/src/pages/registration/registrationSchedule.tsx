import React, { ChangeEvent, useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import './style.css';
import api from '../../services/api'
import DatePicker from 'react-datepicker';

// model interface
interface IRegistrationEvent {
  event_Name: string;
  event_Participants: string;
  event_Date: string;
}

const Schedule: React.FC = () => {

  // const redirect Functions
  const { id }: any = useParams();
  const history = useHistory();
  const [date, setDate] = useState(null);
    // utils model interface
 
  const [model, setModel] = useState<IRegistrationEvent>({
    event_Name: '',
    event_Participants: '',
    event_Date: ''
  })

   // render controllers
  useEffect(() => {
    if (id !== undefined)
    {
      findSchedule(id) 
    }
  },[id]);

  // Functions async Controllers
  async function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setModel({
     ...model,
     [e.target.name]: e.target.value
    })
}

async function onSubmit(e: ChangeEvent<HTMLFormElement>){
  e.preventDefault()
  if (id !== undefined)
  {
    await api.put(`/schedule/${id}`, model);
  }
  else
  {
    await api.post('/schedule', model);
  }
  history.push('/schedule/view')
}

async function findSchedule(id: string) {
  const response = await api.put(`/schedule/${id}`);
  setModel({
    event_Name: response.data.event_Name,
    event_Participants: response.data.event_Participants,
    event_Date: response.data.event_Date
  })
}

function back (){
  history.push('/schedule/view')
}

    return (
      <div className="container">
        <br />
      <div className="view">
      <h3>CADASTRO DE EVENTOS</h3>
        <Button variant="dark" size="sm" onClick={back}>Voltar</Button>
      </div>
      <br />
        <Form onSubmit={onSubmit}>
          <fieldset>
          <Form.Group className="mb-3">
            <Form.Label>Nome Evento</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter name" 
              name="event_Name"
              value={model.event_Name || ''}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Participantes</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter name" 
              name="event_Participants"
              value={model.event_Participants || ''}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} />
          </Form.Group>
            <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledTextInput">Data Evento</Form.Label>
            <DatePicker
              showTimeSelect
              dateFormat="yyyy-MM-dd h:mmaa"
              selected={date}
              name="event_Date"
              value={model.event_Date || ''}
              onChange={
                date => {
                  setDate(date)
                  setModel(
                    {
                      event_Name: model.event_Name,
                      event_Participants: model.event_Participants,
                      event_Date: date
                    }
                  )
              }
            }
            />
  
           </Form.Group>
            
            <Button type="submit">Salvar</Button>
          </fieldset>
          
        </Form>
      </div>
      );
}

export default Schedule;