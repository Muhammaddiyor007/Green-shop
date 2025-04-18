import React, { useState } from 'react'
import Slider from '@mui/material/Slider'
import { Button } from '@mui/material'
const PriceFilter = () => {
	const [price, setPrice] = useState([0, 1000])
	const submit = async event => {
		event.preventDefault()
	}

	return (
		<div className='pt-[36px] pb-[46px]'>
			<div className='font-bold font-inter text-[18px] leading-[16px] mb-[20px] '>
				<h2>Price Range</h2>
			</div>
			<form action='' className='w-full px-[30px]' onSubmit={submit}>
				<Slider
					getAriaLabel={() => 'Temperature range'}
					value={price}
					onChange={(e)=>{setPrice(e.target.value)}}
					valueLabelDisplay='auto'
					max={1000}
				/>
				<p className='text-[15px] leading-[16px] font-inter'>Price: <span className='text-[#46A358] font-bold'>${price[0]} - ${price[1]}</span></p>
				<Button type='submit' variant="contained" sx={{marginTop:'16px', borderRadius:"6px" , height:"35px"}} >Filter</Button>
			</form>
		</div>
	)
}

export default PriceFilter