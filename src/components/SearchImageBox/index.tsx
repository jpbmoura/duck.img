import React from "react";

import { Center, Image, Button, Input, Flex, useToast } from "@chakra-ui/react";
import { auth, baseUrl, getRandomPhoto } from "../../constants/globalConstans";

const SearchImageBox = () => {
  const toast = useToast();

  const [searchText, setSearchText] = React.useState<string>();
  const [image, setImage] = React.useState<string>();

  const searchImage = async () => {
    fetch(
      `${baseUrl}${getRandomPhoto}?query=${searchText}&per_page=1&client_id=${auth}`
    )
      .then((response) => {
        if (response.ok === true) {
          return response.json();
        } else {
          setImage("");
          toast({
            title: "Hmmm",
            description: "Não faço ideia do que seja isso",
            status: "warning",
            duration: 5000,
            isClosable: true,
          });
        }
      })
      .then((data: any) => {
        setImage(data.urls.regular);
      });
  };

  return (
    <>
      <Center>
        <Flex direction={"column"} align="center">
          <Image marginBottom={3} borderRadius="md" src={image} />
          <Input
            textAlign={"center"}
            placeholder="Faça uma pesquisa"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Button
            marginTop={3}
            colorScheme={"cyan"}
            textColor={"white"}
            onClick={searchImage}
            w="fit-content"
          >
            Procurar Imagem
          </Button>
        </Flex>
      </Center>
    </>
  );
};

export default SearchImageBox;
