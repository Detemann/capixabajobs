import './App.scss';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

function App() {
  let isDarkMode = false;

  const setTheme = (newValue) => {
    console.log('isDarkMode antes: ', isDarkMode);
    isDarkMode = newValue;
    console.log('isDarkMode depois: ', isDarkMode);
  }

  return (
    <div className={ `d-flex ${isDarkMode ? 'dark-theme' : 'light-theme'}` }>
      <header className="app-header bg-primary-800 d-flex justify-content-between">
        <span className="text-light hover cursor-pointer">
          <DarkModeIcon className="theme-icon" onClick={ () => setTheme(true) } />
        </span>
        <span className="text-light hover cursor-pointer">
          <LightModeIcon className="theme-icon" onClick={ () => setTheme(false) } />
        </span>
      </header>
    </div>
  );
}

export default App;
