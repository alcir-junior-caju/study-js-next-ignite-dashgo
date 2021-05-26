import { useQuery } from 'react-query';

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

export const getUsers = async (): Promise<User[]> => {
  const response = await fetch('http://localhost:3000/api/users');
  const data = await response.json();

  const users = data.users.map(user => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      }),
    };
  });

  return users;
}

const useUsers = () => {
  return useQuery('users', getUsers, {
    staleTime: 1000 * 5 // 5 seconds
  });
};

export default useUsers;
