import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	decreaseCountFromShopping,
	deleteFlowerFromShopping,
	increaseCountFromShopping,
} from '../../../../redux/shopSlice'

import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import NoProfuct from '../noProduct'

const ShowShopProducts = () => {
	const carts = useSelector(state => state.shopping?.data || [])
	const dispatch = useDispatch()
	const handleIncrease = product => {
		dispatch(increaseCountFromShopping(product))
	}
	const handleDecrease = product => {
		dispatch(decreaseCountFromShopping(product))
	}

	const handleDelete = product => {
		dispatch(deleteFlowerFromShopping(product))
	}

	return (
		<div className='w-full'>
			<table className='w-full border-separate border-spacing-y-2 '>
				<thead className=''>
					<tr className='font-bold text-[16px]'>
						<td className='py-[15px] border-b-[1px] border-b-[#46A538]'>
							Products
						</td>
						<td className='py-[15px] border-b-[1px] border-b-[#46A538]'>
							Price
						</td>
						<td className='py-[15px] border-b-[1px] border-b-[#46A538]'>
							Quantity
						</td>
						<td className='py-[15px] border-b-[1px] border-b-[#46A538]'>
							Total
						</td>
						<td className='py-[15px] border-b-[1px] border-b-[#46A538]'></td>
					</tr>
				</thead>

				<tbody className='w-full '>
					{
						carts.map(cart => (
							<tr
								className='w-full h-full bg-gray-100 px-[5px]'
								key={cart?._id}
							>
								<td className='flex gap-[10px] w-[150px] '>
									<img
										src={`${cart?.main_image}`}
										alt=''
										className='max-w-[70px] h-[70px] min-w-[70px]'
									/>
									<div className='flex flex-col'>
										<span>{cart?.title}</span>
										<span>SKU:</span>
										<span>{cart?._id}</span>
									</div>
								</td>

								<td className=''>${cart.price}</td>

								<td className='text-nowrap'>
									<button
										className='w-[25px] h-[25px] bg-[#46A358] hover:bg-[#46a359a2] active:bg-[#46a35971] duration-[0.3s] text-white rounded-[50%] text-[16px]'
										onClick={() => handleDecrease(cart)}
									>
										-
									</button>
									<span className='inline-block min-w-[25px] text-center'>
										{cart.count}
									</span>
									<button
										className='w-[25px] h-[25px] bg-[#46A358] text-white rounded-[50%] text-[16px]'
										onClick={() => handleIncrease(cart)}
									>
										+
									</button>
								</td>

								<td className='w-[80px]'>${cart.price * cart.count}</td>
								<td
									onClick={() => {
										handleDelete(cart)
									}}
								>
									<DeleteOutlineOutlinedIcon />
								</td>
							</tr>
						))
					 }
				</tbody>
			</table>
		</div>
	)
}

export default ShowShopProducts