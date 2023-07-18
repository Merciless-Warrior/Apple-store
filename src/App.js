import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Items from './components/Items';
import Categories from './components/Categories';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'iPhone 14 512 ГБ',
          img : '14Iphone.png',
          desc: 'В наличии',
          category: 'iphone',
          price: '999$'

        },
        {
          id: 2,
          title: 'iPhone 14 Pro Max 128 ГБ',
          img: '14promaxis.png',
          desc: 'В наличии',
          category: 'iphone',
          price: '1099$'
        },
        {
          id: 3,
          title: 'iPhone 13 Pro Max 512 ГБ',
          img: 'apple_iphone_13_pro_max_blu_1_is.jpg',
          desc: 'В наличии',
          category: 'iphone',
          price: '1299.99$',
        },

        {
          id: 4,
          title: 'iPhone 13 256 Gb',
          img: 'iphone13_blus.jpg',
          desc: 'В наличии',
          category: 'iphone',
          price: '729.99$',
        },
        {
          id: 5,
          title: 'iPhone 13 128 ГБ ',
          img : 'apple_iphone_13_starlight_4_is.jpg',
          desc: 'В наличии',
          category: 'iphone',
          price: '629.99$',

        },
        {
          id: 6,
          title: 'iPhone 13 mini 256 Gb',
          img: 'apple_iphone_mini_red_1_is.jpg',
          desc: 'В наличии',
          category: 'iphone',
          price: '579.99$'
        },
        {
          id: 7,
          title: 'iPhone SE 2022 128 ГБ',
          img: 'apple_iphone_se_2020_64gb_red.jpg',
          desc: 'В наличии',
          category: 'iphone',
          price: '404.99$',
        },

        {
          id: 8,
          title: 'iPhone 12 128 Gb',
          img: 'iPhone12 128gbk.jpg',
          desc: 'В наличии',
          category: 'iphone',
          price: '539.99$',
        },
        {
          id: 9,
          title: 'MacBook Air 13.3',
          img: 'macbook1.jpg',
          desc: 'В наличии',
          category: 'mackbook',
          price: '999.99$',
        },
        {
          id: 10,
          title: 'MacBook Pro 14',
          img: 'macbook2.jpg',
          desc: 'В наличии',
          category: 'mackbook',
          price: '1999.00$',
        },
        {
          id: 11,
          title: 'MacBook Pro 13.3',
          img: 'macbook3.jpg',
          desc: 'В наличии',
          category: 'mackbook',
          price: '1000.99$',
        },
        {
          id: 12,
          title: 'MacBook Air 15',
          img: 'macbook4.jpg',
          desc: 'В наличии',
          category: 'mackbook',
          price: '1299.99$',
        },
        {
          id: 13,
          title: 'MacBook Air 13.6',
          img: 'macbook5.jpg',
          desc: 'В наличии',
          category: 'mackbook',
          price: '1399.99$',
        },
        {
          id: 14,
          title: 'Apple - Geek Squad ',
          img: 'macbook6.jpg',
          desc: 'В наличии',
          category: 'mackbook',
          price: '2,799.99$',
        },
        {
          id: 15,
          title: 'Apple Watch SE 2nd Generation ',
          img: 'watch1jpg.jpg',
          desc: 'В наличии',
          category: 'watchOS',
          price: '249.00$',
        },
        {
          id: 16,
          title: 'Apple Watch Series 8',
          img: 'watch2.jpg',
          desc: 'В наличии',
          category: 'watchOS',
          price: '339.00$',
        },
        {
          id: 17,
          title: 'Apple Watch Ultra',
          img: 'watch3.jpg',
          desc: 'В наличии',
          category: 'watchOS',
          price: '799$',
        },
        {
          id: 18,
          title: 'Apple Watch Series 8 (GPS)',
          img: 'watch4.jpg',
          desc: 'В наличии',
          category: 'watchOS',
          price: '399.00$',
        },
        {
          id: 19,
          title: 'Apple Watch SE 2nd Generation',
          img: 'watch7.jpg',
          desc: 'В наличии',
          category: 'watchOS',
          price: '249.00$',
        },
        {
          id: 20,
          title: 'Apple Watch Ultra',
          img: 'watch6.jpg',
          desc: 'В наличии',
          category: 'watchOS',
          price: '799$',
        },
        {
          id: 21,
          title: 'Apple Watch Ultra Titanium',
          img: 'watch5.jpg',
          desc: 'В наличии',
          category: 'watchOS',
          price: '899.00$',
        },
        {
          id: 22,
          title: 'Apple Watch Series 8',
          img: 'watch6.jpg',
          desc: 'В наличии',
          category: 'watchOS',
          price: '799$',
        },
        {
          id: 23,
          title: 'Belkin - Secure Holder with Cable',
          img: 'airtag2.jpg',
          desc: 'В наличии',
          category: 'airtags',
          price: '19.99$',
        },
        {
          id: 24,
          title: 'Belkin - Secure Holder with Cable',
          img: 'airtag5.jpg',
          desc: 'В наличии',
          category: 'airtags',
          price: '17.99$',
        },
        {
          id: 25,
          title: 'Belkin - Secure Holder with Cable',
          img: 'airtag7.jpg',
          desc: 'В наличии',
          category: 'airtags',
          price: '29.99$',
        },
        {
          id: 26,
          title: 'Belkin - Secure Holder with Cable',
          img: 'airtag4.jpg',
          desc: 'В наличии',
          category: 'airtags',
          price: '99.00$',
        },
        {
          id: 27,
          title: 'Belkin - Secure Holder with Cable',
          img: 'airtag3.jpg',
          desc: 'В наличии',
          category: 'airtags',
          price: '49.00$',
        },
        {
          id: 28,
          title: 'Belkin - Secure Holder with Cable',
          img: 'airtag6.jpg',
          desc: 'В наличии',
          category: 'airtags',
          price: '35.00$',
        },
        {
          id: 29,
          title: 'Apple - AirPods with Charging Case 2',
          img: 'airpods1.jpg',
          desc: 'В наличии',
          category: 'hedphones',
          price: '129.00$',
        },
        {
          id: 30,
          title: 'Apple - AirPods Pro',
          img: 'airpods2.jpg',
          desc: 'В наличии',
          category: 'hedphones',
          price: '249.00$',
        },
        {
          id: 31,
          title: 'Apple - AirPods 3rd',
          img: 'airpods3.jpg',
          desc: 'В наличии',
          category: 'hedphones',
          price: '169.99$',
        },
        {
          id: 32,
          title: 'Apple - Geek Squad Certified',
          img: 'airpods1.jpg',
          desc: 'В наличии',
          category: 'hedphones',
          price: '169.00$',
        },
        {
          id: 33,
          title: 'Apple - AirPods Max',
          img: 'airpods2.jpg',
          desc: 'В наличии',
          category: 'hedphones',
          price: '479.99$',
        },
        {
          id: 34,
          title: 'Apple - AirPods 3rd',
          img: 'airpods5.jpg',
          desc: 'В наличии',
          category: 'hedphones',
          price: '169.99$',
        },

      ]
    };
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
  }

  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items items={this.state.currentItems} onAdd={this.addToOrder} onShowItem={this.onShowItem} />
        <Footer />
      </div>
    );
  }



  chooseCategory(category) {
    console.log(category)
    if (category === 'all') {
      this.setState({ currentItems: this.state.items });
    } else {
      const filteredItems = this.state.items.filter(
        (el) => el.category.toLowerCase() === category.toLowerCase()
      );
      this.setState({ currentItems: filteredItems });
    }
  }
  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
      isInArray = true
    })
    if(!isInArray)
      this.setState({orders: [...this.state.orders, item] })
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el =>  el.id !== id)})
  }

}

export default App;