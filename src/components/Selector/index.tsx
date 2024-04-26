import { Icon } from '@components/Icon';
import { FC, useState } from 'react';
import './style.scss';

interface SelectorProps {
  type?: 'text' | 'color'
  items?: Array<string>
  disabled?: boolean
}

export const Selector: FC<SelectorProps> = ({ type = 'text', items }) => {

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
    <div className="ev-selector">
      <Icon name='TbSquareArrowLeftFilled' size='1.75rem' onClick={ () => onChangeItem('prev') } />
      {
        type === 'text' && (
          <div className="ev-selector-text">
            { items?.find((_, index) => index === selectedIndex) }
          </div>
        )
       }
      <Icon name='TbSquareArrowRightFilled' size='1.75rem' onClick={ () => onChangeItem('next') } />
    </div>
  );
};