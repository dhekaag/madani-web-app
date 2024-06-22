import { Title } from "@mantine/core";
import React from "react";

export const HomeContainer = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "white",
        padding: "0 20px",
      }}
    >
      <Title>WEB RESMI KAMPUNG MANDALING NATAL</Title>
      <p style={{ fontSize: "1.5rem", marginBottom: "1.5rem" }}>
        Negeri Beradat Taat Beribadat
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "white",
          borderRadius: "5px",
          padding: "10px",
          maxWidth: "500px",
          width: "100%",
        }}
      >
        <input
          type="text"
          placeholder="Apa yang anda cari..."
          style={{
            border: "none",
            outline: "none",
            padding: "10px",
            flex: 1,
          }}
        />
        <button
          style={{
            backgroundColor: "#007BFF",
            color: "white",
            border: "none",
            padding: "10px 20px",
          }}
        >
          Cari
        </button>
      </div>
    </div>
  );
};
