import React from 'react'
import ShowShopProducts from './showProducts'
import CardTotal from './cardTotal'
import NoProfuct from './noProduct'
import { useSelector } from 'react-redux'


const ShopingComponents = () => {
	const carts = useSelector(state => state.shopping?.data || [])
	return (
		<div>
			<div className='md:flex gap-[30px]'>
				<div className='md:w-[60%] px-[15px]'>	
					{
						carts.length ?(<ShowShopProducts />):(<NoProfuct />)
					}
					
					
				</div>
				<div className='md:w-[35%] px-[15px]'>
					<CardTotal />
				</div>
			</div>
		</div>
	)
}

export default ShopingComponents