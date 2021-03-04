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
};

export const transSuccess = {
    userCreated: (userEmail) => {
        return `Tài khoản <strong>${userEmail}</strong> đã được tạo, vui lòng kiểm tra email của bạn để active tài khoản trước khi đăng nhập. Xin cảm ơn!`;
    }
};