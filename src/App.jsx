import { useEffect, useState } from 'react'
import {   createBrowserRouter,
  RouterProvider,
  Outlet, } from 'react-router-dom';

import Topnav from './components/Topnav/Topnav';
import Search from './components/Search/Search';
import Footer from './components/Footer/Footer';
import Single from './components/Single/Single';
import Loader from './components/Loader/Loader';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

import Profile from './pages/Profile/Profile';
import EditProfile from './pages/Profile/EditProfile';

import Cart from './components/Cart/Cart';

import { FaArrowUp } from 'react-icons/fa';
import SingleRecipe from './pages/SingleRecipe/SingleRecipe';
import LoginForm from './pages/Auth/LoginForm';
import RegisterForm from './pages/Auth/RegisterForm';
import { UserContext } from './UserContext';
import Shop from './pages/Shop/Shop';
import Blogs from './pages/Blogs/Blogs';
import {ShareSocial} from 'react-share-social' 
import SingleBlog from './pages/SingleBlog/SingleBlog';
import NotFound from './pages/NotFound/NotFound';


const Layout = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
  })}
  return (
    <>
      <Topnav />
      <Search />
      <Single />
      <Outlet />
      <ShareSocial url ={window.location.href} socialTypes={['facebook','twitter','reddit','linkedin']} title={'share this page'} />
      <Footer />
      <button className="btn-top" onClick={() => handleScroll()} >
        <FaArrowUp/>
      </button>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/shop",
        element: <Shop/>
      },
      {
        path: "/blogs",
        element: <Blogs/>
      },
      {
        path: "/blogs/:id",
        element: <SingleBlog />
      },
      {
        path: "/about-us",
        element: <About/>
      },
      {
        path: "/contact-us",
        element: <Contact />
      },
      {
        path: "/recipes/:id",
        element: <SingleRecipe />
      },
      {
        path: "/cart",
        element: <Cart />
      },
    ]
  },
  {
    path: "/login",
    element: <LoginForm />
  },
  {
    path: "/get-started",
    element: <RegisterForm/>
  },
  {
    path: "/profile/:username",
    element:<Profile />
  },
  
  {
        path: "/profile/:username/edit",
        element: <EditProfile/>
  },
  {
    path: "*",
    element: <NotFound/>
  },
])

function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    setTimeout(() =>{
      setLoading(!loading);
    }, 1500);
  }, []);
  
  return (
    <UserContext.Provider value={{user, setUser}} >
      {
        loading && <Loader />
      }
      {!loading && <RouterProvider router={router} />}
    </UserContext.Provider>
  )
}

export default App