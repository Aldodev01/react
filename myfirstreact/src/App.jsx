
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Home from './components/pages/home/Home'
import About from './components/pages/about/About';
import Showcase from './components/pages/showcase/Showcase';
import Contact from './components/pages/contact/Contact';
import Footer from './components/pages/footer/Footer';
import BottomMenu from './components/bottomMenu/BottomMenu';


// BROWSER ROUTER Adalah sebuah wrapper dimana semua kegiatan perpindahan Route dilakukan didalamnya
// SWITCH Adalah sebuah wrapper dimana Route berada dan menjadi tempat view perpindahan 
// ROUTE Adalah path URL dari website kita, dan menjadi tempat component page berada 



const App = ()=>{
  return(
    <BrowserRouter>

    <Navbar/>
    <BottomMenu/>

      <main className="app" style={{ marginTop : "8vh" }}>
        <Switch>


          <Route path='/contact'>
            <Contact/>
          </Route>

          <Route path='/showcase'>
            <Showcase/>
          </Route>

          <Route path='/about'>
            <About/>
          </Route>

          <Route path='/'>
            <Home/>
          </Route>

        </Switch>
      </main>

      <Footer/>
    </BrowserRouter>
  )
}

export default App;
