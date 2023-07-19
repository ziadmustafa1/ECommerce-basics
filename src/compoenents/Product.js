import { Link } from "react-router-dom";
import { Row, Col } from 'react-bootstrap/esm'

function Product(props) {
  const { product, showButton } = props;

  return (
    <>
    <Row>
      <Col>
      <div className="card">
        <img src={product.image} className="card-img-top" alt={product.title} />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
          <p> Price: {product.price}$</p>
          {showButton && (
            <Link className="btn btn-primary" to={`/product/${product.id}`}>
              Details
            </Link>
          )}
        </div>
      </div>
      </Col>
    </Row>
      
    </>
  );
}

export default Product;