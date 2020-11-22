import React, { Component } from 'react'
import './App.css'
import Colors from './components/Screens/Colors'
import Search from './components/Components/Search'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/jquery/dist/jquery.slim'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Colorpicker from './components/Screens/Colorpicker'
import Gradients from './components/Screens/Gradients'
import Navbar from './components/Components/Navbar'
import Trycolors from './components/Screens/Palettes'
import Footer from './components/Components/Footer'
import axios from 'axios'
import Palettediv from './components/Components/Palettediv'

class App extends Component {
  state = {
    collection: [],
    gradientscollection: [],
    palettescollection: [],
    loading: false,
    mode: true,
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
    const palettesres = await axios.get('/api/palettes')
    this.setState({
      palettescollection: palettesres.data.palettes,
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
  changeMode = (modevalue) => {
    this.setState({ mode: modevalue })
    console.log(this.state.mode)
  }
  render() {
    return (
      <>
        <BrowserRouter>
          <div className='container-fluid p-0 m-0'>
            <Navbar changeMode={this.changeMode} mode={this.state.mode} />
            <Switch>
              <Route
                exact
                path='/'
                render={(props) => (
                  <>
                    {' '}
                    <Colorpicker mode={this.state.mode} />
                  </>
                )}
              />
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
              <Route exact path='/palettes' render={(props)=>(<>
                <div className="left  p-4">
                {this.state.palettescollection.map((item) => (
                <Palettediv key={item._id} item={item} className='col-lg-4  col-sm-6'>

                </Palettediv>
              ))}

                </div>
                <div className="right bg-danger">
                hello
               
                </div>
              </>)} />
              <Redirect to='/' />
            </Switch>
          </div>
        </BrowserRouter>
      </>
    )
  }
}

export default App
