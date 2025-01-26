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

    let subjects = [];

    if (selectedClass === 'BCA') {
        if (year === '1st Year' && semester === '1st Semester') {
            subjects = [
                'Computer Fundamentals and MS-Office',
                'Introduction to Programming using C',
                'Business Communication and Soft Skill',
                'Introduction to HTML-CSS-XML',
                'Mathematics- I',
            ];
        } else if (year === '1st Year' && semester === '2nd Semester') {
            subjects = [
                'JAVA Programming',
                'Data Base Management System',
                'Data Structure using C',
                'Principles of Management',
                'Numerical Methods',
            ];
        } else if (year === '2nd Year' && semester === '3rd Semester') {
            subjects = [
                'Digital Electronics',
                'Python Programming',
                'Software Engineering',
                'Computer Network',
                'Statistical Method and Application',
            ];
        } else if (year === '2nd Year' && semester === '4th Semester') {
            subjects = [
                'Web Technology with PHP & MySQL',
                'Operating System',
                'Cloud Computing',
                'Computer Organization and Architecture',
                'Optimization Techniques',
            ];
        } else if (year === '3rd Year' && semester === '5th Semester') {
            subjects = [
                'Network Security',
                'Visual Basic .NET',
                'Computer Graphics',
                'Artificial Intelligence',
                'Design & Analysis of Algorithms',
            ];
        }
    } else if (selectedClass === 'BBA') {
        if (year === '1st Year' && semester === '1st Semester') {
            subjects = [
                'Business Organization',
                'Business Mathematics',
                'Business Communication I',
                'Fundamentals of Computers & Information Technology',
                'Fundamentals of Accounting',
                'Business Environment',
            ];
        } else if (year === '1st Year' && semester === '2nd Semester') {
            subjects = [
                'Management Thoughts & Philosophy',
                'Micro Economics for Business',
                'Cost Accounting',
                'Legal & Regulatory Framework of Business',
                'Business Communication II',
                'Business Statistics',
            ];
        } else if (year === '2nd Year' && semester === '3rd Semester') {
            subjects = [
                'Company Law',
                'Marketing Management',
                'Macro Economics for Business',
                'Principles & Practices of Management',
                'Organizational Behaviour',
                'Management Accounting',
            ];
        } else if (year === '2nd Year' && semester === '4th Semester') {
            subjects = [
                'Financial Management',
                'Project Management & Planning',
                'Research Methodology',
                'Human Resource Management',
                'Taxation Laws',
                'Production Management',
            ];
        } else if (year === '3rd Year' && semester === '5th Semester') {
            subjects = [
                'Operations Research',
                'Sales & Distribution Management',
                'Business Policy',
                'Entrepreneurship & Business Management',
            ];
        } else if (year === '3rd Year' && semester === '6th Semester') {
            subjects = [
                'E-Business Management & CRM',
                'Advertising Management',
                'Management of Financial Institutions & Services',
                'International Business Management',
            ];
        }
    }

    // Create buttons for each subject
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
