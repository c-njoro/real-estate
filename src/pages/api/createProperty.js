// pages/api/property.js
import axios from "axios";

export default async function handler(req, res) {
  const {
    name,
    description,
    exactAddress,
    city,
    size,
    bedrooms,
    bathrooms,
    imagePaths,
  } = req.body;

  if (
    !name ||
    !description ||
    !exactAddress ||
    !city ||
    !size ||
    !bedrooms ||
    !bathrooms ||
    !imagePaths
  ) {
    return res
      .status(409)
      .json({ message: "Some data for property creation was not provided" });
  }

  try {
    const createUrl = process.env.PROPERTIES_CREATE_URL;
    console.log("URL: ", createUrl);
    const response = await axios.post(
      `${process.env.PROPERTIES_CREATE_URL}`,
      req.body
    );

    return res.status(201).json(response.data);
  } catch (error) {
    console.error("API Route Error:", error);
    return res.status(500).json({
      error: "Failed to create property",
      message: error.message,
    });
  }
}
