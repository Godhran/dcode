import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {WordActions} from "../actions/word";
import {SET_LOADING} from "../constants/action-types";

const useWord = (window) => {
        const dispatch = useDispatch();

        const targetWord = useSelector(state => state.word.targetWord);
        const guessedWord = useSelector(state => state.word.guessedWord);
        const previousGuessedWords = useSelector(state => state.word.previousGuessedWords);
        const correctAnswer = useSelector(state => state.word.correctAnswer);
        const guessedLetters = useSelector(state => state.word.guessedLetters);

        const [errors, setErrors] = useState({});

        const setGuessedLetter = (letter, index) => {
            dispatch({type: SET_LOADING, loading: true});
            return new Promise(async (resolve) => {
                dispatch(WordActions.setGuessedLetter(letter, index)).then(resp => {
                    setErrors({});
                    dispatch({type: SET_LOADING, loading: false});
                    window.scrollTo(0, 0)
                    resolve(resp)
                }, (error) => {
                    setErrors(error);
                    dispatch({type: SET_LOADING, loading: false});
                    resolve(false);
                });
            });
        };

        const onClickKeyboardLetter = (letter) => {
            return new Promise(async (resolve) => {
                if (guessedWord.replace(/ /g, '').length < targetWord.length) {
                    dispatch(WordActions.onClickKeyboardLetter(letter)).then(resp => {
                        resolve(resp)
                    }, (error) => {
                        resolve(false);
                    });
                } else {
                    resolve(false);
                }
            });
        };

        const onClickKeyboardBackspace = (letter) => {
            return new Promise(async (resolve) => {
                dispatch(WordActions.onClickKeyboardBackspace(letter)).then(resp => {
                    resolve(resp)
                }, (error) => {
                    resolve(false);
                });
            });
        };

        const onClickKeyboardEnter = () => {
            return new Promise(async (resolve) => {
                if (guessedWord.replace(/ /g, '').length === targetWord.length) {
                    dispatch(WordActions.onClickKeyboardEnter(guessedWord, targetWord)).then(resp => {
                        resolve(resp)
                    }, (error) => {
                        resolve(false);
                    });
                } else {
                    resolve(false);
                }
            });
        };

        const getTargetWord = (length) => {
            dispatch({type: SET_LOADING, loading: true});
            return new Promise(async (resolve) => {
                dispatch(WordActions.getTargetWord(length)).then(resp => {

                    setErrors({});
                    dispatch({type: SET_LOADING, loading: false});
                    window.scrollTo(0, 0)
                    resolve(resp)
                }, (error) => {
                    setErrors(error);
                    dispatch({type: SET_LOADING, loading: false});
                    resolve(false);
                });
            });
        };

        const getNewTargetWord = () => {
            dispatch({type: SET_LOADING, loading: true});
            return new Promise(async (resolve) => {
                dispatch(WordActions.getNewTargetWord(targetWord.length)).then(resp => {
                    setErrors({});
                    dispatch({type: SET_LOADING, loading: false});
                    window.scrollTo(0, 0)
                    resolve(resp)
                }, (error) => {
                    setErrors(error);
                    dispatch({type: SET_LOADING, loading: false});
                    resolve(false);
                });
            });
        };

        return {
            errors,
            setErrors,
            targetWord,
            guessedWord,
            previousGuessedWords,
            correctAnswer,
            guessedLetters,
            setGuessedLetter,
            getTargetWord,
            getNewTargetWord,
            onClickKeyboardLetter,
            onClickKeyboardBackspace,
            onClickKeyboardEnter
        };
    }
;

export default useWord;
