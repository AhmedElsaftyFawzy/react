import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"
import Home from "./components/Home"
import Vans, { loader as vansLoader } from "./components/Vans"
import About from "./components/About"
import "./App.css"
import "./server"
import VansDetail, { loader as vansDetailLoader } from "./components/VansDetail"
import Layout from "./components/Layout"
import DashBoard from "./components/Host/DashBoard"
import Income from "./components/Host/Income"
import Reviews from "./components/Host/Reviews"
import HostLayout from "./components/Host/HostLayout"
import HostVans, { loader as hostVansLoader } from "./components/Host/HostVans"
import HostVansDetails from "./components/Host/HostVansDetails"
import HostVanInfo from "./components/Host/HostVanInfo"
import HostVanPrice from "./components/Host/HostVanPrice"
import HostVanPhoto from "./components/Host/HostVanPhoto"
import NotFound from "./components/NotFound"
import Error from "./components/Error"
import Login, { action } from "./components/Login"
import AuthRequired from "./AuthRequired"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />} errorElement={<Error />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<Login />} action={action} />
      <Route path="vans" element={<Vans />} loader={vansLoader} />
      <Route
        path="vans/:id"
        element={<VansDetail />}
        loader={vansDetailLoader}
      />
      <Route element={<AuthRequired />}>
        <Route path="host" element={<HostLayout />}>
          <Route
            index
            element={
              <DashBoard
                loader={async () => {
                  return null
                }}
              />
            }
          />
          <Route
            path="income"
            element={<Income />}
            loader={async () => {
              return null
            }}
          />
          <Route path="vans" element={<HostVans />} loader={hostVansLoader} />
          <Route path="vans/:id" element={<HostVansDetails />}>
            <Route
              index
              element={<HostVanInfo />}
              loader={async () => {
                return null
              }}
            />
            <Route
              path="pricing"
              element={
                <HostVanPrice
                  loader={async () => {
                    return null
                  }}
                />
              }
            />
            <Route
              path="photos"
              element={
                <HostVanPhoto
                  loader={async () => {
                    return null
                  }}
                />
              }
            />
          </Route>
          <Route
            path="reviews"
            element={
              <Reviews
                loader={async () => {
                  return null
                }}
              />
            }
          />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
