import './ProductPrice.css'
export default function ProductPrice({ oldPrice, newPrice }) {
    return (
        <div className="price">
            <span className='oldPrice'>{oldPrice}</span>
            <span className='newPrice'>{newPrice}</span>
        </div>

    )
}