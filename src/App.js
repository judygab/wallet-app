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
      </form>
      <Transactions
        data={sortBy === "" ? data : data.sort((a, b) => a[sortBy] - b[sortBy])}
        onSortByUpdate={onSortByUpdate}
        filters={filters}
      />
    </div>
  );
}
