import React from 'react'
import ProfilNav from '../../Components/Profile/index'
import { Outlet } from 'react-router-dom'

const UserPofil = () => {
	return <div className='mt-[61px] mb-[61px]'>
		<div className="flex gap-[28px]">
				<ProfilNav/>
				<Outlet/>
		</div>
	</div>
}

export default UserPofil