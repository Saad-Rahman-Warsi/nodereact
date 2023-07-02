import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function PageFooterInfo() {
  return (
    <Container>
      <Row>
        <Col>
          <p><b>CareerJump</b></p>
          <p>We offer a comprehensive range of services aimed at enhancing your interview skills, 
          group discussion abilities, aptitude test performance, and overall personality development.</p>
        </Col>
        <Col>
          <p><b>Address</b></p>   
          <p>Unit-2, 2445 Clover Street. <br/>Ottawa</p>
        </Col>
        <Col>
          <p><b>opening hours</b></p>
          <p>Mon - Fri : 11 AM - 7 PM<br/>Sat - Sun : 8 AM - 7 PM</p>
        </Col>
      </Row>
    </Container>
  );
}

function PageFooterDown() {
  return (
            <div class="row">
                <div class="col">
                  <div class="footer-down">
                    <p align="center">© 2023 Copyright: Saad Rahman Warsi</p>
                  </div>
                </div>
            </div>

  );
}

function PageFooter() {
  return (
    <footer>
        <hr/>
        <PageFooterInfo />
        <PageFooterDown />

    </footer>

  );
}

export default PageFooter;