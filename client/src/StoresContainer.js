import React, {useState, useEffect} from "react";
import Stores from "./Stores";
import Container from "react-bootstrap/Container"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function StoresContainer() {


    return(
        <Container>
                <Stores />
        </Container>
    )

}

export default StoresContainer