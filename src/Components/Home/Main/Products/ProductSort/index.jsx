import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Box, FormControl, InputLabel, MenuItem, Select, Tab, Tabs } from '@mui/material';
import { setTabValue, selectTabValue } from '../../../../../redux/reduxers/tabsSlice';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

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
    );
}

CustomTabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const ProductSort = () => {
    const [sort, setSort] = useState("");
    const value = useSelector(selectTabValue); 
    const dispatch = useDispatch();

    const handleChange = (event, newValue) => {
        dispatch(setTabValue(newValue)); 
    };

    return (
        <div className='w-full min-w-[100%] flex justify-between'>
            <Box sx={{ width: '100%' }}>
                <div className='w-full flex items-center justify-between'>
                    <Box>
                        <Tabs
                            value={value} // Значение таба теперь берется из Redux Store
                            onChange={handleChange}
                            aria-label='basic tabs example'
                        >
                            <Tab label='Item One' {...a11yProps(0)} />
                            <Tab label='Item Two' {...a11yProps(1)} />
                            <Tab label='Item Three' {...a11yProps(2)} />
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
                                onChange={(e) => { setSort(e.target.value) }}
                                className='min-w-[160px] outline-none'
                            >
                                <MenuItem value={10}>Default sorting</MenuItem>
                                <MenuItem value={20}>The Cheapest</MenuItem>
                                <MenuItem value={30}>Most Expensive</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </div>
              
            </Box>
        </div>
    );
};

export default ProductSort;