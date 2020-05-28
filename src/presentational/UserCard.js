import React from "react";
import "./UserCard.css";
import PropTypes from "prop-types";

function UserCard({ user }) {
  // extract usefull info from props user
  const { avatar_url, login, id, html_url, score, site_admin } = user;
  // display message
  return (
    <div className="grid-container">
      <div className="grid-item avatar" data-testid="avatar">
        <img src={avatar_url} alt="avatar" />
      </div>
      <div className="grid-item decription">
        <p data-testid="login">login : {login}</p>
        <p data-testid="id">id : {id}</p>
        <p data-testid="profile">
          <a href={html_url} target="_blank" rel="noopener noreferrer">
            profile
          </a>
        </p>
        <p data-testid="score">score : {score}</p>
        <p data-testid="admin">admin : {site_admin ? "yes" : "no"}</p>
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
