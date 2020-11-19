import React, { Component } from 'react'
import Gradient from '../Components/Gradient'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import GitHubIcon from '@material-ui/icons/GitHub'
import TwitterIcon from '@material-ui/icons/Twitter'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Header from '../Components/header'
import axios from 'axios'
import Loading from '../Components/Loading'
class Gradients extends Component {
  state = {
    collection: [],
    loading: false,
  }
  async componentDidMount() {
    this.setState({ loading: true })
    const res = await axios.get('/api/gradients')
    console.log(res.data.gradients)
    this.setState({ collection: res.data.gradients, loading: false })
  }
  render() {
    if (this.state.loading) {
      return <Loading />
    } else {
      return (
        <>
          <div>
            <Header />
          </div>
          <div className='row mt-4 p-0 mx-0'>
            <div className='col-md-11 mx-auto'>
              <h2>Gradient Palette</h2>
              <div className='row'>
                {this.state.collection.map((bg) => (
                  <div className='col-lg-3 col-md-6' key={bg._id}>
                    <Gradient bg={bg}></Gradient>
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

export default Gradients
