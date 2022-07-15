import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          maxWidth: "fit-content",
          boxShadow:
            "rgba(29, 53, 87, 0.25) 0px 15px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px",
          marginTop: 10,
          borderRadius: 8,
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
          }}
        >
          <h1
            style={{
              color: "#084887",
              paddingLeft: 15,
              paddingRight: 15,
              paddingTop: 8,
              paddingBottom: 8,
            }}
            className="font-bold text-2xl"
          >
            Birthday Remainder
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default Header;
