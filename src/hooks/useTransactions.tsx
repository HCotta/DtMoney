import { createContext, ReactNode, useContext, useEffect } from 'react';
import { api } from '../services/api';
import usePersistedState from '../util/usePersistedState';
interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

// interface TransactionInput {
//   title: string;
//   amount: number;
//   type: string;
//   category: string;
// }

// type TransactionInput = Pick<Transaction, 'title' | 'amount' | 'type' | 'category'>;

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionProviderProps {
  children: ReactNode;
}

interface TransactionsContextDate {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
  removeTransaction: (id: number) => void;
}

export const TransactionsContext = createContext<TransactionsContextDate>(
  {} as TransactionsContextDate
);

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = usePersistedState<Transaction[]>("@dtMoney", []);

  useEffect(() => {
    api.get('/transactions')
      .then(response => setTransactions(response.data.transactions))
  });

  async function createTransaction(transactionInput: TransactionInput) {
    try {

      const newTransaction = {
        ...transactionInput,
        createdAt: new Date(),
      };

      const response = await api.post('/transactions', newTransaction);

      const { transaction } = response.data;

      setTransactions([
        ...transactions,
        transaction
      ])

    } catch (error) {

      const transaction: Transaction = {
        createdAt: new Date().toDateString(),
        id: transactions.length + 1,
        ...transactionInput
      };

      let newTransactions = [
        ...transactions,
        transaction
      ];

      setTransactions(newTransactions);
    }

  };

  async function removeTransaction(id: number) {
    try {
      const response = await api.delete(`/transactions/${id}`);
      const newListTransactions = response.data;
      setTransactions(newListTransactions);
    } catch (error) {
      const newListTransactions = transactions.filter(transaction => id !== transaction.id);
      setTransactions(newListTransactions);
    }

  };

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction, removeTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions() {
  const context = useContext(TransactionsContext);

  return context;
}