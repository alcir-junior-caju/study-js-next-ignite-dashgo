import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import Link from 'next/link';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from 'react-query';

import { Input } from "../../components/Form/Input";
import Header from "../../components/Header/Index";
import Sidebar from "../../components/Sidebar/Index";
import { queryClient } from "../../services/queryClient";
import { useRouter } from "next/router";

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

const CreateUserFormSchema = yup.object().shape({
  name: yup.string().required('Preencha seu nome'),
  email: yup.string().required('Preencha seu e-mail').email('E-mail inválido'),
  password: yup.string().required('Preencha sua senha').min(6, 'No mínimo 6 caracteres'),
  password_confirmation: yup.string().oneOf([
    null,
    yup.ref('password')
  ], 'As senhas precisam ser iguais')
});

const CreateUser = () => {
  const router = useRouter();
  const createUser = useMutation(async (user: CreateUserFormData) => {
    const newUser = {
      ...user,
      created_at: new Date()
    };

    const response = await fetch('http://localhost:3000/api/users', {
      method: 'POST',
      body: JSON.stringify({ user: newUser }),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    });
    const data = await response.json();
    console.log(data);

    return data;
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries('users');
    }
  });
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(CreateUserFormSchema)
  });
  const { isSubmitting, errors } = formState;

  const handleCreateUser:SubmitHandler<CreateUserFormData> = async (values) => {
    await createUser.mutateAsync(values);
    router.push('/users');
  };

  return (
    <Box>
      <Header />

      <Flex w="100%" my={6} maxW={1480} mx="auto" px={6}>
        <Sidebar />

        <Box
          as="form"
          flex={1}
          borderRadius={8}
          bg="gray.800"
          p={[6, 8]}
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size="lg" fontWeight="normal">Criar usuário</Heading>

          <Divider my={6} borderColor="gray.700" />

          <VStack spacing={[6, 8]}>
            <SimpleGrid minChildWidth="240px" spacing={[6, 8]} w="100%">
              <Input
                name="name"
                label="Nome Completo"
                error={errors.name}
                {...register('name')}
              />
              <Input
                name="email"
                type="email"
                label="E-mail"
                error={errors.email}
                {...register('email')}
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={[6, 8]} w="100%">
              <Input
                name="password"
                type="password"
                label="Senha"
                error={errors.password}
                {...register('password')}
              />
              <Input
                name="password_confirmation"
                type="password"
                label="Confirmação de senha"
                error={errors.password_confirmation}
                {...register('password_confirmation')}
              />
            </SimpleGrid>
          </VStack>

          <Flex mt={8} justify="flex-end">
            <HStack spacing={4}>
              <Link href="/users" passHref>
                <Button as="a" colorScheme="whiteAlpha">Cancelar</Button>
              </Link>
              <Button type="submit" colorScheme="pink" isLoading={isSubmitting}>Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default CreateUser;
