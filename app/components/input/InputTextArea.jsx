import './input.css'
import Input from './Input'

const InputTextArea = ({
	autoFocus = false,
	className,
	label,
	name,
	onChange,
	placeholder,
	value,
}) => {
	const handleChange = ({
		target: { name: input_name, value: input_value },
	}) => {
		onChange({ ...value, [input_name]: input_value })
	}

	return (
		<Input name={name} label={label}>
			<textarea
				className={`input--area ${className}`}
				value={value[name] || ''}
				name={name}
				id={name}
				placeholder={placeholder}
				onChange={e => handleChange(e)}
				autoFocus={autoFocus}
			/>
		</Input>
	)
}

export default InputTextArea
