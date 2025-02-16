import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const apiResponse = await axios.get(`${process.env.PROPERTIES_URL}`);
    const properties = apiResponse.data;

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://real-estate-iota-teal.vercel.app/</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
      </url>
      <url>
        <loc>https://real-estate-iota-teal.vercel.app/properties</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>https://real-estate-iota-teal.vercel.app/about</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.5</priority>
      </url>
      <url>
        <loc>https://real-estate-iota-teal.vercel.app/contact</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.5</priority>
      </url>
      ${properties
        .map(
          (property) => `
        <url>
          <loc>https://real-estate-iota-teal.vercel.app/properties/${
            property._id
          }</loc>
          <lastmod>${
            property.updatedAt
              ? new Date(property.updatedAt).toISOString()
              : new Date().toISOString()
          }</lastmod>
          <changefreq>daily</changefreq>
          <priority>0.7</priority>
        </url>
      `
        )
        .join("")}
    </urlset>`;

    res.setHeader("Content-Type", "application/xml");
    return res.status(200).send(sitemap);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: `Error generating sitemap: ${error}` });
  }
}
