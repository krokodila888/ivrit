import { FC } from 'react';
import styles from './TrainButton.module.scss';

type TProps = {
  onClick: () => void;
  text: string;
};

const TrainButton: FC<TProps> = (props: TProps) => {
  const { onClick, text } = props;

  return (
    <button 
      className={styles.trainButton} 
      onClick={onClick} 
      type="button">
      {text}
    </button>
  );
};

export default TrainButton;
