import { Icon } from '@components/Icon';
import { FC, useEffect, useState } from 'react';
import './style.scss';
export const colorsDefault = [
  [28, 31, 33],
  [39, 42, 44],
  [49, 46, 44],
  [53, 38, 28],
  [75, 50, 31],
  [92, 59, 36],
  [109, 76, 53],
  [107, 80, 59],
  [118, 92, 69],
  [127, 104, 78],
  [153, 129, 93],
  [167, 147, 105],
  [175, 156, 112],
  [187, 160, 99],
  [214, 185, 123],
  [218, 195, 142],
  [159, 127, 89],
  [132, 80, 57],
  [104, 43, 31],
  [97, 18, 12],
  [100, 15, 10],
  [124, 20, 15],
  [160, 46, 25],
  [182, 75, 40],
  [162, 80, 47],
  [170, 78, 43],
  [98, 98, 98],
  [128, 128, 128],
  [170, 170, 170],
  [197, 197, 197],
  [70, 57, 85],
  [90, 63, 107],
  [118, 60, 118],
  [237, 116, 227],
  [235, 75, 147],
  [242, 153, 188],
  [4, 149, 158],
  [2, 95, 134],
  [2, 57, 116],
  [63, 161, 106],
  [33, 124, 97],
  [24, 92, 85],
  [182, 192, 52],
  [112, 169, 11],
  [67, 157, 19],
  [220, 184, 87],
  [229, 177, 3],
  [230, 145, 2],
  [242, 136, 49],
  [251, 128, 87],
  [226, 139, 88],
  [209, 89, 60],
  [206, 49, 32],
  [173, 9, 3],
  [136, 3, 2],
  [31, 24, 20],
  [41, 31, 25],
  [46, 34, 27],
  [55, 41, 30],
  [46, 34, 24],
  [35, 27, 21],
  [2, 2, 2],
  [112, 108, 102],
  [157, 122, 80]
];

interface SelectorProps {
  perSwitch?: number;
  disabled?: boolean
  onChange?: (value: number) => void
}

export const ColorSelector: FC<SelectorProps> = ({ perSwitch, disabled, onChange }) => {
  const [value, setValue] = useState(0);
  const colorsPerSwitch = perSwitch || 7;
  
  const updateSwitcher = (variant: 'prev' | 'next') => {
    let nextIndex;
    if (variant === 'prev') {
      nextIndex = (value - 1 + colorsDefault.length) % colorsDefault.length;
    } else {
      nextIndex = (value + 1) % colorsDefault.length;
    }
    setValue(nextIndex);
  };

  useEffect(() => {
    if (onChange) {
      onChange(value);
    }
  }, [value])
  
  const startColorIndex = (value - Math.floor(colorsPerSwitch / 2) + colorsDefault.length) % colorsDefault.length;
  
  const activeColors = Array.from({ length: colorsPerSwitch }, (_, i) => {
    const colorIndex = (startColorIndex + i) % colorsDefault.length;
    return colorsDefault[colorIndex];
  });
  
  return (
    <div className="ev-color-selector" data-disabled={ disabled }>
      <Icon name='TbSquareArrowLeftFilled' size='1.75rem' onClick={ () => updateSwitcher('prev') } />
      <div className="ev-color-selector-colors">
        {
          activeColors.map((color, index) => (
            <div
              key={ index }
              onClick={ () => {
                const selectedColorIndex = (startColorIndex + index) % colorsDefault.length;
                setValue(selectedColorIndex);
              } }
              style={{ backgroundColor: `rgb(${color.join(', ')})` }}
              className={ `ev-components--color-switcher_value ${value === (startColorIndex + index) % colorsDefault.length && 'ev-components--color-switcher_value--active'}` }
            />
          ))
        }
      </div>
      <Icon name='TbSquareArrowRightFilled' size='1.75rem' onClick={ () => updateSwitcher('next') } />
    </div>
  );
};