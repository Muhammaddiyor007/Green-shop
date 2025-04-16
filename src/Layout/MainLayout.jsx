import React from 'react'
import { Outlet } from 'react-router-dom'
import Menu from '../Components/Menu'
import Navigation from '../Components/Navbar'
import Footer from '../Components/Footer'

const MainLayout = () => {
	return (
		<div className='lg:max-w-[1216px] pt-[25px] pb-[10px] md:px-[50px] 2xl:px-0 mx-auto overflow-x-hidden'>
			<Navigation />
			<Menu />
			<Outlet />
			<Footer/>
		</div>
	)
}

export default MainLayout
