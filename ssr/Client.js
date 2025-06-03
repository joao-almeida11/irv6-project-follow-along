// this is only going to execute in the browser
import { hydrateRoot } from 'react-dom/client';
import { createElement as h } from 'react';
import App from './App';

hydrateRoot(document.getElementById('root'), h(App));

// hydrateRoot checks if the markup is good and then takes over it
// createRoot just blows the interior and creates a anew
