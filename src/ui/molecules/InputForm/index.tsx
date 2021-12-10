import { Input, Label, Flex, Box, Text } from "../../atoms";
import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
  name: string;
  error?: string;
}

const InputForm = ({ labelText, name, error, ...rest }: Props) => {
  return (
    <Flex flexDirection="column">
      <Label htmlFor={name}>{labelText}</Label>
      <Box height="6px" />
      <Input
        name={name}
        paddingBottom="11px"
        paddingTop="11px"
        paddingRight="16px"
        paddingLeft="16px"
        {...rest}
      />
      <Text color="warning" textAlign="start" height="20px">
        {error}
      </Text>
    </Flex>
  );
};
export default InputForm;
