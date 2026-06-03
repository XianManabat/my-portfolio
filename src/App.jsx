import { SiGmail,  SiInstagram, SiFacebook } from 'react-icons/si'

function App() {
  return (
    <div style={{ backgroundColor: '#111827', minHeight: '100vh' }}>
      
      {/* Navbar */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        padding: '16px 32px',
        borderBottom: '1px solid #374151'
      }}>
        <h1 style={{ color: 'white', fontWeight: 'bold', fontSize: '20px', margin: 0 }}>
          Jeremiah Felix M. Manabat
        </h1>
          
        <ul style={{ 
          display: 'flex', 
          gap: '32px', 
          listStyle: 'none', 
          margin: 0, 
          padding: 0,
          alignItems: 'center'
        }}>
          <li style={{ color: '#d1d5db', cursor: 'pointer' }}>Home</li>
          <li style={{ color: '#d1d5db', cursor: 'pointer' }}>Resume</li>
          <li style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
            <SiGmail style={{ color: '#d1d5db', fontSize: '20px' }} />
          </li>
          <li style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
            <SiInstagram style={{ color: '#d1d5db', fontSize: '20px' }} />
          </li>
          <li style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
            <SiFacebook style={{ color: '#d1d5db', fontSize: '20px' }} />
          </li>
        </ul>
      </div>

      {/* Main content */}
      <div style={{ textAlign: 'center', paddingTop: '120px', color: 'white' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '16px' }}>Computer Engineering Student</h2>
        <p style={{ color: '#9ca3af', fontSize: '18px' }}>Pampanga State University</p>
      </div>

    </div>
  )
}

export default App