// import React, { useState } from "react";

// export default function RegisterCard() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (password !== confirmPassword) {
//       alert("Passwords do not match!");
//       return;
//     }

//     const user = {
//       name,
//       email,
//       password, // ✅ only send this
//     };

//     try {
//       setLoading(true);

//       const res = await fetch("http://localhost:3000/users", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(user),
//       });

//       const data = await res.json();

//       if (data.success) {
//         alert("User saved to MongoDB!");

//         setName("");
//         setEmail("");
//         setPassword("");
//         setConfirmPassword("");
//       } else {
//         alert("Something went wrong!");
//       }
//     } catch (error) {
//       console.log(error);
//       alert("Server error!");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#fcf9f4] flex items-center justify-center p-4 font-sans">
//       <div className="bg-white w-full max-w-[500px] rounded-[32px] p-8 md:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-[#f5ebe0]/40">
//         <div className="text-center mb-8">
//           <h1 className="text-[38px] font-serif font-black text-[#1c120c] mb-2">
//             Register
//           </h1>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-5">
//           <input
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             placeholder="Full Name"
//             className="w-full p-3 border rounded"
//             required
//           />

//           <input
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Email"
//             className="w-full p-3 border rounded"
//             required
//           />

//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Password"
//             className="w-full p-3 border rounded"
//             required
//           />

//           <input
//             type="password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             placeholder="Confirm Password"
//             className="w-full p-3 border rounded"
//             required
//           />

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-red-600 text-white p-3 rounded"
//           >
//             {loading ? "Registering..." : "Sign up"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";
import { Link } from "react-router";

export default function RegisterCard() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(""); // Image field
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const user = {
      name,
      email,
      image,
      password,
    };

    try {
      setLoading(true);

      const res = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const data = await res.json();

      if (data.success) {
        alert("User saved to MongoDB!");

        setName("");
        setEmail("");
        setImage("");
        setPassword("");
        setConfirmPassword("");
      } else {
        alert("Something went wrong!");
      }
    } catch (error) {
      console.log(error);
      alert("Server error!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fcf9f4] flex items-center justify-center p-4 font-sans">
      <div className="bg-white w-full max-w-[500px] rounded-[32px] p-8 md:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-[#f5ebe0]/40">
        <div className="text-center mb-8">
          <h1 className="text-[38px] font-serif font-black text-[#1c120c] mb-2">
            Register
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            className="w-full p-3 border rounded"
            required
          />

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full p-3 border rounded"
            required
          />

          <input
            type="file"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Image URL"
            className="w-full p-3 border rounded"
            required
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full p-3 border rounded"
            required
          />

          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            className="w-full p-3 border rounded"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-600 text-white p-3 rounded"
          >
            {loading ? "Registering..." : "Sign up"}
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-gray-500">
            Already have an account? Login{" "}
            <Link to="/loginCard" className="text-red-500">
              login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
