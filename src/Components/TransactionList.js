const TransactionList = ({transactions, calculateRewardPoints}) => {

  return (
    <div>
      <h1 style={{margin: 4}}>Transaction List</h1> 
        <div style={{margin: "0px 10px", display: 'flex'}}>   

          <div style={{width: 800}}>
            <h4 style={{margin: 4, textDecoration: 'underline'}}>Customer:</h4>
            {transactions.sort((a,b) => new Date(b.date) - new Date(a.date)).map((transaction, index) => (
              <div key={index} style={{margin: 4}}>
                {transaction.customer}
              </div>
            ))}
          </div>

          <div style={{ width: 800, textAlign: 'center'}}>
            <h4 style={{margin: 4, textDecoration: 'underline'}}>Transaction Date:</h4>
            {transactions.map((transaction, index) => {
              const date = transaction.date.split('-')

              return (
                <div key={index} style={{margin: 4}}>
                  {`${date[1]}/${date[2]}/${date[0]}`}
                </div>
              )})}
          </div>

          <div style={{ width: 800, textAlign: 'center'}}>
            <h4 style={{margin: 4, textDecoration: 'underline'}}>Amount:</h4>
            {transactions.map((transaction, index) => (
              <div key={index} style={{margin: 4, textAlign: 'center'}}>
                {`$${transaction.amount}`}
              </div>
            ))}
          </div>

          <div style={{width: 800,textAlign: 'center'}}>
            <h4 style={{margin: 4, textDecoration: 'underline'}}>Reward Points:</h4>
            {transactions.map((transaction, index) => (
              <div key={index} style={{margin: 4, textAlign: 'center'}}>
                {calculateRewardPoints(transaction.amount)}
              </div>
            ))}
          </div>

        </div> 
    </div>
  );
};

export default TransactionList;
