export function Header({ revisados, total }) {
  return (
    <header>
      <h1>React em Prática — Guia Interativo</h1>
      <div className="contador">Conteúdos revisados: {revisados}/{total}</div>
    </header>
  );
}