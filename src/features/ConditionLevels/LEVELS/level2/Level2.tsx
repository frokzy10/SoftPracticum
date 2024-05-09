import React, {useState} from 'react';
import cls from "../../levelCode/LevelCode.module.scss"
import {IoMdClose} from "react-icons/io";
import Plan from "./plan";
import {useNavigate} from "react-router-dom";

interface Level2Props {
    startGame: {
        isLevel2: boolean;
        sphere: string[];
        sphereLink: string[];
        conditionName: string
    };
}

const Level2 = (props: Level2Props) => {
    const {startGame} = props;
    const navigate = useNavigate()
    const [input, setInput] = useState<string>("");
    const [link, setLink] = useState<string | null>(null);
    const [finded, setFinded] = useState<boolean>(false);
    const [modal, setModal] = useState<boolean>(false);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        setInput(inputValue);

        if (!inputValue) {
            setLink(null);
            setFinded(false);
            setSelectedIndex(null);
            return;
        }
        let index = -1;
        if (startGame) {
            index = startGame.sphere.findIndex(i => i === inputValue);
            if (index !== -1 && startGame.sphereLink[index]) {
                setLink(startGame.sphereLink[index]);
                setFinded(true);
                setSelectedIndex(index);
            }
        }
    };

    const handleOpenModal = () => setModal(true)
    const handleCloseModal = () => setModal(false)
    const navigateToPoint = () =>  navigate("/game/success")
    return (
        <>
            {startGame.isLevel2 && (
                <>
                    <div className={cls.level2}>
                        <div>
                            <h2 className={cls.level2Title}>Давайте сделаем план обучения!</h2>
                            <label htmlFor="">Введите ваше направление</label>
                            <input
                                value={input}
                                onChange={handleInputChange}
                                type="text"
                                placeholder="Ваш ответ..."
                            />
                            {finded && (
                                <>
                                    <div>
                                        <label>Прочтите документацию об этой професии</label>
                                    </div>
                                    {link && (
                                        <a className={cls.linkToSphere} href={link} target="_blank" rel="noreferrer">
                                            {link}
                                        </a>
                                    )}
                                    <div>
                                        <button onClick={handleOpenModal} className={cls.planBtn}>
                                            Перейти к плану
                                        </button>
                                    </div>
                                    {modal && (
                                        <>
                                            <div className={cls.level2Modal}>
                                                <div className={cls.level2ModalContainer}>
                                                    <IoMdClose onClick={handleCloseModal}/>
                                                    {selectedIndex !== null && (
                                                        <>
                                                            <p className={cls.level2PlanIndex}>План: {startGame.sphere[selectedIndex]}</p>
                                                            <Plan/>
                                                        </>
                                                    )}
                                                    <p className={cls.pointsTitle}>Вы выполнили квест на получение
                                                        плана! <br/> Получите очки!</p>
                                                    <button onClick={navigateToPoint} className={cls.planBtn}>
                                                        К очкам
                                                    </button>
                                                </div>
                                            </div>
                                            <div className={cls.overlay}></div>
                                        </>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Level2;
