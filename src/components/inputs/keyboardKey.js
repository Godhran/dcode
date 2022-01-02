import '../../App.css';
import '../../styles/css/inputs.css';
import useWord from "../../hooks/hooks.word";
import useGame from "../../hooks/hooks.game";
import Colours from "../../styles/colours";

const KeyboardKey = () => {

    const {
        targetWord,
        previousGuessedWords,
    } = useWord(window);

    const {
        palette,
    } = useGame(window);

    const checkIfLetterUsed = (letter) =>{
        const allLetters = previousGuessedWords.join('').toUpperCase();
        const allLettersIndex = allLetters.indexOf(letter);

        if(allLettersIndex>=0){
            const targetWordIndex = targetWord.indexOf(letter);
            if(targetWordIndex>=0){
                return {color:Colours.palettes['a'].backgroundColor,backgroundColor:Colours.palettes['a'].accent}
            }else{
                return {color:Colours.palettes['a'].backgroundColor,backgroundColor:'#FFFFFF60'}
            }
        }


        return {color:Colours.palettes['a'].backgroundColor,backgroundColor:'#FFFFFF'}

    }

    return (
        <div className={'keyboard-container mx-auto mt-5'}>
            <div className={'row no-gutters justify-content-between'}>
                <div className={'keyboard-key'}
                    style={checkIfLetterUsed('Q')}
                >
                    Q
                </div>
                <div className={'keyboard-key'}
                     style={checkIfLetterUsed('W')}
                >
                    W
                </div>
                <div className={'keyboard-key'}
                     style={checkIfLetterUsed('E')}
                >
                    E
                </div>
                <div className={'keyboard-key'}
                     style={checkIfLetterUsed('R')}
                >
                    R
                </div>
                <div className={'keyboard-key'}
                     style={checkIfLetterUsed('T')}
                >
                    T
                </div>
                <div className={'keyboard-key'}
                     style={checkIfLetterUsed('Y')}
                >
                    Y
                </div>
                <div className={'keyboard-key'}
                     style={checkIfLetterUsed('U')}
                >
                    U
                </div>
                <div className={'keyboard-key'}
                     style={checkIfLetterUsed('I')}
                >
                    I
                </div>
                <div className={'keyboard-key'}
                     style={checkIfLetterUsed('O')}
                >
                    O
                </div>
                <div className={'keyboard-key'}
                     style={checkIfLetterUsed('P')}
                >
                    P
                </div>

            </div>
            <div className={'row no-gutters justify-content-between mx-auto mt-1'} style={{width:'90%'}}>
                <div className={'keyboard-key'}
                     style={checkIfLetterUsed('A')}
                >
                    A
                </div>
                <div className={'keyboard-key'}
                     style={checkIfLetterUsed('S')}
                >
                    S
                </div>
                <div className={'keyboard-key'}
                     style={checkIfLetterUsed('D')}
                >
                    D
                </div>
                <div className={'keyboard-key'}
                     style={checkIfLetterUsed('F')}
                >
                    F
                </div>
                <div className={'keyboard-key'}
                     style={checkIfLetterUsed('G')}
                >
                    G
                </div>
                <div className={'keyboard-key'}
                     style={checkIfLetterUsed('H')}
                >
                    H
                </div>
                <div className={'keyboard-key'}
                     style={checkIfLetterUsed('J')}
                >
                    J
                </div>
                <div className={'keyboard-key'}
                     style={checkIfLetterUsed('K')}
                >
                    K
                </div>
                <div className={'keyboard-key'}
                     style={checkIfLetterUsed('L')}
                >
                    L
                </div>
            </div>
            <div className={'row no-gutters justify-content-between mx-auto mt-1'} style={{width:'90%'}}>
                {/*<div className={'keyboard-key-special'}>*/}
                {/*    <svg width="20" height="20" viewBox="0 0 374 373" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
                {/*        <path d="M257 140.722C250.785 140.687 244.812 143.132 240.406 147.515C236 151.898 233.527 157.859 233.531 164.074C233.535 170.289 236.019 176.246 240.433 180.625L317.433 257.391L240.433 334.157C235.289 340.165 233.539 348.368 235.781 355.954C238.023 363.536 243.953 369.47 251.539 371.712C259.121 373.954 267.328 372.204 273.332 367.059L366.668 273.723C371.012 269.352 373.453 263.438 373.453 257.274C373.453 251.11 371.012 245.196 366.668 240.825L273.336 147.493H273.332C268.988 143.181 263.121 140.751 257 140.724L257 140.722Z"*/}
                {/*              fill={Colours.palettes['a'].backgroundColor}/>*/}
                {/*        <path d="M163.67 0.72168H70.334C51.772 0.72168 33.967 8.09671 20.838 21.2257C7.70898 34.3547 0.333984 52.1597 0.333984 70.7217V210.722C0.333984 229.288 7.70898 247.093 20.838 260.222C33.967 273.347 51.772 280.722 70.334 280.722H350.334C358.67 280.722 366.373 276.276 370.541 269.058C374.709 261.839 374.709 252.941 370.541 245.722C366.373 238.503 358.67 234.058 350.334 234.058H70.334C64.1465 234.058 58.213 231.597 53.838 227.222C49.4591 222.847 47.0021 216.913 47.0021 210.722V70.7218C47.0021 64.5343 49.4591 58.6008 53.838 54.2258C58.213 49.8469 64.147 47.3899 70.334 47.3899H163.67C172.006 47.3899 179.709 42.9407 183.877 35.7219C188.045 28.5031 188.045 19.6089 183.877 12.3899C179.709 5.17089 172.006 0.721863 163.67 0.721863V0.72168Z"*/}
                {/*              fill={Colours.palettes['a'].backgroundColor}/>*/}
                {/*    </svg>*/}
                {/*</div>*/}
                <div className={'keyboard-key-placeholder'}/>
                <div className={'keyboard-key'}
                     style={checkIfLetterUsed('Z')}
                >
                    Z
                </div>
                <div className={'keyboard-key'}
                     style={checkIfLetterUsed('X')}
                >
                    X
                </div>
                <div className={'keyboard-key'}
                     style={checkIfLetterUsed('C')}
                >
                    C
                </div>
                <div className={'keyboard-key'}
                     style={checkIfLetterUsed('V')}
                >
                    V
                </div>
                <div className={'keyboard-key'}
                     style={checkIfLetterUsed('B')}
                >
                    B
                </div>
                <div className={'keyboard-key'}
                     style={checkIfLetterUsed('N')}
                >
                    N
                </div>
                <div className={'keyboard-key-placeholder'}/>
                {/*<div className={'keyboard-key-special'}>*/}
                {/*    <svg width="22.5" height="20" viewBox="0 0 45 31" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
                {/*        <path d="M44.8035 8.69679C44.8035 4.10111 41.1014 0.398926 36.5056 0.398926H12.8251C11.4209 0.398926 10.0807 1.0374 9.25083 2.18613L0.761594 13.4839C-0.0683177 14.6326 -0.0683177 16.1648 0.761594 17.3139L9.25083 28.6117C10.0807 29.7604 11.4209 30.3989 12.8251 30.3989H36.5056C41.1013 30.3989 44.8035 26.6969 44.8035 22.1011V8.69679ZM40.9735 22.1008C40.9735 24.5902 38.9949 26.5687 36.5056 26.5687H12.8251C12.6337 26.5687 12.4422 26.5051 12.3144 26.3136L4.08029 15.3987L12.314 4.48371C12.4418 4.29226 12.6332 4.22859 12.8247 4.22859H36.5052C38.9945 4.22859 40.9731 6.20717 40.9731 8.69649L40.9735 22.1008Z"*/}
                {/*              fill={Colours.palettes['a'].backgroundColor}/>*/}
                {/*        <path d="M33.1867 9.71791C32.4208 8.9521 31.2081 8.9521 30.5058 9.71791L27.5059 12.7179L24.5059 9.71791C23.6765 9.01577 22.4636 9.14355 21.8251 9.97303C21.2508 10.6752 21.2508 11.6965 21.8251 12.3986L24.8251 15.3986L21.8251 18.3986C21.0593 19.1007 20.9952 20.3135 21.7615 21.0794C22.4636 21.8452 23.6764 21.9093 24.4423 21.143C24.5059 21.143 24.5059 21.0794 24.5059 21.0794L27.5059 18.0794L30.5058 21.0794C31.2717 21.7815 32.4844 21.7815 33.1867 21.0157C33.8889 20.2499 33.8888 19.1649 33.1867 18.3986L30.1872 15.3986L33.1871 12.3987C33.9529 11.6329 33.9529 10.4201 33.1867 9.71788L33.1867 9.71791Z"*/}
                {/*              fill={Colours.palettes['a'].backgroundColor}/>*/}
                {/*    </svg>*/}
                {/*</div>*/}
            </div>
        </div>
    );
}

export default KeyboardKey;
