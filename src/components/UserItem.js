import React from "react";

function UserItem({ user, removeUser }) {
  const { id, thumbnail, firstName, lastName, averageScore, available } = user;
  return (
    <li>
      <button onClick={() => removeUser(id)} className="remove-user">
        x
      </button>
      <span>
        <img
          width={50}
          src={
            !thumbnail
              ? "https://cdn.pixabay.com/photo/2014/04/03/10/32/user-310807_1280.png"
              : thumbnail
          }
          alt="user"
        />
      </span>
      <span className="user-main-data">
        <div>{`${firstName} ${lastName}`}</div>
        <div>Avg.Score: {averageScore}</div>
      </span>
      <span className={available ? "available" : "taken"}>
        {available ? "Available" : "Taken"}
      </span>
    </li>
  );
}

export default UserItem;
