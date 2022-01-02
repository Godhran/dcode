import {Grow} from "@mui/material";
import Colours from "../../styles/colours";
import {useEffect, useState} from "react";
import useWord from "../../hooks/hooks.word";

const ContinueButton = () => {
    const {
        getNewTargetWord,
    } = useWord(window);

    const [open, setOpen] = useState(false)

    useEffect(() => {
        startTimer();
    }, []);

    const startTimer = () => {
        const interval = setInterval(() => {
            setOpen(true);
        }, 500);

        return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
    }

    return (
        <Grow in={open} mountOnEnter unmountOnExit>
            <div
                className={'my-3 next-button mx-auto'}
                style={{
                    backgroundColor: Colours.palettes['a'].accent,
                    color: Colours.palettes['a'].backgroundColor,
                    maxWidth: 160
                }}
                onClick={() => {
                    setOpen(false)
                    setTimeout(() => {
                        getNewTargetWord().then();
                    }, 500)
                }}
            >
                continue
            </div>
        </Grow>
    )
}

export default ContinueButton
