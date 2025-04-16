import LoginIcon from '@mui/icons-material/Login'
import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const MenuNoAuth = () => {
	return (
		<div className='h-full w-full  font-inter'>
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

			<Button
				variant='contained'
				color='primary'
				className='gap-[4px] rounded-[6px] w-full h-[49px] '
			>
				<LoginIcon />
				Login
			</Button>
		</div>
	)
}

export default MenuNoAuth
