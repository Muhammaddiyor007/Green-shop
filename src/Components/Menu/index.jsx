import CloseIcon from '@mui/icons-material/Close'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { resetAnchorEl } from '../../redux/reduxers/menuSlice'
// import MenuNoAuth from './MenuNoAuth'
import MenuAuth from './MenuAuth'

const Menu = () => {
	const dispatch = useDispatch()
	const anchorEl = useSelector(state => state.menu.anchorEl)

	const close = () => {
		dispatch(resetAnchorEl())
	}
	return (
		<div
			className={`${
				anchorEl ? '' : 'translate-x-full'
			} w-full h-[100vh] px-[60px] bg-white py-[24px] left-0 z-50 top-0 pt-[90px] fixed duration-[0.5s]`}
		>
			<CloseIcon className='absolute top-[24px] right-[16px]' onClick={close} />
			{/* <MenuNoAuth /> */}
			<MenuAuth />
		</div>
	)
}

export default Menu
