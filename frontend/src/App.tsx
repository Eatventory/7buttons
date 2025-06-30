import './App.css'

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh', justifyContent: 'center' }}>
      <h1>7개의 버튼</h1>
      <div style={{ display: 'flex', gap: '16px' }}>
        {Array.from({ length: 7 }).map((_, idx) => (
          <button key={idx} style={{ padding: '16px 24px', fontSize: '16px' }}>
            Button {idx + 1}
          </button>
        ))}
      </div>
    </div>
  )
}

export default App
