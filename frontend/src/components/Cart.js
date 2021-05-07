import React from 'react';
import { useCart } from "react-use-cart";
import styled from 'styled-components';
import { HiShoppingCart } from "react-icons/hi";

function Cart() {
    const {
        isEmpty,
        totalItems,
        items,
        cartTotal,
        totalUniqueItems,
        updateItemQuantity,
        removeItem,
    } = useCart();

    // If the cart is empty, display an empty template 
    if (isEmpty) return (
        <CartWrapper>
            <CartHeader>
                <CartHeading><HiShoppingCart /></CartHeading>
                <CartMessage>Your cart is empty</CartMessage>
            </CartHeader>
        </CartWrapper>);

    // If cart is not empty, render respective info
    else return (
        <CartWrapper>
            <CartHeading><HiShoppingCart /></CartHeading>
            <CartTitle>
                <div><strong>Name</strong></div>
                <div><strong>Quantity</strong></div>
            </CartTitle>
            <CartUL>
                {items.map((item) => (
                    <CartLI key={item.id}>
                        <CartItemInfo>
                            <div>{item.name}</div>
                            <div>{item.quantity}</div>
                            {/* <StockRemaining>In Stock Remaining: {item.stock - item.quantity}</StockRemaining> */}
                        </CartItemInfo>
                        <div>
                            <CartBtn disabled={item.stock <= 0} onClick={() => updateItemQuantity(item.id, item.quantity - 1)} > - </CartBtn>
                            <CartBtn disabled={item.stock <= item.quantity} onClick={() => updateItemQuantity(item.id, item.quantity + 1)}> + </CartBtn>
                            <CartBtn onClick={() => removeItem(item.id)}>&times;</CartBtn>

                        </div>
                    </CartLI>

                ))}
            </CartUL>

            {/* Display summary of the cart */}
            <CartFooter>
                <div>Total Number of Items: </div>
                <Results><strong>{totalItems}</strong></Results>
                <div>Total Amount: </div>
                <Results><strong>{Intl.NumberFormat('th-TH', { style: 'currency', currency: 'THB' }).format(cartTotal.toFixed(2))}</strong></Results>
            </CartFooter>

            {/* Show an alert and disable checkout button if the the user adds more than 5 different robots */}
            {
                <div>
                    <AlertMessage hidden={totalUniqueItems < 6}>You cannot add more than 5 different robots!</AlertMessage>
                    {/* Once checkout button is clicked, then we can deduct exact quantities from the actual data and update. */}
                    <CheckoutButton disabled={totalUniqueItems >= 6} ><CheckoutText>Checkout</CheckoutText></CheckoutButton>
                </div>
            }
        </CartWrapper>
    );
}

// Styling for respective elements

const CartWrapper = styled.div`
    padding-top: 50px;
    padding-left: 20px;
    padding-right: 20px;
    text-align: center;
`;

const CartHeader = styled.div`
    
`;
const CartHeading = styled.h1`
    padding-bottom: 20px;
    border-bottom: 2px solid #D5D8DC;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const CartMessage = styled.p`
    padding-bottom: 20px;
    padding-top: 20px;
    border-bottom: 2px solid #D5D8DC;
`;
const CartFooter = styled.div`
  border-bottom: 2px solid #D5D8DC;
  text-align: left;
  padding-top:20px;
  padding-bottom: 20px;
  display: grid;
  grid-template-columns: 70% 30%;
`;


const CartUL = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const CartLI = styled.li`
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 5px;
  border-bottom: 0.5px solid #D5D8DC;
  display:grid;
  grid-template-columns: 75% 25%;
  
`;

const CartBtn = styled.button`
  width: 20px;
  height: 20px;
  margin: 2px;
`;

const CartTitle = styled.div`
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 5px;
    display: grid;
    grid-template-columns: 50% 50%;
    text-align: left;
`;

const CartItemInfo = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
`;

const Results = styled.div`
    text-align: right;
`;

const AlertMessage = styled.div`
    margin-top: 30px;
    color:red;
    font-size: 15px;
`;

const CheckoutButton = styled.button`
    background: #ff0080;
    width: 100%;
    height: 50px;
    border: none;
    margin-top: 20px;
    border-radius: 5px;

    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.4);
    }

    &:disabled {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0);
        background: #ABB2B9 ;
    }
`;

const CheckoutText = styled.h3`
    color: #fff;
    font-weight: 400;
`;

// const StockRemaining = styled.div`

// `;


export default Cart;
