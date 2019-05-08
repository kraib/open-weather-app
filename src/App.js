import React, { useEffect, useState } from "react";
import "./App.css";
import Search from "./Search";
import { API_KEY } from "./config";
import Grid from "./Gird";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [searchTerm, setSearchTerm] = useState("London");
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=${API_KEY}`
    )
      .then(res => {
        setLoading(false);
        if (res.statusText === "OK") {
          return res.json();
        }
        return Promise.reject();
      })
      .then(function(myJson) {
        setError(false);
        setData(myJson.weather);
      })
      .catch(error => {
        setError(true);
        setData([]);
        return Promise.reject();
      });
  }, [loading]);
  return (
    <div className="App">
      <Search onChange={setSearchTerm} onSubmit={() => setLoading(true)} />
      {loading && <span>Loading....</span>}
      {error && <span>An error occurred</span>}
      <Grid
        items={data}
        onItemRemove={id =>
          setData(items => items.filter(item => item.id !== id))
        }
      />
    </div>
  );
}

export default App;
