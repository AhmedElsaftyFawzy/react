import React from "react"
import { Link, useLoaderData } from "react-router-dom"
import { getHostVans } from "../../Api"

export function loader() {
  return getHostVans()
}
const HostVans = () => {
  // const [vans, setVans] = React.useState([])

  // React.useEffect(() => {
  //   fetch("/api/host/vans")
  //     .then((res) => res.json())
  //     .then((data) => setVans(data.vans))
  // }, [])
  const vans = useLoaderData()

  const hostVansEls = vans.map((van) => (
    <Link to={van.id} key={van.id} className="host-van-link-wrapper">
      <div className="host-van-single" key={van.id}>
        <img src={van.imageUrl} alt={`${van.name}`} />
        <div className="host-van-info">
          <h3>{van.name}</h3>
          <p>${van.price}/day</p>
        </div>
      </div>
    </Link>
  ))

  return (
    <section>
      <h1 className="host-vans-title">Your listed vans</h1>
      <div className="host-vans-list">
        <section>{hostVansEls}</section>
      </div>
    </section>
  )
}

export default HostVans
