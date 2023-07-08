const quotes = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. - James Cameron",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
    "Happiness is not something ready-made. It comes from your own actions. - Dalai Lama",
    "The most important thing is to enjoy your life—to be happy—it's all that matters. - Audrey Hepburn",
    "Love yourself first and everything else falls into line. You really have to love yourself \
    to get anything done in this world. - Lucille Ball",
    "Happiness is not a goal; it is a by-product. - Eleanor Roosevelt",
    "Always be the first person to love yourself. - Nandhini"
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteElement = document.getElementById("quote");
    quoteElement.textContent = quotes[randomIndex];
}

const generateBtn = document.getElementById("generate-btn");
generateBtn.addEventListener("click", generateQuote);
