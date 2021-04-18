import axios from "axios";

interface AReq {
  endpoint: string;
  method: "GET" | "POST" | "PATCH" | "PUT";
  body?: object;
  auth?: boolean;
  parse?: Function;
}

const backend = "https://api.ohospital.info";

// interface Rtype<T>

const sendReq = async <Type>(req: AReq): Promise<Type> => {
  const { endpoint, method, auth, body } = req;
  try {
    if (!method) throw Error("Method is required");

    const headers = {
      "Content-Type": "application/json",
      Authorization: auth ? "Bearer " + localStorage.__ohospital : "",
    };

    let response;

    switch (method) {
      case "GET":
        response = await axios.get(`${backend}${endpoint}`, { headers });
        break;
      case "POST":
        response = await axios.post(`${backend}${endpoint}`, body, { headers });
        break;
      case "PATCH":
        response = await axios.patch(`${backend}${endpoint}`, body, {
          headers,
        });
        break;
      default:
        break;
    }

    let data = response?.data;
    if (req.parse) {
      return req.parse(data);
    }

    return data;
  } catch (error) {
    if (error?.response?.data?.error?.message) {
      throw error.response.data.error.message;
    }

    if (typeof error === "string") throw error;

    throw new Error("Error");
  }
};

export { sendReq };
