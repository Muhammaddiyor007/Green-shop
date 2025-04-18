import React from 'react'
import Cotegory from './Cotegory'
import Discount from './Discount'
import PriceFilter from './priceFilter'

function Cotegories() {
	return (
		<div className='hidden lg:block  max-w-[310px] py-[14px] bg-[#FBFBFB] min-h-[774px] px-[18px]'>
			<Cotegory />
			<PriceFilter/>
			<Discount/>
		</div>
	)
}

export default Cotegories