import {
  Await,
  defer,
  Link,
  useLoaderData,
  useSearchParams,
} from "react-router-dom"
import { getVans } from "../Api"
import React from "react"

export function loader() {
  return defer({ vans: getVans() })
}

const Vans = () => {
  const [param, setParam] = useSearchParams()
  const typeFilter = param.get("type")

  // const [vans, setVans] = useState([])
  // const [Loading, setLoading] = useState(false)
  // const [error, setError] = useState(null)
  const data = useLoaderData()

  // useEffect(() => {
  //   async function loadVans() {
  //     setLoading(true)
  //     try {
  //       const data = await getVans()
  //       setVans(data)
  //     } catch (err) {
  //       setError(err)
  //     } finally {
  //       setLoading(false)
  //     }
  //   }
  //   loadVans()
  // }, [])

  // if (Loading) {
  //   return <h1 className="loading">Loading....</h1>
  // }
  // if (error) {
  //   return <h1>{error.massage}</h1>
  // }
  return (
    <>
      <React.Suspense fallback={<h1 className="loading">Loading....</h1>}>
        <Await resolve={data.vans}>
          {(vans) => {
            const vansFiltered = typeFilter
              ? vans.filter((van) => van.type === typeFilter)
              : vans
            return (
              <>
                <div className="van-list-filter-buttons">
                  <button onClick={() => setParam({ type: "simple" })}>
                    Simple
                  </button>
                  <button onClick={() => setParam("type=luxury")}>
                    Luxury
                  </button>
                  <button onClick={() => setParam("?type=rugged")}>
                    Rugged
                  </button>
                  {typeFilter && (
                    <button onClick={() => setParam({})}>Clear</button>
                  )}
                </div>
                <div className="van-container">
                  {vansFiltered.map((item) => (
                    <Link to={item.id} state={{ search: param.toString() }}>
                      <div key={item.id} className="van-title">
                        <img src={item.imageUrl} alt="" />
                        <div className="van-info">
                          <h3>{item.name}</h3>
                          <p>
                            {item.price}
                            <span>/day</span>
                          </p>
                        </div>
                        <i className={`van-type ${item.type} selected`}>
                          {item.type}
                        </i>
                      </div>
                    </Link>
                  ))}
                </div>
              </>
            )
          }}
        </Await>
      </React.Suspense>
    </>
  )
}

export default Vans
