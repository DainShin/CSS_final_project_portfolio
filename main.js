const initialWidths = {
    eng: 0,
    kor: 0,
    man: 0,
    css: 0,
    python: 0,
    java: 0,
    csharp: 0,
    php: 0,
    database: 0
};

const finalWidths = {
    eng: 70,
    kor: 99,
    man: 85,
    css: 60,
    python: 65,
    java: 75,
    csharp: 75,
    php: 60,
    database: 75
};

let langBars = document.querySelectorAll(".lang span");
let skillBars = document.querySelectorAll(".skill span");

// Define a function to update the language bar widths
function updateLangBars() {
    let value = window.scrollY;

    langBars.forEach(langBar => {
        const langId = langBar.id;
        let currentWidth;

        if (value >= 5240) {
            currentWidth = finalWidths[langId];
            langBar.style.animation = "stack 3s ease-in-out forwards";
            langBar.style.width = currentWidth + '%';
        } else {
            currentWidth = initialWidths[langId];
            langBar.style.animation = "disappear 3s ease-in-out forwards";
            langBar.style.width = currentWidth + '%';
        }
    });

    skillBars.forEach(skillBar => {
        const skillId = skillBar.id;
        let curWidth;

        if (value >= 4110) {
            curWidth = finalWidths[skillId];
            skillBar.style.animation = "stack 3s ease-in-out forwards";
            skillBar.style.width = curWidth + '%';
        } else {
            curWidth = initialWidths[skillId];
            skillBar.style.animation = "disappear 3s ease-in-out forwards";
            skillBar.style.width = curWidth + '%';
        }
    });

}



// Attach the scroll event listener to the window
window.addEventListener('scroll', updateLangBars);
