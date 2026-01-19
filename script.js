let knowledgeBase = [];

// Load knowledge base (RETRIEVAL STEP)
fetch("waste_knowledge.json")
    .then(response => response.json())
    .then(data => knowledgeBase = data);

function processWaste() {
    const userInput = document.getElementById("wasteInput").value.toLowerCase();
    const output = document.getElementById("output");

    let retrievedData = null;

    // 🔍 RETRIEVAL
    for (let item of knowledgeBase) {
        for (let keyword of item.keywords) {
            if (userInput.includes(keyword)) {
                retrievedData = item;
                break;
            }
        }
        if (retrievedData) break;
    }

    // 🧠 GENERATION
    if (retrievedData) {
        output.innerHTML = `
            <h3>Waste Category: ${retrievedData.category}</h3>
            <p><strong>Disposal Method:</strong> ${retrievedData.disposal}</p>
            <p><strong>Sustainability Impact:</strong> ${retrievedData.impact}</p>
        `;
    } else {
        output.innerHTML = `
            <p>⚠ No data found in knowledge base.</p>
            <p>Please consult local waste management authority.</p>
        `;
    }
}
