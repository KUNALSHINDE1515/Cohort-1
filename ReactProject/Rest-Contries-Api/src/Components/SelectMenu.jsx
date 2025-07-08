function SelectMenu() {
    return (
        <select className="filter">
    <option value="Filter-by-resion" hidden="">
      Filter by region
    </option>
    <option value="Africa">Africa</option>
    <option value="America">America</option>
    <option value="Asia">Asia</option>
    <option value="Europe">Europe</option>
    <option value="Oceania">Oceania</option>
  </select>
    )
}

export default SelectMenu;
