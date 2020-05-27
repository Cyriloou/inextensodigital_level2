import React from "react";
import "./UserCard.css";
import PropTypes from "prop-types";

function UserCard({ user }) {
  const { avatar_url, login, id, html_url, score, site_admin } = user;
  return (
    <div className="grid-container">
      <div className="grid-item avatar">
        <img src={avatar_url} alt="avatar" />
      </div>
      <div className="grid-item decription">
        <p>login : {login}</p>
        <p>id : {id}</p>
        <p>
          <a href={html_url} target="_blank" rel="noopener noreferrer">
            profile
          </a>
        </p>
        <p>score : {score}</p>
        <p>admin : {site_admin ? "yes" : "no"}</p>
      </div>
    </div>
  );
}

UserCard.propTypes = {
  user: PropTypes.shape({
    avatar_url: PropTypes.string,
    login: PropTypes.string,
    id: PropTypes.number,
    html_url: PropTypes.string,
    score: PropTypes.number,
    site_admin: PropTypes.bool,
  }),
};

export default UserCard;
