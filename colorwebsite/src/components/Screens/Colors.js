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
    console.log(this.state.collection.length)
    this.setState({ loading: true })
    const res = await axios.get('/api/colors')
    this.setState({ collection: res.data.colors, loading: false })
    console.log(this.state.collection.length)
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

          <div className='row mt-4 mx-0' variant='top'>
            <div className='col-md-10 mx-auto'>
              <h4 className='font-weight-light'>Colors</h4>
              <div className='row'>
                {this.state.collection.map((co) => (
                  <div key={co._id} className='col-lg-4 col-sm-6'>
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
