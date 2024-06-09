"use client";
import { useState } from "react";

const JournalEntryForm = () => {
  const [emotion, setEmotion] = useState("");
  const [gratitude, setGratitude] = useState(["", "", ""]);
  const [affirmation, setAffirmation] = useState(["", "", ""]);
  const [goals, setGoals] = useState(["", "", ""]);
  const [thoughts, setThoughts] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({
      emotion,
      gratitude,
      affirmation,
      goals,
      thoughts,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-4 bg-white rounded-md shadow-md dark:bg-gray-800"
    >
      <h2 className="text-2xl font-bold mb-4">New Journal Entry</h2>

      {/* I feel... */}
      <div className="mb-4">
        <label className="block mb-2">I feel...</label>
        <div className="flex gap-2">
          {["😃", "😔", "😠", "😴", "😨"].map((emoji) => (
            <button
              type="button"
              key={emoji}
              onClick={() => setEmotion(emoji)}
              className={`p-2 border rounded-md ${
                emotion === emoji
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 dark:bg-gray-700 dark:text-white"
              }`}
            >
              {emoji}
            </button>
          ))}
        </div>
      </div>

      {/* Gratitude Check */}
      <div className="mb-4">
        <label className="block mb-2">Gratitude Check</label>
        {gratitude.map((item, index) => (
          <input
            key={index}
            type="text"
            placeholder={`Gratitude ${index + 1}`}
            value={item}
            onChange={(e) => {
              const newGratitude = [...gratitude];
              newGratitude[index] = e.target.value;
              setGratitude(newGratitude);
            }}
            className="w-full p-2 mb-2 border rounded-md bg-gray-50 dark:bg-gray-700 dark:text-white"
          />
        ))}
      </div>

      {/* Daily Affirmation */}
      <div className="mb-4">
        <label className="block mb-2">Daily Affirmation</label>
        {affirmation.map((item, index) => (
          <input
            key={index}
            type="text"
            placeholder={`Affirmation ${index + 1}`}
            value={item}
            onChange={(e) => {
              const newAffirmation = [...affirmation];
              newAffirmation[index] = e.target.value;
              setAffirmation(newAffirmation);
            }}
            className="w-full p-2 mb-2 border rounded-md bg-gray-50 dark:bg-gray-700 dark:text-white"
          />
        ))}
      </div>

      {/* Priority Goals */}
      <div className="mb-4">
        <label className="block mb-2">Priority Goals</label>
        {goals.map((item, index) => (
          <input
            key={index}
            type="text"
            placeholder={`Goal ${index + 1}`}
            value={item}
            onChange={(e) => {
              const newGoals = [...goals];
              newGoals[index] = e.target.value;
              setGoals(newGoals);
            }}
            className="w-full p-2 mb-2 border rounded-md bg-gray-50 dark:bg-gray-700 dark:text-white"
          />
        ))}
      </div>

      {/* My Thoughts and Notes */}
      <div className="mb-4">
        <label className="block mb-2">My Thoughts and Notes</label>
        <textarea
          placeholder="Write your thoughts..."
          value={thoughts}
          onChange={(e) => setThoughts(e.target.value)}
          className="w-full p-2 border rounded-md h-32 bg-gray-50 dark:bg-gray-700 dark:text-white"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded-md"
      >
        Save Entry
      </button>
    </form>
  );
};

export default JournalEntryForm;
