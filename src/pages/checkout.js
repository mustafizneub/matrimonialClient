import React from 'react'
import "./checkout.css"
import { Link } from 'react-router-dom';



const CheckoutPage = () => {
     

     return (
      <div className="app-container">
        <div className="row">
          <div className="col">
            <Item name="Standard Package" price="$144.99" img="https://i.ibb.co/tPK2TX9/Wedding-Planner-Standard-Package.png" />
          </div>
          <div className="col no-gutters">
            <Checkout />
          </div>
        </div>
       </div>
    )
  }


const Item = (props) => (
  <div className="item-container">
    <div className="item-image">
      <img src={props.img} alt=""/>
      <div className="item-details">
        <h3 className="item-name"> {props.name} </h3>
        <h2 className="item-price"> {props.price} </h2>
      </div>
    </div>
  </div>
);

const Checkout = (props) => (
 <div className="checkout">
    <div className="checkout-container">
     <h3 className="heading-3">Bkash/Nagad checkout</h3>
     <h3 className="heading-3">Merchant Number: +880123456789</h3>
     <Input label="Name" type="text" name="name" />
     <Input label="Contact Number" type="number" name="card_number" />
      <div className="row">
        <div className="col">
          <Input label="Transaction ID" type="text" name="exp_date" />
        </div>
        <div className="col">
          <Input label="Voucher Code" type="number" name="voucher" />
        </div>
      </div>
      <Link to="/">
      <Button text="Place order" /></Link>
    </div>
 </div>
);

const Input = (props) => (
  <div className="input">
    <label>{props.label}</label>
    <div className="input-field">
      <input type={props.type} name={props.name} />
      <img src={props.imgSrc}/>
    </div>
  </div>
);

const Button = (props) => (
  <button className="checkout-btn" type="button">{props.text}</button>
);


export default CheckoutPage;

