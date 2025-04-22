import { useQuery } from '@tanstack/react-query'
import apiAxios from '../api/api.jsx'

const usePostData = url => {

	const postData = async newData => {
		const respons = await apiAxios.post(
			`${url}?access_token=6506e8bd6ec24be5de357927`,
			newData
		)

		localStorage.setItem(
			'accessToken',
			JSON.stringify(respons.data.accessToken)
		)
		return respons.data
	}

	const { data, isLoading, error } = useQuery({
		queryKey: ['PostData', url],
		queryFn: postData,
	})

	return { data, isLoading, error }
}

export default usePostData