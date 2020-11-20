import React from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/jquery/dist/jquery.slim'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Colorpicker from './components/Screens/Colorpicker'
import Combinations from './components/Screens/Combinations'
import Gradients from './components/Screens/Gradients'
import Navbar from './components/Components/Navbar'
import Trycolors from './components/Screens/Trycolors'
import Colors from './components/Screens/Colors'
import Footer from './components/Components/Footer'

function App() {
  return (
    <>
      <BrowserRouter>
        <div className='container-fluid p-0 m-0'>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Colorpicker} />
            <Route exact path='/colors' component={Colors} />
            <Route exact path='/gradients' component={Gradients} />
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

export default App
