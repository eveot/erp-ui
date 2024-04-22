import './RadioLegacy.scss';

export interface RadioLegacyProps {
  isActive: boolean;
}
/**
 * @deprecated
 */
export const RadioLegacy = (
  {
    isActive = false
  }: RadioLegacyProps) => {

  return (
    <label
      className="ev-RadioLegacy"
    >
      <div className={
        [
          "ev-RadioLegacy--box",
          isActive && "ev-RadioLegacy--box_active",
        ].join(' ')
      }>
        <div />
      </div>
    </label>
  );
};
