import { useEffect, useState } from 'react';
import { fetchTransactions } from './Data/api';
import TransactionList from './Components/TransactionList';
import RewardSummary from './Components/RewardSummary';

function App() {
  const [transactions, setTransactions] = useState([]);

  const fetchData = async () => {
    const data = await fetchTransactions();
    setTransactions(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const calculateRewardPoints = (amount) => {
    if (amount > 100) {
      return Math.floor(amount - 100) * 2 + 50;
    } else if (amount >= 50) {
      return Math.floor(amount - 50);
    }
    return 0;
  };

  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', rowGap: 50 }}>
      <h1 style={{ textAlign: 'center' }}>Rewards Program</h1>
      {transactions.length ?
        <>
          <TransactionList transactions={transactions} calculateRewardPoints={calculateRewardPoints} />
          <RewardSummary transactions={transactions} calculateRewardPoints={calculateRewardPoints} />
        </>
        :
        <div style={{ textAlign: 'center' }}>Loading...</div>
      }
    </div>
  );
}

export default App;
