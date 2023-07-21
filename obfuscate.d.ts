import React from 'react';

export interface ObfuscateProps<T extends keyof JSX.IntrinsicElements> {
    element?: T;
    tel?: string;
    sms?: string;
    facetime?: string;
    email?: string;
    href?: string;
    headers?: object;
    obfuscate?: boolean;
    obfuscateChildren?: boolean;
    linkText?: string;
    style?: React.CSSProperties;
    onClick?: React.MouseEvent<T>;
}

declare class Obfuscate<T extends keyof JSX.IntrinsicElements = "a"> extends React.Component<React.PropsWithChildren<ObfuscateProps<T>>, any> {}

export default Obfuscate