import LoginIcon from '@mui/icons-material/Login'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import Badge, { badgeClasses } from '@mui/material/Badge'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import 'typeface-inter'
import { setAnchorEl } from '../../redux/reduxers/menuSlice'
import { openModal } from '../../redux/reduxers/authSlice'
import { selectUserInfo } from '../../redux/reduxers/selectUserInfo'
import { getter } from '../../hooks/localStorej'

const CartBadge = styled(Badge)`
	& .${badgeClasses.badge} {
		top: -13px;
		right: 3px;
	}
`

const Navigation = () => {
	const dispatch = useDispatch()
	const { token, name } = useSelector(selectUserInfo)
	const cart = useSelector((state) => state.shopping?.data || []) 
	const nav = useNavigate()

	const open = () => {
		dispatch(setAnchorEl(true))
	}

	const [cardCount, setCardCount] = useState([])

	useEffect(() => {
		const cardArr = getter({ key: 'shopping_card' }) || []
		setCardCount(cardArr)
	}, [cart])

	return (
		<div className='flex px-[15px] md:px-[0] justify-between items-center md:border-b-[#46A35880] pb-[18px] md:border-b-[0.3px]'>
			<div className='logo'>
				<Link to='/'>
					<img src='/logo.png' alt='Logo' />
				</Link>
			</div>

			<ul className='hidden md:flex items-center text-[#3D3D3D] font-inter font-normal gap-[24px]  lg:gap-[50px] text-[16px] '>
				<li>
					<IconButton>
						<Link to='/' className='text-[16px]'>
							Home
						</Link>
					</IconButton>
				</li>
				<li>
					<IconButton>
						<Link to='/' className='text-[16px]'>
							Blog
						</Link>
					</IconButton>
				</li>
			</ul>

			<div className='flex gap-[30px] items-center'>
				<IconButton>
					<SearchIcon sx={{ fontSize: 30 }} />
				</IconButton>

				<Link to={'/product-card'}>
					<IconButton>
						<ShoppingCartIcon sx={{ fontSize: 30 }} />
						<CartBadge badgeContent={cardCount.length} color='primary' overlap='circular' />
					</IconButton>
				</Link>

				<div className='hidden md:block'>
					{token ? (
						<Button
							variant='contained'
							color='primary'
							className='gap-[4px] rounded-[6px] '
							onClick={() => {
								nav('/profil')
							}}
						>
							{name}
						</Button>
					) : (
						<Button
							variant='contained'
							color='primary'
							className='gap-[4px] rounded-[6px] '
							onClick={() => {
								dispatch(openModal())
							}}
						>
							<LoginIcon />
						</Button>
					)}
				</div>

				<div className='md:hidden'>
					<MenuIcon sx={{ fontSize: 30 }} className='' onClick={open} />
				</div>
			</div>
		</div>
	)
}

export default Navigation