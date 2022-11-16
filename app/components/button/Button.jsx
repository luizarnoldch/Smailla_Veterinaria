import './button.css'

const Button = ({
  type,
  onClick,
  className,
  children,
  ...props
}) => {
  return (
    <button type={type} onClick={onClick} className={`button ${className}`} {...props} >
      {children}
    </button>
  )
}

export default Button