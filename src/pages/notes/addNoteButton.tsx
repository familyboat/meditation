import {
  Fab,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import { NotesPath } from "../../constant";
import { startTransition } from "react";

export default function AddNoteButton() {
  const navigate = useNavigate();

  const handleClickOpen = () => {
    startTransition(() => {
      navigate(`${NotesPath}/create`)
    })
  };

  return (
    <>
      <Fab
        size="small"
        color="primary"
        aria-label="add"
        sx={{
          position: "fixed",
          right: "1rem",
          bottom: "4rem",
        }}
        onClick={handleClickOpen}
      >
        <AddIcon />
      </Fab>
    </>
  );
}
