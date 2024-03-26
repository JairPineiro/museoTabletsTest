import { useEffect, useState } from 'react';

const useNavigationHistory = () => {
  const [historyStack, setHistoryStack] = useState([window.location.href]);

  const addToHistory = (url) => {
    setHistoryStack(prevStack => [...prevStack, url]);
  };

  const goBack = () => {
    if (historyStack.length > 1) {
      const newHistoryStack = [...historyStack];
      newHistoryStack.pop(); 
      const previousUrl = newHistoryStack.pop(); 
      setHistoryStack(newHistoryStack);
      window.location.href = previousUrl;
    } else {
      console.log("No hay suficiente historial de navegación para retroceder.");
    }
  };

  useEffect(() => {
    addToHistory(window.location.href);
  }, []);

  return goBack;
};

export default useNavigationHistory;
