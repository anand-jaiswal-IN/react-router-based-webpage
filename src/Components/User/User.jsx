import React from "react";
import { useParams } from "react-router-dom";
function User() {
  const { userid } = useParams();
  const users = [
    { id: 1, name: "John Doe", age: 25, city: "New York" },
    { id: 2, name: "Jane Doe", age: 30, city: "Los Angeles" },
    { id: 3, name: "Bob Smith", age: 35, city: "Chicago" },
    { id: 4, name: "Alice Johnson", age: 20, city: "Washington" },
    { id: 5, name: "Robert Lee", age: 45, city: "Philadelphia" },
  ];
  return (
    <div className="py-10 px-40">
      {users.map((user) => {
        if (user.id === parseInt(userid)) {
          return (
            <>
            <h2 className="text-xl p-2 bg-slate-800 text-white ">User = {userid}</h2>
            <br />
            <div>
              <p> <b>Name : </b> {user.name}</p>
              <p> <b>Age : </b> {user.age}</p>
              <p> <b>City : </b> {user.city}</p>
            </div>
            </>
          );
        }
      })}
    </div>
  );
}

export default User;
