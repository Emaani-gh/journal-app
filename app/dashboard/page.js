import Nav from "@/Component/Nav";
import Link from "next/link";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 ">
      {/* <Nav className=" bg-red-700" /> */}
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        <div className="bg-white p-6 rounded-md shadow-md mb-6">
          <h2 className="text-2xl font-bold mb-4">Today's Prompt</h2>
          <p className="mb-4">"What are you grateful for today?"</p>
          <Link
            className="bg-blue-500 text-white py-2 px-4 rounded-md"
            href="/new-entry"
          >
            New Journal Entry
          </Link>
        </div>
        <div className="bg-white p-6 rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-4">Past Entries</h2>
          {/* List or calendar view of past entries */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
