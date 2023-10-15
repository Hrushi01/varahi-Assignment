import React, { useState, useEffect } from "react";

const Login = () => {
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });
  const [registrationForm, setRegistrationForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    role: false,
  });

  const [loginErrors, setLoginErrors] = useState({});
  const [registrationErrors, setRegistrationErrors] = useState({});

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  };

  const handleRegistrationChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setRegistrationForm({
      ...registrationForm,
      [name]: newValue,
    });
  };

  useEffect(() => {
    const loginErrors = {};
    if (!loginForm.username) {
      loginErrors.username = "Username is required";
    }
    if (!loginForm.password) {
      loginErrors.password = "Password is required";
    }
    setLoginErrors(loginErrors);
  }, [loginForm]);

  useEffect(() => {
    const registrationErrors = {};
    if (!registrationForm.firstName) {
      registrationErrors.firstName = "First Name is required";
    }
    if (!registrationForm.lastName) {
      registrationErrors.lastName = "Last Name is required";
    }
    if (!registrationForm.username) {
      registrationErrors.username = "Username is required";
    }
    if (!registrationForm.password) {
      registrationErrors.password = "Password is required";
    }
    setRegistrationErrors(registrationErrors);
  }, [registrationForm]);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Your login logic here
  };

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();
    // Your registration logic here
  };

  return (
    <div className="p-10">
      <div className="mb-8">
        <h2 className="text-xl font-bold">Login</h2>
        <form onSubmit={handleLoginSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-600"
            >
              Username:
            </label>
            <input
              type="text"
              name="username"
              id="username"
              value={loginForm.username}
              onChange={handleLoginChange}
              className={`w-full p-2 border rounded ${
                loginErrors.username ? "border-red-500" : "border-gray-300"
              }`}
            />
            {loginErrors.username && (
              <p className="text-red-500 text-xs mt-1">
                {loginErrors.username}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password:
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={loginForm.password}
              onChange={handleLoginChange}
              className={`w-full p-2 border rounded ${
                loginErrors.password ? "border-red-500" : "border-gray-300"
              }`}
            />
            {loginErrors.password && (
              <p className="text-red-500 text-xs mt-1">
                {loginErrors.password}
              </p>
            )}
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Login
          </button>
        </form>
      </div>

      <div>
        <h2 className="text-xl font-bold">Registration</h2>
        <form onSubmit={handleRegistrationSubmit}>
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-600"
            >
              First Name:
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={registrationForm.firstName}
              onChange={handleRegistrationChange}
              className={`w-full p-2 border rounded ${
                registrationErrors.firstName
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />
            {registrationErrors.firstName && (
              <p className="text-red-500 text-xs mt-1">
                {registrationErrors.firstName}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-600"
            >
              Last Name:
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={registrationForm.lastName}
              onChange={handleRegistrationChange}
              className={`w-full p-2 border rounded ${
                registrationErrors.lastName
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />
            {registrationErrors.lastName && (
              <p className="text-red-500 text-xs mt-1">
                {registrationErrors.lastName}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-600"
            >
              Username:
            </label>
            <input
              type="text"
              name="username"
              id="username"
              value={registrationForm.username}
              onChange={handleRegistrationChange}
              className={`w-full p-2 border rounded ${
                registrationErrors.username
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />
            {registrationErrors.username && (
              <p className="text-red-500 text-xs mt-1">
                {registrationErrors.username}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password:
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={registrationForm.password}
              onChange={handleRegistrationChange}
              className={`w-full p-2 border rounded ${
                registrationErrors.password
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />
            {registrationErrors.password && (
              <p className="text-red-500 text-xs mt-1">
                {registrationErrors.password}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Role:
            </label>
            <label className="inline-flex items-center mt-3">
              <input
                type="checkbox"
                name="role"
                checked={registrationForm.role}
                onChange={handleRegistrationChange}
                className="form-checkbox text-blue-500 h-5 w-5"
              />
              <span className="ml-2 text-gray-700">User</span>
            </label>
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
