 import ButtonFatec from './components/buttonfatec/ButtonFatec'
 import InputDados from './components/inputdados/InputDados';
 import './App.css'



function App() {
  return (
    <>
      <h1> Entre em contato</h1>
      <hr />
      <form>
        <InputDados label="Nome" type='text'/>
        <InputDados label="email" type='email'/>
        <InputDados label="telefone" type='number'/>
      </form>
      <hr />
      <ButtonFatec label="Fatec: enviar mensagem" type="button" />
    </>
  )
}

export default App
