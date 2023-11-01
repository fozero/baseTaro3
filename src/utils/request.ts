import Taro from "@tarojs/taro";

/**
 * 网络请求封装
 * @param url
 * @param data
 * @param method
 * @returns
 */
function request(url, data = {}, method = "GET") {
  return new Promise(function (resolve, reject) {
    Taro.request({
      url: url,
      data: data,
      method,
      header: {
        "Content-Type": "application/json",
      },
      success: function (res) {
        if (res.data.errno == 0) {
          resolve(res.data.data);
        } else {
          Taro.showModal({
            title: "错误信息",
            content: res.data.errmsg,
            showCancel: false,
          });
          reject(res.data.errmsg);
        }
      },
      fail: function (err) {
        reject(err);
      },
    });
  });
}

request.get = (url, data) => {
  return request(url, data, "GET");
};

request.post = (url, data) => {
  return request(url, data, "POST");
};

request.put = (url, data) => {
  return request(url, data, "PUT");
};

request.delete = (url, data) => {
  return request(url, data, "DELETE");
};

export default request;
