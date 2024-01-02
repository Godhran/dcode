import { Grow } from "@mui/material";
import Colours from "../../styles/colours";
import { useEffect, useState } from "react";
import useWord from "../../hooks/hooks.word";

const copy = {
  buttonLabel: "continue",
};

const testID = {
  ContinueButton: "dcode-continue-button",
};

const ContinueButton = () => {
  const { getNewTargetWord } = useWord(window);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    startTimer();
  }, []);

  const startTimer = () => {
    const interval = setInterval(() => {
      setOpen(true);
    }, 500);

    return () => clearInterval(interval);
  };

  return (
    <Grow in={open} mountOnEnter unmountOnExit data-testid={testID.ContinueButton}>
      <div
        className={"my-3 next-button mx-auto"}
        style={{
          backgroundColor: Colours.palettes["a"].accent,
          color: Colours.palettes["a"].backgroundColor,
          maxWidth: 160,
        }}
        onClick={() => {
          setOpen(false);
          setTimeout(() => {
            getNewTargetWord();
          }, 500);
        }}
      >
        {copy.buttonLabel}
      </div>
    </Grow>
  );
};

export default ContinueButton;
