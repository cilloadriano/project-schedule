import React, { ChangeEvent, useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import api from "../../services/api";
import './style.css';

// model interface
interface IRegistrationPerson {
  person_Name: string;
  person_Email: string;
}

const Person: React.FC = () => {

  // const redirect Functions
  const history = useHistory();
  const { id }: any = useParams();

  // utils model interface
  const [model, setModel] = useState<IRegistrationPerson>({
      person_Name: '',
      person_Email: ''
    })
   
  // render controllers
    useEffect(() => {
      if (id !== undefined)
      {
        findPerson(id)
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
      await api.put(`/person/${id}`, model);
    }
    else
    {
      await api.post('/person', model);
    }
    history.push('/person/view')
  }

  async function findPerson(id: string) {
    const response = await api.get(`/person/${id}`);
    setModel({
      person_Name: response.data.person_Name,
      person_Email: response.data.person_Email
    })
  }

  // function reload
  function back (){
    history.push('/person/view')
  }

    return (
      <div className="container">
        <br />
        <div className="view">
          <h3>CADASTRO DE PESSOAS</h3>
          <Button variant="dark" size="sm" onClick={back}>Voltar</Button>
        </div>
        <br />
        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Nome</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter name" 
              name="person_Name"
              value={model.person_Name || ''}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Email" 
              name="person_Email"
              value={model.person_Email || ''}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}/>
          </Form.Group>

          
          <Button variant="primary" type="submit">
            Salvar
          </Button>
        </Form>
      </div>
    );
}

export default Person;