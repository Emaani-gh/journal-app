import Link from "next/link";

const LoginForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        className="bg-white p-6 rounded-md shadow-md w-full max-w-lg "
        //   onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-4">Login</h2>

        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input
            type="email"
            className="w-full p-2 border rounded-md"
            //   value={email}
            //   onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Password</label>
          <input
            type="password"
            className="w-full p-2 border rounded-md"
            //   value={password}
            //   onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md mb-4"
        >
          Login
        </button>
        <p className="mt-4 text-center text-sm text-gray-600">
          Dont have an account? <br />
          <Link href="/register">Sign Up</Link>
        </p>
      </form>
    </div>
  );
};
export default LoginForm;
