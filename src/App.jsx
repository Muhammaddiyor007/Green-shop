import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './Layout/MainLayout'
import Home from './pages/Home/Home'
import MenuAuth from './Components/Menu/MenuAuth'

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route element={<MainLayout />}>
						<Route path='/' element={<Home />} />
					</Route>
	
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
