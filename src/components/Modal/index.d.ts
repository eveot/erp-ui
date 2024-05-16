import { CSSProperties, FC, PropsWithChildren } from '../../../node_modules/react';

interface ModalProps {
    title?: string;
    description?: string;
    show?: boolean;
    width?: CSSProperties['width'];
    style?: 'dark' | 'light';
    image?: string | null;
    backdrop?: boolean;
    onClose?: () => void;
}
export declare const Modal: FC<PropsWithChildren<ModalProps>>;
export {};