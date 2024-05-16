import { IconName } from '../Icon';
import { FC, PropsWithChildren } from '../../../node_modules/react';

export interface TextInfoProps {
    active?: boolean;
    disabled?: boolean;
    iconLeft?: IconName;
    iconRight?: IconName;
}
export type TextInfo = {
    label: string;
    iconLeft?: IconName;
    iconRight?: IconName;
};
export declare const TextInfo: FC<PropsWithChildren<TextInfoProps>>;
