import { Box, Paper } from "@mui/material";
import { NoteProps } from "../../db";
import { purple } from "@mui/material/colors";
import { useEffect, useRef } from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { deley } from "../../utils";

export function NoteListItem({
  note,
  onDeleteNote,
}: { note: NoteProps, onDeleteNote?: (note: NoteProps) => void }) {
  const { title, content, created_at } = note;
  const rootRef = useRef<HTMLElement>();
  const childRef = useRef<HTMLElement>();
  const startPointX = useRef<number | null>(null);

  useEffect(() => {
    const root = rootRef.current as HTMLElement;
    const child = childRef.current as HTMLElement;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(async (entry) => {
        const ratio = entry.intersectionRatio;
        child.style.opacity = `${ratio < 0.5 ? 0.5 : ratio}`;
        if (ratio > 0.9) {
          await deley(180);
          onDeleteNote?.(note);
        }
      });
    }, {
      root: root,
      threshold: [0, 0.2, 0.4, 0.6, 0.8, 0.9],
    });
    observer.observe(child);

    return () => {
      observer.unobserve(child)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      onPointerDown={(e) => {
        startPointX.current = e.clientX;
      }}
      onPointerMove={(e) => {
        if (startPointX.current === null) return;
        const offset = startPointX.current - e.clientX;
        startPointX.current = e.clientX;

        (rootRef.current as Element).scrollBy({
          left: offset,
        });
      }}
      onPointerUp={() => {
        startPointX.current = null;
      }}
    >
      <Box
        ref={rootRef}
        sx={{
          display: "flex",
          alignItems: 'center',
          gap: "0.5rem",
          overflowX: "hidden",
          padding: "0.5rem",
          touchAction: "none",
        }}
      >
        <Paper
          sx={{
            padding: "0.5rem",
            flex: "0 0 100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              fontSize: "0.8rem",
            }}
          >
            <Box
              sx={{
                flex: "1 1 0",
                color: purple[400],
              }}
            >
              {title}
            </Box>
            <Box
              sx={{
                fontWeight: 300,
              }}
            >
              {created_at.toLocaleString()}
            </Box>
          </Box>

          <Box
            sx={{
              overflowWrap: "anywhere",
            }}
          >
            {content}
          </Box>
        </Paper>
        <Box
          sx={{
            transition: "opacity .15s ease",

          }}
          ref={childRef}
        >
          <DeleteForeverIcon fontSize="large" />
        </Box>
      </Box>
    </div>
  );
}
