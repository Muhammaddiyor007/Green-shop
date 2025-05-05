import { Box, Skeleton } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import PropTypes from 'prop-types'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectTabValue } from '../../../../../redux/reduxers/tabsSlice'
import { useSearchParams } from 'react-router-dom'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { addDataToShopping } from '../../../../../redux/shopSlice'

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

const ProductFech = async ({ queryKey }) => {
	const [_key, cotegory, sort, typeSearch] = queryKey
	const respons = await axios.get(
		`https://green-shop-backend.onrender.com/api/flower/category/${cotegory}?access_token=64bebc1e2c6d3f056a8c85b7&sort=${sort}&type=${typeSearch}&range_min=0&range_max=1000`
	)
	return respons.data
}

const Cards = () => {
	const value = useSelector(selectTabValue)
	const [searchParams] = useSearchParams()
	const cotegory = searchParams.get('cotegory') || 'house-plants'
	const sort = searchParams.get('sort') || 'default-sorting'
	const typeSearch = searchParams.get('type') || 'all-plants'

	const dispatch = useDispatch();

	const handleAdd = (product) => {
		dispatch(addDataToShopping(product));
	};





	const { data, isLoading } = useQuery({
		queryKey: ['data', cotegory, sort, typeSearch],
		queryFn: ({ queryKey }) => ProductFech({ queryKey }),
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
									(obj) => (
										<div
											key={obj?._id}
											className='lg:max-w-[258px] px-[4px] pt-[31px] bg-[#FBFBFB] group duration-[0.3s]'
										>
											<div className='photo max-w-[250px] h-[250px] mx-auto relative'>
												<img
													src={`${obj?.main_image}`}
													className='w-[187px] h-[187px] mx-auto'
													alt=''
												/>
												<div className='icons flex gap-[10px] justify-center absolute bottom-[5px] left-1/2 transform -translate-x-1/2 scale-100 duration-[0.3s]'>
													<div className='px-[5px] py-[5px] bg-white rounded-[8px]' onClick={()=>{handleAdd(obj)}}>
														<ShoppingCartOutlinedIcon />
													</div>
													<div className='px-[5px] py-[5px] bg-white rounded-[8px]'>
														<FavoriteBorderOutlinedIcon />
													</div>
													<div className='px-[5px] py-[5px] bg-white rounded-[8px]'>
														<SearchOutlinedIcon />
													</div>
												</div>
											</div>
											<h2 className='mt-[12px] mb-[6px] font-inter text-[20px] font-bold leading-[16px] text-[#3D3D3D]'>
												{obj?.title}
											</h2>

											{obj?.discount ? (
												<p className='text-[#46A358] font-bold font-inter text-[18px] leading-[16px]'>
													${obj?.discount_price}{' '}
													<span className=' line-through font-medium text-[16px] text-[#a5a5a5]'>
														${obj?.price}
													</span>
												</p>
											) : (
												<p>${obj?.price}</p>
											)}
										</div>
									)
							  )}
					</div>
				</CustomTabPanel>
				<CustomTabPanel value={value} index={1}>
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
									({
										title,
										price,
										discount,
										discount_price,
										main_image,
										_id,
									}) => (
										<div
											key={_id}
											className='lg:max-w-[258px] px-[4px] pt-[31px] bg-[#FBFBFB] group duration-[0.3s]'
										>
											<div className='photo max-w-[250px] h-[250px] mx-auto relative'>
												<img
													src={`${main_image}`}
													className='w-[187px] h-[187px] mx-auto'
													alt=''
												/>
												<div className='icons flex gap-[10px] justify-center absolute bottom-[5px] left-1/2 transform -translate-x-1/2 scale-100 duration-[0.3s]'>
													<div className='px-[5px] py-[5px] bg-white rounded-[8px]'>
														<ShoppingCartOutlinedIcon />
													</div>
													<div className='px-[5px] py-[5px] bg-white rounded-[8px]'>
														<FavoriteBorderOutlinedIcon />
													</div>
													<div className='px-[5px] py-[5px] bg-white rounded-[8px]'>
														<SearchOutlinedIcon />
													</div>
												</div>
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
				<CustomTabPanel value={value} index={2}>
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
									({
										title,
										price,
										discount,
										discount_price,
										main_image,
										_id,
									}) => (
										<div
											key={_id}
											className='lg:max-w-[258px] px-[4px] pt-[31px] bg-[#FBFBFB] group duration-[0.3s]'
										>
											<div className='photo max-w-[250px] h-[250px] mx-auto relative'>
												<img
													src={`${main_image}`}
													className='w-[187px] h-[187px] mx-auto'
													alt=''
												/>
												<div className='icons flex gap-[10px] justify-center absolute bottom-[5px] left-1/2 transform -translate-x-1/2  scale-100 duration-[0.3s]'>
													<div className='px-[5px] py-[5px] bg-white rounded-[8px]'>
														<ShoppingCartOutlinedIcon />
													</div>
													<div className='px-[5px] py-[5px] bg-white rounded-[8px]'>
														<FavoriteBorderOutlinedIcon />
													</div>
													<div className='px-[5px] py-[5px] bg-white rounded-[8px]'>
														<SearchOutlinedIcon />
													</div>
												</div>
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
			</Box>
		</div>
	)
}

export default Cards