import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';

const EXCHANGE_RATES = gql`
  {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

type Data = {
  rates: {
    currency: string,
    rate: string
  }[]
}

export default function ExchangeRates() {
  const {loading, error, data} = useQuery<Data>(EXCHANGE_RATES, {
    variables: {
      currency: "RMB"
    }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data
    ? <div>{
      data.rates.map(({currency, rate}) => (
        <div key={currency}>
          <p>
            {currency}: {rate}
          </p>
        </div>
      ))
    }</div> : null;
}
