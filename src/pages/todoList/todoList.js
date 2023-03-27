import { Container } from 'react-bootstrap';
import Row from '../../components/Row';

import Form from "../../components/Form/Form"
import './todoList.css'

function Todolist(props){
    return (

    <Container id='formbackground'>
      <Row>
        <Form />
      </Row>
    </Container>
);
}


export default Todolist;