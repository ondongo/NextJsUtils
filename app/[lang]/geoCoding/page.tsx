"use client";
import React, { useState, useEffect } from "react";

function Page() {
  const [geocodable, setGeocodable] = useState<any>(null);
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);

  async function isAddressGeocodable(address: any) {
    const apiUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
      address
    )}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.length > 0) {
        setLatitude(parseFloat(data[0].lat));
        setLongitude(parseFloat(data[0].lon));
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error(
        "Erreur lors de la vérification de l'adresse géocodable:",
        error
      );
      return false;
    }
  }

  useEffect(() => {
    const addressPass = "1600 Amphitheatre Parkway, Mouffxwwwwntain View, CA ";

    (async () => {
      try {
        const isGeocodable = await isAddressGeocodable(addressPass);
        setGeocodable(isGeocodable);
      } catch (error) {
        console.error("Une erreur s'est produite:", error);
      }
    })();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {geocodable !== null && (
        <p>
          adresse {geocodable ? "est" : "n'est pas"} géocodable.
          {geocodable && (
            <p>
              Longitude : {longitude}, Latitude : {latitude}
            </p>
          )}
        </p>
      )}
    </div>
  );
}

export default Page;
