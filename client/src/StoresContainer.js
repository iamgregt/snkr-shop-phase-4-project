import React, {useState, useEffect} from "react";
import Stores from "./Stores";
import Container from "react-bootstrap/Container"

function StoresContainer({setStore}) {


    return(
        <Container>
                <Stores setStore={setStore} />
        </Container>
    )

}

export default StoresContainer