export async function fetchFlashcards() {
    try {
        const response = await fetch("http://localhost:3000/admin/create");

        if (!response.ok) {
            throw new Error("Failed to fetch flashcards");
        }

        const data = await response.json();

        // Optionally map or transform here if needed
        return data;
    } catch (error) {
        console.error("Error fetching flashcards:", error);
        return [];
    }
}