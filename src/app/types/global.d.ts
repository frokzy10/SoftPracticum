declare module '*.scss' {
    interface IClassNames {
        [className: string]: string;
    }
    const classNames: IClassNames;
    export = classNames;
}

declare type TNullable<T> = T | null;

declare module "*.png" {
    const value: any;
    export default value;
}