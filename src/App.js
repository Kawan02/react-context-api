import { useState } from "react";
import Alunos from "./components/Alunos";
function App() {
  const [nomeAluno, setNomeAluno] = useState("Lucas");
  return (
    <div>
      <h1>Props</h1>
      <hr />

      <Alunos nome={nomeAluno} mudaNome={setNomeAluno} />
    </div>
  );
}

export default App;
