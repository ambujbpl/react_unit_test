import React from 'react';
import './App.css';
import { Loader } from './component/Loader';
import { Application } from './component/application/Application';
import { Skills } from './component/skills/Skills';
import { Counter } from './component/counter/Counter';
import { MuiMode } from './component/mui/MuiMode';
import { AppProviders } from './providers/AppProviders'

function App() {
  let currentPage: string = 'Counter';
  // function renderComponent() {
  let htmlForRender: any = undefined;
  switch (currentPage.trim().toLocaleLowerCase()) {
    case 'application':
      htmlForRender = <Application />
      break;
    case 'skills':
      htmlForRender = <Skills skills={['Swim', 'Dance', 'Singing', 'Sports']} />
      break;
    case 'counter':
      htmlForRender = <Counter />
      break;
    default:
      htmlForRender = <Loader />
      break;

    // return htmlForRender;
  }
  // }
  return (
    <AppProviders>
      <div className='App'>
        <MuiMode />
        <br />
        <br />
        {htmlForRender}
      </div>
    </AppProviders>
  );
}

export default App;
