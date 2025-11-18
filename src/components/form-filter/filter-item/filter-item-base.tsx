import { InputHTMLAttributes } from "react"
import { toKebabCase } from "../form-filter.utils";

type FilterItemBaseProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string,
}

function FilterItemBase({ label, type, value, name, checked, onChange }: FilterItemBaseProps): JSX.Element {
  const htmlName = name ? toKebabCase(name) : '';
  const htmlValue = value ? toKebabCase(String(value)) : '';

  return (
    <div className={`custom-${type} catalog-filter__item`}>
      <label>
        <input
          type={type}
          name={htmlName}
          value={htmlValue}
          checked={checked}
          onChange={onChange}
        />
        <span className={`custom-${type}__icon`}></span>
        <span className={`custom-${type}__label`}>{label}</span>
      </label>
    </div>
  )
}

export default FilterItemBase;
