import React, {useState, useEffect} from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import  Col  from "react-bootstrap/Col";
import Container from "react-bootstrap/Container"
import Row from 'react-bootstrap/Row';


function Stores() {

    const [stores, setStores] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/stores")
        .then(r => r.json())
        .then(stores => setStores(stores))
    }, [])

    return(
        <Row>
       
            {stores.map(s => {
                return(
                <Col>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={s.logo_url} />
                <Card.Body>
                  <Card.Title>{s.name}</Card.Title>
                  <Card.Text>
                    {s.address}
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Cras justo odio</ListGroup.Item>
                  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                  <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
              </Col>
              )
            })}
       </Row>   
    )
       
}
export default Stores