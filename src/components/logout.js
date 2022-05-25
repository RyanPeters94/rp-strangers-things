export const logout = (setToken) => {
  window.localStorage.clear();
  setToken("");
};

export const authUser = async (
  event,
  registerOrLogin = "register",
  setToken,
  username,
  password
) => {
  event.preventDefault();
  const response = await fetch(
    `https://strangers-things.herokuapp.com/api/2202-ftb-pt-web-pt/users/${registerOrLogin}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
    }
  );
  const data = await response.json();
  window.localStorage.setItem("token", data.data.token);
  setToken(data.data.token);
};
