import { FC } from 'react';
import styles from './TopicButton.module.scss';

type TProps = {
  onClick: () => void;
  text: string;
};

const TopicButton: FC<TProps> = (props: TProps) => {
  const { onClick, text } = props;

  return (
    <button className={styles.topicButton} onClick={onClick} type="button">
      <p className={styles.topicButton__itemText}>{text}</p>
    </button>
  );
};

export default TopicButton;
