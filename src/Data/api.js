export const fetchTransactions = async () => {
    // Simulate an API call by adding a delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const transactions = [
      { customer: 'Jim', date: '2023-08-05', amount: 120.55 },
      { customer: 'Jim', date: '2023-08-15', amount: 50.43 },
      { customer: 'Jim', date: '2023-08-15', amount: 54.00},
      { customer: 'Frank', date: '2023-08-02', amount: 100 },
      { customer: 'Mary', date: '2023-08-20', amount: 149 },
      { customer: 'Mary', date: '2023-08-15', amount: 120.55 },
      { customer: 'Mary', date: '2023-09-20', amount: 35 },
      { customer: 'Jim', date: '2023-09-21', amount: 19.00},
      { customer: 'Frank', date: '2023-09-22', amount: 55 },
      { customer: 'Mary', date: '2023-09-20', amount: 70.99 },
      { customer: 'Jim', date: '2023-09-15', amount: 120.55 },
      { customer: 'Mary', date: '2023-09-15', amount: 50.43 },
      { customer: 'Frank', date: '2023-10-15', amount: 51.00},
      { customer: 'Frank', date: '2023-10-15', amount: 249 },
      { customer: 'Mary', date: '2023-10-20', amount: 50.23 },
      { customer: 'Jim', date: '2023-10-15', amount: 120.55 },
      { customer: 'Mary', date: '2023-10-11', amount: 60.43 },
      { customer: 'Mary', date: '2023-10-23', amount: 100},
      { customer: 'Frank', date: '2023-10-20', amount: 50 },
      { customer: 'Mary', date: '2023-10-20', amount: 300 },
    ];
    return transactions;
  };