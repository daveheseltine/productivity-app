import { Container } from 'react-bootstrap';
// import Header from '../../components/header/header';
import Footer from '../../components/Footer';
import Wrapper from '../../components/Wrapper';
import Row from '../../components/Row';
import Col from '../../components/Col';
import './home.css';


function Home(){
    return (

      <Wrapper >
          <div className="jumbotron container-fluid" >
          <h1 className="display-4" id='title' >Productivity</h1>
          <h3 className="display-4" id='subtitle' >Schedule and track your workout regimen</h3>
          </div>

      <Container >
        <Row>
          </Row>
      </Container>
      <Container>
        <Row>
          <Col className="col-sm-6" size='sm-6' id='home'>
            <h4 className="card-title">Special title treatment</h4>
            <p className="card-text">"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
      laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
      architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
      voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
      consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
      dolore magnam aliquam quaerat voluptatem. ".</p>
            <button className="btn btn-primary">Go somewhere</button>
          </Col>
          <Col className="col-sm-6" size='sm-6' id='home'>
            <h4 className="card-title">Special title treatment</h4>
            <p className="card-text">"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
      laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
      architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
      voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
      consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
      dolore magnam aliquam quaerat voluptatem. ".</p>
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