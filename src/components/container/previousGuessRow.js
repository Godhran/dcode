import '../../App.css';
import '../../styles/css/inputs.css';
import useWord from "../../hooks/hooks.word";
import Colours from "../../styles/colours";

const size = 35;

const PreviousGuessRow = ({rowIndex, previousGuess}) => {
    const {
        targetWord,
    } = useWord(window);

    const instancesOfLetter = (letter) => {
        let indexes = [], i = -1;
        while ((i = targetWord.indexOf(letter, i + 1)) >= 0) indexes.push(i);
        return indexes;
    }

    const getContainerStyle = (letter, index) =>{
        const letterIndexes = instancesOfLetter(letter.toUpperCase());

        if (!letterIndexes.length) {
            return `#FFFFFF20`
        }

        return letterIndexes.indexOf(index) >= 0 ? Colours.palettes['a'].correctPosition : Colours.palettes['a'].wrongPosition;
    }

    const getFontStyle = (letter) =>{
        const letterIndexes = instancesOfLetter(letter.toUpperCase());

        return letterIndexes.length ? '#FFFFFF' : '#FFFFFF90'
    }

    return (
        <div style={{opacity: (1 - 0.175 * rowIndex)}}>
            {previousGuess.split('').map((letter, index) => {
                return (
                    <svg key={`${letter}_${index}_${rowIndex}`}
                         className={`${index < previousGuess.length ? 'mr-1' : ''} mt-1`}
                         height={size}
                         width={size}
                         viewBox={`0 0 30 30`}
                         style={{animationDelay: `${0.1 * index}s`}}
                    >
                        <rect height={30} width={30} rx={10} fill={getContainerStyle(letter, index)}/>
                        <text x={'50%'}
                              fontWeight={900}
                              fontFamily={'Major Mono Display'}
                              y={'50%'}
                              fontSize={20}
                              textAnchor={'middle'}
                              alignmentBaseline={'middle'}
                              dominantBaseline={'middle'}
                              fill={getFontStyle(letter, index)}
                        >
                            {letter.toLowerCase()}
                        </text>
                    </svg>

                )
            })}
        </div>
    );
}

export default PreviousGuessRow;
