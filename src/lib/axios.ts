import axios from "axios";

const myAxios = axios.create({
  baseURL: "http://localhost:8000",
});

function setAuthToken(token: string | null) {
  if (token) {
    localStorage.setItem("token", token);
  } else {
    localStorage.removeItem("token");
  }

  myAxios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export { myAxios, setAuthToken };
