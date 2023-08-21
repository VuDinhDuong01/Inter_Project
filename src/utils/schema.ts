import * as yup from 'yup'

export const registerSchema = yup.object({
    username: yup.string().required('Trường này không được để trống').min(1, 'Tối thiểu là 1 ký tự').max(100, 'tối đa là 100 ký tự'),
    email: yup.string().required('Trường này không được để trống').email('Trường này nhập phải là email'),
    telephone: yup.string().required('Trường này không được để trống').min(10, 'Tối thiểu là 10 ký tự').max(15, 'tối đa là 100 ký tự'),
    address: yup.string().required('Trường này không được để trống').min(1, 'Tối thiểu là 1 ký tự').max(100, 'tối đa là 100 ký tự'),
    file: yup.string().required('Trường này không được để trống'),
    relationship: yup.string().required('Trường này không được để trống').min(1, 'Tối thiểu là 1 ký tự').max(100, 'tối đa là 100 ký tự'),
});


export type RegisterType = yup.InferType<typeof registerSchema>;