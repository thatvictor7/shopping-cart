import React, {Component} from 'react';
import './App.css';
import CartHeader from './Components/CartHeader.js'
import CartFooter from './Components/CartFooter.js'
import CartItems from './Components/CartItems.js'
import CartItem from './Components/CartItem.js'
import AddItem from './Components/AddItem.js'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      cartItemsList: [
        { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
        { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
        { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
          ],
      products: [{
          id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
        { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
        { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
        { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
        { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
        { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
        { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
        { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
        { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
    ],
      currentName: null,
      currentPrice: null,
      currentId: null,
      currentQuantity: null,
      currentTotal: 0
    }
  }

  modProduct = (e) => {
    e.preventDefault()
    this.state.products.map(product => {
      if(product.name === e.target.value) {
        this.setState({currentName: product.name})
        this.setState({currentPrice: product.priceInCents})
        this.setState({currentId: product.id})
      }
    })
  }


  modQuantity = (e) => {
    e.preventDefault()
    this.setState({currentQuantity: e.target.value})
  }

  total = (arr) => {
    var counter = 0
    arr.map(item => {
      counter += ((item.product.priceInCents * item.quantity) / 100)
    })
    return counter
  }

  modify = () => {
    const newcart = this.state.cartItemsList.concat({id: this.state.cartItemsList.length+1, product: {id: this.state.currentId, name: this.state.currentName, priceInCents: this.state.currentPrice }, quantity: this.state.currentQuantity})
    this.setState({cartItemsList: newcart}, () => console.log(this.state))
    var counter = 0
  }

  render() {
    return (
      <div>
        <CartHeader />
        <CartItems list={this.state.cartItemsList} total={this.total}/>
        <AddItem products={this.state.products} modify={this.modify} modQuantity={this.modQuantity} modProduct={this.modProduct}/>
        <CartFooter name='1800'/>
      </div>
    )
  }
}

export default App;
