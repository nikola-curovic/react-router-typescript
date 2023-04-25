import { useState, useEffect } from "react";
import { IUser, IUserData, SortDirection } from "../types";

const api = "https://jsonplaceholder.typicode.com/users";

const Home = () => {
  const [userList, setUserList] = useState<IUserData[]>([]);
  const [sort, setSort] = useState<SortDirection>("asc");

  const fetchUsers = async () => {
    const result = await fetch(api);
    let users: IUser[] = await result.json();

    let userList: IUserData[] = [];
    users.forEach((user: IUser) => {
      userList.push({
        id: user.id,
        username: user.username,
        city: user.address.city,
        company: user.company.name,
        email: user.email,
      });
    });

    const localUsers = localStorage.getItem("users");
    if (localUsers) {
      const localUserList = JSON.parse(localUsers);
      console.log(localUserList);
      userList = userList.concat(localUserList);
    }

    setUserList(sortList(userList, "asc"));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const sortUserByName = () => {
    setUserList(sortList(userList, sort));

    if (sort === "asc") {
      setSort("desc");
    } else {
      setSort("asc");
    }
  };

  const sortList = (data: IUserData[], sort: SortDirection) => {
    return data.sort((first: IUserData, second: IUserData) =>
      sort === "asc"
        ? first.username.localeCompare(second.username)
        : second.username.localeCompare(first.username)
    );
  };

  return (
    <>
      <div className="table-container">
        <h1>User List</h1>
        <table>
          <thead>
            <tr>
              <th onClick={() => sortUserByName()}>Name</th>
              <th>Email</th>
              <th>City</th>
              <th>Company</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user: IUserData) => (
              <tr key={user.id}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.city}</td>
                <td>{user.company}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
