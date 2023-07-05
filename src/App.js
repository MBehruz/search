import { useEffect, useState } from "react";
import { Users } from "./users";
import "./app.css";
import Table from "./Table";
import axios from "axios";

// function App() {
//   const [query, setQuery] = useState("");
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     const fetchUsers = async () => {
//       const res = await axios.get("http://localhost:5000");
//       setData(res.data);
//     };
//     fetchUsers();
//   }, []);

//   return (
//     <div className="app">
//       <input
//         type="text"
//         placeholder="Search..."
//         className="search"
//         onChange={(e) => setQuery(e.target.value)}
//       />
//       {<Table data={data} />}
//     </div>
//   );
// }
//////////////////////BASIC SEARCH

// function App() {
//   const [query, setQuery] = useState("");
//   return (
//     <div className="app">
//       <input
//         className="search"
//         placeholder="Search..."
//         onChange={(e) => setQuery(e.target.value.toLowerCase())}
//       />
//       <ul className="list">
//         {Users.filter((asd) =>
//           asd.first_name.toLowerCase().includes(query)
//         ).map((user) => (
//           <li className="listItem" key={user.id}>
//             {user.first_name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

///////////////////////SEARCH ON A DATATABLE

function App() {
  const [query, setQuery] = useState("");
  const keys = ["first_name", "last_name", "email", "gender"];
  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };
  return (
    <div className="app">
      <input
        className="search"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
      {<Table data={search(Users)} />}
    </div>
  );
}

////////////////////// API SEARCH

// function App() {
//   const [query, setQuery] = useState("");
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await axios.get(`http://localhost:5000?q=${query}`);
//       setData(res.data);
//     };
//     if (query.length === 0 || query.length > 2) fetchData();
//   }, [query]);

//   return (
//     <div className="app">
//         <input
//           className="search"
//           placeholder="Search..."
//           onChange={(e) => setQuery(e.target.value.toLowerCase())}
//         />
//       {<Table data={data} />}
//     </div>
//   );
// }

export default App;
