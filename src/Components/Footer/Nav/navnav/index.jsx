import React from 'react'

const NavNav = () => {
	return (
		<div className='flex font-inter gap-[70px] md:gap-[200px]'>
			<div className=''>
				<h2 className='text-[#3D3D3D] font-bold text-[18px] leading-[18px] mb-[8px]'>
					My Account
				</h2>
				<p className='text-[#3D3D3D] text-[14px] leading-[30px]'>My Account </p>
				<p className='text-[#3D3D3D] text-[14px] leading-[30px]'>Address</p>
				<p className='text-[#3D3D3D] text-[14px] leading-[30px]'>Wishlist</p>
			</div>

			<div className=''>
				<h2 className='text-[#3D3D3D] font-bold text-[18px] leading-[18px] mb-[8px]'>
					Categories
				</h2>
				<p className='text-[#3D3D3D] text-[14px] leading-[30px]'>
					House Plants
				</p>
				<p className='text-[#3D3D3D] text-[14px] leading-[30px]'>
					Potter Plants
				</p>
				<p className='text-[#3D3D3D] text-[14px] leading-[30px]'>
					Seeds Small Plants
				</p>

				<p className='text-[#3D3D3D] text-[14px] leading-[30px]'>
					Seeds Accessories
				</p>
			</div>
		</div>
	)
}

export default NavNav
