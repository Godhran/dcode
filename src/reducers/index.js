import {combineReducers} from "redux";
import {Word} from "./word";
import {Loading} from "./loading";

const combined = combineReducers({
    loading: Loading,
    word: Word,
})

export default combined;
