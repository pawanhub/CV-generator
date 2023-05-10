const form = document.querySelector('form');
const cvContainer = document.querySelector('.cv-container');
const downloadBtn = document.querySelector('#download-btn');

const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const addressInput = document.querySelector('#address');
const objectiveInput = document.querySelector('#objective');
const educationInput = document.querySelector('#education');
const experienceInput = document.querySelector('#experience');

const cvName = document.querySelector('#cv-name');
const cvEmail = document.querySelector('#cv-email');
const cvPhone = document.querySelector('#cv-phone');
const cvAddress = document.querySelector('#cv-address');
const cvObjective = document.querySelector('#cv-objective');
const cvEducation = document.querySelector('#cv-education');
const cvExperience = document.querySelector('#cv-experience');

form.addEventListener('submit', (event) => {
	event.preventDefault();

	cvName.textContent = nameInput.value;
	cvEmail.textContent = emailInput.value;
	cvPhone.textContent = phoneInput.value;
	cvAddress.textContent = addressInput.value;
	cvObjective.textContent = objectiveInput.value;
	cvEducation.textContent = educationInput.value;
	cvExperience.textContent = experienceInput.value;

	cvContainer.style.display = 'block';
	downloadBtn.disabled = false;

	form.reset();
});

downloadBtn.addEventListener('click', () => {
	html2canvas(cvContainer).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
		const pdf = new pdfMake.createPdf({
			content: [{
				image: imgData,
				width: 500
			}]
		});
		pdf.download("cv.pdf");
	});
});

