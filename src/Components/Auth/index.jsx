import React, { useState } from 'react'
import { Modal, Tabs, Button } from 'antd'
import SignIN from './Signin'
import SignUp from './Signup'
import { useDispatch, useSelector } from 'react-redux'
import { closeModal } from '../../redux/reduxers/authSlice'

const MyModal = () => {
	const dispatch = useDispatch()
	const isOpen = useSelector(state => state.modal.isOpen)
	const [activeTab, setActiveTab] = useState('1')

	const handleTabChange = key => {
		setActiveTab(key)
	}

	const tabItems = [
		{
			label: (
				<span
					style={{
						fontWeight: 500,
						fontSize: '20px',
						lineHeight: '16px',
						color: activeTab === '1' ? '#46A358' : '#3d3d3d',
					}}
				>
					Login
				</span>
			),
			key: '1',
			children: <SignIN />,
		},
		{
			label: (
				<span  style={{
          fontWeight: 500,
          fontSize: '20px',
          lineHeight: '16px',
          color: activeTab === '2' ? '#46A358' : '#3d3d3d',
        }}>Register</span>
			),
			key: '2',
			children: <SignUp />,
		},
	]

	return (
		<div className='px-[20px]'>
			<Modal
				open={isOpen}
				onCancel={() => dispatch(closeModal())}
				footer={null}
     
			>
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<Tabs
						activeKey={activeTab}
						onChange={handleTabChange}
						items={tabItems}
						centered
            rootClassName="custom-tabs"
					/>
				</div>
			</Modal>
		</div>
	)
}

export default MyModal