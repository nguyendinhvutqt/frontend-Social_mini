import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios, { isAxiosError } from "axios";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/features/user/userSlice";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Email không hợp lệ")
      .required("Email là bắt buộc"),
    password: yup
      .string()
      .min(6, "Mật khẩu phải ít nhất 6 ký tự")
      .required("Mật khẩu là bắt buộc"),
  })
  .required();

type SignInData = {
  email: string;
  password: string;
};

const SignIn: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInData>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<SignInData> = async (data) => {
    setIsLoading(true);
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/auth/sign-in`,
        data
      );
      if (res.status === 200) {
        toast.success("Đăng nhập thành công");
        localStorage.setItem("access_token", res.data.data.accessToken);
        localStorage.setItem("refresh_token", res.data.data.refreshToken);
        dispatch(
          setUser({
            userId: res?.data?.data?.user._id,
            displayName: res?.data?.data?.user.displayName,
            email: res?.data?.data?.user.email,
            avatarUrl: res?.data?.data?.user.avatarUrl,
            birthDay: res?.data?.data?.user.birthDay,
            gender: res?.data?.data?.user.gender,
            role: res?.data?.data?.role,
            isLoggedIn: true,
          })
        );
        navigate("/");
      }
    } catch (error) {
      if (isAxiosError(error)) {
        toast.error(error.response?.data.message);
      }
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="flex justify-center items-center min-h-[100vh]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-1/3 bg-gray-200 shadow-lg shadow-gray-300 rounded-xl"
      >
        <h2 className="py-4 text-center text-3xl font-medium">
          Đăng nhập tài khoản
        </h2>
        <div className="flex flex-col mx-6 my-3">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            placeholder="Nhập email..."
            className="px-4 py-2 focus-visible:outline-none rounded-lg"
            {...register("email")}
          />
          <p className="text-red-500 mt-2">{errors.email?.message}</p>
        </div>
        <div className="flex flex-col mx-6 my-3">
          <label htmlFor="password">Mật khẩu:</label>
          <input
            type="password"
            id="password"
            placeholder="Nhập mật khẩu..."
            className="px-4 py-2 focus-visible:outline-none rounded-lg"
            {...register("password")}
          />
          <p className="text-red-500 mt-2">{errors.password?.message}</p>
        </div>
        <div className="px-6 my-4">
          <button
            disabled={isLoading}
            type="submit"
            className={`${
              isLoading && "!bg-blue-200 hover:!bg-blue-200 !text-gray-500"
            } w-full px-4 py-2 rounded-lg font-medium text-white bg-blue-500 hover:bg-blue-600`}
          >
            {isLoading ? "Đang đăng nhập..." : "Đăng nhập"}
          </button>
        </div>
        <p className="ml-6 mb-6">
          Bạn chưa có tài khoản{" "}
          <Link className="text-blue-500" to={"/sign-up"}>
            Đăng ký
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
