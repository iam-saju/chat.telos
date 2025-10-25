import { useEffect, useState } from 'react';
import ChatInterface from './features/chat/ChatInterface';
import TypographyPlayground from './playground/TypographyPlayground';

const TYPOGRAPHY_HASH = 'typography';

const getIsTypographyView = () => {
  if (typeof window === 'undefined') {
    return false;
  }

  return window.location.hash.replace('#', '').toLowerCase() === TYPOGRAPHY_HASH;
};

const App = () => {
  const [isTypographyView, setIsTypographyView] = useState<boolean>(() => getIsTypographyView());

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const syncFromHash = () => {
      setIsTypographyView(getIsTypographyView());
    };

    window.addEventListener('hashchange', syncFromHash);
    return () => window.removeEventListener('hashchange', syncFromHash);
  }, []);

  return isTypographyView ? <TypographyPlayground /> : <ChatInterface />;
};

export default App;
