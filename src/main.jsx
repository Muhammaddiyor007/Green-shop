import { ThemeProvider } from '@mui/material/styles'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.jsx'
import './index.css'
import { Store } from './redux/store.js'
import theme from './theme.js'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Provider store={Store}>
			<ThemeProvider theme={theme}>
				<App />
			</ThemeProvider>
		</Provider>
	</StrictMode>
)
