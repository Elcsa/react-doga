import React,{Component,ReactNode} from "react";
import {Col, Container, Row}from "react-bootstrap";

export default class fooldal extends Component{
    render():ReactNode{
        return(
            <Container>
                <Row>
                <Col className='text-center mt-5'>
                    <h1> Üdvözöllek DJ Petrik weboldalán!</h1>
                    <h3 >Válassz a fenti lehetőségek közül!</h3>
                    </Col>
                    </Row>
                    <Row>
                    <Col className='text-center mt-5'>
                    <img src="/dj.jpg"alt=""width={"600px"}>
                        </img>
                         </Col>
                </Row>
            </Container>
        )
    }
}