// pages/api/updateProperty.js
import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "PUT") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { id } = req.query;
    const baseUrl = process.env.PROPERTIES_UPDATE_URL;

    if (!baseUrl) {
      console.error("PROPERTIES_UPDATE_URL not found in environment variables");
      return res.status(500).json({ message: "Server configuration error" });
    }

    if (!id) {
      console.log("No ID provided");
      return res.status(400).json({ message: "No id was provided" });
    }

    const response = await axios.put(`${baseUrl}/${id}`, req.body, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    return res.status(200).json(response.data);
  } catch (error) {
    console.error("API Route Error:", error.response?.data || error.message);
    return res.status(error.response?.status || 500).json({
      error: "Failed to update the property",
      message: error.response?.data?.message || error.message,
    });
  }
}
