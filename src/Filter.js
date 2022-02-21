const Filter = ({ title, value, options, onHandleChange }) => {

  return (
    <div className="filter-container">
      <div className="filter-name">{title}</div>
      <select onChange={(e) => onHandleChange(value, e)}>
        <option value='Select All' key='Select All'>Select All</option>
        {options.map((option) => {
          return (
            <option value={option} key={option}>
              {option}
            </option>
          );
        })}Filt
      </select>
    </div>
  );
};

export default Filter;
