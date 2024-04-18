export interface IUserSchema {
    email:null,
    password:null
}

// types.ts

export const SET_EMAIL_AND_PASSWORD = 'SET_EMAIL_AND_PASSWORD';
export const CLEAR_EMAIL_AND_PASSWORD = 'CLEAR_EMAIL_AND_PASSWORD';

export interface SetEmailAndPasswordAction {
    type: typeof SET_EMAIL_AND_PASSWORD;
    payload: {
        email: string;
        password: string;
    };
}

interface ClearEmailAndPasswordAction {
    type: typeof CLEAR_EMAIL_AND_PASSWORD;
}

export type UserActionTypes = SetEmailAndPasswordAction | ClearEmailAndPasswordAction;

export const setEmailAndPassword = (email: string, password: string) => {
    return{
        type:SET_EMAIL_AND_PASSWORD,
        payload:{email,password}
    }
};

export const clearEmailAndPassword = (): ClearEmailAndPasswordAction => ({
    type: CLEAR_EMAIL_AND_PASSWORD,
});
