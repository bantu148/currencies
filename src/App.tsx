import React from "react";

interface Currency {
  name: string;
  symbol: string;
}

interface Currencies {
  [key: string]: Currency;
}

const apiUrl = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json';

function App() {
  const [searchTerm, setSearchTerm] = React.useState<string>('');
  const [currencies, setCurrencies] = React.useState<Currencies>({});

  React.useEffect(() => {
    fetch(apiUrl)
      .then(response => response.json())
      .then((data: Currencies) => {
        const filteredCurrencies:any = {};
        Object.keys(data).forEach((currencyCode) => {
          const currency = currencyCode;
          if (currency.toLowerCase().includes(searchTerm.toLowerCase())) {
            filteredCurrencies[currencyCode] = currency;
          }
        });
        setCurrencies(filteredCurrencies);
        console.log(Object.keys(currencies), "asdasd");
      })
      .catch(error => console.error(error));
  }, [searchTerm]);

  return (
    <div>
      <h1>Currencies</h1>
      <input type="text" placeholder="Search currencies" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <ul>
        {Object.keys(currencies).map((currencyCode) => (
          <li key={currencyCode}>
            {currencies[currencyCode]}
          </li>
        ))}
      </ul>
    </div>
  );  
}

export default App;
