import { useIntl } from "react-intl";
import Base from "./base";
import { useState } from "react";
import { getFontsize, setFontsize as setFontsizeInDb } from "../../db";
import { getRem, modifyRem } from "../../utils";
import { Slider } from "@mui/material";

export default function Font() {
  const intl = useIntl();
  const [fontsize, setFontsize] = useState(getFontsize() || getRem());
  return (
    <>
      <Base
        heading={intl.formatMessage({
          defaultMessage: "font size",
          id: "font_size",
        })}
        subHeading={fontsize}
      >
        <Slider
          sx={{
            flex: '1 1 0'
          }}
          aria-label="fontsize"
          value={parseInt(fontsize.substring(0, 2))}
          valueLabelDisplay="auto"
          step={2}
          marks
          min={16}
          max={22}
          onChange={(_, newValue) => {
            const newFontsize = `${newValue}px`;
            modifyRem(newFontsize);
            setFontsize(newFontsize);
            setFontsizeInDb(newFontsize);
          }}
        />
      </Base>
    </>
  );
}
