'use client'

import {useEffect, useState} from 'react'
import {useRouter, useSearchParams} from 'next/navigation'

import Profile from '@components/Profile'

const MyProfile = ({params}) => {
  const [myPosts, setMyPosts] = useState([])
  const searchParams = useSearchParams()
  const uname = searchParams.get('name')

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${params?.id}/posts`)
      const data = await response.json()

      setMyPosts(data)
    }
    if (params?.id) fetchPosts()
  }, [params.id])

  return (
    <Profile
      name={uname}
      desc={`Welcome to ${uname}'s personalized profile page. Explore ${uname}'s exceptional prompts and be inspired by the power of their imagination`}
      data={myPosts}
    />
  )
}

export default MyProfile
