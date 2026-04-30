import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./cart.css";
import { increseQty,decreseQty,removeItem,clearCart } from "../Store/Cartslice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  const dispatch=useDispatch()

   localStorage.setItem("product-data",JSON.stringify(cartItems))

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="empty">No items in cart</p>
      ) : (
        <table className="cart-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Product</th>
              <th>Image</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>

                <td>{item.name}</td>

                <td>
                  <img src={item.img} alt="" />
                </td>

                <td>₹{item.price}</td>

                <td>
                  <button onClick={()=>dispatch(decreseQty(item.id))}>-</button>
                  <span>{item.qty}</span>
                  <button onClick={()=>dispatch(increseQty(item.id))}>+</button>
                  <button onClick={()=>dispatch(removeItem(item.id))}>Remove</button>
                  <button onClick={()=>dispatch(clearCart())}>ClearItem</button>
                </td>

                <td>₹{item.price * item.qty}</td>

                <td>
                  <button className="remove">Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Cart;