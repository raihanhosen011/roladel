import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import SignUp from './pages/SignUp'
import Order from './pages/Order'
import Chat from './pages/Chat'
import FAQ from './pages/FAQ'

const App = () => {
  return (
    <>
      <div className='app' >
         <Header/> 

         <Switch>
            <Route exact path='/ng' component={Home} />
            <Route exact path='/profile' component={Dashboard} />
            <Route exact path='/sign-up' component={SignUp} />
            <Route exact path='/order' component={Order} />
            <Route exact path='/faq' component={FAQ} />
            <Route exact path='/chat/:username' component={Chat} />
         </Switch>

         <Footer/>
      </div>
    </>
  )
}

export default App