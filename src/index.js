import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';
import client from './App/apollo';
import CountryListApp from './App/component';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainOutlet from './App/mainOutlet';
import CountryDetails from './App/countryDetails'

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
const NotFound = () => <h1>Page Not Found</h1>
root.render(
    <ApolloProvider client={client}>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainOutlet />}>
                    <Route index element={<CountryListApp />} />
                    <Route path='/country/:ccode' element={<CountryDetails/>} />
                    <Route path='*' element={<NotFound />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </ApolloProvider>
);