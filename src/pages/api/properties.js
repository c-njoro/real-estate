// pages/api/properties.js
import axios from "axios";

export default async function handler(req, res) {
  try {
    const { _page, _limit } = req.query;

    // Make sure to check if the environment variable exists
    if (!process.env.PAGINATED_PROPERTIES_URL) {
      throw new Error("PAGINATED_PROPERTIES_URL is not defined");
    }

    const response = await axios.get(
      `${process.env.PAGINATED_PROPERTIES_URL}`,
      {
        params: {
          _page,
          _limit,
        },
        headers: {
          Accept: "application/json",
          // Add any other required headers
        },
      }
    );

    return res.status(200).json(response.data);
  } catch (error) {
    console.error("API Route Error:", error);
    return res.status(500).json({
      error: "Failed to fetch properties",
      message: error.message,
    });
  }
}
