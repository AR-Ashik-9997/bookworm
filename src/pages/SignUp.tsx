/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import signup from "../assets/images/signup.png";

type FormData = {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  password: string;
  confirm_password: string;
};

const SignUpForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data); // You can handle form submission here
  };

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="flex items-center justify-center">
          <img
            className=" w-full p-4"
            src={signup}
            alt="Card"
          />
        </div>
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:px-6 lg:px-8 p-4">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-6 text-center text-3xl font-semibold text-gray-900">
              Sign Up
            </h2>
          </div>
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <input
                    type="text"
                    placeholder="First Name"
                    className={`rounded-xl p-2 border-t mr-0 mb-2 sm:mr-2 sm:mb-0 sm:border-b sm:border-l text-gray-800 border-cyan-700 bg-white w-full focus:outline-none focus:border-cyan-700 focus:ring-0 border ${
                      errors.first_name && "input-error"
                    }`}
                    {...register("first_name", {
                      required: "First name is required",
                    })}
                  />
                  {errors.first_name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.first_name.message}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className={`rounded-xl p-2 border-t mr-0 mb-2 sm:mr-2 sm:mb-0 sm:border-b sm:border-l text-gray-800 border-cyan-700 bg-white w-full focus:outline-none focus:border-cyan-700 focus:ring-0 border ${
                      errors.last_name && "input-error"
                    }`}
                    {...register("last_name", {
                      required: "Last name is required",
                    })}
                  />
                  {errors.last_name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.last_name.message}
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
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className={`rounded-xl p-2 border-t mr-0 mb-2 sm:mr-2 sm:mb-0 sm:border-b sm:border-l text-gray-800 border-cyan-700 bg-white w-full focus:outline-none focus:border-cyan-700 focus:ring-0 border ${
                      errors.phone_number && "input-error"
                    }`}
                    {...register("phone_number", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Invalid phone number",
                      },
                    })}
                  />
                  {errors.phone_number && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.phone_number.message}
                    </p>
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
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-xl shadow-sm text-xl font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                  >
                    Register
                  </button>
                </div>

                <div className="flex items-center justify-center">
                  <span className="text-sm text-gray-600">
                    Or continue with
                  </span>
                  <button
                    type="button"
                    className="ml-2 bg-white py-2 px-4 text-sm font-medium text-gray-700 hover:bg-gray-50 active:scale-95 duration-200"
                  >
                    <span className="text-4xl">
                      <FcGoogle />
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpForm;
