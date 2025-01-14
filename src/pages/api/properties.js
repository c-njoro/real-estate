import properties from "./properties.json"; // Correct path to JSON file

export default function handler(req, res) {
  const { _page, _limit } = req.query;
  const page = parseInt(_page) || 1;
  const limit = parseInt(_limit) || 10;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const paginatedProperties = properties.slice(startIndex, endIndex); // Paginate based on start and end index

  res.status(200).json(paginatedProperties); // Respond with paginated properties data
}
