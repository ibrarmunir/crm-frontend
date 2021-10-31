import * as Yup from 'yup';

export const loginFormSchema = Yup.object({
    email: Yup.string().email().required("Email is Required!"),
    password: Yup.string().required("Password is Required!").min(8).max(8).test(
        "password characters",
        "Password should contain lowercase, uppercase, numbers and special characters",
        (value) => {
            return [
                /[a-z]/,
                /[A-Z]/,
                /[0-9]/,
                /[^a-zA-Z0-9]/
            ].every((pattern) => pattern.test(value))
        }
        )
})