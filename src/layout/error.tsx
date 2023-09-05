import { useNavigate } from "react-router-dom";
import {Button} from '@mui/material';
import { HomePath } from "../constant";
import { startTransition } from "react";

export default function ErrorPage () {
  const navigate = useNavigate();
  const goHome = () => {
    startTransition(() => {
      navigate(HomePath);
    })
  }

  return (
    <>
      <header>Sorry, there occured an error.</header>
      <Button onClick={goHome}>Go to home page</Button>
    </>
  )
}