import { FC } from "react";
import './TopicButton.css';

type TProps = {
  onClick: () => void;
  text: string;
};

const TopicButton: FC<TProps> = (props: TProps) => {

  const { onClick, text } = props;

  return (
    <button  
      className="topicButton" 
      onClick={onClick}
      type='button'>
      <p className="topicButton__item-text">
        {text}
      </p>
    </button>
  );
}  

export default TopicButton;
