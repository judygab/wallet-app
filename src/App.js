import "./styles.css";
import Transactions from "./Transactions";
import BalanceReview from "./BalanceReview";
import { useState } from "react";
import data from "./data.json";
import Filter from "./Filter";

export default function App() {
  const [searchText, setSearchText] = useState("");
  const [filters, setFilters] = useState({});
  const [sortBy, setSortBy] = useState("");

  const onHandleChange = (filter, e) => {
    setFilters({...filters, [filter] : e.target.value});
    console.log('get updated');
  };

  const onSortByUpdate = (sort) => {
    setSortBy(sort);
  };

  return (
    <div className="App">
      <BalanceReview amount={500} currency="$" />
      <form className="form-container">
        <input
          type="text"
          className="search-container"
          name="search"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Filter title="Category" value="category" options={data.categories} onHandleChange={onHandleChange}/>
        <div className="filters">
          {/* <label>
            Category
            <select value={category} onChange={(e) => onHandleChange(e)}>
              <option value="1">Category 1</option>
              <option value="2">Category 2</option>
            </select>
          </label>
          <label>
            Currency
            <select value={category} onChange={(e) => onHandleChange(e)}>
              <option value="1">USD</option>
              <option value="2">USD@</option>
            </select>
          </label> */}
        </div>
      </form>
      <Transactions
        data={sortBy === "" ? data : data.sort((a, b) => a[sortBy] - b[sortBy])}
        onSortByUpdate={onSortByUpdate}
        filters={filters}
      />
    </div>
  );
}
