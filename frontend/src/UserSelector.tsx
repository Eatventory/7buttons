import { useState, useEffect, useRef } from "react";
import "./UserSelector.css";

export default function UserSelector() {
  const [gender, setGender] = useState<string | null>(null);
  const [ageGroup, setAgeGroup] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stored = localStorage.getItem("user_data");
    if (stored) {
      try {
        const user = JSON.parse(stored);
        setGender(user.gender ?? null);
        setAgeGroup(user.age ?? null);
      } catch (e) {
        console.warn("Wrong user_data:", e);
      }
    }
  }, []);

  const handleConfirm = () => {
    const parsedAge =
      typeof ageGroup === "string" && ageGroup.endsWith("s")
        ? parseInt(ageGroup.replace("s", ""), 10)
        : null;

    const data = {
      id: 1234,
      gender,
      age: parsedAge
    };
    localStorage.setItem("user_data", JSON.stringify(data));
    setOpen(false);
  };

  return (
    <div className="user-selector">
      <div className="toggle-header" onClick={() => setOpen((prev) => !prev)}>
        <span>User Setting</span>
        <span className={`arrow-icon ${open ? "open" : ""}`}>▼</span>
      </div>

      <div
        ref={contentRef}
        className={`slide-panel ${open ? "open" : ""}`}
        style={{
          maxHeight: open ? contentRef.current?.scrollHeight : 0,
        }}
      >
        <div className="panel-content">
          <div className="section">
            <label>Gender</label>
            <div className="options">
              {["All", "male", "female"].map((g) => (
                <button
                  key={g}
                  className={gender === g || (g === "All" && gender === null) ? "active" : ""}
                  onClick={() => setGender(g === "All" ? null : g)}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>

          <div className="section">
            <label>Age</label>
            <div className="options">
              {["All", "10s", "20s", "30s", "40s", "50s"].map((age) => (
                <button
                  key={age}
                  className={ageGroup === age || (age === "All" && ageGroup === null) ? "active" : ""}
                  onClick={() => setAgeGroup(age === "All" ? null : age)}
                >
                  {age}
                </button>
              ))}
            </div>
          </div>

          <div className="confirm-button-container">
            <button className="confirm-button" onClick={handleConfirm}>
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}