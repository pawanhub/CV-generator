const form = document.querySelector('form');
const fullName = document.getElementById('full-name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const address = document.getElementById('address');
const degree = document.getElementById('degree');
const university = document.getElementById('university');
const graduationYear = document.getElementById('graduation-year');
const position = document.getElementById('position');
const company = document.getElementById('company');
const employmentPeriod = document.getElementById('employment-period');
const description = document.getElementById('description');

form.addEventListener('submit', generateCV);

function generateCV(event) {
  event.preventDefault();

  const fullNameValue = fullName.value;
  const emailValue = email.value;
  const phoneValue = phone.value;
  const addressValue = address.value;
  const degreeValue = degree.value;
  const universityValue = university.value;
  const graduationYearValue = graduationYear.value;
  const positionValue = position.value;
  const companyValue = company.value;
  const employmentPeriodValue = employmentPeriod.value;
  const descriptionValue = description.value;

  const cvTemplate = `
    <h1>${fullNameValue}</h1>
    <p>${emailValue} | ${phoneValue} | ${addressValue}</p>

    <h2>Education</h2>
    <h3>${degreeValue}</h3>
    <p>${universityValue} | Graduated ${graduationYearValue}</p>

    <h2>Experience</h2>
    <h3>${positionValue}</h3>
    <p>${companyValue} | ${employmentPeriodValue}</p>
    <ul>
      <li>${descriptionValue}</li>
    </ul>
  `;

  const cvWindow = window.open('', 'CV');
  cvWindow.document.write(`<html><head><title>${fullNameValue} - CV</title></head><body>${cvTemplate}</body></html>`);
  cvWindow.print();
  cvWindow.close();
}
