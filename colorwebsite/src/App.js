import React, { Component } from 'react'
import './App.css'
import Colors from './components/Screens/Colors'
import Search from './components/Components/Search'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/jquery/dist/jquery.slim'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Colorpicker from './components/Screens/Colorpicker'
import Combinations from './components/Screens/Combinations'
import Gradients from './components/Screens/Gradients'
import Navbar from './components/Components/Navbar'
import Trycolors from './components/Screens/Trycolors'
import Footer from './components/Components/Footer'
import axios from 'axios'

class App extends Component {
  state = {
    collection: [],
    gradientscollection: [],
    loading: false,
  }
  async componentDidMount() {
    console.log(this.state.collection.length)
    this.setState({ loading: true })
    const res = await axios.get('/api/colors')
    this.setState({ collection: res.data.colors, loading: false })
    const gradientsres = await axios.get('/api/gradients')
    this.setState({
      gradientscollection: gradientsres.data.gradients,
      loading: false,
    })
  }
  filterMethod = async (value) => {
    // console.log(value)
    this.setState({ loading: true })
    const res = await axios.get(`/api/colors/category/${value}`)
    const newCollection = res.data.colors
    this.setState({ collection: newCollection, loading: false })
  }
  render() {
    return (
      <>
        <BrowserRouter>
          <div className='container-fluid p-0 m-0'>
            <Navbar />
            <Switch>
              <Route exact path='/' component={Colorpicker} />
              <Route
                exact
                path='/colors'
                render={(props) => (
                  <>
                    <Search filterMethod={this.filterMethod}></Search>
                    <Colors
                      collection={this.state.collection}
                      loading={this.state.loading}
                    ></Colors>
                  </>
                )}
              />
              <Route
                exact
                path='/gradients'
                render={(props) => (
                  <>
                    <Gradients
                      gradientcollection={this.state.gradientscollection}
                      loading={this.state.loading}
                    ></Gradients>
                  </>
                )}
              />

              <Route exact path='/combinations' component={Combinations} />
              <Route exact path='/trycolors' component={Trycolors} />
              <Redirect to='/' />
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      </>
    )
  }
}

export default App
