"use client";
import { useState, useEffect } from "react";

export default function Ipify() {
  const [ipAddress, setIpAddress] = useState("Loading...");

  useEffect(() => {
    fetch("https://api.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => {
        setIpAddress(data.ip);
      })
      .catch((error) => {
        console.error(error);
        setIpAddress("Error fetching IP address");
      });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <p>Your IP Address: {ipAddress}</p>
    </div>
  );
}
