import { Box } from "@mui/material";
import { useEffect } from "react";
import { remoteNotesSignal } from "../../store/remoteNote";

export default function RemoteNotes() {
  const remoteNotes = remoteNotesSignal.value;
  const len = remoteNotes.length

  useEffect(() => {
    async function fetchNotes() {
      const resp = await fetch("https://meditation-backend.deno.dev/notes");
      const notes = await resp.json();
      remoteNotesSignal.value = notes;
    }

    fetchNotes();
  }, []);

  return (
    <>
      <Box>
        <Box>
          {remoteNotes?.[len - 1]?.title}
        </Box>
        <Box>
          {remoteNotes?.[len - 1]?.content}
        </Box>
      </Box>
      <Box>
        <Box>
          {remoteNotes?.[len - 2]?.title}
        </Box>
        <Box>
          {remoteNotes?.[len - 2]?.content}
        </Box>
      </Box>
      <Box>
        <Box>
          {remoteNotes?.[len - 3]?.title}
        </Box>
        <Box>
          {remoteNotes?.[len - 3]?.content}
        </Box>
      </Box>
      <Box>
        <Box>
          {remoteNotes?.[len - 4]?.title}
        </Box>
        <Box>
          {remoteNotes?.[len - 4]?.content}
        </Box>
      </Box>
      <Box>
        <Box>
          {remoteNotes?.[len - 5]?.title}
        </Box>
        <Box>
          {remoteNotes?.[len - 5]?.content}
        </Box>
      </Box>
    </>
  );
}
