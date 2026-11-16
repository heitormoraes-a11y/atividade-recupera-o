export function CardConceito({ conteudo, isRevisado, onToggleRevisado }) {
  return (
    <article className={`card ${isRevisado ? 'revisado' : ''}`}>
      <div className="numero">{conteudo.numero}</div>
      <h2>{conteudo.titulo}</h2>
      <p className="explicacao">{conteudo.explicacao}</p>
      <div className="exemplo">
        <strong>Exemplo:</strong>
        <pre>{conteudo.exemplo}</pre>
      </div>
      {conteudo.erroComum && (
        <div className="erro">
          <strong>Erro comum:</strong> {conteudo.erroComum}
          <br />
          <strong>Correção:</strong> {conteudo.correcao}
        </div>
      )}
      <button onClick={onToggleRevisado} className="btn-toggle">
        {isRevisado ? 'Desmarcar como revisado' : 'Marcar como revisado'}
      </button>
    </article>
  );
}