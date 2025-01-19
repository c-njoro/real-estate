// pages/api/property.js
import axios from "axios";

export default async function handler(req, res) {
  const { method, query } = req;

  if (method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { id } = query;

  if (!id) {
    return res.status(400).json({ error: "Property ID is required" });
  }

  if (!process.env.PROPERTIES_ONE_URL) {
    return res.status(500).json({ error: "PROPERTIES_ONE_URL is not defined" });
  }

  try {
    const response = await axios.get(
      `${process.env.PROPERTIES_ONE_URL}/${id}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );

    return res.status(200).json(response.data);
  } catch (error) {
    console.error("API Route Error:", error);
    return res.status(500).json({
      error: "Failed to fetch property details",
      message: error.message,
    });
  }
}
