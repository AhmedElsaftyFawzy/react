import { Link, useLoaderData, useLocation } from "react-router-dom"
import { getVans } from "../Api"

export function loader({ params }) {
  return getVans(params.id)
}
const VansDetail = () => {
  // const param = useParams()
  const location = useLocation()
  const search = location.state?.search || ""
  // const [van, setVan] = useState(null)
  // useEffect(() => {
  //   fetch(`/api/vans/${param.id}`).then((res) =>
  //     res.json().then((data) => setVan(data.vans))
  //   )
  // }, [param.id])
  // console.log(van)
  const van = useLoaderData()
  return (
    <div className="van-detail">
      <div className="van-detail-container">
        <Link to={`..?${search}`} relative="path" className="back-button">
          &larr; <span>{`Back to all ${search.slice(5)} vans`}</span>
        </Link>
        {van ? (
          <div className="van-detail">
            <img alt={van.name} src={van.imageUrl} />
            <i className={`van-type ${van.type} selected`}>{van.type}</i>
            <h2>{van.name}</h2>
            <p className="van-price">
              <span>${van.price}</span>/day
            </p>
            <p>{van.description}</p>
            <button className="link-button">Rent this van</button>
          </div>
        ) : (
          <h2 className="loading">Loading...</h2>
        )}
      </div>
    </div>
  )
}

export default VansDetail
