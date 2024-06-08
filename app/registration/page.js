

export default function registration (){
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <form
          className="bg-white p-6 rounded-md shadow-md"
        //   onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold mb-4">Register</h2>
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
            className="w-full bg-blue-500 text-white p-2 rounded-md"
          >
            Register
          </button>
        </form>
      </div>
    );
}