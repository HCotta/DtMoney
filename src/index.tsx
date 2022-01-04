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
          createdAt: new Date(),
        },
        {
          id: 2,
          title: 'Teste 2',
          amount: 1200.40,
          type: 'withdraw',
          category: 'Mercado',
          createdAt: new Date(),
        },
        {
          id: 3,
          title: 'Teste 3',
          amount: 2300.40,
          type: 'deposit',
          category: 'Mercado',
          createdAt: new Date(),
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
      console.log(data);
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