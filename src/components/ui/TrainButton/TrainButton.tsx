import { FC } from 'react';
import styles from './TrainButton.module.scss';

type TProps = {
  onClick: () => void;
  text: string;
  disabled?: boolean;
};

const TrainButton: FC<TProps> = (props: TProps) => {
  const { onClick, text, disabled } = props;

  return (
    <button 
      className={disabled ? styles.trainButton__disabled : styles.trainButton} 
      onClick={onClick} 
      type="button"
      disabled={disabled}>
      {text}
    </button>
  );
};

export default TrainButton;
