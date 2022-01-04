import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs'

import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Teste 1',
          amount: 2300.40,
          type: 'deposit',
          category: 'Mercado',
          createdAt: new Date('2021-02-12 09:00:00'),
        },
        {
          id: 2,
          title: 'Teste 2',
          amount: 12300.40,
          type: 'withdraw',
          category: 'Mercado',
          createdAt: new Date('2021-02-12 12:00:00'),
        },
        {
          id: 3,
          title: 'Teste 3',
          amount: 2300.40,
          type: 'deposit',
          category: 'Mercado',
          createdAt: new Date('2021-02-12 15:00:00'),
        }
      ]
    })
  },
  routes() {
    this.namespace = '/api/';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    });

  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);