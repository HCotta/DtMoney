import incomeImg from '../../assets/income.svg'
import { Container, Content } from './styles'
export function Summary() {
  return (
    <Container>
      <Content>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt='Entradas' />
        </header>
        <strong> R$ 1000,00 </strong>
      </Content>
      <Content>
        <header>
          <p>Saídas</p>
          <img src={incomeImg} alt='Saídas' />
        </header>
        <strong> R$ 500,00 </strong>
      </Content>
      <Content className="temp">
        <header>
          <p>Total</p>
          <img src={incomeImg} alt='Total' />
        </header>
        <strong> R$ 500,00 </strong>
      </Content>
    </Container>
  )
}