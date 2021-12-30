import { Container } from './styles'
export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de web</td>
            <td className="deposit">R$ 2000,00</td>
            <td>Desenvolvimento</td>
            <td>30/12/2021</td>
          </tr>
          <tr>
            <td>Compra do servidor web</td>
            <td className="withdraw">R$ 1000,00</td>
            <td>Desenvolvimento</td>
            <td>30/12/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}