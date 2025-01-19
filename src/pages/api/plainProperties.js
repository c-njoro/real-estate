// pages/api/properties.js
import axios from "axios";

export default async function handler(req, res) {
  try {
    const response = await axios.get(`${process.env.PROPERTIES_URL}`, {
      headers: {
        Accept: "application/json",
        // Add any other required headers
      },
    });

    return res.status(200).json(response.data);
  } catch (error) {
    console.error("API Route Error:", error);
    return res.status(500).json({
      error: "Failed to fetch properties",
      message: error.message,
    });
  }
}
