import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/style.scss'
import App from './App';
import reportWebVitals from './reportWebVitals';
import ThemeContextWrapper from './components/contexts/themeContextWrapper';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<ThemeContextWrapper>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</ThemeContextWrapper>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();