import $axios from "./request.js";

export function findAllPost(data) {
  return $axios({
    url: "xxx/xxx/xxx/xxx/" + data,
    method: "get",
    data: data,
  });
}
