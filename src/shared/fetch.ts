import { API_URL } from "./const"


export const getData = async () => {
	const res = await fetch(API_URL)
	return res.json()
} 