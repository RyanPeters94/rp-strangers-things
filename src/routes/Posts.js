import { Box, Stack, Text, Center, Heading, Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// async function getPosts(){
//     try{
//         const response = await fetch('https://strangers-things.herokuapp.com/api/ryans-not-a-loser-mike/posts');
//             const data = await response.json();
//             const postData = data.records;
//             return postData;
//     }   catch(error) {
//             console.error(error);
//     }
// }

const Posts = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  useEffect(() => {
    async function getPosts() {
      try {
        const response = await fetch(
          "https://strangers-things.herokuapp.com/api/2202-ftb-pt-web-pt/posts"
        );
        const data = await response.json();
        console.log(data);
        setPosts(data.data.posts);
      } catch (error) {
        console.error(error);
      }
    }
    getPosts();
  }, []);
  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = posts.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(posts);
    }
  };
  return (
    <div
      id="post-page"
      style={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      <Stack spacing={3}>
        <Input
          marginTop={"2rem"}
          placeholder="Search Keywords Here"
          size="lg"
          onChange={(e) => searchItems(e.target.value)}
        />
      </Stack>
      <Stack
        display={"flex"}
        justifyContent={"center"}
        align={{ base: "center", md: "center" }}
        textAlign={{ base: "center", md: "center" }}
        mt={{ base: 15, md: 30 }}
        ml={{ md: 0 }}
      >
        <Text
          fontWeight="bold"
          textTransform="uppercase"
          fontSize="lg"
          letterSpacing="wide"
          color="teal.600"
        >
          <h1>Posts</h1>
        </Text>
      </Stack>
      {posts.map((post) => {
        return (
          <div id="card" key={post._id}>
            <Center py={12}>
              <Box
                role={"group"}
                p={6}
                maxW={"330px"}
                w={"full"}
                boxShadow={"2xl"}
                rounded={"lg"}
                pos={"relative"}
                zIndex={1}
                _hover={{ bg: "gray.500" }}
                onClick={() =>
                  navigate(`../single-post/${post._id}`, { replace: true })
                }
              >
                <Heading
                  fontSize={"2xl"}
                  fontFamily={"body"}
                  fontWeight={800}
                  align={"center"}
                  justifyContent={"center"}
                >
                  {post.title}
                </Heading>
                <Stack pt={10} align={"center"}>
                  <Text
                    color={"gray.500"}
                    fontSize={"sm"}
                    textTransform={"uppercase"}
                  >
                    Seller: {post.author.username}
                  </Text>
                  <Heading
                    fontSize={"2xl"}
                    fontFamily={"body"}
                    fontWeight={300}
                    align="center"
                  >
                    {post.description}
                  </Heading>
                  <Stack direction={"row"} align={"center"}>
                    <Text fontWeight={600} fontSize={"xl"}>
                      Price: {post.price}
                    </Text>
                  </Stack>
                </Stack>
              </Box>
            </Center>
          </div>
        );
      })}
    </div>
  );
};
export default Posts;
