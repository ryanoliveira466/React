// Define um tipo chamado 'Task' que descreve a estrutura de um objeto tarefa
export type Task = {
  // 'id' é uma string que identifica unicamente a tarefa (geralmente um UUID ou similar)
  id: string;

  // 'texto' é uma string que representa o conteúdo ou descrição da tarefa
  texto: string;

  // 'user' é uma string que identifica o usuário associado a essa tarefa (pode ser um id ou email)
  user: string;
};
