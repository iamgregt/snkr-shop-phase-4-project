import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



function NewShoe() {

    function handleSubmit(e){
        e.preventDefault()

      console.log(e)

      const shoe = {
        model_num: null,
        name: 323423,
        price: e.target[1].value,
        brand_id: e.target[2].value,
        in_stock: e.target[3].checked,
        store_id: 1
      }

      console.log(shoe)

      fetch("http://localhost:3000/shoes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(shoe)
      })
      .then(r => r.json())
      .then(s => console.log("shoe created"))
    }


  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicShoe">
        <Form.Label>Shoe Name</Form.Label>
        <Form.Control type="text" placeholder="Enter shoe name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPrice">
        <Form.Label>Price</Form.Label>
        <Form.Control type="number" placeholder="Cost" />
      </Form.Group>
      <Form.Group>
      <Form.Select aria-label="Default select example">
      <option>Select a Brand</option>
      <option value="1">Jordan</option>
      <option value="2">Nike</option>
      <option value="3">Addidas</option>
      <option value="4">Puma</option>
      <option value="5">New Balance</option>
    </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="In stock?" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default NewShoe;