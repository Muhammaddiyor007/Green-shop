import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import LogoutIcon from '@mui/icons-material/Logout'
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart'
import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { logout } from '../../redux/reduxers/AutheSlice'

const ProfilNav = () => {
	const nav = useNavigate()
	const dispatch = useDispatch()
	const logOut = async () => {
		await dispatch(logout())
		nav('/')
	}

	
	return (
		<div className='bg-[#FBFBFB] max-w-[320px] py-[17px] hidden md:block w-full'>
			<h2 className='text-[18px] text-[#3D3D3D] mb-[15px] px-[18px] leading-[16px] font-inter font-bold'>
				My Account
			</h2>
			<ul className='flex flex-col gap-[10px] '>
				<li>
					<NavLink
						to='/profil'
						className='text-[#3D3D3D] px-[18px] text-[15px] leading-[45px] font-inter font-normal flex items-center gap-[11px] hover:text-[#46A358] hover:border-l-[5px] hover:border-l-[#46A358] hover:font-bold'
					>
						<Person2OutlinedIcon /> Account Details
					</NavLink>
				</li>

				<li>
					<NavLink
						to='/profil/myProducts'
						className='text-[#3D3D3D] px-[18px] text-[15px] leading-[45px] font-inter font-normal flex items-center gap-[11px] hover:text-[#46A358] hover:border-l-[5px] hover:border-l-[#46A358] hover:font-bold'
					>
						<ShoppingBagOutlinedIcon /> My Products
					</NavLink>
				</li>

				<li>
					<NavLink
						to='/profil/address'
						className='text-[#3D3D3D] px-[18px] text-[15px] leading-[45px] font-inter font-normal flex items-center gap-[11px] hover:text-[#46A358] hover:border-l-[5px] hover:border-l-[#46A358] hover:font-bold'
					>
						<LocationOnOutlinedIcon /> Address
					</NavLink>
				</li>

				<li>
					<NavLink
						to='/profil/wishlist'
						className='text-[#3D3D3D] px-[18px] text-[15px] leading-[45px] font-inter font-normal flex items-center gap-[11px] hover:text-[#46A358] hover:border-l-[5px] hover:border-l-[#46A358] hover:font-bold'
					>
						<FavoriteBorderOutlinedIcon /> Wishlist
					</NavLink>
				</li>

				<li>
					<NavLink
						to='/profil/tracorder'
						className='text-[#3D3D3D] px-[18px] text-[15px] leading-[45px] font-inter font-normal flex items-center gap-[11px] mb-[32px] hover:text-[#46A358] hover:border-l-[5px] hover:border-l-[#46A358] hover:font-bold'
					>
						<StackedLineChartIcon /> Track Order
					</NavLink>
				</li>
			</ul>

			<hr />
			<button
				className='text-[#727272] px-[25px] text-[15px] flex gap-[10px] leading-[15px] font-inter font-bold items-center mb-[5px] mt-[22px]'
				onClick={logOut}
			>
				<LogoutIcon /> Logout
			</button>
		</div>
	)
}

export default ProfilNav