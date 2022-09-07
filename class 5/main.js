// Variable

const body = document.body;
const input = document.querySelectorAll('.info-input');

const form = document.querySelector('#info-form');
const formList = document.querySelector('.form-list');

const allForms = [];

// Event Listeners ===============================

form.addEventListener('submit', createInfoForm);

// Functions ====================================

function createInfoForm(e) {
    e.preventDefault();

    // Grab info from the input boxes
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    // Create new form
    const formContainer = document.createElement('li');
    const newForm = document.createElement('div');
    newForm.className = 'form';
    newForm.innerText = `Name: ${name}; \nPhone: ${phone}; \nEmail: ${email}`;

    // Add new form to allForms array
    allForms.push(newForm);

    // Dynamically insert into HTML
    formContainer.appendChild(newForm);
    formList.appendChild(formContainer);

    // Save formList to Local Storage
    saveFormListToLocalStorage(allForms);
    

    // Reset the input box
    form.reset();
}


// poplates HTML with a list of forms
function populateFormList(forms = []) {
    formList.innerHTML = forms.map(
        (form) => `<li><div class="form">Name: ${name}; \nPhone: ${phone}; \nEmail: ${email}</div></li>`
    ).join('');
}

// Save list
function