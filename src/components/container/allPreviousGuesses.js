import '../../App.css';
import '../../styles/css/inputs.css';
import useWord from "../../hooks/hooks.word";
import PreviousGuessRow from "./previousGuessRow";

const AllPreviousGuesses = () => {
    const {
        targetWord,
        previousGuessedWords,
    } = useWord(window);

    return (
        <div>
            {previousGuessedWords.slice(1, previousGuessedWords.length).map((previousGuess, index) =>
                <PreviousGuessRow
                    key={`${previousGuess}_index`}
                    rowIndex={index}
                    previousGuess={previousGuess}
                    word={targetWord}
                />
            )}
        </div>
    );
}

export default AllPreviousGuesses;
