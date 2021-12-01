import React from 'react'
import {Pagination, Container} from "react-bootstrap"
import {useProduct } from '../contexts/ProductContext'
function PagePagination() {
    const {currentPage, setCurrentPage, totalPagesNum, paginatedProducts} = useProduct();

    const numOfPages = [];

    for (let i=1; i <= totalPagesNum; i++) {
        numOfPages.push(i);
    }

    if(paginatedProducts.length === 0) {
        setCurrentPage(1)
    }

    return (
        paginatedProducts.length > 0 ? <>
        <Container>
            <Pagination className="no-focus" size="lg" style={{margin: "5px 0 0 0", display:"flex", justifyContent:"center"}}>
 
  <Pagination.Prev onClick={() => setCurrentPage((prev) => prev === 1 ? prev : prev - 1)}  disabled={currentPage === 1 ? true : false} />
  {
      numOfPages.map((page, index) => (
        <Pagination.Item key={index} onClick={() => setCurrentPage(page)} active={currentPage === page ? true : false}>{page}</Pagination.Item>
      ))
  }
  <Pagination.Next className="no-focus" onClick={() => setCurrentPage((prev) => prev === totalPagesNum ? prev : prev + 1)}  disabled={currentPage === totalPagesNum ? true : false}/>

</Pagination>
</Container> 
</> : ""
    )
}

export default PagePagination
