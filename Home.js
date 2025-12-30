function Home() {
  return (
    <div>

      {/* Big header section */}
      <div style={{
        backgroundColor: 'black',
        color: 'white',
        textAlign: 'center',
        padding: '80px 0'
      }}>
        <h1>The Generics</h1>
      </div>

      {/* Content below */}
      <div className="container mt-5">
        <h2 className="text-center mb-4">Welcome to our Store</h2>

        <p style={{ fontSize: '18px', textAlign: 'center' }}>
          This is a demo Ecommerce website built using React and React Router.
        </p>
      </div>

    </div>
  );
}

export default Home;