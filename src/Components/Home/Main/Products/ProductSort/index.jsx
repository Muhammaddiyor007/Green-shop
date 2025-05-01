import {
	Box,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	Tab,
	Tabs,
} from '@mui/material'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import {
	selectTabValue,
	setTabValue,
} from '../../../../../redux/reduxers/tabsSlice'

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

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	}
}

const ProductSort = () => {

	const value = useSelector(selectTabValue)
	const dispatch = useDispatch()
	const [searchParams, setSearchParams] = useSearchParams()
	const sort = searchParams.get('sort') || 'default-sorting'
	const typeSearch = searchParams.get('type') || 'all-plants'


	const renderTab = (value) => {
    switch (value) {
      case 0:
        return <div>all-plants</div>;
      case 1:
        return <div>new-arrivals</div>;
      case 2:
        return <div>sale</div>;
    }
  };
	const typeValue = renderTab(value)
	const type = typeValue.props.children
	useEffect(()=>{
		searchParams.set('type' , type )
		setSearchParams(searchParams)
	},[type])
 
	

	const setSort = (value) =>{
		searchParams.set('sort' , value )
		setSearchParams(searchParams)
	}
	
	const handleChange = (event, newValue) => {
		dispatch(setTabValue(newValue || 0))	
	}

	return (
		<div className='w-full min-w-[100%] flex justify-between'>
			<Box sx={{ width: '100%' }}>
				<div className='w-full flex items-center justify-between'>
					<Box>
						<Tabs
							value={value}
							onChange={handleChange}
							aria-label='basic tabs example'
						>
							<Tab label='All Plants' {...a11yProps(0)} />
							<Tab label='New Arrivvals' {...a11yProps(1)} />
							<Tab label='Sale' {...a11yProps(2)} />
						</Tabs>
					</Box>
					<div className='w-120px lg:block hidden'>
						<FormControl fullWidth>
							<InputLabel id='demo-simple-select-label'>Sort by:</InputLabel>
							<Select
								labelId='demo-simple-select-label'
								id='demo-simple-select'
								value={sort}
								label='Sort by:'
								onChange={e => {
									setSort(e.target.value)
								}}
								className='min-w-[160px] outline-none'
							>
								<MenuItem value={'default-sorting'}>Default sorting</MenuItem>
								<MenuItem value={'the-cheapest'}>The Cheapest</MenuItem>
								<MenuItem value={'most-expensive'}>Most Expensive</MenuItem>
							</Select>
						</FormControl>
					</div>
				</div>
			</Box>
		</div>
	)
}

export default ProductSort