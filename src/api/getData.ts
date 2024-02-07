import http from "./http-common";

export default (): Promise<String> => {
  return new Promise((resolve, reject) => {
    http.get('/ping')
      .then(({ data }) => resolve(data))
      .catch(reject);
  });
};