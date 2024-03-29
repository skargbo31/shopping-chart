

import { useState, useContext } from 'react'
import { Button, Modal, ModalHeader, ModalTitle, Navbar,  } from 'react-bootstrap'
import { CartContext } from '../CartContext';
import CartProduct from './CartProduct';

function NavbarComponent ()  {
    const  cart = useContext(CartContext)

        const  [show, setShow] = useState(false);
         const handleClose = () => setShow(false);
         const handleShow = () => setShow(true);

         const productCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

  return (
    <>
  
        <Navbar expand="sm">
                <Navbar.Brand href='/'>Ecommerce Store</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className='justify-content-end'>
                        <Button onClick={handleShow}>Cart  ({productCount} items)  </Button>
                </Navbar.Collapse>
        </Navbar>

        <Modal show={show} onHide={handleClose}> 
            <Modal.Header  closeButton>
                <Modal.Title> Shoping Cart </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {productCount  > 0 ?
                
                <>
                     <p> Items in your cart: </p>
                     {cart.items.map((currentProduct, idx) => (
                        
                        <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity}></CartProduct>
                     ))}

                     <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>
                     <Button variant='success'>
                        Purchases items
                     </Button>
                </>

                :
                <h1>This is a modal body</h1>
            }
            </Modal.Body>
        </Modal>

        </>
  )
}

export default NavbarComponent
