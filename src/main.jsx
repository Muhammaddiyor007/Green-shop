import { ThemeProvider } from '@mui/material/styles'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.jsx'
import OpenProvider from './ContexApi/Context.jsx'
import './index.css'
import { Store } from './redux/store.js'
import theme from './theme.js'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<Provider store={Store}>
				<OpenProvider>
					<ThemeProvider theme={theme}>
						<App />
					</ThemeProvider>
				</OpenProvider>
			</Provider>
		</QueryClientProvider>
	</StrictMode>
)