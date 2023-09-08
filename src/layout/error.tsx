import { Button } from "@mui/material";
import { HomePath } from "../constant";
import { useNavigate } from "../hook";

export default function ErrorPage() {
  const goHome = useNavigate();

  return (
    <>
      <header>Sorry, there occured an error.</header>
      <Button onClick={() => goHome(HomePath)}>Go to home page</Button>
    </>
  );
}
