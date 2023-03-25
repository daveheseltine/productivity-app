import { Container } from 'react-bootstrap';
// import Header from '../../components/header/header';
import Footer from '../../components/Footer';
import Wrapper from '../../components/Wrapper';
import Row from '../../components/Row';
import Col from '../../components/Col';
import './home.css';


function Home(){
    return (

      <Wrapper>

      <Container>
        <Row>
          <div className="jumbotron" style={{fontFamily:'Georgia', color: 'white', size: '80px'}}>
          <h1 className="display-4" style={{size: '50px'}} >Schedule and track your workout regimen</h1>
           
          </div>
          </Row>
      </Container>
      <Container>
        <Row>
          <Col className="col-sm-6" size='sm-6' style={{fontFamily: 'Georgia'}}>
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <button className="btn btn-primary">Go somewhere</button>
          </Col>
          <Col className="col-sm-6" size='sm-6' style={{fontFamily: 'Georgia'}}>
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <button className="btn btn-primary">Go somewhere</button>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col className="col-sm-6" size='sm-6' style={{fontFamily: 'Georgia'}}>
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <button className="btn btn-primary">Go somewhere</button>
          </Col>
          <Col className="col-sm-6" size='sm-6' style={{fontFamily: 'Georgia'}}>
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <button className="btn btn-primary">Go somewhere</button>
          </Col>
        </Row>
      </Container>
      
      <Footer >
        <div className="text-center mb-5" style={{backgroundColor: "#3E83C1", fontFamily:'Georgia'}}>
          <p></p>
          <p>Find us on GitHub : 
          <a href="https://github.com/daveheseltine/productivity-app" className="text-white me-4">
          <i className="fab fa-github">https://github.com/daveheseltine/productivity-app</i>
          </a></p>
          <p>Copyright © 2023 :: David, George, Florante</p>
          <p></p>
        </div>    
      </Footer>
    </Wrapper>
      
    )
}

export default Home;