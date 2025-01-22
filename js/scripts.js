async function loadResumeData() {
  try {
    const response = await fetch("resumeData.json");
    const data = await response.json();
    renderResume(data);
  } catch (error) {
    console.error("Error loading resume data:", error);
  }
}

function renderResume(data) {
  // Render basic information
  document.querySelector(".w3-display-bottomleft h2").textContent =
    data.basics.name;
  document.querySelector("#briefcase").nextElementSibling.textContent =
    data.basics.role;
  document.querySelector(".fa-home").nextElementSibling.textContent =
    data.basics.location;
  document.querySelector(".fa-envelope").nextElementSibling.textContent =
    data.basics.email;
  document.querySelector(".fa-phone").nextElementSibling.textContent =
    data.basics.phone;
  document.querySelector('img[alt="Avatar"]').src = data.basics.profilePic;

  // Render skills
  const skillsSection = document.querySelector(".skills-section");
  const skillsTemplate = data.skills
    .map(
      (skill) => `
        <p>${skill.name}</p>
        <div class="w3-light-grey w3-round-xlarge w3-small">
            <div class="w3-container w3-center w3-round-xlarge w3-teal" style="width: ${skill.level}%">
                ${skill.level}%
            </div>
        </div>
    `
    )
    .join("");
  skillsSection.innerHTML += skillsTemplate;

  // Render languages
  const languagesSection = document.querySelector(".languages-section");
  const languagesTemplate = data.languages
    .map(
      (language) => `
        <p>${language.name}</p>
        <div class="w3-light-grey w3-round-xlarge">
            <div class="w3-round-xlarge w3-teal" style="height: 24px; width: ${language.level}%"></div>
        </div>
    `
    )
    .join("");
  languagesSection.innerHTML += languagesTemplate;

  // Render work experience
  const workContainer = document
    .querySelector(".fa-suitcase")
    .closest("h2").parentNode;
  const workTemplate = data.workExperience
    .map(
      (work) => `
        <div class="w3-container">
            <h5 class="w3-opacity"><b>${work.position} / ${
        work.company
      }</b></h5>
            <h6 class="w3-text-teal">
                <i class="fa fa-calendar fa-fw w3-margin-right"></i>${
                  work.startDate
                } - 
                ${
                  work.endDate === "Current"
                    ? `<span class="w3-tag w3-teal w3-round">Current</span>`
                    : work.endDate
                }
            </h6>
            <p>${work.description}</p>
            ${work.endDate === "Current" ? "" : "<hr>"}
        </div>
    `
    )
    .join("");
  workContainer.innerHTML = workContainer.innerHTML + workTemplate;

  // Render education
  const educationContainer = document
    .querySelector(".fa-certificate")
    .closest("h2").parentNode;
  const educationTemplate = data.education
    .map(
      (edu) => `
        <div class="w3-container">
            <h5 class="w3-opacity"><b>${edu.school}</b></h5>
            <h6 class="w3-text-teal">
                <i class="fa fa-calendar fa-fw w3-margin-right"></i>${edu.startDate} - ${edu.endDate}
            </h6>
            <p>${edu.description}</p>
            <hr>
        </div>
    `
    )
    .join("");
  educationContainer.innerHTML =
    educationContainer.innerHTML + educationTemplate;

  // Render social media icons
  const socialContainer = document.querySelector("footer");
  Object.entries(data.socialMedia).forEach(([platform, show]) => {
    const icon = socialContainer.querySelector(
      `.fa-${platform === "facebook" ? "facebook-official" : platform}`
    );
    if (icon) {
      icon.style.display = show ? "inline" : "none";
    }
  });
}

// Load the resume data when the page loads
document.addEventListener("DOMContentLoaded", loadResumeData);
