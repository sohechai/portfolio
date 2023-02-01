import Home from './components/Home'
import './styles/style.scss'
import { Routes, Route, BrowserRouter, NavLink } from "react-router-dom"
import About from './pages/About';
import Work from './pages/Work';
import NavBar from './components/NavBar';
import logo from './images/logo.svg'
import { useState } from 'react';
import { ThemeContext, themes } from './components/contexts/themeContext';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import LightModeIcon from '@mui/icons-material/LightMode';
import Contact from './pages/Contact';

function App() {
	const [darkMode, setDarkMode] = useState(true);

	return (
		<BrowserRouter>
			<section className='container'>
				<section className='header'>
					<div className='logo'>
						<NavLink to="/">
							<svg xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 1000 1000">
								<path class="letterS"
									fill="none" stroke="#FCFCEF" strokeMiterlimit="10" strokeWidth="30"
									d="M 522.00,397.50
									C 516.00,376.50 498.49,357.93 468.00,369.00
									84.80,493.14 843.68,698.04 463.50,844.50
									248.36,891.75 534.00,561.00 601.50,526.50" />

								<path class="letterH" fill="none" stroke="#FCFCEF" strokeMiterlimit="10" strokeWidth="30"
									d="M 619.50,304.50
									C 606.00,358.50 607.91,840.15 618.00,838.50
									638.49,481.32 832.20,503.83 813.00,838.50" />
							</svg>
							<div className="ball" />
						</NavLink>
					</div>
					<div className='lightingMode'>
						<ThemeContext.Consumer>
							{({ changeTheme }) => (
								(darkMode ?
									<LightModeIcon onClick={() => {
										setDarkMode(!darkMode);
										changeTheme(darkMode ? themes.light : themes.dark);
									}} />
									:
									<NightsStayIcon onClick={() => {
										setDarkMode(!darkMode);
										changeTheme(darkMode ? themes.light : themes.dark);
									}}
									/>
								)
							)}
						</ThemeContext.Consumer>
					</div>
				</section>
				<NavBar />
				<section className='pageContents'>
					<Routes>
						<Route path="/" exact element={<Home />} />
						<Route path="about" element={<About />} />
						<Route path="work" element={<Work />} />
						<Route path="contact" element={<Contact />} />
					</Routes>
					<div className='signature'>
						<p>Sofia Hechaïchi &#169; 2023. Made with ReactJS.</p>
					</div>
				</section>
			</section>
		</BrowserRouter>
	);
}

export default App;
