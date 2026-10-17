import './Product.css';
function Product({ title, price, features }) {
    let isDiscount = price > 50000;
    let styles = { backgroundColor: 'green' }
    return (
        <div className="Product" style={isDiscount ? styles : null}>
            <h3>{title}</h3>
            <p>Price : {price}</p>
            <div>{features && features.map((feature) =>
                <div key={feature}>
                    {feature}
                </div>
            )}
            </div>
            {isDiscount ? <p>discount of 5%</p> : null}
            {/* {price>=50000 && <p>discount of 5%</p>} */}
        </div>
    )
}
export default Product;