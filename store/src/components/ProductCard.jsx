import {Card, Button, Form, Row, Col} from 'react-bootstrap'
import { CartContext } from '../CartContext';
import { useContext } from 'react';

function ProductCard(props){
    const product = props.product;
    const cart = useContext(CartContext);
    const ProductQuantity = cart.getProductQuantity(product.id)
    console.log(cart.items)

    return(
        <Card>
            <Card.Body>
                <Card.Title> {product.tittle} </Card.Title>
                <Card.Text> ${product.price} </Card.Text>
                {ProductQuantity > 0 ?
                    <>

                        <Form as={Row}>
                            <Form.Label column="true" sm="6">In Cart: {ProductQuantity}</Form.Label>
                            <Col sm="6">
                                <Button sm="6" className='mx-2' onClick={() => cart.addOneToCart(product.id)}> + </Button>
                                <Button sm="6" className='mx-2' onClick={() => cart.removeOneFromCart(product.id)}> - </Button>
                               
                            </Col>
                        </Form>
                        <Button variant='danger' className='my-2' onClick={() => cart.deleteFromCart(product.id) }>Remove From Cart</Button>

                    </>
                    :
                <Button variant='primary' onClick={() => cart.addOneToCart(product.id)}> Add To Cart </Button>

            }
            </Card.Body>
        </Card>
    )
}


export default ProductCard;