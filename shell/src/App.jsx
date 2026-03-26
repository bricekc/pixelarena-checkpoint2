import React, { Suspense, lazy, useEffect } from 'react';
import eventBus from 'shared/eventBus';
import './App.css';

const Header = lazy(() => import('mfeHeader/Navbar'));
const Lobby  = lazy(() => import('mfeLobby/Lobby'));
const Catalog = lazy(() => import('mfeCatalog/Catalog'));

function LoadingFallback({ name }) {
  return <div className="loading-fallback">Chargement {name}...</div>;
}

function App() {
  useEffect(() => {
    eventBus.on('cart:add', (product) => {    });
  }, []);
  return (
    <div className="shell">
      <Suspense fallback={<LoadingFallback name="Header" />}>
        <Header />
      </Suspense>

      <main className="shell-content">
        <div className="content-grid">
          <section className="section">
            <Suspense fallback={<LoadingFallback name="Lobby" />}>
              <Lobby />
            </Suspense>
          </section>

          <section className="section">
            <Suspense fallback={<LoadingFallback name="Catalog" />}>
              <Catalog />
            </Suspense>
          </section>
        </div>
      </main>

      <footer className="shell-footer">
        <p>Shell (3000) | Header MFE (3001) | Lobby MFE (3002)</p>
        <p className="hint">Ouvrez la console pour voir les evenements Event Bus</p>
      </footer>
    </div>
  );
}

export default App;
