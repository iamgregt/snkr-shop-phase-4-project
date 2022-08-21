import React, {useState, useEffect} from "react";


function Stores() {

    const [stores, setStores] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/stores")
        .then(r => r.json())
        .then(stores => setStores)
    })

}
export default Stores