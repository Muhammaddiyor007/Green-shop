import { UploadOutlined } from '@ant-design/icons'
import { Button, Form, Input, Upload } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUserInfo } from '../../../redux/reduxers/selectUserInfo'

const Profil = () => {
	const onFinish = (values) => {
		console.log('Обновлённые данные:', values)
	}
	const { name , surname , email} = useSelector(selectUserInfo)


	return (
		<div className='w-full px-[16px]'>
			<div >
			<h2 className='text-3xl font-semibold mb-8'>Personal Information</h2>
				<Form layout='vertical' onFinish={onFinish} style={{ width: '100%' }}>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
						<Form.Item
							label='First name'
							name='name'
							
							rules={[{ required: true, message: 'Please enter your first name' }]}
						>
							<Input placeholder='Your first name...' defaultValue={name} className='h-[40px]' />
						</Form.Item>

						<Form.Item
							label='Last name'
							name='surname'
							rules={[{ required: true, message: 'Please enter your last name' }]}
						>
							<Input placeholder='Your last name...' defaultValue={surname} className='h-[40px]' />
						</Form.Item>

						<Form.Item
							label='Email address'
							name='email'
							rules={[
								{ required: true, message: 'Please enter your email' },
								{ type: 'email', message: 'Invalid email address' },
							]}
						>
							<Input placeholder='you@example.com' defaultValue={email} className='h-[40px]' />
						</Form.Item>

						<Form.Item
							label='Phone Number'
							name='phone'
							rules={[{ required: true, message: 'Please enter your phone number' }]}
						>
							<Input addonBefore='+998' placeholder='Your phone number...' className='h-[40px]' />
						</Form.Item>

						<Form.Item
							label='Username'
							name='username'
							rules={[{ required: true, message: 'Please enter your username'  }] }
						>
							<Input placeholder='Your username...' className='h-[40px]' />
						</Form.Item>

						<Form.Item label='Profile photo' name='photo' >
							<Upload>
								<Button icon={<UploadOutlined />} className='h-[40px]'>Upload</Button>
							</Upload>
						</Form.Item>
					</div>

					<Form.Item className='mt-6'>
						<Button
							type='primary'
							htmlType='submit'
							className='bg-green-600 hover:bg-green-700 text-white h-[40px]'
						>
							Save changes
						</Button>
					</Form.Item>
				</Form>
			</div>
		</div>
	)
}

export default Profil