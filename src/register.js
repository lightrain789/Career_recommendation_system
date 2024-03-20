// 获取表单元素
const form = document.getElementById("registerForm");

// 监听表单提交事件
form.addEventListener("submit", function(event) {
    event.preventDefault(); // 阻止默认表单提交行为

    // 获取表单字段的值
    const fullname = document.getElementById("fullname").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const phone = document.getElementById("phone").value;
    const gender = document.querySelector('input[name="gender"]:checked').value; // 获取选中的性别值

    // 构造发送到后端的数据
    const formData = new FormData();
    formData.append("fullname", fullname);
    formData.append("username", username);
    formData.append("password", password);
    formData.append("phone", phone);
    formData.append("gender", gender);

    // 发送 POST 请求到后端
    axios.post("/your-backend-endpoint", formData)
        .then(response => {
            console.log(response.data); // 打印后端返回的数据
            
        })
        .catch(error => {
            console.error("Error:", error);
            // 处理请求错误
            alert("注册失败，请稍后重试！");
        });
});
