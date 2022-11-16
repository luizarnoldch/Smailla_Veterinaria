import './input.css'
import Input from './Input'

const InputNumber = ({
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
			<input
				className={`input--number ${className}`}
				type={'number'}
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

export default InputNumber
