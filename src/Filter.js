const Filter = ({ title, value, options, onHandleChange }) => {

  return (
    <div className="filter-container">
      <div className="filter-name">{title}</div>
      <select className="filter-select grey" onChange={(e) => onHandleChange(value, e)}>
        <option value='Select All' key='Select All'>Select All</option>
        {options.map((option) => {
          return (
            <option value={option} key={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Filter;
