document.addEventListener("DOMContentLoaded", function() {
	// Get references to the div and button
	const qualificationBox = document.getElementById("qualification_box2");
	const addButton = document.getElementById("add_qualification");
	const secondEducationRow = document.getElementById("second_education");
  
	// Add click event listener to the button
	addButton.addEventListener("click", function() {
	  // Toggle the display style of the div
	  qualificationBox.style.display = qualificationBox.style.display === "none" ? "block" : "none";
  
	  // Toggle the display style of the second education row
	  secondEducationRow.style.display = secondEducationRow.style.display === "none" ? "table-row" : "none";
	  
	  // Change the button text based on the div display state
	  addButton.textContent = qualificationBox.style.display === "none" ? "Add Qualification" : "Remove Qualification";
  
	  // Remove the second education row if education is removed
	  if (qualificationBox.style.display === "none") {
		secondEducationRow.remove();
	  }
	});
  });
  

  document.addEventListener("DOMContentLoaded", function() {
    // Get references to the div and button
    const experienceBox = document.getElementById("experience_box2");
    const addButton = document.getElementById("add_experience");
	const secondExperienceRow = document.getElementById("second_experience");

    // Add click event listener to the button
    addButton.addEventListener("click", function() {
      // Toggle the display style of the div
      experienceBox.style.display = experienceBox.style.display === "none" ? "block" : "none";

		// Toggle the display style of the second experience row
		secondExperienceRow.style.display = secondExperienceRow.style.display === "none" ? "table-row" : "none";
      
      // Change the button text based on the div display state
      addButton.textContent = experienceBox.style.display === "none" ? "Add Experience" : "Remove Experience";

	  // Remove the second experiecne row if experience is removed
	  if (experienceBox.style.display === "none") {
		secondExperienceRow.remove();
	  }

    });
  });



// store a form data into local storage
const form = document.querySelector('form');
const cvContainer = document.querySelector('.cv-container');
const downloadBtn = document.querySelector('#download-btn');

const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const addressInput = document.querySelector('#address');
const dobInput = document.querySelector('#dob');
const nationalityInput = document.querySelector('#nationality');
const level1Input = document.querySelector('#academic-level-1');
const institution1Input = document.querySelector('#institution-1');
const from1Input = document.querySelector('#from-date-1');
const to1Input = document.querySelector('#to-date-1');
const grade1Input = document.querySelector('#grade-1');
const level2Input = document.querySelector('#academic-level-2');
const institution2Input = document.querySelector('#institution-2');
const from2Input = document.querySelector('#from-date-2');
const to2Input = document.querySelector('#to-date-2');
const grade2Input = document.querySelector('#grade-2');
const company1Input = document.querySelector('#company-1');
const jobTitle1Input = document.querySelector('#job-title-1');
const dateDuration1Input = document.querySelector('#from-to-date-1');
const jobResponsibility1Textarea = document.querySelector('#job-responsibility-1');
const company2Input = document.querySelector('#company-2');
const jobTitle2Input = document.querySelector('#job-title-2');
const dateDuration2Input = document.querySelector('#from-to-date-2');
const jobResponsibility2Textarea = document.querySelector('#job-responsibility-2');
const referenceInput = document.querySelector('#ref-name-1');
const placeInput = document.querySelector('#ref-place-1');
const postInput = document.querySelector('#ref-post-1');
const remailInput = document.querySelector('#ref-email-1');




const cvName = document.querySelector('#cv-name');
const cvEmail = document.querySelector('#cv-email');
const cvPhone = document.querySelector('#cv-phone');
const cvAddress = document.querySelector('#cv-address');
const cvDob = document.querySelector('#cv-dob');
const cvNationality = document.querySelector('#cv-nationality');
const cvLevel1 = document.querySelector('#cv-academic-level-1');
const cvInstitution1 = document.querySelector('#cv-institution-1');
const cvFrom1 = document.querySelector('#cv-from-date-1');
const cvTo1 = document.querySelector('#cv-to-date-1');
const cvGrade1 = document.querySelector('#cv-grade-1');
const cvLevel12 = document.querySelector('#cv-academic-level-2');
const cvInstitution2 = document.querySelector('#cv-institution-2');
const cvFrom2 = document.querySelector('#cv-from-date-2');
const cvTo2 = document.querySelector('#cv-to-date-2');
const cvGrade2 = document.querySelector('#cv-grade-2');
const cvCompany1 = document.querySelector('#cv-company-1');
const cvJtitle1 = document.querySelector('#cv-job-title-1');
const cvDuration1 = document.querySelector('#cv-from-to-date-1');
const cvJresponsibility1 = document.querySelector('#cv-job-responsibility-1');
const cvCompany2 = document.querySelector('#cv-company-2');
const cvJtitle2 = document.querySelector('#cv-job-title-2');
const cvDuration2 = document.querySelector('#cv-from-to-date-2');
const cvJresponsibility2 = document.querySelector('#cv-job-responsibility-2');
const cvreference = document.querySelector('#cv-ref-name-1');
const cvRplace = document.querySelector('#cv-ref-place-1');
const cvRpost = document.querySelector('#cv-ref-post-1');
const cvRemail = document.querySelector('#cv-ref-email-1');

            

form.addEventListener('submit', (event) => {
	event.preventDefault();

	   
	cvName.textContent = nameInput.value;
	cvEmail.textContent = emailInput.value;
	cvPhone.textContent = phoneInput.value;
	cvAddress.textContent = addressInput.value;
	cvDob.textContent = dobInput.value; 
	cvNationality.textContent = nationalityInput.value; 
	cvLevel1.textContent = level1Input.value;
	cvInstitution1.textContent = institution1Input.value;
	cvFrom1.textContent = from1Input.value; 
	cvTo1.textContent = to1Input.value; 
	cvGrade1.textContent = grade1Input.value;
	cvLevel12.textContent = level2Input.value; 
	cvInstitution2.textContent = institution2Input.value; 
	cvFrom2.textContent = from2Input.value; 
	cvTo2.textContent = to2Input.value; 
	cvGrade2.textContent = grade2Input.value;
	cvCompany1.textContent = company1Input.value; 
	cvJtitle1.textContent = jobTitle1Input.value; 
	cvDuration1.textContent = dateDuration1Input.value; 
	cvJresponsibility1.textContent = jobResponsibility1Textarea.value; 
	cvCompany2.textContent = company2Input.value; 
	cvJtitle2.textContent = jobTitle2Input.value; 
	cvDuration2.textContent = dateDuration2Input.value; 
	cvJresponsibility2.textContent = jobResponsibility2Textarea.value; 
	cvreference.textContent = referenceInput.value; 
	cvRplace.textContent = placeInput.value; 
	cvRpost.textContent = postInput.value; 
	cvRemail.textContent = remailInput.value; 

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

