import { useEffect, useState } from "react";
import { tempFetch } from "../api";

function FetchTesting() {
  const [users, setUsers] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    tempFetch()
      .then((data) => {
        console.log("Fetched data:", data); // ✅ Check if data is received
        setUsers(data);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError("Failed to load data.");
      });
  }, []);

  if (error) return <p>{error}</p>;
  if (!users) return <p>Loading...</p>; // ✅ Handle initial state

  return (
    <div>
      <p>TEMPTEMPTEMP</p>
      <p>{users.message}</p> {/* ✅ Display fetched data */}
    </div>
  );
}

export default FetchTesting;
