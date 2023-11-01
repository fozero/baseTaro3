import config from "../config";
import request from "../utils/request";

/**
 *  用户登录
 */
export async function login(payload) {
  return request.post(`${config.baseUrl}/v1.0/auth/login`, payload);
}
