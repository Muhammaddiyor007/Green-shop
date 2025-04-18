import Skeleton from '@mui/material/Skeleton'
import React from 'react'
import { useSelector } from 'react-redux'
import useGetApi from '../../../../../hooks/Get'

const Cotegory = () => {
	const defolArr = useSelector(state => state.defoldArr.defoldArr)
	const { data, isLoading} = useGetApi('/api/flower/category')


	return (
		<div className=''>
			<div className='title text-[#3D3D3D] font-bold text-[18px] leading-[16px]'>
				Categories
			</div>
			<div className='pl-[12px]  mt-[14px]'>
				{isLoading ? (
					<div>
						{defolArr.map(element => (
							<Skeleton key={element} sx={{ height: '40px', margin: 0 }} />
						))}
					</div>
				) : (
					data?.data?.map(({ title, count, _id }) => {
						return (
							<div
								className='flex justify-between group font-bold duration-[0.3s] w-full text-[15px] leading-[40px]'
								key={_id}
							>
								<p className='group-hover:text-[#46A358] duration-[0.3s]'>
									{title}
								</p>
								<p className='group-hover:text-[#46A358] duration-[0.3s]'>
									({count})
								</p>
							</div>
						)
					})
				)}
			</div>
		</div>
	)
}

export default Cotegory