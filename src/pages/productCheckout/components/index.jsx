import React from 'react'
import BillingAddress from './BillingAddress'
import YourOrder from './YourOrder'

const ProductCheckoutComponents = () => {
	return (
		<div>
			
			<div className="md:flex ">
				<div className="">
				<BillingAddress/>
				</div>
				<div className="">
					<YourOrder/>
				</div>
			</div>
			
		</div>
	)
}

export default ProductCheckoutComponents