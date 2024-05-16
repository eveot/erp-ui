import { IconName } from '../Icon';
import { TextInfo } from '../TextInfo';
import { ChangeEvent, FC } from '../../../node_modules/react';

export interface InputProps {
    type?: 'text' | 'number' | 'password';
    name?: string;
    label?: string;
    placeholder?: string;
    value?: string | number;
    size?: 'xs' | 'sm' | 'md';
    style?: 'light' | 'dark';
    invalid?: boolean;
    disabled?: boolean;
    iconLeft?: IconName;
    iconRight?: IconName;
    textInfo?: TextInfo;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    min?: number;
    max?: number;
}
export declare const Input: FC<InputProps>;
