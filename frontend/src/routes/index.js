import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
import AboutUs from '../pages/AboutUs'
import Services from '../pages/Services'
import Testimonial from '../pages/Testimonial'
import Login from '../pages/Login'
import ContactUs from '../pages/ContactUs'
import Blog from "../pages/Blog"
import Booking from '../pages/Booking'
import Destination from '../pages/Destination'
import Packages from '../pages/Packages'
import Tour from '../pages/Tour'
import Gallery from '../pages/Gallery'
import Guides from '../pages/Guides'
import Signup from "../pages/Signup"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "about-us",
                element: <AboutUs />
            },
            {
                path: "signup",
                element: <Signup/>
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "contact",
                element: <ContactUs />
            },
            {
                path: "services",
                element: <Services />
            },
            {
                path: "testimonial",
                element: <Testimonial />
            },
            {
                path: "blog",
                element: <Blog />
            },
            {
                path: "booking",
                element: <Booking />
            },
            {
                path: "destination",
                element: <Destination />
            },
            {
                path: "packages",
                element: <Packages />
            },
            {
                path: "gallery",
                element: <Gallery />
            },
            {
                path: "tour",
                element: <Tour />
            },
            {
                path: "guide",
                element: <Guides />
            }

        ]
    }
])


export default router