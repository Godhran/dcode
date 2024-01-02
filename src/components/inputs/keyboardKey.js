import "../../App.css";
import "../../styles/css/inputs.css";
import useWord from "../../hooks/hooks.word";
import Colours from "../../styles/colours";

const KeyboardKey = () => {
  const { targetWord, previousGuessedWords } = useWord(window);

  const checkIfLetterUsed = (letter) => {
    const allLetters = previousGuessedWords.join("").toUpperCase();
    const allLettersIndex = allLetters.indexOf(letter);

    if (allLettersIndex >= 0) {
      const targetWordIndex = targetWord.indexOf(letter);
      if (targetWordIndex >= 0) {
        return {
          color: Colours.palettes["a"].backgroundColor,
          backgroundColor: Colours.palettes["a"].accent,
        };
      } else {
        return {
          color: Colours.palettes["a"].backgroundColor,
          backgroundColor: "#FFFFFF60",
        };
      }
    }

    return {
      color: Colours.palettes["a"].backgroundColor,
      backgroundColor: "#FFFFFF",
    };
  };

  return (
    <div className={"keyboard-container mx-auto mt-5"}>
      <div className={"row no-gutters justify-content-between"}>
        <div className={"keyboard-key"} style={checkIfLetterUsed("Q")}>
          Q
        </div>
        <div className={"keyboard-key"} style={checkIfLetterUsed("W")}>
          W
        </div>
        <div className={"keyboard-key"} style={checkIfLetterUsed("E")}>
          E
        </div>
        <div className={"keyboard-key"} style={checkIfLetterUsed("R")}>
          R
        </div>
        <div className={"keyboard-key"} style={checkIfLetterUsed("T")}>
          T
        </div>
        <div className={"keyboard-key"} style={checkIfLetterUsed("Y")}>
          Y
        </div>
        <div className={"keyboard-key"} style={checkIfLetterUsed("U")}>
          U
        </div>
        <div className={"keyboard-key"} style={checkIfLetterUsed("I")}>
          I
        </div>
        <div className={"keyboard-key"} style={checkIfLetterUsed("O")}>
          O
        </div>
        <div className={"keyboard-key"} style={checkIfLetterUsed("P")}>
          P
        </div>
      </div>
      <div
        className={"row no-gutters justify-content-between mx-auto mt-1"}
        style={{ width: "90%" }}
      >
        <div className={"keyboard-key"} style={checkIfLetterUsed("A")}>
          A
        </div>
        <div className={"keyboard-key"} style={checkIfLetterUsed("S")}>
          S
        </div>
        <div className={"keyboard-key"} style={checkIfLetterUsed("D")}>
          D
        </div>
        <div className={"keyboard-key"} style={checkIfLetterUsed("F")}>
          F
        </div>
        <div className={"keyboard-key"} style={checkIfLetterUsed("G")}>
          G
        </div>
        <div className={"keyboard-key"} style={checkIfLetterUsed("H")}>
          H
        </div>
        <div className={"keyboard-key"} style={checkIfLetterUsed("J")}>
          J
        </div>
        <div className={"keyboard-key"} style={checkIfLetterUsed("K")}>
          K
        </div>
        <div className={"keyboard-key"} style={checkIfLetterUsed("L")}>
          L
        </div>
      </div>
      <div
        className={"row no-gutters justify-content-between mx-auto mt-1"}
        style={{ width: "90%" }}
      >
        <div className={"keyboard-key-placeholder"} />
        <div className={"keyboard-key"} style={checkIfLetterUsed("Z")}>
          Z
        </div>
        <div className={"keyboard-key"} style={checkIfLetterUsed("X")}>
          X
        </div>
        <div className={"keyboard-key"} style={checkIfLetterUsed("C")}>
          C
        </div>
        <div className={"keyboard-key"} style={checkIfLetterUsed("V")}>
          V
        </div>
        <div className={"keyboard-key"} style={checkIfLetterUsed("B")}>
          B
        </div>
        <div className={"keyboard-key"} style={checkIfLetterUsed("N")}>
          N
        </div>
        <div className={"keyboard-key-placeholder"} />
      </div>
    </div>
  );
};

export default KeyboardKey;
