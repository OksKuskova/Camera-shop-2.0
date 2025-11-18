type FilterBlockProps = {
  title: string,
  children: JSX.Element,
}

function FilterBlock({ title, children }: FilterBlockProps): JSX.Element {
  return (
    <fieldset className="catalog-filter__block">
      <legend className="title title--h5">{title}</legend>
      {children}
    </fieldset>
  )
}

export default FilterBlock;
