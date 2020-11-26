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
import Footer from './components/Components/Footer'
import axios from 'axios'
import Palettediv from './components/Components/Palettediv'
import Maintemp from './components/Screens/Maintemp'

class App extends Component {
  state = {
    collection: [],
    gradientscollection: [],
    palettescollection: [],
    loading: false,
    mode: true,
    sidebarstatus: true,
    palettefortemp: {
      color1: '',
      color2: '',
      color3: '',
      color4: '',
    },
  }
  async componentDidMount() {
    console.log(this.state.collection.length)
    this.setState({ loading: true })
    const palettesres = await axios.get('/api/palettes')
    this.setState({
      palettescollection: palettesres.data.palettes,
      loading: false,
    })
  }
  filterMethod = async (value) => {
    this.setState({ loading: true })
    const res = await axios.get(`/api/colors/category/${value}`)
    const newCollection = res.data.colors
    this.setState({ collection: newCollection, loading: false })
  }
  changeMode = (modevalue) => {
    this.setState({ mode: modevalue })
    // console.log(this.state.mode)
  }
  temppalette = (color1, color2, color3, color4) => {
    this.setState({
      palettefortemp: { color1, color2, color3, color4 },
    })
  }
  sidebarstatus = () => {
  }
  trigerColors = () => {
    if (this.state.collection.length === 0) {
      const trigerColorsdata = async () => {
        this.setState({ loading: true })
        const res = await axios.get('/api/colors')
        this.setState({ collection: res.data.colors, loading: false })
      }
      trigerColorsdata()
    }
  }
  trigerGradients = () => {
    if (this.state.gradientscollection.length === 0) {
      const trigerGradientsdata = async () => {
        this.setState({ loading: true })
        const gradientsres = await axios.get('/api/gradients')
        this.setState({
          gradientscollection: gradientsres.data.gradients,
          loading: false,
        })
      }
      trigerGradientsdata()
    }
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
                    <Footer />
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
                      trigerColors={this.trigerColors}
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
                      trigerGradients={this.trigerGradients}
                    ></Gradients>
                  </>
                )}
              />
              <Route
                exact
                path='/palettes'
                render={(props) => (
                  <>
                    <div className='left  p-xl-4 p-0'>
                      {this.state.palettescollection.map((item) => (
                        <Palettediv
                          key={item._id}
                          item={item}
                          temppalette={this.temppalette}
                        ></Palettediv>
                      ))}
                    </div>
                    <div className='right '>
                      <Maintemp
                        palettefortemp={this.state.palettefortemp}
                        sidebarstatus={this.sidebarstatus}
                      ></Maintemp>
                      <Footer />
                    </div>
                  </>
                )}
              />
              <Redirect to='/' />
            </Switch>
          </div>
        </BrowserRouter>
      </>
    )
  }
}

export default App
