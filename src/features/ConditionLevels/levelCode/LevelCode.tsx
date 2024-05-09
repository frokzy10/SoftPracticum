import React from 'react';
import Level1 from "../LEVELS/Level1/Level1";
import Level2 from "../LEVELS/level2/Level2";

interface ILevelCodeProps{
    startGame:any,
}

const LevelCode = (props:ILevelCodeProps) => {
    const {startGame} = props;
    return (
        <>
            {startGame && (
                <>
                    <Level1 startGame={startGame}/>
                    <Level2 startGame={startGame}/>
                </>
            )}
        </>
    );
};

export default LevelCode;