import Parser from "rss-parser";

const parser = new Parser();

export const fetchIndustryNews = async (req, res) => {
  try {
    const industryName = req.body.industry;
    const searchQuery = `${industryName} jobs OR hiring OR recruitment OR layoffs OR employment OR careers India`;
    
    if (!industryName) {
      return res.status(400).json({ success: false, message: "Missing industry name" });
    }
    
    const googleNewsRSS = `https://news.google.com/rss/search?q=${encodeURIComponent(searchQuery)}&hl=en-IN&gl=IN&ceid=IN:en`;
    const feed = await parser.parseURL(googleNewsRSS);
    const newsTitles = feed.items.slice(0, 10).map((article) => article.title);

    res.json({ success: true, news: newsTitles });
  } catch (error) {
    console.error("Error fetching news:", error);
    res.status(500).json({ success: false, message: "Failed to fetch news" });
  }
};
