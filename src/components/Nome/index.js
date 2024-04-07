function Nome({ nome, mudaNome }) {
  return (
    <div>
      <h2>Componente Nome</h2>
      <span style={{ color: "#ff0000" }}>Bem vindo: {nome}</span>
      <br />
      <br />
      <button onClick={() => mudaNome("Alterando o nome")}>Trocar nome</button>
    </div>
  );
}

export default Nome;
