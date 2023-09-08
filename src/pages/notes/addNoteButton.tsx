import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { NotesPath } from "../../constant";
import { useNavigate } from "../../hook";

export default function AddNoteButton() {
  const navigate = useNavigate();

  const handleClickOpen = () => {
    navigate(`${NotesPath}/create`);
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
