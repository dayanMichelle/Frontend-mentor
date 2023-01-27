import { Input, Text } from "../../atoms";

export function Label({
  text,
  placeholder,
  width,
  value,
  setValue,
  name,
}) {
  return (
    <>
      <Text text={text} size="10px" color="#000000" />
      <Input
        setValue={setValue}
        value={value}
        placeholder={placeholder}
        width={width}
        name={name}
      />
    </>
  );
}
