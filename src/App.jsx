import { useState } from 'react';
import { conteudos } from './data/conteudos.js';
import { Header } from './components/Header.jsx';
import { CardConceito } from './components/CardConceito.jsx';
import { ListaDuvidas } from './components/ListaDuvidas.jsx';
import './App.css';

export default function App() {
  const [revisados, setRevisados] = useState([]);
  const [duvidas, setDuvidas] = useState([]);

  function toggleRevisado(id) {
    setRevisados((prev) => {
      if (prev.includes(id)) {
        return prev.filter((itemId) => itemId !== id);
      }
      return [...prev, id];
    });
  }

  function adicionarDuvida(novaDuvida) {
    setDuvidas((prev) => [...prev, novaDuvida]);
  }

  return (
    <div className="app">
      <Header revisados={revisados.length} total={conteudos.length} />
      <main className="conteudo">
        {conteudos.map((item) => (
          <CardConceito
            key={item.id}
            conteudo={item}
            isRevisado={revisados.includes(item.id)}
            onToggleRevisado={() => toggleRevisado(item.id)}
          />
        ))}
      </main>
      <ListaDuvidas duvidas={duvidas} onAddDuvida={adicionarDuvida} />
    </div>
  );
}