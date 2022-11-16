import './input.css'
import Input from './Input'

const InputFile = ({
	autoFocus = false,
	className,
	label,
	name,
	onChange,
	placeholder,
	value,
}) => {
	const handleChange = ({
		target: { name: input_name, files: input_files },
	}) => {
		onChange({ ...value, [input_name]: input_files[0] })
	}
	return (
		<Input name={name} label={label}>
			<input
				className={`input--file ${className}`}
				type={'file'}
				name={name}
				id={name}
				placeholder={placeholder}
				onChange={e => handleChange(e)}
				autoFocus={autoFocus}
			/>
		</Input>
	)
}

export default InputFile
