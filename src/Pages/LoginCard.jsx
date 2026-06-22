import React, { useState } from "react";
import { Link } from "react-router";

export default function LoginCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const user = {
        email,
        password,
      };

      console.log(user);

      alert("Login Success!");
    } catch (error) {
      console.log(error);
      alert("Login Failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fcf9f4] flex items-center justify-center p-4 font-sans">
      <div className="bg-white w-full max-w-[500px] rounded-[32px] p-8 md:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-[#f5ebe0]/40">
        <div className="text-center mb-8">
          <h1 className="text-[38px] font-serif font-black text-[#1c120c] mb-2">
            Welcome Back
          </h1>

          <p className="text-gray-500">Login to your account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 border border-gray-200 rounded-xl outline-none focus:border-red-500 transition"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-4 border border-gray-200 rounded-xl outline-none focus:border-red-500 transition"
            required
          />

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" />
              Remember me
            </label>

            <a href="#" className="text-red-600 hover:text-red-700 font-medium">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-medium p-4 rounded-xl transition"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-500">
            Don't have an account?{" "}
            <Link to="/registerCard" className="text-red-500">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
