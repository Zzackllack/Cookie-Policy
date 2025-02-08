import Header from './components/Header';
import Container from './components/Container';
import PolicyContent from './components/PolicyContent';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-8 md:py-12">
        <Container>
          <PolicyContent />
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;