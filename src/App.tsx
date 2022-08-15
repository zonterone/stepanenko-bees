import React from 'react'
import './App.css'
import About from './components/About/About'
import Contacts from './components/Contacts/Contacts'
import Footer from './components/Footer/Footer'
import Logo from './components/Logo/Logo'
import Navigation from './components/Navigation/Navigation'
import Products from './components/Products/Products'
import Videos from './components/Videos/Videos'

function App() {
	return (
		<div className="App">
			<div className="wrapper">
				<Logo />
				<Navigation />
				<About />
				<Products />
				<Videos />
				<Contacts />
				<Footer />
			</div>

		</div>
	)
}

export default App
