import React from "react";

function ProfileCard({ name, email, avatar }) {
  return (
    <div className="card">
      <img className="avatar" src={avatar} alt={name} />
      <h2 className="name">{name}</h2>
      <p className="email">{email}</p>
    </div>
  );
}

export default ProfileCard;
