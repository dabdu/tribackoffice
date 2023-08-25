import React, { useState, useEffect } from "react";

import PulseLoader from "react-spinners/PulseLoader";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { api } from "../../constants/lib/axiosInstance";
import { useNavigate } from "react-router";
import { useAuthContext } from "../../context/AuthContext";

const Login = () => {
  const [email, setFormEmail] = useState("");
  const [password, setFormPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const { fetchDetails } = useAuthContext();

  useEffect(() => {
    setError(false);
  }, [email, password]);

  const handleSubmit = async () => {
    if (email === "" || password === "") {
      setError("Email and Password are Required");
    } else {
      setLoading(true);
      api
        .post("login", {
          email,
          password,
        })
        .then(async (res) => {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("authUser", JSON.stringify(res.data));
          await fetchDetails();
          navigate("/");
          return res;
        })
        .catch((err) => {
          console.log(err);
          setError(err.response.data.message);
        })
        .finally(() => setLoading(false));
    }
  };
  return (
    <div className="w-full h-[100vh] flex flex-row justify-center items-center">
      <div className="w-[500px] bg-white shadow-lg rounded-sm">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(e);
          }}
        >
          <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
            <div className="px-5 py-7">
              <h1 className="font-bold text-2xl mb-5 text-primary">
                {" "}
                TriluxyBackOffice Login{" "}
              </h1>

              {error && (
                <div
                  className="flex bg-red-100 rounded-lg p-4 mb-4 text-sm text-red-700"
                  role="alert"
                >
                  <svg
                    className="w-5 h-5 inline mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <div>
                    <span className="font-medium">{error}</span>.
                  </div>
                </div>
              )}

              <label className="font-regular text-sm text-gray-600 pb-1 block">
                E-mail
              </label>
              <input
                type="text"
                name="email"
                value={email}
                onChange={(e) => setFormEmail(e.target.value)}
                className="border rounded-md px-3 py-3 mt-1 mb-5 text-sm w-full"
              />
              <div className="relative items-center">
                <label className="font-regular text-sm text-gray-600 pb-1 block">
                  Password
                </label>
                <div className="flex justify-between items-center  border rounded-md  mb-6 text-sm w-full">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={password}
                    onChange={(e) => setFormPassword(e.target.value)}
                    className="border-none rounded-md px-3 py-3  text-sm w-full"
                  />
                  <div
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inline-block right-5"
                  >
                    {showPassword ? (
                      <AiOutlineEye size={22}></AiOutlineEye>
                    ) : (
                      <AiOutlineEyeInvisible size={22}></AiOutlineEyeInvisible>
                    )}
                  </div>
                </div>
              </div>
              <button
                type="submit"
                onClick={handleSubmit}
                className="transition duration-200 bg-primary hover:bg-primary focus:bg-blue-600 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-4 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
              >
                {loading ? (
                  <PulseLoader
                    className="justify-center"
                    color={"#ffffff"}
                    loading={loading}
                    // cssOverride={override}
                    size={12}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  />
                ) : (
                  <div>
                    <span className="inline-block mr-2">Login</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-4 h-4 inline-block"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
