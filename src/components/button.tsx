import { styled, ButtonBase } from "@mui/material";

export const ButtonBaseWithHover = styled(ButtonBase)(({ theme }) => ({
  "@media (hover: hover)": {
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
}));
