import React, { Component } from 'react'

import "./style.css"

export default class BaiTapThuKinh extends Component {

  state = {
  imagesUrl:"./images/products/v1.png"
}

  handleChangeGlass = (type) => {
    this.setState({
      imagesUrl: `./images/products/${type}.png`
    })
  }

  render() {
    return (
      <div>
      <h3>BaiTapThuKinh</h3>
        <div className='row'>
          <div className="col-5">
            <img className="model" src="./images/products/model.jpg" alt="#" />
            <img className="glass-model" src={this.state.imagesUrl} alt="#" />
          </div>
          <div className="col-7 ">
            <div className="row">
                <div className="col-4"><img className='glass' src="./images/products/v1.png" alt="#" onClick={()=> this.handleChangeGlass("v1")} /></div>
                <div className="col-4"><img className='glass' src="./images/products/v2.png" alt="#" onClick={()=> this.handleChangeGlass("v2")}/></div>
                <div className="col-4"><img className='glass' src="./images/products/v3.png" alt="#" onClick={()=> this.handleChangeGlass("v3")}/></div>
                </div>
              <div className="row">
                <div className="col-4"><img className='glass' src="./images/products/v4.png" alt="#" onClick={()=> this.handleChangeGlass("v4")}/></div>
                <div className="col-4"><img className='glass' src="./images/products/v5.png" alt="#" onClick={()=> this.handleChangeGlass("v5")}/></div>
              < div className="col-4"><img  className='glass' src="./images/products/v6.png" alt="#" onClick={()=> this.handleChangeGlass("v6")}/></div>
              </div>
              <div className="row">
                <div className="col-4"><img className='glass' src="./images/products/v7.png" alt="#" onClick={()=> this.handleChangeGlass("v7")}/></div>
                <div className="col-4"><img className='glass' src="./images/products/v8.png" alt="#" onClick={()=> this.handleChangeGlass("v8")} /></div>
              <div className="col-4"><img  className='glass' src="./images/products/v9.png" alt="#" onClick={()=> this.handleChangeGlass("v9")} /></div>
              </div>
              
            
          </div>
        </div>
      </div>
    )
  }
}
