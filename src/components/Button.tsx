interface ButtonPropsInterface {
  onClick: () => void
  text: string;
}

const Button = ({ onClick, text }: ButtonPropsInterface) => {
  return (
    <div>
      <button onClick={onClick}>{text}</button>
    </div>
  )
}

export default Button