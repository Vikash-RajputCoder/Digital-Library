// Helper function to toggle visibility of sections
function toggleVisibility(showId) {
    const sections = document.querySelectorAll('.container > div');
    sections.forEach((section) => {
        section.classList.add('hidden');
    });
    document.getElementById(showId).classList.remove('hidden');
}

// History stack to track navigation steps
const navigationHistory = [];

// Function to navigate to a specific section and record history
function navigateTo(sectionId) {
    if (navigationHistory.length === 0 || navigationHistory[navigationHistory.length - 1] !== sectionId) {
        navigationHistory.push(sectionId);
    }
    toggleVisibility(sectionId);
}

// Show the Signup Section
function showSignUp() {
    navigateTo('signup-section');
}

// Show the Login Section
function showLogin() {
    navigateTo('login-section');
}

// Show the Welcome Section
function login() {
    // Add login logic here (validate credentials if needed)
    navigateTo('welcome-section');
}

// Sign Up Functionality
function signUp() {
    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    if (username && email && password) {
        alert('Sign-Up Successful!');
        showLogin();
    } else {
        alert('Please fill in all fields!');
    }
}

// Show Classes Section
function showClasses() {
    navigateTo('class-section');
}

// Show Year Section with correct semester buttons
function showYears(selectedClass) {
    navigateTo('year-section');
    const yearButtons = document.getElementById('year-buttons');
    yearButtons.innerHTML = '';

    let years = [];

    if (selectedClass === 'BCA') {
        years = ['1st Year', '2nd Year', '3rd Year'];
    } else if (selectedClass === 'BBA') {
        years = ['1st Year', '2nd Year', '3rd Year'];
    }

    years.forEach((year) => {
        const button = document.createElement('button');
        button.textContent = year;
        button.onclick = () => showSemesters(selectedClass, year);
        yearButtons.appendChild(button);
    });
}

// Show Semesters Section for the selected Year and Class
function showSemesters(selectedClass, year) {
    navigateTo('semester-section');
    const semesterButtons = document.getElementById('semester-buttons');
    semesterButtons.innerHTML = '';

    let semesters = [];

    if (year === '1st Year') {
        semesters = ['1st Semester', '2nd Semester'];
    } else if (year === '2nd Year') {
        semesters = ['3rd Semester', '4th Semester'];
    } else if (year === '3rd Year') {
        semesters = ['5th Semester', '6th Semester'];
    }

    semesters.forEach((semester) => {
        const button = document.createElement('button');
        button.textContent = semester;
        button.onclick = () => showSubjects(selectedClass, year, semester);
        semesterButtons.appendChild(button);
    });
}

// Show Subjects Section for the selected Semester
function showSubjects(selectedClass, year, semester) {
    navigateTo('subject-section');
    const subjectButtons = document.getElementById('subject-buttons');
    subjectButtons.innerHTML = '';

    // Sample subjects for now, this can be updated as needed
    const subjects = ['Subject 1', 'Subject 2', 'Subject 3', 'Subject 4', 'Subject 5'];
    
    subjects.forEach((subject) => {
        const button = document.createElement('button');
        button.textContent = subject;
        button.onclick = () => showContent(selectedClass, year, semester, subject);
        subjectButtons.appendChild(button);
    });
}

// Show Content Section for the selected Subject
function showContent(selectedClass, year, semester, subject) {
    navigateTo('content-section');
    console.log(`Selected: ${selectedClass} - ${year} - ${semester} - ${subject}`);
}

// Show Books Upload Section
function showBooks() {
    navigateTo('books-section');
}

// Show Papers Upload Section
function showPapers() {
    navigateTo('papers-section');
}

// File Upload Preview for Books
function previewBook(event) {
    const file = event.target.files[0];
    const previewContainer = document.getElementById('book-preview-container');
    previewContainer.innerHTML = '';

    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            const iframe = document.createElement('iframe');
            iframe.src = reader.result;
            iframe.width = '100%';
            iframe.height = '300px';
            previewContainer.appendChild(iframe);
        };
        reader.readAsDataURL(file);
    }
}

// File Upload Preview for Papers
function previewPaper(event) {
    const file = event.target.files[0];
    const previewContainer = document.getElementById('preview-container');
    previewContainer.innerHTML = '';

    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            const img = document.createElement('img');
            img.src = reader.result;
            img.style.maxWidth = '100%';
            img.style.height = 'auto';
            previewContainer.appendChild(img);
        };
        reader.readAsDataURL(file);
    }
}

// Go Back Functionality
function goBack() {
    if (navigationHistory.length > 1) {
        navigationHistory.pop(); // Remove current section
        const previousSection = navigationHistory[navigationHistory.length - 1];
        toggleVisibility(previousSection); // Show the previous section
    } else {
        alert('No more steps to go back.');
    }
}
