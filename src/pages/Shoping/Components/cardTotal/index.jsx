import { Button, Input, Space } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const CardTotal = () => {
	const nav = useNavigate()
	const carts = useSelector(state => state.shopping?.data || [])
	return (
		<div>
			<div className='flex items-center py-[20px] border-b-[1px] border-b-[#46A538] text-[16px] font-bold'>
				<h2>Card Total</h2>
			</div>
			<div className='py-[30px]'>
				<form action=''>
					<Space.Compact style={{ width: '100%' }}>
						<Input defaultValue='' />
						<button className='bg-[#46A538] text-white font-semibold px-3 py-2 rounded-[5px]' type='primary'>Apply</button>
					</Space.Compact>
				</form>
				<div className="text-[#00000073] text-[14px] grid gap-[16px] mt-[16px]">
					<p >Subtotal: <span className='text-black'>1</span></p>
					<p>Coupon Discount: -<span className='text-black'>1</span></p>
					<p>Shiping: <span className='text-black'>1</span></p>
					<p className='text-black text-[16px] font-bold flex w-full justify-between'>Total: <span className='text-[#46A538]'>1</span></p>
					<button onClick={()=>{carts?.length ? nav('/product-checkout') : '' }} className='w-full py-[10px] bg-[#46A538] text-[#ffffff] text-[16px] font-bold rounded-[8px]'>Proceed to Checkout</button>
					<button onClick={()=>{nav('/')}} className='text-[#46A538] w-full font-bold text-[16px]'>Continue Shopping</button>

				</div>
			</div>
		</div>
	)
}

export default CardTotal