import "./Cart.css";


const Cart = ({ cart, idx }) => {

    let rotationDeg = (idx - 6) * 8;
    let distance = (idx - 6) * 14;
    let animationDelay = idx * 200;

    return <div className="Cart-container" style={{ transform: `rotate(${rotationDeg}deg) translateX(${distance}px)`, animationDelay: `${animationDelay}ms` }}>
        <img src={`assets/img/${cart.imageUrl}`} className="Cart-img"></img>
    </div>
}


export default Cart;