// import { useState, useEffect } from "react";
// import logements from "../logements.json";

// export function useFetch() {
//   const [state, setState] = useState({
//     items: [],
//     loading: true,
//   });

//   useEffect(function () {
//     (function () {
//       const response = fetch(logements);
//       const responseData = response.json();
//       if (response.ok) {
//         setState({
//           items: responseData,
//           loading: false,
//         });
//       } else {
//         alert(JSON.stringify(responseData));
//         setState((s) => ({ ...s, loading: false }));
//       }
//     })();
//   }, []);

//   return [state.loading, state.items];
// }

// // import React from "react";
// import { useState, useEffect } from "react";
// // import logements from "../logements.json";

// export function Data(url) {
//   const [data, setData] = useState({});

//   const [isLoading, setLoading] = useState(true);

//   useEffect(() => {
//     if (!url) return;

//     async function fetchData() {
//       const response = await fetch(url);

//       const data = await response.json();

//       setData(data);

//       setLoading(false);
//     }

//     setLoading(true);

//     fetchData();
//   }, [url]);

//   return { isLoading, data };
// }
