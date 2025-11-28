import { InputHTMLAttributes, KeyboardEvent } from "react"
import { toKebabCase } from "../form-filter.utils";
import { Keys } from "../../../constants/keyboard-keys.const";

type FilterItemBaseProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
  label: string,
  onToggle: () => void
}

function FilterItemBase({ label, type, value, name, checked, disabled, onToggle }: FilterItemBaseProps): JSX.Element {
  const htmlName = name ? toKebabCase(name) : '';
  const htmlValue = value ? toKebabCase(String(value)) : '';

  const handleInputChange = () => onToggle();

  const handleKeyDown = (evt: KeyboardEvent<HTMLInputElement>) => {
    if (evt.key === Keys.ENTER) {
      evt.preventDefault();
      onToggle();
    }
  }

  return (
    <div className={`custom-${type} catalog-filter__item`}>
      <label>
        <input
          type={type}
          name={htmlName}
          value={htmlValue}
          checked={checked}
          disabled={disabled}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <span className={`custom-${type}__icon`}></span>
        <span className={`custom-${type}__label`}>{label}</span>
      </label>
    </div>
  )
}

export default FilterItemBase;
