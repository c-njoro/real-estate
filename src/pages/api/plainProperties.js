// pages/api/properties.js
import axios from "axios";

export default async function handler(req, res) {
  try {
    const { name, availabilityStatus, bedrooms, city } = req.query;

    // Build query string
    const queryParams = new URLSearchParams();
    if (name) queryParams.append("name", name);
    if (availabilityStatus)
      queryParams.append("availabilityStatus", availabilityStatus);
    if (bedrooms) queryParams.append("bedrooms", bedrooms);
    if (city) queryParams.append("city", city);

    const queryString = queryParams.toString();
    const url = `${process.env.PROPERTIES_URL}${
      queryString ? `?${queryString}` : ""
    }`;

    const response = await axios.get(url, {
      headers: {
        Accept: "application/json",
        // Add any other required headers
      },
      timeout: 10000,
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
