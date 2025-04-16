import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

const MenuAuth = () => {
	return (
		<div className='flex flex-col justify-between h-full pb-[50px]'>
			<div className='font-inter'>
				<h2 className='mb-[16px] text-[#46A358] text-[24px] font-medium tracking-[0.07px] leading-[100%]'>
					Profile
				</h2>

				<div className='profil'>
					<Link
						to='/'
						className='flex items-center gap-[11px] mb-[15px] hover:text-[#46A358] duration-[0.5s] font-normal text-[15px] leading-[45px] text-[#3D3D3D] hover:font-bold'
					>
						<Person2OutlinedIcon /> Account Details
					</Link>

					<Link
						to='/'
						className='flex items-center gap-[11px] mb-[15px] hover:text-[#46A358] duration-[0.5s] font-normal text-[15px] leading-[45px] text-[#3D3D3D] hover:font-bold'
					>
						<InventoryOutlinedIcon /> My products
					</Link>

					<Link
						to='/'
						className='flex items-center gap-[11px] mb-[15px] hover:text-[#46A358] duration-[0.5s] font-normal text-[15px] leading-[45px] text-[#3D3D3D] hover:font-bold'
					>
						<LocationOnOutlinedIcon /> Address
					</Link>

					<Link
						to='/'
						className='flex items-center gap-[11px] mb-[15px] hover:text-[#46A358] duration-[0.5s] font-normal text-[15px] leading-[45px] text-[#3D3D3D] hover:font-bold'
					>
						<FavoriteBorderOutlinedIcon /> Wishlist
					</Link>
				</div>

				<ul className='text-[24px] text-[#000000] flex flex-col font-inter font-medium gap-[24px]  mb-[41px]'>
					<li>
						<Link to='/' className=''>
							Home
						</Link>
					</li>
					<li>
						<Link to='/' className=''>
							Blog
						</Link>
					</li>
				</ul>
			</div>

			<div className='logu text-center'>
				<Button color='secondary'>Log out</Button>
			</div>
		</div>
	)
}

export default MenuAuth
