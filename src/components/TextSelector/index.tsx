import { Icon } from '@components/Icon';
import { FC, useState } from 'react';
import './style.scss';

interface SelectorProps {
  items?: Array<string>
  disabled?: boolean
}

export const TextSelector: FC<SelectorProps> = ({ items, disabled }) => {

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onChangeItem = (variant: 'prev' | 'next') => {
    if (!items) return;
    if (variant === 'prev') {
      setSelectedIndex((selectedIndex + items.length - 1) % items.length);
    } else {
      setSelectedIndex((selectedIndex + 1) % items.length);
    }
  }

  return (
    <div className="ev-text-selector" data-disabled={ disabled }>
      <Icon name='TbSquareArrowLeftFilled' size='1.75rem' onClick={ () => onChangeItem('prev') } />
      <div className="ev-text-selector-value">
        { items?.find((_, index) => index === selectedIndex) }
      </div>
      <Icon name='TbSquareArrowRightFilled' size='1.75rem' onClick={ () => onChangeItem('next') } />
    </div>
  );
};