import { defer } from "react-router-dom";
import apiRequest from "./apiRequest";

export const singlePageLoader = async ({ request, params }) => {
  const res = await apiRequest("/posts/" + params.id);
  return res.data;
};

export const listPageLoader = async ({ request, params }) => {
  const query = request.url.split("?")[1];
  const postResponse = await apiRequest("/posts?" + query);
  return defer({
    postResponse: postResponse,
  });
};

export const profilePageLoader = async () => {
  const postResponse = await apiRequest("/users/profilePosts");
  return defer({
    postResponse: postResponse,
  });
};
