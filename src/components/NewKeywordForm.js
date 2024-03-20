"use client";

import axios from "axios";
import { useState } from "react";

export default function NewKeywordForm({ onNew, domain, onSavingStarted }) {
  const [keyword, setKeyword] = useState("");

  async function handleSubmit(ev) {
    onSavingStarted();
    ev.preventDefault();
    setKeyword("");
    await axios.post("/api/keywords", { keyword, domain });
    onNew();
  }
  return (
    <form className="flex gap-2 my-8" onSubmit={handleSubmit}>
      <input
        value={keyword}
        onChange={(ev) => setKeyword(ev.target.value)}
        className="input-domain"
        type="text"
        placeholder="new keyword"
      />
      <button
        type="submit"
        className="bg-indigo-500 text-white px-8 rounded-lg border border-b-4 border-indigo-700"
      >
        Add
      </button>
    </form>
  );
}
