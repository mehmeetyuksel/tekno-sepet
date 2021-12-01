import "../App.css"
import React from 'react'
import { useProduct } from '../contexts/ProductContext'
import { Form, Container, Button, Row, Col, InputGroup, FormControl, CloseButton } from 'react-bootstrap'
function Categories() {

  const { setCategory, ProductCategory, setSortPrice, SortPrice, searchValue, setSearchValue } = useProduct();

  const handleChange = (text) => (e) => {
    setCategory((prev) => ({
      ...prev,
      [text]: e.target.checked,
    }));
  }

  const handleSearch = (e) => {
    setSearchValue(e.target.value)
  }



  return (
    <Container>
      <Row className="d-flex align-items-center py-2" >

        <Col xl={4} xs={12} >
          <Form className="text-start d-flex  justify-content-evenly">
            <Form.Check style={{ marginRight: "5px" }} aria-label="Checkbox for following text input" defaultChecked={ProductCategory.Motherboard ? true : false} label="Motherboards" onChange={handleChange("Motherboard")} />
            <Form.Check style={{ marginRight: "5px" }} aria-label="Checkbox for following text input" defaultChecked={ProductCategory.Video_Card ? true : false} label="Video Cards" onChange={handleChange("Video_Card")} />
            <Form.Check style={{ marginRight: "5px" }} aria-label="Checkbox for following text input" defaultChecked={ProductCategory.Processor ? true : false} label="Processors" onChange={handleChange("Processor")} />
          </Form>
        </Col>


        <Col xl={4} xs={12} className="mt-1">
          <InputGroup size="sm" >
            <InputGroup.Text id="inputGroup-sizing-sm">Search</InputGroup.Text>
            <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" onChange={handleSearch} value={searchValue} />
            <InputGroup.Text id="basic-addon2"><CloseButton className="closeButton" onClick={() => setSearchValue("")} /> </InputGroup.Text>
          </InputGroup>
        </Col>



        <Col xl={4} className="mt-1" >
          <Form className="d-flex justify-content-evenly">
            <div className="form-check  text-start" >
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={() => setSortPrice("HigherLower")} defaultChecked={SortPrice === "HigherLower" ? true : false} />
              <label className="form-check-label" for="flexRadioDefault1" style={{ width: "120px" }}>
                Lower to Higher
              </label>
            </div>
            <div className="form-check  text-start">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onClick={() => setSortPrice("LowerHigher")} defaultChecked={SortPrice === "LowerHigher" ? true : false} />
              <label className="form-check-label" style={{ width: "120px" }} for="flexRadioDefault2">
                Higher to Lower
              </label> <br />
            </div>
            <Button className="btn btn-sm btn-danger py-0" type="reset" onClick={() => setSortPrice(false)}>
              Unsorted
            </Button>
          </Form>
        </Col>

      </Row>
    </Container>


  )
}

export default Categories
