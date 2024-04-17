import { FC } from "react";
import './BigTopicButton.css';

type TProps = {
  onClick: () => void;
  bigText: string;
  smallText: string;
};

const BigTopicButton: FC<TProps> = (props: TProps) => {

  const { onClick, bigText, smallText } = props;

  return (
    <button 
      className="bigTopicButton" 
      onClick={onClick}
      type='button'
    >
      <h2 className="bigTopicButton__main-text">
        {bigText}
      </h2>
      <p className="bigTopicButton__text">
        {smallText}
      </p>
    </button>
  );
}  

export default BigTopicButton;