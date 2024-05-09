import React from 'react';
import cls from "../../levelCode/LevelCode.module.scss";
import CustomLink from "../../../../entities/CustomLink/CustomLink";

interface Level1Props {
    startGame: any,
}

const Level1 = (props: Level1Props) => {
    const {startGame} = props;
    return (
        <>
            {startGame.isLevel1 && (
                <>
                    <div className={cls.level1}>
                        <div className={cls.heroImg}>
                            <img src={startGame.conditionImg} alt="img"/>
                        </div>
                        <div className={cls.level2Content}>
                            <h2 className={cls.level2Title}>{startGame.task}</h2>
                            <div className={cls.levelInputContainer}>
                                <div
                                    className={cls.levelInputSubtitle}>{startGame.responseMeasure}</div>
                                <div>
                                    <CustomLink
                                                href={startGame.conditionLink}>
                                        {startGame.conditionLink}
                                    </CustomLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Level1;