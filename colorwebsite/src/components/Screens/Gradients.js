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
    gradientcollection: [],
    loading: false,
  }
  async componentDidMount() {
    console.log(this.state.gradientcollection)
    this.setState({ loading: true })
    const res = await axios.get('/api/gradients')
    await this.setState({
      gradientcollection: res.data.gradients,
      loading: false,
    })
    console.log(this.state.gradientcollection)
    // eslint-disable-next-line
  }
  render() {
    if (this.state.loading) {
      return <Loading />
    } else {
      return (
        <>
          <div className='row mt-4 p-0 mx-0'>
            <div className='col-md-10 mx-auto'>
              <h2>Gradient Palette</h2>
              <div className='row'>
                {this.state.gradientcollection.map((bg) => (
                  <div className='col-lg-4 col-sm-6' key={bg._id}>
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
