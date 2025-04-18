import React from 'react'
import Hero from './Hero'
import Cotegories from './Main/Cotegories'
import Product from './Main/Products'

const HomeComponents = () => {
	return (
		<div>
			<Hero />
			<div className="flex gap-[50px] mt-[29px]">
				<Cotegories />
				<Product />
			</div>
			
		</div>
	)
}

export default HomeComponents