import React, { Component } from 'react'
import './App.css'
import Colors from './components/Screens/Colors'
import Search from './components/Components/Search'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Colorpicker from './components/Screens/Colorpicker'
import Gradients from './components/Screens/Gradients'
import Navbar from './components/Components/Navbar'
import Footer from './components/Components/Footer'
import axios from 'axios'
import Palettediv from './components/Components/Palettediv'
import Maintemp from './components/Screens/Maintemp'
import development from './components/Screens/Development'

class App extends Component {
  state = {
    collection: [],
    gradientscollection: [],
    palettescollection: [],
    loading: false,
    mode: true,
    palettefortemp: {
      color1: '',
      color2: '',
      color3: '',
      color4: '',
    },
  }
  async componentDidMount() {
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
  }
  temppalette = (color1, color2, color3, color4) => {
    this.setState({
      palettefortemp: { color1, color2, color3, color4 },
    })
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
  allColors = async () => {
    this.setState({ loading: true })
    const res = await axios.get('/api/colors')
    this.setState({ collection: res.data.colors, loading: false })
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
                    <Search
                      filterMethod={this.filterMethod}
                      allColors={this.allColors}
                    ></Search>
                    <Colors
                      collection={this.state.collection}
                      loading={this.state.loading}
                      trigerColors={this.trigerColors}
                    >
                      <Footer />
                    </Colors>
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
                    >
                      <Footer />
                    </Gradients>
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
                          loading={this.state.loading}
                          key={item._id}
                          item={item}
                          temppalette={this.temppalette}
                        ></Palettediv>
                      ))}
                    </div>
                    <div className='right '>
                      <Maintemp
                        palettefortemp={this.state.palettefortemp}
                      ></Maintemp>
                      <Footer />
                    </div>
                  </>
                )}
              />
            </Switch>
          </div>
        </BrowserRouter>
      </>
    )
  }
}

export default App
