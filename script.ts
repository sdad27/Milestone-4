// Get references to the form and display area
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

// Handle form submission
form.addEventListener('submit', (event: Event) => {
    event.preventDefault(); // prevent page reload

    // Collect input values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value.split(',');
    const experience = (document.getElementById('experience') as HTMLInputElement).value.split(',');
    const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');

    // Helper function to create list items
    const createListItems = (items: string[]) => {
        return items.map(item => `<li>${item.trim()}</li>`).join('');
    };

    // Generate the resume content dynamically
    const resumeHTML = `
        <h1>Resume</h1>
        <div>
            <fieldset>
                <legend>Personal Information</legend>
                <p><strong>Name:</strong><span contenteditable="true">${name}</span></p>
                <p><strong>Email:</strong><span contenteditable="true">${email}</span></p>
                <p><strong>Phone:</strong><span contenteditable="true">${phone}</span></p>
            </fieldset>

            <fieldset>
                <legend>Education</legend>
                <ul contenteditable="true">
                    ${createListItems(education)}
                </ul>
            </fieldset>

            <fieldset>
                <legend>Experience</legend>
                <ul contenteditable="true">
                    ${createListItems(experience)}
                </ul>
            </fieldset>

            <fieldset>
                <legend>Skills</legend>
                <ul contenteditable="true">
                    ${createListItems(skills)}
                </ul>
            </fieldset>
        </div>
    `;

    // Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    } else {
        console.error('The resume display element is missing.');
    }
});
