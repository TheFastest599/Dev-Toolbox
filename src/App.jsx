import { useEffect, useState } from 'react';
import TabBar from './components/TabBar.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import JSONFormatter from './components/JSONFormatter.jsx';
import Base64Tool from './components/Base64Tool.jsx';

const TABS = [
  { name: 'JSON Formatter', key: 'json' },
  { name: 'Base64 Encoder/Decoder', key: 'base64' },
];

function App() {
  const [tab, setTab] = useState('json');
  const [dark, setDark] = useState(false);

  document.title = 'Dev Toolbox - JSON Formatter & Base64 Encoder/Decoder';

  useEffect(() => {
    const saved = localStorage.getItem('devtoolbox-dark');
    let isDark = false; // default to light mode
    if (saved !== null) {
      isDark = saved === 'true';
    }
    setDark(isDark);
    document.documentElement.setAttribute(
      'data-theme',
      isDark ? 'dark' : 'light'
    );
  }, []);

  const toggleDark = () => {
    setDark(d => {
      const newDark = !d;
      localStorage.setItem('devtoolbox-dark', newDark);
      document.documentElement.setAttribute(
        'data-theme',
        newDark ? 'dark' : 'light'
      );
      return newDark;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-200 dark:from-gray-900 dark:via-gray-950 dark:to-gray-800 text-gray-900 dark:text-gray-100">
      <Header dark={dark} toggleDark={toggleDark} />
      <TabBar tabs={TABS} activeTab={tab} setActiveTab={setTab} />
      <div className="max-w-2xl mx-auto bg-white/80 dark:bg-gray-950/80 shadow-2xl rounded-2xl p-8 backdrop-blur-md border border-gray-200 dark:border-gray-800">
        {tab === 'json' && <JSONFormatter dark={dark} />}
        {tab === 'base64' && <Base64Tool dark={dark} />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
