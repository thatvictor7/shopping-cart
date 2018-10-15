import React from 'react'

const AddItem = (props) => {

  return (
    <div className="container">
      <div className="list-group">
        <div>
          <p>Quantity</p>
        </div>
      </div>
          <form>
            <input onChange={props.modQuantity} type='number' min='0' className="col-md-12"></input>
            <div>
              <p>Products</p>
            </div>
            <select  onChange={props.modProduct} className='container'>
              <option  disabled selected>Select an option...</option>
              {props.products.map(item => {
                return <option refs={item.priceInCents}value={item.name}>{item.name} ${item.priceInCents / 100}</option>} )}
            </select>
            <div className="sep">
              <button onClick={props.modify} type="button" className="btn btn-primary">Submit</button>
            </div>
          </form>
    </div>
  )
}

export default AddItem
