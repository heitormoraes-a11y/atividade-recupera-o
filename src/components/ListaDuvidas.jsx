import React from 'react';

export function ListaDuvidas({ duvidas, onAddDuvida }) {
  const [texto, setTexto] = React.useState("");

  function handleAdicionar() {
    const textoLimpo = texto.trim();
    if (textoLimpo === "") {
      return;
    }
    onAddDuvida({ id: Date.now(), texto: textoLimpo });
    setTexto("");
  }

  return (
    <section className="lista-duvidas">
      <h3>Minhas dúvidas</h3>
      <div className="input-duvida">
        <input
          type="text"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Digite sua dúvida..."
        />
        <button onClick={handleAdicionar} className="btn-add">Adicionar</button>
      </div>
      <ul>
        {duvidas.map((duvida) => (
          <li key={duvida.id}>{duvida.texto}</li>
        ))}
      </ul>
    </section>
  );
}