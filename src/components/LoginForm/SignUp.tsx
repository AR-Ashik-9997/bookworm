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
import signup from "../../assets/images/signup.png";
import { FormData } from "@/types/globalTypes";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/bookWorm.png";
import { useAppSelector } from "@/redux/hooks/hooks";
import axios from "axios";

const SignUpForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm<FormData>();
  const [error, setError] = useState<string>();
  const { url } = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const { username, email, password } = data;
    await axios
      .post(`${url}/signup`, {
        username,
        email,
        password,
      })
      .then((res) => {
        if (res?.data?.data) {
          Swal.fire(
            `${res.data.message}`,
            "You clicked the button!",
            "success"
          ).then(() => {
            setError("");
            reset();
            navigate("/login");
          });
        }
      })
      .catch((error) => {
        if (error) {
          setError(error?.response?.data?.message);
        }
      });
  };

  return (
    <section>
      <nav className="bg-[#eff0ed]">
        <div className="container mx-auto px-4 max-w-[90%]">
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center">
              <Link to="/" className="text-white font-bold text-xl">
                <img className="h-10 md:h-16" src={logo} alt="logo" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="flex items-center justify-center">
          <img className=" w-full p-4" src={signup} alt="Card" />
        </div>
        <div className="min-h-screen bg-gradient-to-r from-[#00bcd4] to-indigo-500 flex flex-col justify-center sm:px-6 lg:px-8 p-4">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-6 text-center text-3xl font-semibold text-gray-900">
              Sign Up
            </h2>
          </div>
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md rounded-xl shadow-lg bg-white">
            <div className="py-8 px-4 sm:rounded-lg sm:px-10">
              <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <input
                    type="text"
                    placeholder="Username"
                    className={`rounded-xl p-2 border-t mr-0 mb-2 sm:mr-2 sm:mb-0 sm:border-b sm:border-l text-gray-800 border-cyan-700 bg-white w-full focus:outline-none focus:border-cyan-700 focus:ring-0 border ${
                      errors.username && "input-error"
                    }`}
                    {...register("username", {
                      required: "User name is required",
                    })}
                  />
                  {errors.username && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.username.message}
                    </p>
                  )}
                </div>

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
                  {error !== "" && (
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
                </div>

                <div>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className={`rounded-xl p-2 border-t mr-0 mb-2 sm:mr-2 sm:mb-0 sm:border-b sm:border-l text-gray-800 border-cyan-700 bg-white w-full focus:outline-none focus:border-cyan-700 focus:ring-0 border ${
                      errors.confirm_password && "input-error"
                    }`}
                    {...register("confirm_password", {
                      required: "Confirm password is required",
                      validate: (value) =>
                        value === getValues("password") ||
                        "Passwords do not match",
                    })}
                  />
                  {errors.confirm_password && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.confirm_password.message}
                    </p>
                  )}
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-xl shadow-sm text-xl font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 active:scale-95 duration-200"
                  >
                    Register
                  </button>
                </div>
              </form>
              <div className="flex flex-col items-center justify-center mt-6">
                <hr className="w-3/4 border-1 border-black" />
                <div className="mt-4">
                  <Link to={"/login"}>
                    <h2 className="w-full flex justify-center shadow-sm text-xl font-medium text-teal-700">
                      Login
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

export default SignUpForm;
