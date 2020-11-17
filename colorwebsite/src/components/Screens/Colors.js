import React, { Component } from 'react'
import colorcoll from '../colorcoll'
import Color from '../Components/Color'
import Header from '../Components/header'
import Search from '../Components/Search'
class colors extends Component {
  state = {
    collection: colorcoll,
  }
  filterMethod = async (value) => {
    console.log(value)
    const newCollection = await colorcoll.filter(
      (item) => item.category === value
    )
    this.setState({ collection: newCollection })
  }
  render() {
    return (
      <>
        <Search filterMethod={this.filterMethod}></Search>
        <div>
          <Header
            subTitle='Looking For the Best Colors For Your Project?'
            mainTitle='Million Colors'
            secondTitle='Best Color Resourse for your Project'
          >
            {' '}
          </Header>
        </div>

        <div className='row mt-4 mx-0'>
          <div className='col-md-11 mx-auto'>
            <h2>Color Palette</h2>
            <div className='row'>
              {this.state.collection.map((co) => (
                <div key={co._id} className='col-lg-3 col-sm-6'>
                  <Color co={co}></Color>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default colors
