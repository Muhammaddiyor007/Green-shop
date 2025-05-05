import { Form, Input, Radio, Select } from 'antd'
import axios from 'axios'
import React from 'react'
import { useSelector } from 'react-redux'

const { Option } = Select

const BillingAddress = () => {
	const cart = useSelector(state => state?.shopping.data)
	console.log(cart)

	const onFinish = async values => {
		const order = {
			shop_list: cart.map(item => ({
				shop_id: item._id,
				quantity: item.count,
			})),
			billing_address: {
				first_name: values.firstName,
				last_name: values.lastName,
				country: values.country,
				state: values.state,
				city: values.city,
				street: values.street,
				zip: values.zip,
				apartment: values.apartment,
				phone: values.phone,
				email: values.email,
			},
			extra_shop_info: values.notes || '',
			payment_method: values.payment,
		}

		try {
			const response = await axios.post(
				`https://green-shop-backend.onrender.com/api/order/make-order?access_token=6506e8bd6ec24be5de357927`,
				order
			)
			console.log('Order success', response?.data)
		} catch (err) {
			console.error('Order failed', err)
		}
	}

	return (
		<div className='p-6  bg-white'>
			<h2 className='text-2xl font-semibold mb-6'>Billing Address</h2>
			<Form layout='vertical' onFinish={onFinish}>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
					<Form.Item
						label='First name'
						name='firstName'
						rules={[
							{ required: true, message: 'Please input your first name!' },
						]}
					>
						<Input placeholder='Type your first name...' />
					</Form.Item>

					<Form.Item
						label='Last name'
						name='lastName'
						rules={[
							{ required: true, message: 'Please input your last name!' },
						]}
					>
						<Input placeholder='Type your last name...' />
					</Form.Item>

					<Form.Item
						label='Country / Region'
						name='country'
						rules={[{ required: true, message: 'Please select your country!' }]}
					>
						<Select placeholder='Select your country...'>
							<Option value='uz'>Uzbekistan</Option>
							<Option value='us'>United States</Option>
						</Select>
					</Form.Item>

					<Form.Item
						label='Town / City'
						name='city'
						rules={[{ required: true, message: 'Please select your town!' }]}
					>
						<Select placeholder='Select your town...'>
							<Option value='tashkent'>Tashkent</Option>
							<Option value='ny'>New York</Option>
						</Select>
					</Form.Item>

					<Form.Item
						label='Street Address'
						name='street'
						rules={[
							{ required: true, message: 'Please input street address!' },
						]}
					>
						<Input placeholder='House number and street name' />
					</Form.Item>

					<Form.Item label=' ' name='apartment'>
						<Input placeholder='Appartment, suite, unit, etc. (optional)' />
					</Form.Item>

					<Form.Item
						label='State'
						name='state'
						rules={[{ required: true, message: 'Please select a state!' }]}
					>
						<Select placeholder='Select a state...'>
							<Option value='tashkent'>Tashkent</Option>
							<Option value='andijan'>Andijan</Option>
						</Select>
					</Form.Item>

					<Form.Item label='Zip' name='zip'>
						<Input placeholder='Appartment, suite, unit, etc. (optional)' />
					</Form.Item>

					<Form.Item
						label='Email address'
						name='email'
						rules={[{ required: true, message: 'Please enter your email!' }]}
					>
						<Input placeholder='Type your email...' />
					</Form.Item>

					<Form.Item
						label='Phone Number'
						name='phone'
						rules={[
							{ required: true, message: 'Please input your phone number!' },
						]}
					>
						<Input addonBefore='+998' placeholder='Type your phone number...' />
					</Form.Item>

					<div className='w-full'>
						<Form.Item
							label={
								<span className='text-black font-semibold'>Payment Method</span>
							}
							name='payment'
							rules={[
								{ required: true, message: 'Please select a payment method!' },
							]}
						>
							<Radio.Group className='flex flex-col gap-3'>
								<Radio value='card'>
									<div className='border w-[300px] border-green-500 px-4 py-2 rounded-md flex items-center gap-4'>
										<img src='/paypal.svg' alt='PayPal' className='h-5' />
										<img
											src='/mastercard.svg'
											alt='MasterCard'
											className='h-5'
										/>
										<img src='/visa.svg' alt='Visa' className='h-5' />
										<img
											src='/amex.svg'
											alt='American Express'
											className='h-5'
										/>
									</div>
								</Radio>
								<Radio value='bank'>
									<div className='border w-[300px] border-green-500 px-4 py-2 rounded-md '>
										Direct bank transfer
									</div>
								</Radio>
								<Radio value='cash'>
									<div className='border w-[300px] border-green-500 px-4 py-2 rounded-md'>
										Cash on delivery
									</div>
								</Radio>
							</Radio.Group>
						</Form.Item>

						<Form.Item label='Order notes (optional)' name='notes'>
							<Input.TextArea
								className='resize-none'
								style={{ resize: 'none', width: '100%' }}
								rows={6}
								placeholder='Your order notes, thoughts, feedback, etc...'
							/>
						</Form.Item>
					</div>
				</div>
				<button className='w-full bg-[#46A358] rounded-[6px] py-[10px] text-white font-bold text-[16px]'>
					Place Order
				</button>
			</Form>
		</div>
	)
}

export default BillingAddress