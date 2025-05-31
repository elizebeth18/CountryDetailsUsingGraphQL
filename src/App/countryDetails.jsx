import { useQuery } from "@apollo/client";
import { useParams } from 'react-router-dom';
import { COUNTRY_DETAIL } from './graphql'
import { validate } from 'graphql';
import { Link } from 'react-router-dom';

const CountryDetails = () => {

    let { ccode } = useParams();
    const { loading, error, data } = useQuery(COUNTRY_DETAIL, { variables: { code: ccode } });
    if (loading) <p className="badge rounded-pill bg-success">Loading....</p>
    if (error) <p className="badge rounded-pill bg-danger">{error}</p>

    console.log(data);
    return (
        <>
            <div className="card mb-3">
                <h3 className="card-header text-center text-info

"> {data?.country?.name}</h3>
                <div className="card-body">
                    <h5 className="card-title">Capital: {data?.country?.capital}</h5>
                {/* </div>

                <div className="card-body"> */}
                    <p className="card-text">Native Name: {data?.country?.native}</p>
                    <p className="card-text">Emoji: {data?.country?.emoji}</p>
                    <p className="card-text">Currency: {data?.country?.currency}</p>
                    <p className="card-text">Languages Spoken:</p>
                
                <ul >
                    {data?.country?.languages.map((value, index) => {
                        return <li className="list-group-item">{value.name}</li>
                    })}
                </ul></div>
                <div class="card-body">
                    <Link className="btn btn-info" to='/'>Back</Link>
                </div>
            </div>
        </>
    )
}

export default CountryDetails;