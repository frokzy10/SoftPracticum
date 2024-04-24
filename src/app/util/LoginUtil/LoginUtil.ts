
export const LoginUtil = (
    email: string,
    password: string,
    setEmailError: (error: string) => void,
    setPasswordError: (error: string) => void,

) => {
    const isEmailValid = (email: string) => {
        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailRegex.test(email);
    };

    const isPasswordValid = (password: string) => {
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{6,}$/;
        return passwordRegex.test(password);
    };

    const emailValid = isEmailValid(email);
    const passwordValid = isPasswordValid(password);

    setEmailError("Неправильно введен email")
    setPasswordError(passwordValid ? "" :"Ошибка при валидации")
    if (!emailValid || !passwordValid) {
        return;
    }
}