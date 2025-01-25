let historyStack = []; // Stack to keep track of the history

function showSignUp() {
    document.getElementById('login-section').classList.add('hidden');
    document.getElementById('signup-section').classList.remove('hidden');
    historyStack.push('signup');
}

function showLogin() {
    document.getElementById('signup-section').classList.add('hidden');
    document.getElementById('login-section').classList.remove('hidden');
    historyStack.push('login');
}

function login() {
    document.getElementById('login-section').classList.add('hidden');
    document.getElementById('welcome-section').classList.remove('hidden');
    historyStack.push('welcome');
}

function signUp() {
    alert('Sign-up successful! You can now log in.');
    showLogin();
}

function showClasses() {
    document.getElementById('welcome-section').classList.add('hidden');
    document.getElementById('class-section').classList.remove('hidden');
    historyStack.push('class');
}

function showYears(classType) {
    document.getElementById('class-section').classList.add('hidden');
    document.getElementById('year-buttons').innerHTML = `
        <button onclick="showSemesters('${classType}', '1st Year')">1st Year</button>
        <button onclick="showSemesters('${classType}', '2nd Year')">2nd Year</button>
        <button onclick="showSemesters('${classType}', '3rd Year')">3rd Year</button>
    `;
    document.getElementById('year-section').classList.remove('hidden');
    historyStack.push('year');
}

function showSemesters(classType, year) {
    document.getElementById('year-section').classList.add('hidden');
    const semesters = {
        '1st Year': ['1st Semester', '2nd Semester'],
        '2nd Year': ['3rd Semester', '4th Semester'],
        '3rd Year': ['5th Semester', '6th Semester']
    }[year];

    document.getElementById('semester-buttons').innerHTML = semesters.map(sem => 
        `<button onclick="showSubjects('${classType}', '${year}', '${sem}')">${sem}</button>`
    ).join('');

    document.getElementById('semester-section').classList.remove('hidden');
    historyStack.push('semester');
}

function showSubjects(classType, year, semester) {
    document.getElementById('semester-section').classList.add('hidden');
    document.getElementById('subject-buttons').innerHTML = `
        <button onclick="showContent('${classType}', '${semester}', 'Subject 1')">Subject 1</button>
        <button onclick="showContent('${classType}', '${semester}', 'Subject 2')">Subject 2</button>
        <button onclick="showContent('${classType}', '${semester}', 'Subject 3')">Subject 3</button>
        <button onclick="showContent('${classType}', '${semester}', 'Subject 4')">Subject 4</button>
        <button onclick="showContent('${classType}', '${semester}', 'Subject 5')">Subject 5</button>
    `;
    document.getElementById('subject-section').classList.remove('hidden');
    historyStack.push('subject');
}

function showContent(classType, semester, subject) {
    document.getElementById('subject-section').classList.add('hidden');
    document.getElementById('content-section').classList.remove('hidden');
    historyStack.push('content');
}

function goBack() {
    let lastStep = historyStack.pop();
    if (lastStep === 'content') {
        document.getElementById('content-section').classList.add('hidden');
        document.getElementById('subject-section').classList.remove('hidden');
    } else if (lastStep === 'subject') {
        document.getElementById('subject-section').classList.add('hidden');
        document.getElementById('semester-section').classList.remove('hidden');
    } else if (lastStep === 'semester') {
        document.getElementById('semester-section').classList.add('hidden');
        document.getElementById('year-section').classList.remove('hidden');
    } else if (lastStep === 'year') {
        document.getElementById('year-section').classList.add('hidden');
        document.getElementById('class-section').classList.remove('hidden');
    } else if (lastStep === 'class') {
        document.getElementById('class-section').classList.add('hidden');
        document.getElementById('welcome-section').classList.remove('hidden');
    }
}
