import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useAutoRedirect = (path, delay) => {
  const navigate = useNavigate();

  useEffect(() => {
    let timeoutId;

    const handleInactivity = () => {
      timeoutId = setTimeout(() => {
        navigate(path);
      }, delay);
    };

    const resetInactivityTimeout = () => {
      clearTimeout(timeoutId);
      handleInactivity();
    };

    const events = ['mousemove', 'keydown', 'mousedown', 'touchstart'];

    events.forEach(event => {
      window.addEventListener(event, resetInactivityTimeout);
    });

    resetInactivityTimeout();

    return () => {
      events.forEach(event => {
        window.removeEventListener(event, resetInactivityTimeout);
      });
      clearTimeout(timeoutId);
    };
  }, [navigate, path, delay]);
};

export default useAutoRedirect;
