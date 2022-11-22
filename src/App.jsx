import './App.css'
import React, { useEffect } from 'react'
import useRouteElements from './hook/useRouteElements'
import { useDispatch, useSelector } from 'react-redux'
import { getPost, setPost } from './reduxToolkit/post.slice'

function App() {
  const routeElements = useRouteElements()
  return <div>{routeElements}</div>
}

export default App
