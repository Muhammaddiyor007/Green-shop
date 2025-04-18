import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
import InputAdornment from '@mui/material/InputAdornment'
import { inputBaseClasses } from '@mui/material/InputBase'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import React from 'react'

const Join = () => {
	return (
		<div className='font-inter flex flex-col md:flex-row items-center gap-y-[30px] bg-[#FBFBFB] py-[32px] md:px-[23px] px-[15px]'>
			<Card sx={{ bgcolor: 'transparent' }}>
				<CardActionArea className=''>
					<div className='text-center px-[23px] pt-[25px]'>
						<img src='/join1.svg' alt='' />
					</div>
					<CardContent>
						<Typography
							gutterBottom
							variant='h5'
							component='div'
							sx={{
								color: '#3D3D3D',
								fontWeight: 700,
								fontSize: '17px',
								lineHeight: '16px',
								fontFamily: 'inter',
							}}
						>
							Garden Care
						</Typography>
						<Typography variant='body2' sx={{ color: 'text.secondary' }}>
							We are an online plant shop offering a wide range of cheap and
							trendy plants.
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>

			<Card sx={{ bgcolor: 'transparent' }}>
				<CardActionArea className=''>
					<div className='text-center px-[23px] pt-[25px]'>
						<img src='/join2.svg' alt='' />
					</div>
					<CardContent>
						<Typography
							gutterBottom
							variant='h5'
							component='div'
							sx={{
								color: '#3D3D3D',
								fontWeight: 700,
								fontSize: '17px',
								lineHeight: '16px',
								fontFamily: 'inter',
							}}
						>
							Plant Renovation
						</Typography>
						<Typography variant='body2' sx={{ color: 'text.secondary' }}>
							We are an online plant shop offering a wide range of cheap and
							trendy plants.
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>

			<Card sx={{ bgcolor: 'transparent' }}>
				<CardActionArea className=''>
					<div className='text-center px-[23px] pt-[25px]'>
						<img src='/join1.svg' alt='' />
					</div>
					<CardContent>
						<Typography
							gutterBottom
							variant='h5'
							component='div'
							sx={{
								color: '#3D3D3D',
								fontWeight: 700,
								fontSize: '17px',
								lineHeight: '16px',
								fontFamily: 'inter',
							}}
						>
							Watering Graden
						</Typography>
						<Typography variant='body2' sx={{ color: 'text.secondary' }}>
							We are an online plant shop offering a wide range of cheap and
							trendy plants.
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>

			<div className='card md:px-[15px] text-start'>
				<h2 className='text-[#3D3D3D] font-bold text-[18px] leading-[16px]'>
					Would you like to join newsletters?
				</h2>
				<div className='mt-[18px] flex justify-start'>
					<TextField
						id='standard-suffix-shrink'
						label='enter your email address...'
						variant='standard'
						color='white'
						slotProps={{
							htmlInput: {
								sx: { textAlign: 'left' },
							},
							input: {
								endAdornment: (
									<InputAdornment
										position='end'
										sx={{
											alignSelf: 'flex-end',
											margin: 0,
											paddingX: '10px',
											marginBottom: '5px',
											opacity: 0,
											pointerEvents: 'none',
											[`[data-shrink=true] ~ .${inputBaseClasses.root} > &`]: {
												opacity: 1,
											},
										}}
									>
										@gmail.com
									</InputAdornment>
								),
							},
						}}
					/>
					<Button variant='contained'>Join</Button>
				</div>
				<p className='text-[#727272] text-[13px] leading-[22px] font-inter mt-[17px]'>
					We usually post offers and challenges in newsletter. We’re your online
					houseplant destination. We offer a wide range of houseplants and
					accessories shipped directly from our (green)house to yours!
				</p>
			</div>
		</div>
	)
}

export default Join