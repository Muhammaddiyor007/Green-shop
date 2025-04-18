import { Box, Skeleton } from '@mui/material'
import React from 'react'

const Card = () => {
	return (
		<div>



			<Box sx={{ pt: 0.5 }} width={"258px"}>
					<Skeleton variant="rectangular" width={"100%"} height={300} />
					<Skeleton width={"100%"} />
					<Skeleton width="60%" />
      </Box>
		</div>
	)
}

export default Card