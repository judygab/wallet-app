import "./styles.css";
import Transactions from "./Transactions";
import BalanceReview from "./BalanceReview";
import { useEffect, useState } from "react";
import data from "./data.json";
import Filter from "./Filter";
import Pagination from "./Pagination";
import { faker } from '@faker-js/faker';

export default function App() {
  const [searchText, setSearchText] = useState("");
  const [filters, setFilters] = useState({});
  const [sortBy, setSortBy] = useState("");
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(10);
  const [transactions, setTransactions] = useState([]);
  const [resultsPerPage, setResultsPerPage] = useState(5);

  useEffect(() => {
    generateTransactions();
  }, [])

  const generateTransactions = () => {
    let fakeTransactions = [];
    for (let i = 0; i < 10; i++) {
      let fakeTransaction = {
        name: faker.company.bsBuzz(),
        amount: faker.commerce.price(),
        date: faker.date.past().toDateString(),
        category: data.categories[Math.abs(i % data.categories.length)]
      };
      fakeTransactions.push(fakeTransaction);
    }
    setTransactions(fakeTransactions);
  }

  const onHandleChange = (filter, e) => {
    setFilters({...filters, [filter] : e.target.value});
  };

  const onSortByUpdate = (sort) => {
    setSortBy(sort);
  };

  const onPageUpdate = (page) => {
    setPage(page)
  }

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
      <div className="modify-search-container">
        <div className="filters-container">
          <Filter title="Category" value="category" options={data.categories} onHandleChange={onHandleChange}/>
          <Filter title="Year" value="year" options={data.years} onHandleChange={onHandleChange}/>
        </div>
        <Pagination page={page} total={total} onPageUpdate={onPageUpdate} />
      </div>
      <Transactions
        transactions={sortBy === "" ? transactions.slice(resultsPerPage * page, resultsPerPage * (page + 1)) : transactions.sort((a, b) => a[sortBy] - b[sortBy]).slice(resultsPerPage * page, resultsPerPage * (page + 1))}
        onSortByUpdate={onSortByUpdate}
        filters={filters}
      />
    </div>
  );
}
