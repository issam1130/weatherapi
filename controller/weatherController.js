export const getTitle = (req, res) => {
  res.status(200).json({ message: "Get weather for any city!" });
};

export const searchByCity = async (req, res) => {
  try {
    const { input } = req.params;
    const apiKey = process.env.WEATHER_API_KEY;

    const response = await fetch(
  `http://api.weatherapi.com/v1/current.json?key=${process.env.KEY}&q=${input}`
    );

    if (!response.ok) {
      return res.status(response.status).json({ error: "Failed to fetch weather." });
    }

    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
