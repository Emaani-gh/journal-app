"use client";
import Link from "next/link";

const Dashboard = () => {
  const entries = [
    {
      id: 1,
      date: "2024-06-08",
      emotion: "😃",
      gratitude: ["Family support", "Good health", "Job satisfaction"],
      affirmation: ["I am strong.", "I am capable.", "I am grateful."],
      goals: ["Finish project", "Exercise", "Read a book"],
      thoughts: "Reflecting on the day, I feel content and motivated.",
    },
    {
      id: 2,
      date: "2024-06-07",
      emotion: "😔",
      gratitude: ["Supportive friends", "Access to education", "A safe home"],
      affirmation: ["I am worthy.", "I am learning.", "I am growing."],
      goals: ["Attend meeting", "Practice mindfulness", "Cook a meal"],
      thoughts: "Today was challenging, but I managed to stay positive.",
    },
    // More entries...
  ];

  return (
    <div className="min-h-screen bg-gray-100 ">
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

          <div className="bg-white p-6 rounded-md shadow-md mb-6 dark:bg-gray-800 dark:text-white">
            <h2 className="text-2xl font-bold mb-4">Past Entries</h2>
            <ul className="space-y-4">
              {entries.map((entry, index) => (
                <li key={index} className="border-b pb-4">
                  <h3 className="text-xl font-semibold">{entry.date}</h3>
                  <div className="my-2">
                    <span className="font-semibold">I feel: </span>
                    <span>{entry.emotion}</span>
                  </div>
                  <div className="my-2">
                    <span className="font-semibold">Gratitude Check:</span>
                    <ul className="list-disc list-inside ml-4">
                      {entry.gratitude.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="my-2">
                    <span className="font-semibold">Daily Affirmation:</span>
                    <ul className="list-disc list-inside ml-4">
                      {entry.affirmation.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="my-2">
                    <span className="font-semibold">Priority Goals:</span>
                    <ul className="list-disc list-inside ml-4">
                      {entry.goals.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="my-2">
                    <span className="font-semibold">Thoughts and Notes:</span>
                    <p>{entry.thoughts}</p>
                  </div>
                  <Link
                    className="text-blue-500 hover:underline"
                    href={`/entry/${entry.id}`}
                  >
                    Read more
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
