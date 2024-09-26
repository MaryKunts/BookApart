import React from 'react';

import AppHeader from './features/header/header';
import AppFooter from './features/footer/footer';
import AppContent from './features/content/content';

const App = () => {
  return (
    <div className='app-container'>
      <AppHeader />
      <AppContent />
      <AppFooter />
    </div>
  )
};

export default App;