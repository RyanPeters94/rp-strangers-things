import { useState, React } from "react";
import { Link, Routes, Route } from "react-router-dom";
import {
  Flex,
  Heading,
  Text,
  ButtonGroup,
  Container,
  Stack,
  IconButton,
} from "@chakra-ui/react";
import { FaSun, FaMoon, FaGithub, FaLinkedin } from "react-icons/fa";
import {
  Login,
  Register,
  Posts,
  SinglePost,
  AddPost,
  Profile,
  Home,
  logout,
} from "./imports.js";
import { useColorMode, Button } from "@chakra-ui/react";

function App() {
  const [token, setToken] = useState(window.localStorage.getItem("token"));

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <div className="App">
      <Flex justifyContent={"space-around"}>
        <Stack>
          <Heading size="lg" fontWeight="semibold" color="cyan.400">
            <nav className="NavBar">
              <Link to="/home" style={{ color: "lightblue", padding: "15px" }}>
                Home
              </Link>

              {!token ? (
                <Link
                  to="/login"
                  style={{ color: "lightblue", padding: "15px" }}
                >
                  Login
                </Link>
              ) : null}

              {!token ? (
                <Link
                  to="/register"
                  style={{ color: "lightblue", padding: "15px" }}
                >
                  Register
                </Link>
              ) : null}

              {token ? (
                <Link
                  to="/posts"
                  style={{ color: "lightblue", padding: "15px" }}
                >
                  Posts
                </Link>
              ) : null}
              {token ? (
                <Link
                  to="/add-post"
                  style={{ color: "lightblue", padding: "15px" }}
                >
                  Add a Post
                </Link>
              ) : null}
              {token ? (
                <Link
                  to="/profile"
                  style={{ color: "lightblue", padding: "15px" }}
                >
                  Profile
                </Link>
              ) : null}
              {token ? (
                <Button
                  onClick={() => logout(setToken)}
                  colorScheme={"blue"}
                  variant={"solid"}
                  ml={"1rem"}
                  mb={"1rem"}
                  mt={".75rem"}
                  height={"30px"}
                >
                  Logout
                </Button>
              ) : null}
            </nav>
          </Heading>
        </Stack>
      </Flex>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="profile" element={<Profile token={token} />} />
        <Route path="login" element={<Login setToken={setToken} />} />
        <Route path="register" element={<Register setToken={setToken} />} />
        <Route path="posts" element={<Posts />} />
        <Route
          path="single-post/:postId"
          element={<SinglePost token={token} />}
        />
        <Route path="add-post" element={<AddPost token={token} />} />
      </Routes>
      <Container as="footer" role="contentinfo" py={{ base: "12", md: "16" }}>
        <Stack spacing={{ base: "4", md: "5" }}>
          <Text fontSize="sm" color="subtle" alignSelf="center">
            Thank you for visiting Our Site!
          </Text>
          <Stack justify="space-between" direction="row" alignSelf="center">
            <ButtonGroup variant="ghost">
              <IconButton
                as="a"
                href="#"
                aria-label="LinkedIn"
                icon={isDark ? <FaSun /> : <FaMoon />}
                isRound="true"
                onClick={toggleColorMode}
              />
              <IconButton
                as="a"
                href="https://github.com/RyanPeters94"
                aria-label="GitHub"
                icon={<FaGithub fontSize="1.25rem" />}
              />
              <IconButton
                as="a"
                href="https://www.linkedin.com/in/ryan-peters-6b9052167/"
                aria-label="Twitter"
                icon={<FaLinkedin fontSize="1.25rem" />}
              />
            </ButtonGroup>
          </Stack>
          <Text fontSize="sm" color="subtle" alignSelf="center">
            &copy; {new Date().getFullYear()} RyansList, Inc. All rights
            reserved.
          </Text>
        </Stack>
      </Container>
    </div>
  );
}

export default App;
