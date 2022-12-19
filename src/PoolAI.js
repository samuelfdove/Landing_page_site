import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';

function PoolAI(){
  return(
      <Container fluid>
        <Row>
          <Col>
            I am currently building a Deep-Q AI to play the game of pool using TensorFlow and Keras!  The pool simulator I built is not without it's glitches and the friction model could be improved, but it is effecient for fast training.
            <br/>
            <br/>
            The AI appears to be making progress, but I am getting currently running into some memory issues.  I will update this site and post a LinkedIn post once I can produce more meaningfull results.
            <br/>
            <br/>
            <Button variant="secondary" href='https://github.com/samuelfdove/PoolAI'>View this project on GitHub</Button>
          </Col>
        </Row>


      </Container>



  );
}

export default PoolAI;