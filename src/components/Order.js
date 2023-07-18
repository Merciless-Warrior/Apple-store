import React, { Component } from 'react'
import { FaTrash } from 'react-icons/fa'


export class Order extends Component {
  render() {
    return (
      <div className='item'>
        <img src={"./img/" + this.props.item.img} alt='logo' />
        <h2 className='title'>{this.props.item.title}</h2>
        <h2 className='desc'>{this.props.item.desc}</h2>
        <b className='price'>{this.props.item.price}</b>
        < FaTrash className='delete-icon' onClick={() => this.props.onDelete(this.props.item.id)} /> 
      </div>
    )
  }
}

export default Order