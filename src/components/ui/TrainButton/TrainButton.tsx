import { FC } from 'react';
import styles from './TrainButton.module.scss';

type TProps = {
  onClick: () => void;
  text: string;
  ref?: any;
};

const TrainButton: FC<TProps> = (props: TProps) => {
  const { onClick, text, ref } = props;

  return (
    <button 
      className={styles.trainButton} 
      onClick={onClick} 
      type="button"
      ref={ref}>
      {text}
    </button>
  );
};

export default TrainButton;
