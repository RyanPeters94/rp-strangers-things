import React from "react";
import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Image,
} from "@chakra-ui/react";
import Testimonials from "../components/testimonials.js";
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();
  return (
    <>
      <Flex
        w={"100vw"}
        h={"69vh"}
        backgroundImage={
          "url(https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"
        }
        backgroundSize={"cover"}
        backgroundPosition={"center"}
      >
        <VStack
          w={"full"}
          justify={"center"}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
        >
          <Stack align={"center"} spacing={6}>
            <Text
              textAlign={"center"}
              color={"white"}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
            >
              Buy from an assortment of incredible items for sale! Sign up to
              head over to our Posts page to see all of your options! With us,
              the world is your oyster.
            </Text>
            <Text
              textAlign={"center"}
              color={"white"}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
            >
              Please sign in or register to use our services!
            </Text>
            <Stack direction={"row"}>
              <Button
                bg={"blue.400"}
                rounded={"full"}
                color={"white"}
                _hover={{ bg: "blue.500" }}
                onClick={() => navigate("../login", { replace: true })}
              >
                Sign In
              </Button>
              <Button
                bg={"whiteAlpha.300"}
                rounded={"full"}
                color={"white"}
                _hover={{ bg: "whiteAlpha.500" }}
                onClick={() => navigate("../register", { replace: true })}
              >
                Register
              </Button>
            </Stack>
          </Stack>
        </VStack>
      </Flex>
      <Stack align={"center"} spacing={6}>
        <Text
          textAlign={"center"}
          color={"white"}
          fontWeight={700}
          lineHeight={1.2}
          fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
          marginTop={"50px"}
        >
          Here are some reviews from our satisfied customers!
        </Text>
        <Testimonials />
      </Stack>
    </>
  );
}
export default Home;
