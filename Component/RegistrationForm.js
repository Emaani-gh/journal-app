import Link from "next/link";

const RegistrationForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        className="bg-white p-6 rounded-md shadow-md w-full max-w-lg "
        //   onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <div className="mb-4">
          <label className="block mb-2">First Name</label>
          <input
            type="text"
            className="w-full p-2 border rounded-md"
            //   value={fname}
            //   onChange={(e) => setFname(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Last Name</label>
          <input
            type="text"
            className="w-full p-2 border rounded-md"
            //   value={lname}
            //   onChange={(e) => setLname(e.target.value)}
          />
        </div>

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

        <div className="mb-4">
          <label className="block mb-2">Confirm Password</label>
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
          Register
        </button>
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account? <br />
          <Link href="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};
export default RegistrationForm;
