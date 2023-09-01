import { NavLink } from "react-router-dom";
import { HomePath } from "../constant";

export default function ErrorPage () {
  return (
    <>
      <header>Sorry, there occured an error.</header>
      <NavLink to={HomePath}>Go to home page</NavLink>
    </>
  )
}