import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Image,
} from "@chakra-ui/react";
import { MdFacebook } from "react-icons/md";
import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs";
import React, { useState } from "react";

function AddPost({ token }) {
  console.log(token);
  const [data, setData] = useState({
    username: "",
    title: "",
    price: "",
    location: "",
    description: "",
  });
  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  }
  async function submit(e) {
    e.preventDefault();
    await fetch(
      "https://strangers-things.herokuapp.com/api/2202-ftb-pt-web-pt/posts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          post: {
            username: data.username,
            title: data.title,
            price: data.price,
            location: data.location,
            description: data.description,
          },
        }),
      }
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      })
      .catch(console.error);
  }

  return (
    <Container bg="cyan.400" maxW="full" mt={0} centerContent overflow="hidden">
      <Flex>
        <Box
          bg="#02054B"
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading>Add Post</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                    Fill out the form to add a listing to our site
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Image
                        src={
                          "https://drive.google.com/file/d/19BLfp8sWMZz1wxV-EAIfvN4xFTWP1G-e/view?usp=sharing"
                        }
                      ></Image>
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start"
                  >
                    <IconButton
                      aria-label="facebook"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "#0D74FF" }}
                      icon={<MdFacebook size="28px" />}
                      src={"https://www.facebook.com/ryan.peters.9678/"}
                    />
                    <IconButton
                      aria-label="github"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "#0D74FF" }}
                      icon={<BsGithub size="28px" />}
                    />
                    <IconButton
                      aria-label="discord"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "#0D74FF" }}
                      icon={<BsDiscord size="28px" />}
                    />
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                      <form onSubmit={(e) => submit(e)}>
                        <FormControl>
                          <FormLabel>Your Username</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<BsPerson color="gray.800" />}
                            />
                            <Input
                              onChange={(e) => handle(e)}
                              placeholder="Username"
                              id="username"
                              value={data.username}
                              type="text"
                            />
                          </InputGroup>
                        </FormControl>
                        <FormControl>
                          <FormLabel>Your Item</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <Input
                              onChange={(e) => handle(e)}
                              placeholder="Item Title"
                              type="text"
                              id="title"
                              value={data.title}
                            />
                          </InputGroup>
                        </FormControl>
                        <FormControl>
                          <FormLabel>Item Price</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <Input
                              onChange={(e) => handle(e)}
                              placeholder="Item Price"
                              type="number"
                              id="price"
                              value={data.price}
                            />
                          </InputGroup>
                        </FormControl>
                        <FormControl>
                          <FormLabel>Your Location</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <Input
                              onChange={(e) => handle(e)}
                              placeholder="Location"
                              type="text"
                              id="location"
                              value={data.location}
                            />
                          </InputGroup>
                        </FormControl>
                        <FormControl>
                          <FormLabel>Description</FormLabel>
                          <Textarea
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: "gray.300",
                            }}
                            onChange={(e) => handle(e)}
                            placeholder="Item Description"
                            type="text"
                            id="description"
                            value={data.description}
                          />
                        </FormControl>
                        <FormControl id="name" float="right">
                          <Button
                            variant="solid"
                            bg="#0D74FF"
                            color="white"
                            _hover={{}}
                            type="submit"
                          >
                            Submit Listing
                          </Button>
                        </FormControl>
                      </form>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}
export default AddPost;
