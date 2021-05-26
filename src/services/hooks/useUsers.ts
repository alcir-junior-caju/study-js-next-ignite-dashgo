import { useQuery } from 'react-query';

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

type GetUsersResponse = {
  totalCount: number;
  users: User[];
};

export const getUsers = async (page: number): Promise<GetUsersResponse> => {
  const response = await fetch(`http://localhost:3000/api/users?page=${page}`);
  const data = await response.json();
  const totalCount = Number(response.headers.get('x-total-count'));

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

  return {
    users,
    totalCount
  };
}

const useUsers = (page: number) => {
  return useQuery(['users', page], () => getUsers(page), {
    staleTime: 1000 * 60 * 10, // 10 minutes
  });
};

export default useUsers;
