import { useState, useEffect } from 'react';
import { Alert } from 'react-native';

const useTimeAlert = () => {
  // Estado que armazena o horário atual
  const [time, setTime] = useState(new Date());

  // useEffect que exibe um alerta apenas uma vez quando o componente é montado
  useEffect(() => {
    Alert.alert('Bem-vindo!', 'Este é um app com React Native!');
  }, []); // array vazio = executa somente uma vez ao abrir

  // useEffect que atualiza o horário a cada segundo
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date()); // atualiza o estado com a hora atual
    }, 1000);

    // Limpeza do intervalo quando o componente for desmontado
    return () => clearInterval(timer);
  }, []);

  return time; // Retorna o horário atual
};

export default useTimeAlert;
