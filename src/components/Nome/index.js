import { UserContext } from "../../contexts/user";
import { useContext } from "react";

function Nome() {
  const { alunos, setAlunos } = useContext(UserContext);
  return (
    <div>
      <h2>Componente Nome</h2>
      <span style={{ color: "#ff0000" }}>Bem vindo: {alunos}</span>
      <br />
      <br />
      <button onClick={() => setAlunos("Nome trocado")}>Troca nome</button>
    </div>
  );
}

export default Nome;
