import { FC } from 'react';
import styles from './BigTopicButton.module.scss';

type TProps = {
  onClick: () => void;
  bigText: string;
  smallText: string;
};

const BigTopicButton: FC<TProps> = (props: TProps) => {
  const { onClick, bigText, smallText } = props;

  return (
    <button 
      className={styles.bigTopicButton} 
      onClick={onClick} 
      type="button">
      <h2 className={styles.bigTopicButton__mainText}>
        {bigText}
      </h2>
      <p className={styles.bigTopicButton__text}>
        {smallText}
      </p>
    </button>
  );
};

export default BigTopicButton;
