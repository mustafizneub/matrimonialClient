import React, { useEffect, useState } from 'react'
import "./checkout.css"
import { Link, useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';



const CheckoutPage = () => {

  let history = useHistory();
  let user = JSON.parse(localStorage.getItem('user'))
  if (user == undefined) {
    history.push('/signin');
    toast.error('Please Login with your account', {
      position: toast.POSITION.TOP_CENTER
    });
  }
  console.log(user);
  const [customer_name, setName] = useState(null);
  const [contact_number, setContact] = useState(null);
  const [transaction_id, setId] = useState(null);
  const [voucher_code, setVoucher] = useState(null);
  const [userID, setUser] = useState(null);

  useEffect(() => {
    setUser(user._id)
    console.log(userID)
  }, [userID])

  const location = useLocation();
  console.log(location.search.split('=')[1])
  const [title, setTitle] = useState(location.search.split('=')[1])

  function submitOrder(e) {
    let body = { title, customer_name, contact_number, transaction_id, voucher_code, userID }
    axios.post('/transaction', body).then(res => {
      if (res.status == 201) {
        toast.success('Your Transaction Submitted successfully', {
          position: toast.POSITION.TOP_CENTER
        })
      }
    })
  }
  return (
    <div className="app-container">
      <div className="row">
        <div className="col">
          <div className="item-container">
            <div className="item-image">
              <img src="https://i.ibb.co/tPK2TX9/Wedding-Planner-Standard-Package.png" alt="" />
              <div className="item-details">
                <h3 className="item-name"> Standard Package </h3>
                <h2 className="item-price"> $144.99 </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="col no-gutters">
          <div className="checkout">
            <div className="checkout-container">
              <h3 className="heading-3">Bkash/Nagad checkout</h3>
              <h3 className="heading-3">Merchant Number: +880123456789</h3>
              <div className="input">
                <label>Name</label>
                <div className="input-field">
                  <input value={customer_name} onChange={(e) => setName(e.target.value)} type="text" name="name" />
                </div>
              </div>
              <div className="input">
                <label>Contact Number</label>
                <div className="input-field">
                  <input value={contact_number} onChange={(e) => setContact(e.target.value)} type="number" name="card_number" />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="input">
                    <label>Transaction ID</label>
                    <div className="input-field">
                      <input value={transaction_id} onChange={(e) => setId(e.target.value)} type="text" name="exp_date" />
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="input">
                    <label>Voucher Code</label>
                    <div className="input-field">
                      <input value={voucher_code} onChange={(e) => setVoucher(e.target.value)} type="number" name="voucher" />
                    </div>
                  </div>
                </div>
              </div>
              <Link to="/">
                <button className="checkout-btn" onClick={(e) => submitOrder(e)} type="button">Place order</button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}


export default CheckoutPage;

