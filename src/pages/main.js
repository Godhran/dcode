import '../App.css';
import '../styles/css/inputs.css';
import useWord from "../hooks/hooks.word";
import PreviousGuessRow from "../components/container/previousGuessRow";
import {useEffect} from "react";
import {Collapse} from "@mui/material";
import CorrectAnswerRow from "../components/container/correctAnswerRow";
import Colours from "../styles/colours"

import {TransitionGroup} from 'react-transition-group';
import ContinueButton from "../components/buttons/continueButton";
import AllPreviousGuesses from "../components/container/allPreviousGuesses";
import SVGInputRow from "../components/inputs/svgInputRow";
import SVGInputKeyboard from "../components/inputs/svgInputKeyboard";
import LoadingOverlay from "../components/container/loadingOverlay";
import useLoading from "../hooks/hooks.loading";

const Main = () => {

    const {
        loading,
    } = useLoading();

    const {
        targetWord,
        guessedWord,
        previousGuessedWords,
        correctAnswer,
        getTargetWord,
    } = useWord(window);

    useEffect(() => {
        getTargetWord(4).then();
    }, []);

    return (
        <div className="App">
            <header className="App-header pt-5" style={{backgroundColor: Colours.palettes['a'].backgroundColor}}>
                <h1 style={{color: Colours.palettes['a'].accent}}>Dcode</h1>
                <div>
                    {targetWord.length > 0 &&
                        <>
                            {correctAnswer.length === 0 &&
                                <>
                                    <SVGInputRow guessedWord={JSON.parse(JSON.stringify(guessedWord))}/>

                                    <TransitionGroup>
                                        {previousGuessedWords.map((previousGuess, index) =>
                                            <Collapse key={`Previous_Guess_${index}`}>
                                                <PreviousGuessRow
                                                    key={`Previous_Guess_${index}`}
                                                    rowIndex={index}
                                                    previousGuess={previousGuess}
                                                    word={targetWord}
                                                />
                                            </Collapse>
                                        )}
                                    </TransitionGroup>
                                    {!loading &&
                                        <SVGInputKeyboard/>
                                    }
                                </>
                            }

                            {correctAnswer.length > 0 &&
                                <>
                                    <CorrectAnswerRow/>
                                    <AllPreviousGuesses previousGuesses={previousGuessedWords}
                                                        targetWord={targetWord}
                                    />
                                    <ContinueButton/>
                                </>
                            }
                        </>
                    }
                </div>
            </header>
            <LoadingOverlay/>
        </div>
    );
}

export default Main;
