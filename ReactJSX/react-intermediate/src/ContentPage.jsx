import './ContentPage.css';
import LikeButton from './LikeButton';
export default function ContentPage({ backgroundcolor }) {
    let color='black';
    return (
        <div className="page" style={{backgroundColor:backgroundcolor}}>
            <p style={{color:color}}>{backgroundcolor}</p>
            <LikeButton />
        </div>
    )
}