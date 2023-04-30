interface Props {
  buttonLabel: string;
  onClick: () => void;
}

const Button = ({ buttonLabel, onClick }: Props) => {
  return (
    <button className="btn btn-dark" onClick={onClick}>
      {buttonLabel}
    </button>
  );
};

export default Button;
