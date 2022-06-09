import React from "react";

function Github() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
//   const [error ]
}

useEffect(() => {
  getUsers(parameters);
}, [parameters]);

const getUsers = ({ Query = "masai", page, perpage }) => console.log(1);

setLoading(true);
// return axios({
//   url: "https://api.github.com/search/users",
//   params: {
//     q: query,
//     page: page,
//     per_page: perpage,
//   },
// });
