import React from 'react'
import Home from './Home'
import About from './pages/about/About'
import ScrollToTop from "./ScrollToTop"; 
import { createBrowserRouter ,RouterProvider} from 'react-router-dom'
import { BlogProvider } from './context/Context'
import Blogs from './pages/Blog/Blogs'
const App = () => {
  const router = createBrowserRouter([
    {
    path: '/',
    element: <>
      <ScrollToTop />{/* Ye component page change hone pe top pe le aayega */}
      <Home/>
      </>,
    },
    {
    path: '/about',
    element: <>
    <ScrollToTop />
    <About/>
    </>,
    },
    {
      path: '/blogs/:name',
      element: <div className='w-screen '>
          <ScrollToTop />
          <Blogs/>
      </div>
    }
])
  return (
    <div>
      <BlogProvider>           
        <RouterProvider router={router} />
      </BlogProvider>
    </div>
  )
}

export default App


