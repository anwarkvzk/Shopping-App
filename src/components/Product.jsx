import "../App.css";

const Product = ({ data, loading }) => {
  return (
    <div className="products-container">
      {loading && (
        <div>
          {" "}
          <h1>Loading...</h1>
        </div>
      )}

      {data.map((product) => (
        <div className="four wide column">
          <div key={product.id} className="card">
            <div>
              <img src={product.image} alt="#" />
            </div>
            <div className="card-description">
              <h6>{product.title}</h6>
              <h6>{`Price: ${product.price} $`}</h6>
              <h6>{`Category: ${product.category}`}</h6>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
