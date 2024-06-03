import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Handling changes in the form field
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  // On submit logic with error handling
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null); // Clear any previous errors

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }
      console.log(data);
      navigate("/sign-in");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex justify-center h-screen bg-gray-10">
      <form
        className="absolute flex flex-col mt-0 gap-4 top-10 p-4 w-1/3 rounded-lg place-self-center bg-gray-08"
        onSubmit={handleSubmit}
      >
        <label htmlFor="userName"></label>
        <input
          className="bg-gray-08 placeholder:text-gray-20 p-2 rounded-md focus:outline-none text-gray-20"
          placeholder="username"
          type="text"
          name="userName"
          id="userName"
          required
          onChange={handleChange}
        />
        <label htmlFor="email"></label>
        <input
          className="bg-gray-08 placeholder:text-gray-20 p-2 rounded-md focus:outline-none text-gray-20"
          placeholder="email"
          type="email"
          name="email"
          id="email"
          required
          onChange={handleChange}
        />
        <label htmlFor="password"></label>
        <input
          className="bg-gray-08 placeholder:text-gray-20 p-2 rounded-md focus:outline-none text-gray-20"
          placeholder="password"
          type="password"
          name="password"
          id="password"
          required
          onChange={handleChange}
        />
        <input
          className="border-[1px] py-3 text-gray-15 border-purple-60 rounded-md"
          type="submit"
          value="Sign up"
        />
        {error && <div className="text-red-500">{error}</div>}
        {loading && <div className="text-gray-500">Loading...</div>}
        <h4 className="text-white">
          Already Have An Account?{" "}
          <Link to="/sign-in">
            <span className="text-purple-60"> Sign In</span>
          </Link>
        </h4>
      </form>
    </div>
  );
}
