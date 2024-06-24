"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
// useState
export default function Home() {
  const [number1, setNumber1] = useState<number>(0);
  const [number2, setNumber2] = useState<number>(0);

  return (
    <main className={styles.main}>
      <h1>Calculator</h1>
      <h2>Number 1: {number1}</h2>
      <h2>Number 2: {number2}</h2>
      <h2>Result: {number1 + number2}</h2>
      <div className="grid grid-template-cols-2 gap-4">
        <button
          className="w-48 h-48 bg-blue-500 text-white font-bold text-2xl"
          title="Number 1"
          type="button"
          onClick={() => setNumber1((prev) => prev + 1)}
        >
          1
        </button>
        <button
          className="w-48 h-48 bg-blue-500 text-white font-bold text-2xl"
          type="button"
          title="Number 2"
          onClick={() => setNumber2((prev) => prev + 1)}
        >
          2
        </button>
      </div>
    </main>
  );
}
