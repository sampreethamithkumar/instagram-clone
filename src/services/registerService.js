import http from "./httpService";

const apiEndPoint = "/register";

export function register(user) {
  return http.post(apiEndPoint, {
    email: user.email,
    password: user.password,
    fullname: user.fullname,
    username: user.username,
  });
}
