export async function checkUrlExists(url: string): Promise<boolean> {
  try {
    const response = await fetch(url, { method: "HEAD" });
    console.log(response);
    return response.ok; // Returns true if status is 200-299
  } catch (error) {
    console.error("Error fetching the URL:", error);
    return false; // Return false if there's an error
  }
}
