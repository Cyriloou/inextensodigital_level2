import React, { useState } from "react";
import "./App.css";
import UserCard from "./presentational/UserCard";

const INITIAL_DATA = { items: [], total_count: undefined };

function App() {
  const [name, setName] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState(INITIAL_DATA);
  const [err, setErr] = useState();

  const getUsers = async () => {
    try {
      const response = await fetch(
        `https://api.github.com/search/users?q=${name}`
      );
      const data = await response.json();
      // clear error
      setErr();
      // add data
      setData(data);
    } catch (err) {
      // insert err to display error message
      setErr(err);
      // clear data to initial state
      setData(INITIAL_DATA);
    }
  };

  const handleSubmit = async (event) => {
    if (!name) setErr({ message: "This field is required" });
    setLoading(true);
    // Cancels the event if it is cancelable
    event.preventDefault();
    await getUsers();
    setLoading(false);
  };

  if (isLoading) return <div className="App">Loading...</div>;
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          User:
          <input
            type="text"
            name="queryName"
            value={name}
            onChange={(e) => setName(e.target.value)}
            data-testid="queryName"
          />
        </label>
        <input type="submit" value="Submit" data-testid="submit" />
      </form>
      <div data-testid="message">
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
          ""
        )}
      </div>
    </div>
  );
}

export default App;
