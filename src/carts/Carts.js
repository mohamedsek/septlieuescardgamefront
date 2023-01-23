import "./Carts.css"

import axios from "axios";
import { Async } from "react-async";
import Cart from "./Cart";



const fetchCarts = async () => {

    let result = await axios.get("http://217.76.48.237:9003/play");
    console.dir(result);

    if (result.status != 200) {
        throw new Error(result.statusText)
    }

    return result.data;
}

const Carts = () => {

    return (
        <Async promiseFn={fetchCarts}>
            <Async.Fulfilled>
                {data => (
                    <>
                        <h4>Cartes tirées</h4>
                        <div className="Carts">
                            {data.roundCarts.map((cart, idx) => <Cart cart={cart} idx={idx}></Cart>)}
                        </div>
                        <h4>Règles de tri</h4>
                        <div className="mb-m">{data.colorSortRule.map((color, idx) => <span className="Color-rule">{color} </span>)}</div>
                        <div className="mb-m">{data.nameSortRule.map((name, idx) => <span className="Name-rule">{name} </span>)}</div>
                        <h4>Cartes triées</h4>
                        <div className="Carts">
                            {data.sortedRoundCarts.map((cart, idx) => <Cart cart={cart} idx={idx}></Cart>)}
                        </div>
                        <div>
                            <button onClick={play} className="btn-primary">Rejouer</button>
                        </div>
                    </>
                )}

            </Async.Fulfilled>
            <Async.Pending>Loading...</Async.Pending>
            <Async.Rejected>{error => `An error occured: ${error.message}`}</Async.Rejected>
        </Async>
    )
}


const play = () => {
    window.location.reload(false);
}


export default Carts;