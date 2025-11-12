import { InputHTMLAttributes } from "react"

type FilterItemBaseProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
}

function FilterItemBase({ label, type, value, name }: FilterItemBaseProps): JSX.Element {
  return (
    <div className={`custom-${type} catalog-filter__item`}>
      <label>
        <input type={type} name={name} value={value}>
          <span className="custom-radio__icon"></span>
          <span className="custom-radio__label">{label}</span>
        </input>
      </label>
    </div>
  )
}

export default FilterItemBase;
