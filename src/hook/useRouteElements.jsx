import React from 'react'
import { useRoutes } from 'react-router-dom'
import HomeLayout from '/src/layouts/HomeLayout/HomeLayout'
import PostList from '/src/pages/Posts/PostList'

const useRouteElements = () => {
  const routeElements = useRoutes([
    {
      path: '/',
      element: (
        <HomeLayout>
          <PostList></PostList>
        </HomeLayout>
      )
    }
  ])
  return routeElements
}

export default useRouteElements
