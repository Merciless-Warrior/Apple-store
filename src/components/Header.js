import React, { useState } from 'react';
import logo from '../chris-nagahama-vVhhfvVTerY-unsplash.jpg';
import { FaShoppingCart } from "react-icons/fa";
import Order from './Order';

const showOrders = (props) => {
  let summa = 0
  props.orders.forEach(el => summa += Number.parseFloat(el.price))


  return (
    <div>
    {props.orders.map(el => (
      <Order onDelete={props.onDelete} key={el.id} item={el} />
      ))}
      <p className='summa'>Сумма: {new Intl.NumberFormat().format(summa)}$</p>
      </div>
  )
}


const showNothing = (props) => (
  <div className='empty'>
    <h2>Товары отсутствуют)</h2>
  </div>
)


export default function Header(props) {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div>
      <FaShoppingCart
        onClick={() => setCartOpen(!cartOpen)}
        className={`shop-cart-button ${cartOpen ? 'active' : ''}`}
      />
      <ul className='header_menu'>
        <p className='House'>Apple Store</p>
        <li className='header-info'>Про нас</li>
        <li className='header-info'>Контакты</li>
        <li className='header-info'>Кабинет</li>
      </ul>

      <img
        className='logotip'
        alt={"Фото кухни"}
        content={"Привет"}
        src={logo}
      />

      {cartOpen && (
        <div className='shop-cart'>

          {props.orders.length > 0 ?
          showOrders(props) : showNothing()}
        </div>
      )}
    </div>
  );
}
