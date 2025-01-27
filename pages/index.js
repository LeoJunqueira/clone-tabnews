function Home() {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(to right, #ffd1d1, #ff9ecd)',
        margin: 0,
        padding: 0
      }}>
        <div style={{
          textAlign: 'center',
          padding: '2rem',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          borderRadius: '24px',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
          maxWidth: '600px',
          margin: '1rem'
        }}>
          <div style={{
            fontSize: '3rem',
            marginBottom: '1rem',
            animation: 'pulse 1.5s infinite'
          }}>❤️</div>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#ff6b6b',
            marginBottom: '1rem',
            whiteSpace: 'pre-line'
          }}>
            Grazi, eu te amo!
            
            Se me ama também quero ouvir tu gritar isso aí do quarto!
          </h1>
          <div style={{
            fontSize: '3rem',
            animation: 'pulse 1.5s infinite'
          }}>❤️</div>
          <style>{`
            @keyframes pulse {
              0% { transform: scale(1); }
              50% { transform: scale(1.2); }
              100% { transform: scale(1); }
            }
          `}</style>
        </div>
      </div>
    );
  }
  
  export default Home;