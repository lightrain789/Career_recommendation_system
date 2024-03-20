
// 获取表单元素
const form = document.getElementById("loginForm");

// 监听表单提交事件
form.addEventListener("submit", function(event) {
    event.preventDefault(); // 阻止默认表单提交行为

    // 获取用户名和密码的值
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // 构造发送到后端的数据
    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);

    // 发送 POST 请求到后端
    axios.post("/your-backend-endpoint", formData)
        .then(response => {
            // 根据后端返回的数据判断响应成功与否
            if (response.data === 1) {
                // 响应成功，跳转到另一个界面
                window.location.href = ""; 
            } else {
                // 响应失败，提示用户登录失败
                alert("登录失败，请检查用户名和密码！");
            }
        })
        .catch(error => {
            console.error("Error:", error);
            // 处理请求错误
            alert("登录失败，请稍后重试！");
        });
});
