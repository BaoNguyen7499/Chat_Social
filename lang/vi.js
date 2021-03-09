export const transValidation = {
    email_incorrect: "Email phải có dạng example@abc.com!",
    gender_incorrect: "Tại sao lại sai?",
    password_incorrect: "Mật khẩu phải chứa ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường, chữ số và ký tự đặt biệt.",
    password_confirmation_incorrect: "Nhập lại mật khẩu chưa chính xác.",

};

export const transErrors = {
    account_in_use: "Email này đã được sử dụng.",
    account_removed: "Tài khoản này đã bị gỡ khỏi hệ thống, có vấn đề xin vui lòng liên hệ với chung tôi.",
    account_not_active: "Email đã được đăng ký nhưng chưa active tài khoản, kiểm tra email hoặc vui lòng liên hệ với hệ thống hỗ trợ của chúng tôi.",
    token_undefined: "Token không tồn tại!"
};

export const transSuccess = {
    userCreated: (userEmail) => {
        return `Tài khoản <strong>${userEmail}</strong> đã được tạo, vui lòng kiểm tra email của bạn để active tài khoản trước khi đăng nhập. Xin cảm ơn!`;
    },
    account_active: "Kích hoạt tài khoản thành công, bạn đã có thể đăng nhập vào ứng dụng"
};

export const transMail = {
    subject: "Chat Social: Xác nhận kích hoạt tài khoản",
    template: (linkVerify) => {
        return `
        <h2>Bạn nhận được email này vì đã đăng ký tài khoản trên ứng dụng Chat Social.</h2>
        <h3>Vui lòng click vào liên kết bên dưới để xác nhận kích hoạt tài khoản.</h3>
        <h3><a href="${linkVerify}" target="blank">${linkVerify}</a></h3>
        <h4>Nếu tin rằng email này là nhầm lẫn hãy bỏ qua nó. Trân trọng.</h4>
        `;
    },
    send_failed: "Có lỗi trong quá trình gửi email, vui lòng liên hệ với bộ phận hỗ trợ bên chung tôi"
}