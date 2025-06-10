function App() {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Simulador de Relevos</h1>
      <img
        src="https://relevos-proxy.onrender.com/stream"
        alt="Relevo en vivo"
        style={{ width: '80%', border: '2px solid black', borderRadius: '12px' }}
      />
    </div>
  );
}

export default App;
