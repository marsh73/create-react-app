import React from 'react';
import './App.css';
import ImportIconSprite from 'walrus/build/components/ImportIconSprite';


const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
      <ImportIconSprite
        url={`https://ui.digitalocean.com/1.0.0/icons.svg`}
      />
      </header>
    </div>
  );
}

export default App;
