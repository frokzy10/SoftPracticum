import React, {useContext, useEffect, useState} from 'react';
import cls from "./Level2.module.scss";
import { IoMdClose } from "react-icons/io";
import { STORECONTEXT } from "../../../../index";
import axios from "axios";
import {jwtDecode} from "jwt-decode";
import AuthServices from "../../../../entities/Form/services/AuthServices";
import UserService from "../../../../entities/Form/services/UserService";
import {IUser} from "../../../../entities/Form";

interface Props {
    modal: boolean,
    handleCloseModal: (event: any) => void
}

interface IGameSchema {
    _id: string,
    title: string,
    description: string,
    img:string,
    isWon:boolean,
    points:number
}

const Level2 = (props: Props) => {
    const { modal, handleCloseModal } = props;
    const { store } = useContext(STORECONTEXT);
    const points = 10;
    const [getUser,setGetUser] = useState<IUser[]>([])

    const handleBtn = async () => {
        try {
            const token = localStorage.getItem('token');
            let userId = null;
            if (token) {
                userId = jwtDecode(token);
                console.log(userId);
            } else {
                console.error('Token is null or undefined');
            }
            if (userId) {
                const response = await AuthServices.points(userId.sub, points, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                console.log(response.data);
            } else {
                console.error('UserId is null or undefined');
            }
        } catch (error) {
            console.error('Error updating points:');
        }

    };

    const userGet = async ()=>{
        try {
            const res = await UserService.fetchUsers();
            setGetUser(res.data)
        }catch (e){
            console.log(e)
        }
    }

    return (
        <div className={cls.level2Container}>
            <button onClick={userGet}>Get</button>
            {getUser.map(g=>(
                <div key={g.email}>{g.email}</div>
            ))}
            {modal && (
                <>
                    <div className={cls.modal}>
                        <div className={cls.modalContent}>
                            CONTENT

                            <button onClick={handleBtn}>Update Points</button>
                            <div onClick={handleCloseModal} className={cls.modalClose}><IoMdClose/></div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Level2;
