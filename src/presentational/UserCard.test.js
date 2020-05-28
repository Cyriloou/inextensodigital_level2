import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import UserCard from "./UserCard";

const USER = {
  login: "tdfs",
  id: 61582,
  node_id: "MDQ6VXNlcjYxNTgy",
  avatar_url: "https://avatars0.githubusercontent.com/u/61582?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/tdfs",
  html_url: "https://github.com/tdfs",
  followers_url: "https://api.github.com/users/tdfs/followers",
  following_url: "https://api.github.com/users/tdfs/following{/other_user}",
  gists_url: "https://api.github.com/users/tdfs/gists{/gist_id}",
  starred_url: "https://api.github.com/users/tdfs/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/tdfs/subscriptions",
  organizations_url: "https://api.github.com/users/tdfs/orgs",
  repos_url: "https://api.github.com/users/tdfs/repos",
  events_url: "https://api.github.com/users/tdfs/events{/privacy}",
  received_events_url: "https://api.github.com/users/tdfs/received_events",
  type: "User",
  site_admin: false,
  score: 1.0,
};

describe.only("UserCard", () => {
  test("should watch input correctly", () => {
    const { getByTestId } = render(<UserCard user={USER} />);
    expect(getByTestId("login").innerHTML).toEqual(`login : ${USER.login}`);
    expect(getByTestId("id").innerHTML).toEqual(`id : ${USER.id}`);
    expect(getByTestId("score").innerHTML).toEqual(`score : ${USER.score}`);
    expect(getByTestId("admin").innerHTML).toEqual(
      `admin : ${USER.site_admin ? "yes" : "no"}`
    );
    // expect(getByTestId("profile").innerHTML).toHaveTextContent(USER.html_url);
  });
});
