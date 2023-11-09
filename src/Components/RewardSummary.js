const RewardSummary = ({ transactions, calculateRewardPoints }) => {

  console.log(transactions)

  const calculateTotalPoints = (customer) => {
    return transactions
      .filter((transaction) => transaction.customer === customer)
      .reduce((total, transaction) => total + calculateRewardPoints(transaction.amount), 0);
  };

  const customers = Array.from(new Set(transactions.map((transaction) => transaction.customer)))

  return (
    <div>
      <h1 style={{ margin: 4 }}>Reward Summary</h1>
      <div style={{ margin: "0px 10px", display: 'flex' }}>

        <div style={{ flex: .2 }}>
          <h4 style={{ margin: 4, textDecoration: 'underline' }}>Customer:</h4>
          {customers.map((customer, index) => (
            <div key={index} style={{ margin: 4 }}>
              {customer}
            </div>
          ))}
        </div>

        <div>
          <h4 style={{ margin: 4, textDecoration: 'underline' }}>Total Reward Points:</h4>
          {customers.map((customer, index) => (
            <div key={index} style={{ textAlign: 'center', margin: 4 }} >
              {calculateTotalPoints(customer)}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default RewardSummary;
