import React from "react";

const Resume = () => {
  const redirectToResume = () => {
    window.location.href =
      "https://drive.google.com/file/d/1wKzz3bgJAKBaYJx4KDJjhwMEvgNQvTmm/view?usp=sharing";
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <button
        onClick={redirectToResume}
        style={{
          width: "240px",
          height: "60px",
          backgroundColor: "rgba(0, 0, 255, 0.5)",
          borderRadius: "30px",
          border: "none",
          fontSize: "1.2rem",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        Download Resume
      </button>
    </div>
  );
};

export default Resume;
