import Skeleton from '@mui/material/Skeleton'
import React from 'react'
import { useSelector } from 'react-redux'
import useGetApi from '../../../../../hooks/Get'
import { useSearchParams } from 'react-router-dom'

const Cotegory = () => {
	const defolArr = useSelector(state => state.defoldArr.defoldArr)
	const { data, isLoading} = useGetApi('/api/flower/category')
	const [searchParams , setSearchParams] = useSearchParams()
	const cotegory = searchParams.get('cotegory') || 'house-plants'

	const changCategory = (cotegory)=>{
		searchParams.set('cotegory' , cotegory)
		setSearchParams(searchParams)
	}

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
					data?.data?.map(({ title, count, _id , route_path }) => {
						return (
							<div
								className={`${route_path === cotegory ? "text-[#46A358]" : ""} flex justify-between group font-bold duration-[0.3s] w-full text-[15px] leading-[40px]`}
								key={_id}
							>
								<p className='group-hover:text-[#46A358] duration-[0.3s]' onClick={()=>{changCategory(route_path)}}>
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