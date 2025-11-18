import { InputHTMLAttributes } from "react"

type FilterItemBaseProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string,
}

function FilterItemBase({ label, type, value, name, checked, onChange }: FilterItemBaseProps): JSX.Element {

  return (
    <div className={`custom-${type} catalog-filter__item`}>
      <label>
        <input
          type={type}
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
        >
        </input>
        <span className={`custom-${type}__icon`}></span>
        <span className={`custom-${type}__label`}>{label}</span>
      </label>
    </div>
  )
}

export default FilterItemBase;
