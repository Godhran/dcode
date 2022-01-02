import {
    ADD_GUESSED_WORD,
    CLEAR_GUESSED_WORD,
    CLEAR_PREVIOUS_GUESSED_WORDS,
    REMOVE_LAST_LETTER,
    SET_CORRECT_ANSWER,
    SET_GUESSED_LETTER,
    SET_NEXT_LETTER,
    SET_TARGET_WORD
} from "../../constants/action-types";
import {API} from "../../utils/requests";
import {toast} from "react-toastify";

const actions = {
    setGuessedLetter: (letter, index) => async (dispatch) => {
        return new Promise(async (resolve, reject) => {
            dispatch({type: SET_GUESSED_LETTER, value: {letter, index}});
            resolve(true)
        })
    },
    getNewTargetWord: (length) => async (dispatch) => {
        return new Promise(async (resolve, reject) => {
            let url = `word?length=${length}`
            API.get(url).then((resp) => {
                if (resp.error) {
                    if (resp.warning) {
                    }
                    resolve(false)
                } else {
                    const {word} = resp;
                    // dispatch({type: CHANGE_PALETTE});
                    dispatch({type: CLEAR_GUESSED_WORD, value: ''});
                    dispatch({type: CLEAR_PREVIOUS_GUESSED_WORDS});
                    dispatch({type: SET_CORRECT_ANSWER, value: ''});
                    dispatch({type: SET_TARGET_WORD, value: {word}});
                    // dispatch({type: SET_TARGET_WORD, value: {word, definition}});
                    // dispatch({type: SET_GUESSED_WORD, value: {letter,index}});
                    resolve(resp.word)
                }
            }, error => {

                // toast.error(`Something has gone awry...`)
                reject(error)
            })
        })
    },
    getTargetWord: (length) => async (dispatch) => {
        return new Promise(async (resolve, reject) => {
            let url = `word?length=${length}`
            API.get(url).then((resp) => {

                if (resp.error) {
                    // toast.error(resp.error)
                    if (resp.warning) {
                        // toast.warning(resp.warning)
                    }
                    resolve(false)
                } else {
                    const {
                        // word,
                        definition
                    } = resp;
                    let word = "TEST"
                    dispatch({type: SET_TARGET_WORD, value: {word, definition}});
                    // dispatch({type: SET_GUESSED_WORD, value: {letter,index}});
                    resolve(true)
                }
            }, error => {

                // toast.error(`Something has gone awry...`)
                reject(error)
            })
        })
    },
    onClickKeyboardLetter: (letter) => async (dispatch) => {
        return new Promise(async (resolve, reject) => {

            dispatch({type: SET_NEXT_LETTER, value: letter});
            resolve(true)
        })
    },
    onClickKeyboardBackspace: () => async (dispatch) => {
        return new Promise(async (resolve, reject) => {
            dispatch({type: REMOVE_LAST_LETTER});
            resolve(true)
        })
    },
    onClickKeyboardEnter: (guessedWord,targetWord) => async (dispatch) => {
        return new Promise(async (resolve, reject) => {
            let url = `word/check?word=${guessedWord}`
            API.get(url).then((resp) => {
                if (resp.error) {
                    toast.error(resp.error)
                    dispatch({type: CLEAR_GUESSED_WORD});
                    resolve(false)
                } else {
                    if ((guessedWord).toUpperCase() === targetWord.toUpperCase()) {
                        dispatch({type: SET_CORRECT_ANSWER, value: targetWord});
                    }
                    dispatch({type: ADD_GUESSED_WORD})
                    dispatch({type: CLEAR_GUESSED_WORD});
                    resolve(true)
                }
            }, error => {
                reject(error)
            })

        })
    }
};

export default actions;
