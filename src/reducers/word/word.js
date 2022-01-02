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

const initialState = {
    targetWord: '',
    correctAnswer: '',
    guessedWord: '    ',
    guessedLetters: [],
    previousGuessedWords: [],
    progress: 1
}

const setGuessedWord = (guessedWord, value) => {
    let tempGuessedWord = guessedWord;
    guessedWord[value.index] = value.letter;
    return tempGuessedWord;
}

const generateArray = (length) => {
    return Array.from({length: length + 1}, (_, i) => '').join(' ')
}

const updateGuessedWord = (guessedWord, value) => {
    const currentIndex = guessedWord.replace(/ /g, '').length

    let tempGuessedWord = guessedWord.split('');
    tempGuessedWord[currentIndex] = value;
    tempGuessedWord = tempGuessedWord.join('');

    return tempGuessedWord
}

const removeLastLetter = (guessedWord) => {
    const currentIndex = guessedWord.replace(/ /g, '').length

    let tempGuessedWord = guessedWord.split('');
    tempGuessedWord[currentIndex-1] = ' ';
    tempGuessedWord = tempGuessedWord.join('');

    return tempGuessedWord
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_GUESSED_LETTER:
            return {
                ...state,
                guessedWord: setGuessedWord(state.guessedWord, action.value)
            }
        case CLEAR_GUESSED_WORD:
            return {
                ...state,
                guessedWord: generateArray(state.targetWord.length),
            }
        case CLEAR_PREVIOUS_GUESSED_WORDS:
            return {
                ...state,
                previousGuessedWords: [],
                guessedLetters: [],
            }
        case SET_TARGET_WORD:
            return {
                ...state,
                targetWord: action.value.word.toUpperCase(),
                guessedWord: generateArray(action.value.word.length),
            }
        case SET_CORRECT_ANSWER:
            return {
                ...state,
                correctAnswer: action.value
            }
        case ADD_GUESSED_WORD:
            return {
                ...state,
                previousGuessedWords: [
                    state.guessedWord,
                    ...state.previousGuessedWords,
                ],
                guessedWord: generateArray(state.targetWord.length),
                guessedLetters: [state.guessedWord.split(''), ...state.previousGuessedWords].join('')
            }
        case SET_NEXT_LETTER:

            return {
                ...state,
                guessedWord: updateGuessedWord(state.guessedWord, action.value)
            }
        case REMOVE_LAST_LETTER:
            return {
                ...state,
                guessedWord: removeLastLetter(state.guessedWord)
            }
        default:
            return state;
    }
}

export default Reducer;
