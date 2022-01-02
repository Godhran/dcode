import '../../App.css';
import '../../styles/css/inputs.css';
import useWord from "../../hooks/hooks.word";
import Colours from "../../styles/colours"

const size = 35;

const CorrectAnswerRow = () => {
    const {
        correctAnswer,
    } = useWord(window);

    return (
        <div style={{position: 'relative'}}>
            {correctAnswer.split('').map((letter, index) => {
                return (
                    <svg key={`${letter}_${index}_correctAnswer`}
                         className={`${index < correctAnswer.length ? 'mr-1' : ''} mb-1 correct-answer`}
                         height={size}
                         width={size}
                         viewBox={`0 0 30 30`}
                         style={{animationDelay: `${0.1 * index}s`}}
                    >
                        <rect height={30} width={30} rx={10} fill={Colours.palettes['a'].accent}/>
                        <text x={'50%'}
                              fontWeight={900}
                              fontFamily={'Major Mono Display'}
                              y={'50%'}
                              textAnchor={'middle'}
                              fontSize={20}
                              alignmentBaseline={'central'}
                              fill={Colours.palettes['a'].backgroundColor}
                        >
                            {letter.toLowerCase()}
                        </text>
                    </svg>
                )
            })}
        </div>
    );
}

export default CorrectAnswerRow;
