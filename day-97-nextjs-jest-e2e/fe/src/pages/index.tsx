import React from "react";
import { useState } from "react";
import styles from "@/styles/Home.module.css";

export default function Home(): JSX.Element {
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  const [result, setResult] = useState<number>(0);

  const add = () => {
    setResult(num1 + num2);
  };

  const subtract = () => {
    setResult(num1 - num2);
  };

  const multiply = () => {
    setResult(num1 * num2);
  };

  const divide = () => {
    setResult(num1 / num2);
  };
  return (
    <div className={styles.container}>
      <div className={styles.result} data-testid="result">
        {result}
      </div>
      <input
        className={styles.input}
        type="number"
        value={num1}
        data-testid="num1"
        onChange={(e) => {
          setNum1(Number(e.target.value));
        }}
      />
      <input
        className={styles.input}
        type="number"
        value={num2}
        data-testid="num2"
        onChange={(e) => {
          setNum2(Number(e.target.value));
        }}
      />

      <button data-testid="add" className={styles.button} onClick={add}>
        Add
      </button>
      <button
        data-testid="subtract"
        className={styles.button}
        onClick={subtract}
      >
        Subtract
      </button>
      <button
        data-testid="multiply"
        className={styles.button}
        onClick={multiply}
      >
        Multiply
      </button>
      <button data-testid="divide" className={styles.button} onClick={divide}>
        Divide
      </button>
    </div>
  );
}
