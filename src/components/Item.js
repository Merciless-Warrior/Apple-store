import React, { Component } from 'react';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0,
    };
  }

  handleAddToCart = () => {
    this.setState((prevState) => ({ quantity: prevState.quantity + 1 }));
    this.props.onAdd(this.props.item);
  };

  render() {
    return (
      <div className='item'>
        <img src={'./img/' + this.props.item.img} alt='фото' onClick={() => this.props.onShowItem(this.props.item)} />
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.desc}</p>
        <b>{this.props.item.price}</b>
        <div className='add-to-cart' onClick={this.handleAddToCart}>
          +
        </div>
        <div className='item-quantity'>{this.state.quantity}</div>
      </div>
    );
  }
}

export default Item;