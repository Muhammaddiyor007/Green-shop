import React from 'react'
import useGetApi from '../../../../../hooks/Get'
import { Skeleton } from '@mui/material'

const Discount = () => {
	const { data, isLoading } = useGetApi('/api/features/discount')

	return (
		<div className=''>
			{isLoading ? (
				<Skeleton
					variant='rectangular'	
					height={370}
				/>
			) : (
				<div className='min-h-[470px] w-full bg-gradient-to-b text-center from-[#46A3581A] to-[#46A35808] px-[22px] py-[18px]'>
					<h2 className='font-inter text-[40px] leading-[55px] text-[#46A358] '>
						{data?.data?.title}
					</h2>
					<p className='font-bold text-[23px] text-center mb-[15px] leading-[16px] mt-[12px] font-[#3D3D3D]'>
						UP TO {data?.data?.discoount_up_to}% OFF
					</p>
					<img src={`${data?.data?.poster_image_url}`} alt='img' />
				</div>
			)}
		</div>
	)
}

export default Discount