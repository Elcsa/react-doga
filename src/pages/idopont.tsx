import 'bootstrap/dist/css/bootstrap.css';

import { Component, ReactNode } from "react";

import { Button, Col, Container, Form, Row } from "react-bootstrap";

interface State {
    name : string,
    date : string,
    text : string,
    error : string,
    Color : string
}
export default class IdopontFoglalas extends Component<{}, State> {
    constructor(props : {}) {
        let Date = new Date()
        super(props)
        this.state = {
            name : "",
            date : Date.getFullYear() + "-" + ("0" + (Date.getMonth() + 1)).slice(-2) +"-" +  ("0" + (Date.getDay() + 2)).slice(-2),
            text : "",
            error : "",
            Color : "red"

        }
    }
    handleForm = () => {
        const  {name, text, error} = this.state
        if(name.trim() == "") {
            this.setState({error : "a Név mező nem lehet üres"})
            return
        }
        if(text.trim() == "") {
            this.setState({error : "a leirás mező nem lehet üres"})
            return
        }

        this.setState({error : "Köszönjük", Color : "green"})
        
    }
    render(): ReactNode {
        return <Container>
            
        <Row className='d-flex justify-content-center'>
        <Form>
            <Form.Group className="mb-3" >
                <Form.Label>Email </Form.Label>
                <Form.Control type="text" placeholder="Teszt Elek" value={this.state.name} onChange={e => this.setState({name : e.currentTarget.value})}/>
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Dátum </Form.Label>
                <Form.Control type="date" value={this.state.date} min={this.state.date} onChange={e => this.setState({date : e.currentTarget.value})}/>
            </Form.Group>
         <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
         <Form.Label>Leírás: </Form.Label>
             <Form.Control as="textarea"  value={this.state.text} onChange={e => this.setState({text : e.currentTarget.value})}/>
  </Form.Group>
         <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
  </Form.Group>
  <Button style={{width : "100%"}}  onClick={this.handleForm}>elküld</Button>
  
</Form>
        </Row>
        <Row className='text-center'>
       <h1 style={{color :  this.state.Color}}>{this.state.error}</h1>

        </Row>
    </Container>
       
 
    }
}