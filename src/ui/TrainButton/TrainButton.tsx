import { FC } from "react";
import './TrainButton.css';

type TProps = {
  onClick: () => void;
  text: string;
};

const TrainButton: FC<TProps> = (props: TProps) => {

  const { onClick, text } = props;

  return (
    <button 
      className="trainButton" 
      onClick={onClick}
      type='button'>
      {text}
    </button>
  );
}  

export default TrainButton;
