import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const NotFoundPage = () =>{
	const router = useRouter()
	useEffect(()=>{
		router.push('/')
	},[])
    
}
export default NotFoundPage