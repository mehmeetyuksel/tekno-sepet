import "../App.css"
import React from 'react'
import { useProduct } from '../contexts/ProductContext'
import { Form, Container, Button, Row, Col } from 'react-bootstrap'
function Categories() {

  const { setCategory, ProductCategory, setSortPrice, SortPrice } = useProduct();

  const handleChange = (text) => (e) => {
    setCategory((prev) => ({
      ...prev,
      [text]: e.target.checked,
    }));
  }



  return (
    <Container>
      <Row className="justify-content-between" >
        <Col lg={6} style={{ paddingTop: "10px" }}>
          <Form className="mb-3 text-start d-flex">
            <Form.Check style={{ marginRight: "5px" }} aria-label="Checkbox for following text input" defaultChecked={ProductCategory.Motherboard ? true : false} label="Motherboards" onChange={handleChange("Motherboard")} />
            <Form.Check style={{ marginRight: "5px" }} aria-label="Checkbox for following text input" defaultChecked={ProductCategory.Video_Card ? true : false} label="Video Cards" onChange={handleChange("Video_Card")} />
            <Form.Check style={{ marginRight: "5px" }} aria-label="Checkbox for following text input" defaultChecked={ProductCategory.Processor ? true : false} label="Processors" onChange={handleChange("Processor")} />
          </Form>
        </Col>

        <Col lg={6} >
          <Form className="d-flex justify-content-lg-end">
            <div className="form-check  text-start" style={{ paddingTop: "10px" }} >
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={() => setSortPrice("HigherLower")} defaultChecked={SortPrice === "HigherLower" ? true : false} />
              <label className="form-check-label" for="flexRadioDefault1" style={{ width: "120px" }}>
                Lower to Higher
              </label>
            </div>
            <div className="form-check  text-start" style={{ paddingTop: "10px" }}>
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onClick={() => setSortPrice("LowerHigher")} defaultChecked={SortPrice === "LowerHigher" ? true : false} />
              <label className="form-check-label" style={{ width: "120px" }} for="flexRadioDefault2">
                Higher to Lower
              </label> <br />
            </div>
            <Button className="btn btn-sm btn-danger mt-2" onClick={() => setSortPrice(false)}>
              Unsorted
            </Button>
          </Form>
        </Col>

      </Row>
    </Container>


  )
}

export default Categories
