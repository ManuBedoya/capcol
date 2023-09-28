import axios from "axios";
import { urlGenerateToken, urlHealthToken } from "../constants/constants";

export async function generateNewToken(identification, role, username) {
  console.log("entra");
  const data = {
    identification: identification,
    role: role,
    username: username,
  };
  axios
    .post(urlGenerateToken, data)
    .then((response) => {
      const data = { response };
      window.localStorage.setItem("jwt", "Bearer " + data["response"]["data"]);
      console.log(data);
    })
    .catch((e) => {
      console.log(e);
    });
}

export async function validateTokenExpired() {
  const response = axios
    .get(
      urlHealthToken,
      {},
      {
        headers: {
          Authorization: "Bearer " + window.localStorage.getItem("jwt"),
        },
      }
    )
    .then(
      (response) => {
        return false;
      },
      (error) => {
        console.log("Entra erro health");
        return true;
      }
    );
  return response;
}
