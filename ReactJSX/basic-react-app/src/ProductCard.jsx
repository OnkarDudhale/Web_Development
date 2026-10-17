import ProductPrice from "./ProductPrice";
import './Product.css';
export default function ProductCard({ title, idx }) {
    let description = [['motion sensor', 'AI Fast gamming support', 'AI noise cancellation', 'Automatic song selection'],
    ['high DP support', 'upgraded chips', 'touch support', 'bluetooth,wifi support']];
    let oldPrice = ['1,799', '89,999', '1,599', '78,999'];
    let newPrice = ['1,399', '69,999', '999', '50,000'];
    return (
        <div className='product'>
            <h4 className='title'>{title}</h4>
            <div className="desc">
                <p>{description[0][idx]}</p>
                <p>{description[1][idx]}</p>
            </div>
            <ProductPrice oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}/>
        </div>
    )
}