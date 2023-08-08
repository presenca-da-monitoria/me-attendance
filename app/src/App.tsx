import { Dashboard } from "./components/Dashboard";
import { ModalForm } from "./components/ModalForm";
import { GlobalStyle } from "./styles/global";


export function App() {
  return (
    <>
      <Dashboard/>
      <ModalForm/>
      <GlobalStyle />
    </>
  );
}