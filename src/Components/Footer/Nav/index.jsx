import React from 'react'
import NavNav from './navnav'
import Social from './social'

const FooterNav = () => {
	return (
		<>
			<div className='flex flex-col md:flex-row gap-[50px] md:gap-[300px] py-[33px] px-[23px] bg-[#FBFBFB] min-h-[236px]'>
				<NavNav />
				<Social />
			</div>
			<div className="w-full bg-white h-[46px] text-[#3D3D3D] font-inter text-[14px] leading-[30px] flex justify-center items-center">
				<p>© 2025 GreenShop. All Rights Reserved.</p>
			</div>
		</>
	)
}

export default FooterNav
