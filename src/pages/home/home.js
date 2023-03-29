import { Container } from 'react-bootstrap';
import Footer from '../../components/Footer';
import Wrapper from '../../components/Wrapper';
import Row from '../../components/Row';
import './home.css';


function Home(){
    return (

      <Wrapper >
          <div className="jumbotron container-fluid" >
          <h1 className="display-4" id='title'>Productivity.</h1>
          <h3 className="display-4" id='subtitle' >Schedule and track your workout regimen</h3>
          </div>

      <Container >
        <Row>
          </Row>
      </Container>
      

      
      <Footer >
        <div className="footer text-center mb-5" style={{backgroundColor: "#3E83C1", fontFamily:'Georgia'}}>
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
