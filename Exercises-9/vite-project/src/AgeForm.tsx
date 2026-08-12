import React, { useState } from "react";

interface AgeFormProps {
  onSubmit: (age: number) => void;
}

export function AgeForm({ onSubmit }: AgeFormProps) {
  const [ageInput, setAgeInput] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const parsedAge = Number(ageInput);

    if (isNaN(parsedAge) || parsedAge < 18) {
      setError("Age must be 18 or older.");
      return;
    }

    setError("");
    onSubmit(parsedAge);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Age Form</h3>

      <label>
        Age:{" "}
        <input
          type="number"
          value={ageInput}
          onChange={(e) => {
            setAgeInput(e.target.value);
            setError("");
          }}
          required
        />
      </label>

      {error && (
        <p style={{ color: "red", marginTop: "8px" }}>
          {error}
        </p>
      )}

      <button type="submit">Submit</button>
    </form>
  );
}