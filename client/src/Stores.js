import React, {useState, useEffect} from "react";


function Stores() {

    const [stores, setStores] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/stores")
        .then(r => r.json())
        .then(stores => setStores(stores))
    }, [])

    return(
        <>
        <div id="stores">
            {stores.map(s => {
                return(<>
                    <h2>{s.name}</h2>
                    <h3>{s.logo_url}</h3>
                    </>
                )
            })}
        </div>
        </>
    )

}
export default Stores