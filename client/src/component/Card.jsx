import { Button, Image, Text, VStack } from "@chakra-ui/react";
export const Card = ({ amount, img, checkoutHanlder }) => {
  return (
    <VStack>
      <Image src={img} boxSize={"64"} objectFit="cover" />
      <Text>{amount}</Text>
      <Button onClick={checkoutHanlder}>Buy Now</Button>
    </VStack>
  );
};
