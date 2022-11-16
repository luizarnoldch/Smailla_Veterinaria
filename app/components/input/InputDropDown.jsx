import './input.css'
import Input from './Input'

const inputDropDown = ({
	autoFocus = false,
	className,
	name,
	onChange,
	placeholder,
	value,
	data,
}) => {
	const handleChange = ({
		target: { name: input_name, value: input_value },
	}) => {
		onChange({ ...value, [input_name]: input_value })
	}

	return (
		<Input>
			<select
				className={`input--dropdown ${className}`}
				name={name}
				value={value[name]}
				onChange={e => handleChange(e)}
				autoFocus={autoFocus}
			>
				<option value=''>{placeholder}</option>
				{data.map((item, key) => (
					<option key={key} value={item.value}>
						{item.label ?? item.value}
					</option>
				))}
			</select>
		</Input>
	)
}

export default inputDropDown
