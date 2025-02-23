export async function tempFetch() {
  try {
    const response = await fetch("http://localhost:3333/api/temp1");
    if (!response.ok) throw new Error(`Failed to fetch: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}
