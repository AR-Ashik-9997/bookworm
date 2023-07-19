/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import signin from "../../assets/images/signup.png";
import { FormData } from "@/types/globalTypes";
import { useLoginUserMutation } from "@/redux/feature/users/userApi";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { SerializedError } from "@reduxjs/toolkit";
import { Link, useNavigate } from "react-router-dom";

const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();
  const [loginUser] = useLoginUserMutation();
  const [error, setError] = useState<string>();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<FormData> = (data) => {
    const { email, password } = data;
    const options = {
      data: {
        email: email,
        password: password,
      },
    };
    loginUser(options).then((res) => {
      if (res?.data?.success) {
        localStorage.setItem("auth", JSON.stringify(res?.data?.data));
        navigate("/");
        reset();
      } else {
        const error = res?.error as FetchBaseQueryError | SerializedError;
        setError(error.data?.message);
      }
    });
  };
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="flex items-center justify-center">
          <img className=" w-full p-4" src={signin} alt="Card" />
        </div>
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:px-6 lg:px-8 p-4">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-6 text-center text-3xl font-semibold text-gray-900">
              Login
            </h2>
          </div>
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md rounded-xl shadow-lg bg-white">
            <div className="py-8 px-4 sm:rounded-lg sm:px-10">
              <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className={`rounded-xl p-2 border-t mr-0 mb-2 sm:mr-2 sm:mb-0 sm:border-b sm:border-l text-gray-800 border-cyan-700 bg-white w-full focus:outline-none focus:border-cyan-700 focus:ring-0 border ${
                      errors.email && "input-error"
                    }`}
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                  {error === "User not found" && (
                    <p className="text-red-500 text-sm mt-1">{error}</p>
                  )}
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="Password"
                    className={`rounded-xl p-2 border-t mr-0 mb-2 sm:mr-2 sm:mb-0 sm:border-b sm:border-l text-gray-800 border-cyan-700 bg-white w-full focus:outline-none focus:border-cyan-700 focus:ring-0 border ${
                      errors.password && "input-error"
                    }`}
                    {...register("password", {
                      required: "Password is required",
                    })}
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.password.message}
                    </p>
                  )}
                  {error === "password is incorrect" && (
                    <p className="text-red-500 text-sm mt-1">{error}</p>
                  )}
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-xl shadow-sm text-xl font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 active:scale-95 duration-200"
                  >
                    Login
                  </button>
                </div>
              </form>
              <div className="flex flex-col items-center justify-center mt-6">
                <hr className="w-3/4 border-1 border-black" />
                <div className="mt-4">
                  <Link to={"/signup"}>
                    <h2 className="w-full flex justify-center shadow-sm text-xl font-medium text-teal-700">
                      Create Register
                    </h2>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
