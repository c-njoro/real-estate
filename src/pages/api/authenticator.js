export default async function handler(req, res) {
  try {
    console.log(process.env.MANAGER_USERNAME, process.env.MANAGER_PASSWORD);
    const { username, password } = req.query;
    console.log(username, password);

    if (!username || !password) {
      return res.status(404).json({ authenticated: false });
    }
    if (
      username.toLowerCase() === process.env.MANAGER_USERNAME.toLowerCase() &&
      password.toLowerCase() === process.env.MANAGER_PASSWORD.toLowerCase()
    ) {
      return res.status(200).json({ authenticated: true });
    }

    return res.status(409).json({ authenticated: false });
  } catch (error) {
    console.log("Did not try to authenticate");
    return res.status(500).json({ authenticated: false });
  }
}
