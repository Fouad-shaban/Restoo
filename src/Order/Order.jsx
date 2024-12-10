import React from "react";
import { CartProvider, useCart } from "react-use-cart";

function Order() {
  const { isEmpty, totalUniqueItems, items, cartTotal, updateItemQuantity, removeItem , emptyCart} =
    useCart();

  if (isEmpty) return <p className="text-center">Still Waiting Your Order <br/><br/><a href="/break" className="btn btn-outline-success"> ADD  Meals</a></p>;
  
  return (
    <div>
      <table class="container">
          <thead>
            <tr>
              <th>
                <h1>Photo</h1>
              </th>
              <th>
                <h1>Meal</h1>
              </th>
              <th>
                <h1>price</h1>
              </th>
              <th>
                <h1>quantity</h1>
              </th>
              <th>
                <h1>Total</h1>
              </th>
              <th>
                <h1>Yours</h1>
              </th>
            </tr>
          </thead>
          <tbody>
              {items.map((item) => (
            <tr key={item.id}>
              <td>
              <img src={item.image_url} style={{height:"70px"}} alt="">
              
              </img>
              </td>
              <td style={{color:"#fff"}}>
              {item.title}
              </td>
              <td style={{color:"#fff"}}>
              {item.price}
              </td>
              <td style={{color:"#fff"}}>
              {item.quantity}
              </td>
              <td style={{color:"#fff"}}>
              {item.quantity *item.price}
              </td>
              <td>
              <button className="btn btn-warning" 
              onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
            >
              -
            </button>
            <button className="btn btn-success m-2"
              onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
            >
              +
            </button>
            <button className="btn btn-danger" onClick={() => removeItem(item.id)}>&times;</button>
              </td>
            </tr>
            
          ))}
          <tr>
            <td colSpan={3} className="text-center"> Total</td>
            <td colSpan={3} style={{color:"#fff"}} className="text-center"> {cartTotal}</td>
          </tr>
          <tr>
            <td colSpan={2} className="text-center " onClick={()=> emptyCart()}> <button className="btn btn-outline-danger"> Delete My Order</button></td>
            <td colSpan={2} className="text-center "> <button className="btn btn-outline-info"> confairm Your Order</button></td>
            <td colSpan={2} className="text-center "> <a href="/break" className="btn btn-outline-success"> ADD More Meals</a></td>
          </tr>
          </tbody>
        </table>
    </div>
  );
}

export default Order;
