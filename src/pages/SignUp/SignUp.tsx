import React from "react";
import { Link } from "react-router";

const SignUp: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-[100vh]">
      <div className="w-1/3 bg-gray-200 shadow-lg shadow-gray-300 rounded-xl">
        <h2 className="py-4 text-center text-3xl font-medium">
          Đăng ký tài khoản
        </h2>
        <div className="flex flex-col mx-6 my-3">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            placeholder="Nhập email..."
            className="px-4 py-2 focus-visible:outline-none rounded-lg"
          />
        </div>
        <div className="flex flex-col mx-6 my-3">
          <label htmlFor="password">Mật khẩu:</label>
          <input
            type="password"
            id="password"
            placeholder="Nhập mật khẩu..."
            className="px-4 py-2 focus-visible:outline-none rounded-lg"
          />
        </div>
        <div className="flex flex-col mx-6 my-3">
          <label htmlFor="confirmPassword">Xác nhận mật khẩu khẩu:</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Nhập xác nhận mật khẩu..."
            className="px-4 py-2 focus-visible:outline-none rounded-lg"
          />
        </div>
        <div className="px-6 my-4">
          <button className="w-full px-4 py-2 rounded-lg font-medium text-white bg-blue-500 hover:bg-blue-600">
            Đăng ký
          </button>
        </div>
        <p className="ml-6 mb-6">
          Bạn đã có tài khoản{" "}
          <Link className="text-blue-500" to={"/sign-in"}>
            Đăng nhập
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
