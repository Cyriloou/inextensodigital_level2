import React, { useState } from "react";
import "./App.css";
import UserCard from "./UserCard";

const INITIAL_DATA = { items: [], total_count: undefined };

function App() {
  const [name, setName] = useState("");
  const [data, setData] = useState(INITIAL_DATA);
  const [err, setErr] = useState();

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.github.com/search/users?q=${name}`
      );
      const data = await response.json();
      setData(data);
      setErr();
    } catch (err) {
      setErr(err);
      setData(INITIAL_DATA);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await fetchData();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          User:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <div>
        {err ? (
          // if error, display error message
          <div className="message-erreur">{err.message}</div>
        ) : "incomplete_results" in data ? (
          // if we have results
          data.total_count ? (
            // if we have results
            <>
              <div>We found {data.total_count} results</div>
              {data.items.map((el, index) => (
                <UserCard key={index} user={el} />
              ))}
            </>
          ) : (
            // if we have results but nothing to display
            <div>Sorry, we ain't found anything</div>
          )
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}

export default App;
