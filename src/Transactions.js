const COLUMNS = ["name", "amount", "date", "category"];

const Transactions = ({ transactions, onSortByUpdate, filters }) => {

  // if filters are set, filter out the data
  if (Object.keys(filters).length > 0) {
    Object.keys(filters).forEach((item) => {

      // check if a value exists
      if (filters[item] && filters[item] !== "Select All") {
        console.log(filters[item]);
        transactions = transactions.filter((transaction) => transaction.category === filters[item]);
        console.log(transactions);
      }
    })
  }
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            {COLUMNS.map((col) => {
              return (
                <th width="20%" key="col" onClick={() => onSortByUpdate(col)}>
                  {col}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {transactions && transactions.length > 0 && transactions.map((transaction) => {
            return (
              <tr>
                <td width="20%">{transaction.name}</td>
                <td width="20%">{transaction.amount}</td>
                <td width="20%">{transaction.date}</td>
                <td width="20%">{transaction.category}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
