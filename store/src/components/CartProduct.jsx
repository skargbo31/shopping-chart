import { Button } from "react-bootstrap";
import { CartContext } from "../CartContext";
import { useContext } from "react";
import { getProductData } from "../ProductStore";

function CartProduct(props){
    const cart = useContext(CartContext);
    const id = props.id;
    const quantity = props.quantity;
    const productData = getProductData(id);
    return(
        <>
            <h3>{productData.tittle}</h3>
            <p>{quantity} total</p>
            <p>${(quantity * productData.price).toFixed(2) }total</p>
            <Button size="sm"  onClick={() => cart.deleteFromCart(id)}>Remove</Button>
            <hr />
        </>
    )
}

export default CartProduct;