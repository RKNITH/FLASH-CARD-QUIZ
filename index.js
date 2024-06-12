// Sample flashcard content
const flashcards = [
    { front: 'What is the capital of France?', back: 'Paris' },
    { front: 'Who wrote "Romeo and Juliet"?', back: 'William Shakespeare' },
    { front: 'What is the chemical symbol for gold?', back: 'Au' },
    { front: 'What year did World War I begin?', back: '1914' },
    { front: 'Who painted the Mona Lisa?', back: 'Leonardo da Vinci' },
    { front: 'What is the largest planet in our solar system?', back: 'Jupiter' },
    { front: 'What is the square root of 64?', back: '8' },
    { front: 'What is the atomic number of carbon?', back: '6' },
    { front: 'Who wrote "To Kill a Mockingbird"?', back: 'Harper Lee' },
    { front: 'What is the capital of Japan?', back: 'Tokyo' },
    { front: 'What is the chemical symbol for water?', back: 'H2O' },
    { front: 'Who discovered penicillin?', back: 'Alexander Fleming' },
    { front: 'What is the tallest mountain in the world?', back: 'Mount Everest' },
    { front: 'What is the boiling point of water in Fahrenheit?', back: '212' },
    { front: 'Who composed the "Moonlight Sonata"?', back: 'Ludwig van Beethoven' },
    { front: 'What is the capital of Brazil?', back: 'Brasília' },
    { front: 'What is the chemical symbol for oxygen?', back: 'O' },
    { front: 'Who painted "The Starry Night"?', back: 'Vincent van Gogh' },
    { front: 'What is the melting point of iron in Celsius?', back: '1538' },
    { front: 'Who wrote "1984"?', back: 'George Orwell' },
    { front: 'What is the chemical symbol for sodium?', back: 'Na' },
    { front: 'What is the speed of light in meters per second?', back: '299,792,458' },
    { front: 'Who composed "Symphony No. 9" (Ode to Joy)?', back: 'Ludwig van Beethoven' },
    { front: 'What is the capital of Australia?', back: 'Canberra' },
    { front: 'What is the chemical symbol for silver?', back: 'Ag' },
    { front: 'Who painted "The Last Supper"?', back: 'Leonardo da Vinci' },
    { front: 'What is the freezing point of water in Kelvin?', back: '273.15' },
    { front: 'Who wrote "Pride and Prejudice"?', back: 'Jane Austen' },
    { front: 'What is the chemical symbol for helium?', back: 'He' },
    { front: 'Who invented the telephone?', back: 'Alexander Graham Bell' },
    { front: 'What is the deepest ocean in the world?', back: 'Pacific Ocean' },
    { front: 'What is the speed of sound in air at room temperature?', back: '343 meters per second' },
    { front: 'Who composed "Für Elise"?', back: 'Ludwig van Beethoven' },
    { front: 'What is the currency of China?', back: 'Renminbi' },
    { front: 'What is the chemical symbol for carbon dioxide?', back: 'CO2' },
    { front: 'Who painted "The Creation of Adam"?', back: 'Michelangelo' },
    { front: 'What is the circumference of the Earth at the equator?', back: '40,075 kilometers' },
    { front: 'Who wrote "The Catcher in the Rye"?', back: 'J.D. Salinger' },
    { front: 'What is the chemical symbol for potassium?', back: 'K' },
    { front: 'Who invented the light bulb?', back: 'Thomas Edison' },
    { front: 'What is the largest ocean on Earth?', back: 'Pacific Ocean' },
    { front: 'What is the boiling point of water in Kelvin?', back: '373.15' },
    { front: 'Who composed "The Four Seasons"?', back: 'Antonio Vivaldi' },
    { front: 'What is the currency of Japan?', back: 'Japanese yen' },
    { front: 'What is the chemical symbol for nitrogen?', back: 'N' },
    { front: 'Who painted "Guernica"?', back: 'Pablo Picasso' },
    { front: 'What is the capital of South Africa?', back: 'Pretoria' },
    { front: 'What is the chemical symbol for calcium?', back: 'Ca' },
    { front: 'Who discovered gravity?', back: 'Isaac Newton' },
    { front: 'What is the deepest lake in the world?', back: 'Lake Baikal' },
    { front: 'What is the speed of light in miles per hour?', back: '671 million miles per hour' },
    { front: 'Who composed "Swan Lake"?', back: 'Pyotr Ilyich Tchaikovsky' },
    { front: 'What is the currency of India?', back: 'Indian rupee' },
    { front: 'What is the chemical symbol for iron?', back: 'Fe' },
    { front: 'Who discovered America?', back: 'Christopher Columbus' },
    { front: 'What is the largest desert in the world?', back: 'Antarctica' },
    { front: 'What is the chemical symbol for copper?', back: 'Cu' },
    { front: 'Who discovered the theory of relativity?', back: 'Albert Einstein' },
    { front: 'What is the boiling point of water in Celsius?', back: '100' },
    { front: 'Who painted "The Persistence of Memory"?', back: 'Salvador Dalí' },
    { front: 'What is the melting point of gold in Celsius?', back: '1064' },
    { front: 'What is the largest continent by land area?', back: 'Asia' },
    { front: 'Who wrote "The Odyssey"?', back: 'Homer' },
    { front: 'What is the chemical symbol for lead?', back: 'Pb' },
    { front: 'Who discovered the law of gravity?', back: 'Isaac Newton' },
    { front: 'What is the square root of 144?', back: '12' },
    { front: 'What is the currency of Russia?', back: 'Russian ruble' },
    { front: 'Who painted "The Scream"?', back: 'Edvard Munch' },
    { front: 'What is the boiling point of ethanol in Celsius?', back: '78.37' },
    { front: 'Who invented the theory of evolution by natural selection?', back: 'Charles Darwin' },
    { front: 'What is the chemical symbol for silicon?', back: 'Si' },
    { front: 'Who wrote "War and Peace"?', back: 'Leo Tolstoy' },
    { front: 'What is the melting point of ice in Fahrenheit?', back: '32' },
    { front: 'What is the capital of Spain?', back: 'Madrid' },
    { front: 'Who painted "Starry Night Over the Rhône"?', back: 'Vincent van Gogh' },
    { front: 'What is the boiling point of mercury in Celsius?', back: '356.7' },
    { front: 'Who discovered the structure of DNA?', back: 'James Watson and Francis Crick' },
    { front: 'What is the chemical symbol for uranium?', back: 'U' },
    { front: 'Who wrote "The Great Gatsby"?', back: 'F. Scott Fitzgerald' },
    { front: 'What is the melting point of sulfur in Celsius?', back: '115.21' },
    { front: 'What is the currency of the United Kingdom?', back: 'Pound sterling' },
    { front: 'Who painted "Girl with a Pearl Earring"?', back: 'Johannes Vermeer' },
    { front: 'What is the boiling point of nitrogen in Celsius?', back: '-196' },
    { front: 'Who developed the theory of general relativity?', back: 'Albert Einstein' },
    { front: 'What is the chemical symbol for tin?', back: 'Sn' },
    { front: 'Who wrote "Don Quixote"?', back: 'Miguel de Cervantes' },
    { front: 'What is the melting point of aluminum in Celsius?', back: '660.32' },
    { front: 'What is the capital of Italy?', back: 'Rome' },
    { front: 'Who painted "The Birth of Venus"?', back: 'Sandro Botticelli' },
    { front: 'What is the boiling point of ethanol in Fahrenheit?', back: '173.2' },
    { front: 'Who discovered X-rays?', back: 'Wilhelm Conrad Röntgen' },
    { front: 'What is the chemical symbol for mercury?', back: 'Hg' },
    { front: 'Who wrote "The Iliad"?', back: 'Homer' },
    { front: 'What is the melting point of gold in Fahrenheit?', back: '1945' },
    { front: 'What is the currency of Canada?', back: 'Canadian dollar' },
    { front: 'Who painted "The School of Athens"?', back: 'Raphael' },
    { front: 'What is the boiling point of mercury in Fahrenheit?', back: '674' },
    { front: 'Who discovered the polio vaccine?', back: 'Jonas Salk' },
    { front: 'What is the chemical symbol for zinc?', back: 'Zn' },
    { front: 'Who wrote "Moby-Dick"?', back: 'Herman Melville' },
    { front: 'What is the melting point of sulfur in Fahrenheit?', back: '239.38' },
    { front: 'What is the capital of Germany?', back: 'Berlin' },
    { front: 'Who painted "American Gothic"?', back: 'Grant Wood' },
    { front: 'What is the boiling point of nitrogen in Fahrenheit?', back: '-321' },
    { front: 'Who discovered the theory of general relativity?', back: 'Albert Einstein' },
    { front: 'What is the chemical symbol for platinum?', back: 'Pt' },
    { front: 'Who wrote "The Divine Comedy"?', back: 'Dante Alighieri' },
    { front: 'What is the melting point of aluminum in Fahrenheit?', back: '1220.58' },
    { front: 'What is the capital of China?', back: 'Beijing' },
    { front: 'Who painted "The Night Watch"?', back: 'Rembrandt' },
    { front: 'What is the chemical symbol for sodium?', back: 'Na' },
    { front: 'Who composed the "Moonlight Sonata"?', back: 'Ludwig van Beethoven' },
    { front: 'What is the boiling point of carbon dioxide in Celsius?', back: '-78.5' },
    { front: 'Who painted "Starry Night"?', back: 'Vincent van Gogh' },
    { front: 'What is the melting point of iron in Celsius?', back: '1538' },
    { front: 'What is the smallest country by land area?', back: 'Vatican City' },
    { front: 'Who wrote "1984"?', back: 'George Orwell' },
    { front: 'What is the chemical symbol for oxygen?', back: 'O' },
    { front: 'Who discovered penicillin?', back: 'Alexander Fleming' },
    { front: 'What is the square root of 169?', back: '13' },
    { front: 'What is the currency of Japan?', back: 'Japanese yen' },
    { front: 'Who painted "The Last Supper"?', back: 'Leonardo da Vinci' },
    { front: 'What is the boiling point of ethanol in Celsius?', back: '78.37' },
    { front: 'Who developed the theory of relativity?', back: 'Albert Einstein' },
    { front: 'What is the chemical symbol for calcium?', back: 'Ca' },
    { front: 'Who wrote "The Great Gatsby"?', back: 'F. Scott Fitzgerald' },
    { front: 'What is the melting point of copper in Celsius?', back: '1085' },
    { front: 'What is the currency of Australia?', back: 'Australian dollar' },
    { front: 'Who painted "The Creation of Adam"?', back: 'Michelangelo' },
    { front: 'What is the boiling point of water in Fahrenheit?', back: '212' },
    { front: 'Who discovered electricity?', back: 'Benjamin Franklin' },
    { front: 'What is the chemical symbol for potassium?', back: 'K' },
    { front: 'Who wrote "Pride and Prejudice"?', back: 'Jane Austen' },
    { front: 'What is the melting point of silver in Celsius?', back: '961.8' },
    { front: 'What is the capital of Spain?', back: 'Madrid' },
    { front: 'Who painted "The Starry Night"?', back: 'Vincent van Gogh' },
    { front: 'What is the boiling point of nitrogen in Fahrenheit?', back: '-321' },
    { front: 'Who discovered the theory of general relativity?', back: 'Albert Einstein' },
    { front: 'What is the chemical symbol for platinum?', back: 'Pt' },
    { front: 'Who wrote "The Divine Comedy"?', back: 'Dante Alighieri' },
    { front: 'What is the melting point of aluminum in Fahrenheit?', back: '1220.58' },
    { front: 'What is the capital of China?', back: 'Beijing' },
    { front: 'Who painted "The Night Watch"?', back: 'Rembrandt' },
    { front: 'What is the boiling point of nitrogen in Fahrenheit?', back: '-321' },
    { front: 'Who discovered the theory of general relativity?', back: 'Albert Einstein' },
    { front: 'What is the chemical symbol for platinum?', back: 'Pt' },
    { front: 'Who wrote "The Divine Comedy"?', back: 'Dante Alighieri' },
    { front: 'What is the melting point of aluminum in Fahrenheit?', back: '1220.58' },
    { front: 'What is the capital of China?', back: 'Beijing' },
    { front: 'Who painted "The Night Watch"?', back: 'Rembrandt' },
    { front: 'What is the chemical symbol for lithium?', back: 'Li' },
    { front: 'Who composed the "Ode to Joy"?', back: 'Ludwig van Beethoven' },
    { front: 'What is the capital of Argentina?', back: 'Buenos Aires' },
    { front: 'What is the atomic number of hydrogen?', back: '1' },
    { front: 'Who painted "The Thinker"?', back: 'Auguste Rodin' },
    { front: 'What is the closest planet to the Sun?', back: 'Mercury' },
    { front: 'What is the square root of 81?', back: '9' },
    { front: 'What is the chemical symbol for nitrogen?', back: 'N' },
    { front: 'Who wrote "The Lord of the Rings"?', back: 'J.R.R. Tolkien' },
    { front: 'What is the capital of Egypt?', back: 'Cairo' },
    { front: 'What is the chemical symbol for carbon?', back: 'C' },
    { front: 'Who discovered the theory of evolution?', back: 'Charles Darwin' },
    { front: 'What is the tallest building in the world?', back: 'Burj Khalifa' },
    { front: 'What is the boiling point of mercury in Kelvin?', back: '629.88' },
    { front: 'Who composed "The Magic Flute"?', back: 'Wolfgang Amadeus Mozart' },
    { front: 'What is the capital of Canada?', back: 'Ottawa' },
    { front: 'What is the chemical symbol for zinc?', back: 'Zn' },
    { front: 'Who painted "The Persistence of Memory"?', back: 'Salvador Dalí' },
    { front: 'What is the freezing point of water in Fahrenheit?', back: '32' },
    { front: 'Who wrote "The Hitchhiker\'s Guide to the Galaxy"?', back: 'Douglas Adams' },
    { front: 'What is the chemical symbol for helium?', back: 'He' },
    { front: 'Who discovered gravity?', back: 'Isaac Newton' },
    { front: 'What is the deepest lake in the United States?', back: 'Crater Lake' },
    { front: 'What is the speed of sound in water?', back: '1482 meters per second' },
    { front: 'Who composed "La Traviata"?', back: 'Giuseppe Verdi' },
    { front: 'What is the currency of Mexico?', back: 'Mexican peso' },
    { front: 'What is the chemical symbol for iron?', back: 'Fe' },
    { front: 'Who invented the radio?', back: 'Guglielmo Marconi' },
    { front: 'What is the largest river in the world by discharge?', back: 'Amazon River' },
    { front: 'What is the speed of light in kilometers per second?', back: '299,792 kilometers per second' },
    { front: 'Who composed "The Nutcracker"?', back: 'Pyotr Ilyich Tchaikovsky' },
    { front: 'What is the currency of South Korea?', back: 'South Korean won' },
    { front: 'What is the chemical symbol for aluminum?', back: 'Al' },
    { front: 'Who painted "Les Demoiselles d\'Avignon"?', back: 'Pablo Picasso' },
    { front: 'What is the capital of India?', back: 'New Delhi' },
    { front: 'Who discovered the laws of planetary motion?', back: 'Johannes Kepler' },
    { front: 'What is the deepest point in the ocean?', back: 'Mariana Trench' },
    { front: 'What is the speed of light in miles per second?', back: '186,282 miles per second' },
    { front: 'Who composed "Carmen"?', back: 'Georges Bizet' },
    { front: 'What is the currency of Brazil?', back: 'Brazilian real' },
    { front: 'What is the chemical symbol for tin?', back: 'Sn' },
    { front: 'Who wrote "The War of the Worlds"?', back: 'H.G. Wells' },
    { front: 'What is the melting point of ice in Kelvin?', back: '273.15' },
    { front: 'What is the capital of Russia?', back: 'Moscow' },
    { front: 'Who painted "The Birth of Venus"?', back: 'Sandro Botticelli' },
    { front: 'What is the boiling point of ethanol in Fahrenheit?', back: '173.2' },
    { front: 'Who discovered X-rays?', back: 'Wilhelm Conrad Röntgen' },
    { front: 'What is the chemical symbol for mercury?', back: 'Hg' },
    { front: 'Who wrote "The Iliad"?', back: 'Homer' },
    { front: 'What is the melting point of gold in Fahrenheit?', back: '1945' },
    { front: 'What is the currency of Canada?', back: 'Canadian dollar' },
    { front: 'Who painted "The School of Athens"?', back: 'Raphael' },
    { front: 'What is the boiling point of mercury in Fahrenheit?', back: '674' },
    { front: 'Who discovered the polio vaccine?', back: 'Jonas Salk' },
    { front: 'What is the chemical symbol for uranium?', back: 'U' },
    { front: 'Who wrote "Moby-Dick"?', back: 'Herman Melville' },
    { front: 'What is the melting point of sulfur in Fahrenheit?', back: '239.38' },
    { front: 'What is the capital of Germany?', back: 'Berlin' },
    { front: 'Who painted "American Gothic"?', back: 'Grant Wood' },
    { front: 'What is the boiling point of nitrogen in Fahrenheit?', back: '-321' },
    { front: 'Who discovered the theory of general relativity?', back: 'Albert Einstein' },
    { front: 'What is the chemical symbol for platinum?', back: 'Pt' },
    { front: 'Who wrote "The Divine Comedy"?', back: 'Dante Alighieri' },
    { front: 'What is the melting point of aluminum in Fahrenheit?', back: '1220.58' },
    { front: 'What is the capital of China?', back: 'Beijing' },
    { front: 'Who painted "The Night Watch"?', back: 'Rembrandt' },
    { front: 'What is the boiling point of nitrogen in Fahrenheit?', back: '-321' },
    { front: 'Who discovered the theory of general relativity?', back: 'Albert Einstein' },
    { front: 'What is the chemical symbol for platinum?', back: 'Pt' },
    { front: 'Who wrote "The Divine Comedy"?', back: 'Dante Alighieri' },

];

let currentCardIndex = 0;
let isFlipped = false;

// Function to load the next flashcard
function loadNextFlashcard() {
    if (currentCardIndex < flashcards.length) {
        const currentCard = flashcards[currentCardIndex];
        document.getElementById('flashcardFront').innerText = currentCard.front;
        document.getElementById('flashcardBack').innerText = currentCard.back;
        isFlipped = false;
        updateCardFlip();
        currentCardIndex++;
    } else {
        // No more flashcards, reset to the first card
        currentCardIndex = 0;
        loadNextFlashcard();
    }
}

// Function to update the flip state of the flashcard
function updateCardFlip() {
    const flashcardFront = document.getElementById('flashcardFront');
    const flashcardBack = document.getElementById('flashcardBack');

    if (isFlipped) {
        flashcardFront.style.transform = 'rotateY(180deg)';
        flashcardBack.style.transform = 'rotateY(0deg)';
    } else {
        flashcardFront.style.transform = 'rotateY(0deg)';
        flashcardBack.style.transform = 'rotateY(-180deg)';
    }
}



// Event listener for the flip button
document.getElementById('flipButton').addEventListener('click', () => {
    isFlipped = !isFlipped;
    updateCardFlip();

});

// Event listener for the next button
document.getElementById('nextButton').addEventListener('click', loadNextFlashcard)




// Initial load of the first flashcard
loadNextFlashcard();
