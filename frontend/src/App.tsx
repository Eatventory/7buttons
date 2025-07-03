import UserSelector from "./UserSelector";
import './App.css'

function App() {
  const buttonData = [
    { label: 'button 1', value: 14.3, color: '#EF4444' },
    { label: 'button 2', value: 14.3, color: '#3B82F6' },
    { label: 'button 3', value: 14.3, color: '#10B981' },
    { label: 'button 4', value: 14.3, color: '#F59E0B' },
    { label: 'button 5', value: 14.3, color: '#8B5CF6' },
    { label: 'button 6', value: 14.3, color: '#EC4899' },
    { label: 'button 7', value: 14.3, color: '#06B6D4' }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh', justifyContent: 'center' }}>
      <UserSelector />
      <h1>7 Buttons</h1>
      <div style={{ display: 'flex', gap: '16px' }}>
        {buttonData.map((button, idx) => (
          <button 
            key={idx} 
            style={{ 
              padding: '16px 24px', 
              fontSize: '16px',
              backgroundColor: button.color,
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
          >
            {button.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default App
