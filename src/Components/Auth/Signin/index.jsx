import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'
import GoogleIcon from '@mui/icons-material/Google'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import TextField from '@mui/material/TextField'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
	const [showPassword, setShowPassword] = React.useState(false)

	const handleClickShowPassword = () => setShowPassword(show => !show)

	const handleMouseDownPassword = event => {
		event.preventDefault()
	}

	const handleMouseUpPassword = event => {
		event.preventDefault()
	}

	return (
		
			<form
				action=''
			>
				
				<div className='title text-[20px] text-[#3d3d3d] leading-[16px] font-medium'>
					<NavLink
						to='/'
						className='px-[11px] border-r-[1px] border-r-solid border-r-black'
					>
						Login
					</NavLink>
					<NavLink to='/' className='px-[11px]'>
						Register
					</NavLink>
				</div>

				<div className='font-inter text-[13px] leading-[16px] mb-[16px] text-[#3d3d3d] mt-[53px]'>
					<h2>Enter your username and password to login.</h2>
				</div>

				<TextField
					id='outlined-basic'
					label='Palse Enter Your Email'
					variant='outlined'
					className='w-full mb-[17px]'
				/>

				<FormControl sx={{ my: '16px', width: '100%' }} variant='outlined'>
					<InputLabel htmlFor='outlined-adornment-password'>
						Password
					</InputLabel>
					<OutlinedInput
						id='outlined-adornment-password'
						type={showPassword ? 'text' : 'password'}
						endAdornment={
							<InputAdornment position='end'>
								<IconButton
									aria-label={
										showPassword ? 'hide the password' : 'display the password'
									}
									onClick={handleClickShowPassword}
									onMouseDown={handleMouseDownPassword}
									onMouseUp={handleMouseUpPassword}
									edge='end'
								>
									{showPassword ? <VisibilityOff /> : <Visibility />}
								</IconButton>
							</InputAdornment>
						}
						label='Password'
					/>
				</FormControl>

				<p className='text-end font-normal text-[#46A358] text-[14px] leading-[16px] cursor-pointer'>
					Forgot Password?
				</p>

				<div className='mt-[27px] mb-[46px]'>
					<Button variant='contained' type='submit' className='w-full h-[45px]'>
						Login
					</Button>
				</div>

				<div className='text-[#3d3d3d] text-[13px] leading-[16px] mb-[27px] font-inter flex items-center'>
					<div className='w-full bg-[#EAEAEA] h-[1px]'></div>
					<p className='text-nowrap px-[10px] bg-white'>Or login with</p>
					<div className='w-full bg-[#EAEAEA] h-[1px]'></div>
				</div>

				
			</form>

	)
}

export default Login