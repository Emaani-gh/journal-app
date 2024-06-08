import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 flex justify-center items-center ">
        <div className="text-center text-white">
          <div className="introText mb-4">
            <h2 className="text-4xl font-bold mb-2 ">
              Welcome to Daily Journal
            </h2>
            <p className="text-xl font-light">
              Capture your thoughts, one day at a time.
            </p>
          </div>
          <div className="linkButtons">
            <div className="mb-5">
              <Link href={"/"} className="bg-white text-blue-500 py-2 px-4 rounded-md ">Login</Link>
            </div>
            <div>
              <Link href={"registration"} className="bg-white text-blue-500 py-2 px-4 rounded-md ">Register</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
