import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const NavigationBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [historyStack, setHistoryStack] = useState([]);

  useEffect(() => {
    const addToHistory = (url) => {
      setHistoryStack(prevStack => [...prevStack, url]);
    };

    addToHistory(location.pathname); // Añadir a la pila después de la navegación
  }, [location.pathname]);

  const goBack = () => {
    if (historyStack.length > 1) { // Asegúrate de que haya más de una URL en la pila
      const updatedHistoryStack = [...historyStack];
      updatedHistoryStack.pop(); // Eliminar la URL actual de la pila
      const previousUrl = updatedHistoryStack[updatedHistoryStack.length - 1]; // Obtener la URL anterior

      setHistoryStack(updatedHistoryStack);
      navigate(previousUrl); // Navegar a la URL anterior
    }
  };

  return (
    <div>
      <button onClick={goBack}>Back</button>
    </div>
  );
};

export default NavigationBar;
