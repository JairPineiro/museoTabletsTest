import { useEffect } from 'react';

const useGoBack = () => {
  const handleGoBack = () => {
    window.history.back();
  };

  useEffect(() => {
    const backButtonHandler = () => {
      document.addEventListener('keydown', handleGoBack);
    };

    backButtonHandler();

    return () => {
      document.removeEventListener('keydown', handleGoBack);
    };
  }, []);

  return handleGoBack; // Devuelve la función handleGoBack
};

export default useGoBack;
