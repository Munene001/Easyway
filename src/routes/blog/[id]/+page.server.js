export async function load({ params, fetch }) {
  const { id } = params;
    
    
    const API_URL = `http://127.0.0.1:8000/api/news/${id}`; // Use backticks for interpolation
  
  
    try {
      const response = await fetch(API_URL, {
        method: "GET",
        headers: { Accept: "application/json" },
      });
  
      if (!response.ok) {
        throw new Error(`Failed to fetch news: ${response.status}`);
      }
  
      const data = await response.json(); // Consume the body once
     
  
      return {
        newsItem: data,
      };
    } catch (error) {
      console.error("Error loading news:", error);
      return {
        newsItem: null,
        error: "Failed to load news item",
        status: 500,
      };
    }
  }