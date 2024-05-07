import React from 'react';
import cls from "./Field.module.scss";
import {Field,ErrorMessage as Error} from "formik";

const FieldWidget = (props:any) => {
    const {id,label,name,placeholder} = props;
    return (
        <div className={cls.inputContainer}>
            <label htmlFor={id}>{label}</label>
            <Field name={name} id={id} placeholder={placeholder}/>
            <Error name={name}>{(error)=><span>{error}</span>}</Error>
        </div>
    );
};

export default FieldWidget;