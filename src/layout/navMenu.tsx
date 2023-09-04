import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import { HomePath, NotesPath, SettingsPath } from "../constant";
import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useIntl } from "react-intl";

enum Path {
  home = HomePath,
  notes = NotesPath,
  settings = SettingsPath,
}

export default function NavMenu() {
  const location = useLocation();
  const [path, setPath] = useState<Path>(location.pathname as Path);
  const navigate = useNavigate();
  const intl = useIntl();

  return (
    <Box
      sx={{
        padding: '1rem 1rem 0',
        blockSize: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          flex: '1 1 0',
          overflowY: 'auto'
        }}
      >
        <Outlet />
      </Box>
      <BottomNavigation
        showLabels
        value={path}
        onChange={(_, newPath) => {
          setPath(newPath);
          navigate(newPath);
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }}
      >
        <BottomNavigationAction
          value={Path.home}
          label={intl.formatMessage({
            id: "home",
            defaultMessage: "home",
          })}
        />
        <BottomNavigationAction
          value={Path.notes}
          label={intl.formatMessage({
            id: "notes",
            defaultMessage: "notes",
          })}
        />
        <BottomNavigationAction
          value={Path.settings}
          label={intl.formatMessage({
            id: "settings",
            defaultMessage: "settings",
          })}
        />
      </BottomNavigation>
    </Box>
  );
}
