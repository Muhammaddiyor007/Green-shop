import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'
import GoogleIcon from '@mui/icons-material/Google'
import Button from '@mui/material/Button'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeAuthFun } from '../../redux/reduxers/authSlice.js'
import Login from './Signin'

const Auth = () => {
	const isOpenAuth = useSelector(state => state.isOpenAuth.openAuth)
	const dispatch = useDispatch()

	return (
		<div
			className={`${
				isOpenAuth ? '' : 'scale-0 translate-x-full -translate-y-full '
			} duration-[0.3s] fixed top-0 left-0 w-full h-[100vh] bg-black bg-opacity-30 z-50`}
		>
			<div className='max-w-[500px] py-[50px] px-[100px] min-h-[600px] mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-center border-b-[#46A358] border-b-[10px]'>
				<div className='nav absolute right-[11px] top-[11px]'>
					<CloseOutlinedIcon
						className='hover:text-[#46A358] duration-[1s]'
						onClick={() => {
							dispatch(closeAuthFun())
						}}
					/>
				</div>

				<Login />

				<div className='end'>
					<div className='mb-[15px] w-full'>
						<Button
							type='button'
							variant='outlined'
							className='w-full h-[40px] gap-[10px] flex items-center'
						>
							<GoogleIcon /> Login with Google
						</Button>
					</div>
					<Button
						type='button'
						variant='outlined'
						className='w-full h-[40px] gap-[10px] flex items-center'
					>
						<FacebookOutlinedIcon /> Login with Facebook
					</Button>
				</div>
			</div>
		</div>
	)
}

export default Auth