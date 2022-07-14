import jwt from "jwt-decode";
import { Upload } from "@aws-sdk/lib-storage";
import { S3Client, S3 } from "@aws-sdk/client-s3";
let tokenTimeout;
export const getApiPath = () => {
  return "http://localhost:5000/";
};

export const getToken = () => {
  let token = localStorage.getItem("token");

  if (token !== "undefined" && token !== null) {
    return jwt(token);
  } else {
    return null;
  }
};
export function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

export const UploadFile = async (file) => {
  try {
    const credentials = {
      accessKeyId: "AKIAXGG575DZRYM2U7X5",
      secretAccessKey: "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",
    };
    const parallelUploads3 = new Upload({
      client:
        new S3({ region: "us-east-1", credentials: credentials }) ||
        new S3Client({ region: "us-east-1", credentials: credentials }),
      params: {
        Bucket: "dustypaws-storage-bucket",
        Key: file.name,
        Body: file,
      },

      tags: [
        /*...*/
      ], // optional tags
      queueSize: 4, // optional concurrency configuration
      partSize: 1024 * 1024 * 5, // optional size of each part, in bytes, at least 5MB
      leavePartsOnError: false, // optional manually handle dropped parts
    });

    parallelUploads3.on("httpUploadProgress", (progress) => {
      // console.log(progress);
    });

    let data = await parallelUploads3.done();
    return data.Location;
  } catch (e) {
    alert("Error occured, cannot upload image.");
    console.log(e);
  }
};

export const getLoggedInUser = () => {
  let userToken = getToken();
  let loggedInUser = "";
  if (userToken !== null && userToken !== "undefined" && userToken !== "") {
    loggedInUser = userToken.user;
  }
  return loggedInUser;
};

export const setToken = (token) => {
  localStorage.setItem("token", token);
};

export const isTokenTimeOut = (tokenTime) => {
  let currentTokenTime = new Date(tokenTime.iat);
  if (currentTokenTime >= tokenTimeout) return true;
  else return false;
};

export const setTokenTimeout = (token) => {
  let tokenTime = new Date(token.iat);

  tokenTimeout = tokenTime.setHours(
    tokenTime.getHours(),
    tokenTime.getMinutes() + 8,
    0,
    0
  );
};

export const deleteToken = () => {
  localStorage.removeItem("token");
};
