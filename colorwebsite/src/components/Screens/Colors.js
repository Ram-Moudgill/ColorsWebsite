import React, { Component } from 'react'
import Color from '../Components/Color'
import Header from '../Components/header'
import Search from '../Components/Search'
import Loading from '../Components/Loading'
import axios from 'axios'
class colors extends Component {
  state = {
    collection: [],
    loading: false,
  }
  async componentDidMount() {
    this.setState({ loading: true })
    const res = await axios.get('/api/colors')
    console.log(res.data.colors)
    this.setState({ collection: res.data.colors, loading: false })
  }
  filterMethod = async (value) => {
    // console.log(value)
    this.setState({ loading: true })
    const res = await axios.get(`/api/colors/category/${value}`)
    const newCollection = res.data.colors
    console.log(newCollection)
    this.setState({ collection: newCollection, loading: false })
  }
  render() {
    if (this.state.loading) {
      return <Loading></Loading>
    } else {
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
}

export default colors
