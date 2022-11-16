import './input.css'
const Input = ({ name, label, children }) => {
	return (
		<div className='input'>
			{label && (
				<label className='input--label' htmlFor={name}>
					{label}
				</label>
			)}
			{children}
		</div>
	)
}

export default Input
