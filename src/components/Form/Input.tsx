import { FormControl, FormErrorMessage, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction, memo } from "react";
import { FieldError } from "react-hook-form";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error: FieldError;
}

const InputBaseComponent: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, label, error, ...rest }, ref) => {
  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        name={name}
        id={name}
        focusBorderColor="pink.500"
        bg="gray.900"
        variant="filled"
        size="lg"
        _hover={{
          bg: 'gray.900'
        }}
        {...rest}
      />

      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export const Input = memo(forwardRef(InputBaseComponent));
