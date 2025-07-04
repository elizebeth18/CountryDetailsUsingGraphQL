import { useQuery } from "@apollo/client";
import { LIST_COUNTRIES } from "./graphql";
import { Link } from "react-router-dom";

const App = () => {
    const { loading, error, data } = useQuery(LIST_COUNTRIES);
    if (loading) <p className="badge rounded-pill bg-success">Loading....</p>
    if (error) <p className="badge rounded-pill bg-danger">{error}</p>

    return (
        <>
            <center>
                <h3>List of Countries using Apollo GraphQl</h3>
            </center>

            {data && data.countries.map((value, index) => {
                return (
                    <div className="card card-body mb-3">
                        <div className="row">
                            <div className="col-md-9">
                                <h4>
                                    {value.name}
                                </h4>
                                <span className={index % 2 === 0 ? 'text-success' : 'text-danger'}>
                                    Capital : {value.capital}
                                </span>

                            </div>
                            <div className="col-md-3">
                                <Link className="btn btn-info" to={`/country/${value.code}`}>Details</Link>
                            </div>
                        </div>
                    </div>)
            })}

        </>
    )
}

export default App;