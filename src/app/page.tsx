"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [inputVal, setInputVal] = useState("");
  const {push} = useRouter()

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    push(`/prediction/${inputVal}`)
  };

  return (
    <div className="bg-slate-200">
      <div>
        <h1>Enter Your Name</h1>
      </div>
      <form className=" " onSubmit={handleSubmit}>
        <input
        className="shadow-indigo-500/40 shadow-lg text-black"
          type="text"
          placeholder="Type your name..."
          value={inputVal}
          onChange={(e) => {
            setInputVal(e.target.value);
          }}
        />
        <button type="submit">Predict Data</button>
      </form>
    </div>
  );
}
