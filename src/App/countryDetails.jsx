import { useState } from 'react';
import { useQuery } from "@apollo/client";
import { useParams } from 'react-router-dom';
import { COUNTRY_DETAIL } from './graphql'
import { validate } from 'graphql';
import { Link } from 'react-router-dom';

const CountryDetails = () => {

    let { ccode } = useParams();
    const { loading, error, data } = useQuery(COUNTRY_DETAIL, { variables: { code: ccode } });
    if (loading) <p>Loading....</p>
    if (error) console.error(error)

    console.log(data);
    return (
        <>
            <div className="card text-white bg-primary mb-3" style={{ maxWidth: '120rem' }}>
                <div class="card-header">Details of {data?.country?.name}</div>
                <div class="card-body">
                    <h4 class="card-title">Name: {data?.country?.name}</h4>
                    <p class="card-text">Capital: {data?.country?.capital}</p>


                    <p class="card-text">Languages :</p>

                    <ul class="list-group list-group-flush">
                        {data?.country?.languages.map((value, index) => {
                            return <li class="list-group-item">{value.name}</li>
                        })}
                    </ul>
                </div>
                <div class="card-body">
                    <Link className='text-danger' to='/'>Back</Link>
                </div>
            </div>
            <div class="card mb-3">
                <h3 class="card-header">Details of {data?.country?.name}</h3>
                <div class="card-body">
                    <h5 class="card-title">Capital: {data?.country?.capital}</h5>
                </div>

                <div class="card-body">
                    <p class="card-text">Currency: {data?.country?.currency}</p>
                </div>
                <ul class="list-group list-group-flush bg-primary">
                    <li class="list-group-item">Cras justo odio</li>
                    <li class="list-group-item">Dapibus ac facilisis in</li>
                    <li class="list-group-item">Vestibulum at eros</li>
                </ul>
                <div class="card-footer text-muted">
                    2 days ago
                </div>
            </div>
        </>
    )
}

export default CountryDetails;