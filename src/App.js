import "./styles.css";
import Transactions from "./Transactions";
import BalanceReview from "./BalanceReview";
import { useState } from "react";
import data from "./data.json";
import Filter from "./Filter";
import Pagination from "./Pagination";

export default function App() {
  const [searchText, setSearchText] = useState("");
  const [filters, setFilters] = useState({});
  const [sortBy, setSortBy] = useState("");
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(10);

  const onHandleChange = (filter, e) => {
    setFilters({...filters, [filter] : e.target.value});
  };

  const onSortByUpdate = (sort) => {
    setSortBy(sort);
  };

  const onPageUpdate = (page) => setPage(page)

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
      </form>
      <Filter title="Category" value="category" options={data.categories} onHandleChange={onHandleChange}/>
      <Pagination page={page} total={total} onPageUpdate={onPageUpdate} />
      <Transactions
        data={sortBy === "" ? data : data.sort((a, b) => a[sortBy] - b[sortBy])}
        onSortByUpdate={onSortByUpdate}
        filters={filters}
      />
    </div>
  );
}
