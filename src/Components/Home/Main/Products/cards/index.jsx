import { Box , Skeleton} from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import PropTypes from 'prop-types'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectTabValue } from '../../../../../redux/reduxers/tabsSlice'
import Card from './card'


function CustomTabPanel(props) {
	const { children, value, index, ...other } = props

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && <Box sx={{ p: 3 }}>{children}</Box>}
		</div>
	)
}

CustomTabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
}

const ProductFech = async () => {
	const respons = await axios.get(
		'https://green-shop-backend.onrender.com/api/flower/category/house-plants?access_token=64bebc1e2c6d3f056a8c85b7&sort=most-expensive&type=all-plants&range_min=0&range_max=1000'
	)
	return respons.data
}

const Cards = () => {
	const value = useSelector(selectTabValue)

	const { data, isLoading } = useQuery({
		queryKey: ['data'],
		queryFn: ProductFech,
	})
	const defolArr = useSelector(state => state.defoldArr.defoldArr)

	return (
		<div>
			<Box>
				<CustomTabPanel value={value} index={0}>
					<div className='w-full grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 grid-rows-3  gap-[20px]'>
						{isLoading
							? defolArr.map(element => {
									return (
										<Box key={element} sx={{ pt: 0.5 }} width={'258px'}>
											<Skeleton
												variant='rectangular'
												width={'100%'}
												height={250}
											/>
											<Skeleton width={'100%'} />
											<Skeleton width='60%' />
										</Box>
									)
							  })
							: data?.data?.map(
									({ title, price, discount, discount_price, main_image , _id}) => (
										<div key={_id} className='lg:max-w-[258px] px-[4px] pt-[31px] bg-[#FBFBFB] '>
											<div className='photo max-w-[250px] h-[250px] mx-auto'>
												<img
													src={`${main_image}`}
													className='w-full h-full'
													alt=''
												/>
											</div>
											<h2 className='mt-[12px] mb-[6px] font-inter text-[20px] font-bold leading-[16px] text-[#3D3D3D]'>
												{title}
											</h2>

											{discount ? (
												<p className='text-[#46A358] font-bold font-inter text-[18px] leading-[16px]'>
													${discount_price}{' '}
													<span className=' line-through font-medium text-[16px] text-[#a5a5a5]'>
														${price}
													</span>
												</p>
											) : (
												<p>${price}</p>
											)}
										</div>
									)
							  )}
					</div>
				</CustomTabPanel>
				<CustomTabPanel value={value} index={1}>
					<Card />
				</CustomTabPanel>
				<CustomTabPanel value={value} index={2}>
					<Card />
				</CustomTabPanel>
			</Box>
		</div>
	)
}

export default Cards