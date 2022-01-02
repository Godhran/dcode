import '../../App.css';
import '../../styles/css/inputs.css';
import useWord from "../../hooks/hooks.word";

const size = 35;

const SVGInputRow = () => {
    const {
        guessedWord
    } = useWord(window);

    return (
        <div>
            {guessedWord.split('').map((letter, index) => {
                return (
                    <svg key={`${letter}_${index}_svg`}
                         className={`${index < guessedWord.length ? 'mr-1' : ''}`}
                         height={size}
                         width={size}
                         viewBox={`0 0 30 30`}>
                        <rect height={30} width={30} rx={10} fill={'#FFFFFF'}/>
                        <text x={'50%'}
                              fontWeight={900}
                              fontFamily={'Major Mono Display'}
                              y={'50%'}
                              textAnchor={'middle'}
                              alignmentBaseline={'central'}>
                            {letter.toLowerCase()}
                        </text>
                    </svg>
                )
            })}
        </div>
    );
}

export default SVGInputRow;
