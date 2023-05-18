const openMenu = document.querySelector('#menu');
const nav = document.querySelector('nav');
const navIcon = document.querySelectorAll('.navIcon');
const logo = document.querySelector('.navbar-logo');
const hamburger = document.querySelector('#hamburger');

openMenu.addEventListener('click', () => {
  logo.classList.toggle('hidden');
  nav.classList.toggle('open');
  navIcon.forEach((icon) => {
    icon.classList.toggle('hidden');
  });
});

window.addEventListener('resize', () => {
  if (document.body.clientWidth > 768) {
    nav.classList.remove('open');
    navIcon.forEach((icon) => {
      icon.classList.add('hidden');
    });
    hamburger.classList.remove('hidden');
    logo.classList.remove('hidden');
  }
});
// End of Mobile Menu

// Start of Window-popup Menu

const projects = [
  {
    projectName: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.Lorem Ipsum is simply dummy text of the printing and typesettin industry. known printer took a galley otype and scrambled it to make a type specimen book.',
    modaltext: 'Lorem Ipsum is simply dummy text of the printing and typesettin industry. known printer took a galley otype and scrambled it to make a type specimen book.',
    tags: ['HTML', 'Bootstrap', 'Ruby', 'CSS'],
    image: './images/project-2.png',
    live: 'https://raw.githack.com/YoutLone/Portfolio/popup-window-branch/index.html',
    source: 'https://github.com/YoutLone/Portfolio',
  },
  {
    projectName: 'Professional Art Printing',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.Lorem Ipsum is simply dummy text of the printing and typesettin industry. known printer took a galley otype and scrambled it to make a type specimen book.',
    modaltext: 'Lorem Ipsum is simply dummy text of the printing and typesettin industry. known printer took a galley otype and scrambled it to make a type specimen book.',
    tags: ['HTML', 'Bootstrap', 'Ruby'],
    image: './images/art-printing-1.png',
    live: 'https://raw.githack.com/YoutLone/Portfolio/popup-window-branch/index.html',
    source: 'https://github.com/YoutLone/Portfolio',
  },
  {
    projectName: 'Data Dashboard Health',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.Lorem Ipsum is simply dummy text of the printing and typesettin industry. known printer took a galley otype and scrambled it to make a type specimen book.',
    modaltext: 'Lorem Ipsum is simply dummy text of the printing and typesettin industry. known printer took a galley otype and scrambled it to make a type specimen book.',
    tags: ['HTML', 'Bootstrap', 'Ruby'],
    image: './images/data-healthcare-1.png',
    live: 'https://raw.githack.com/YoutLone/Portfolio/popup-window-branch/index.html',
    source: 'https://github.com/YoutLone/Portfolio',
  },
  {
    projectName: 'Website Portfolio',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.Lorem Ipsum is simply dummy text of the printing and typesettin industry. known printer took a galley otype and scrambled it to make a type specimen book.',
    modaltext: 'Lorem Ipsum is simply dummy text of the printing and typesettin industry. known printer took a galley otype and scrambled it to make a type specimen book.',
    tags: ['HTML', 'Bootstrap', 'Ruby'],
    image: './images/web-portfolio-1.png',
    live: 'https://raw.githack.com/YoutLone/Portfolio/popup-window-branch/index.html',
    source: 'https://github.com/YoutLone/Portfolio',
  },
  {
    projectName: 'Professional Art Printing Data More',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.Lorem Ipsum is simply dummy text of the printing and typesettin industry. known printer took a galley otype and scrambled it to make a type specimen book.',
    modaltext: 'Lorem Ipsum is simply dummy text of the printing and typesettin industry. known printer took a galley otype and scrambled it to make a type specimen book.',
    tags: ['HTML', 'Bootstrap', 'Ruby'],
    image: './images/data-printing-1.png',
    live: 'https://raw.githack.com/YoutLone/Portfolio/popup-window-branch/index.html',
    source: 'https://github.com/YoutLone/Portfolio',
  },
  {
    projectName: 'Data Dashboard Healthcare',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.Lorem Ipsum is simply dummy text of the printing and typesettin industry. known printer took a galley otype and scrambled it to make a type specimen book.',
    modaltext: 'Lorem Ipsum is simply dummy text of the printing and typesettin industry. known printer took a galley otype and scrambled it to make a type specimen book.',
    tags: ['HTML', 'Bootstrap', 'Ruby'],
    image: './images/data-healthcare-1.png',
    live: 'https://raw.githack.com/YoutLone/Portfolio/popup-window-branch/index.html',
    source: 'https://github.com/YoutLone/Portfolio',
  },
  {
    projectName: 'Website Portfolio',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.Lorem Ipsum is simply dummy text of the printing and typesettin industry. known printer took a galley otype and scrambled it to make a type specimen book.',
    modaltext: 'Lorem Ipsum is simply dummy text of the printing and typesettin industry. known printer took a galley otype and scrambled it to make a type specimen book.',
    tags: ['HTML', 'Bootstrap', 'Ruby'],
    image: './images/web-portfolio-1.png',
    live: 'https://raw.githack.com/YoutLone/Portfolio/popup-window-branch/index.html',
    source: 'https://github.com/YoutLone/Portfolio',
  },
];

// Get the modal element
const modal = document.querySelector('.modal');

// Function to update the modal content
function updateModal(project) {
  // Update the modal content with project details
  const modalContent = modal.querySelector('.modal-content');
  modalContent.querySelector('.main-project').textContent = project.projectName;
  modalContent.querySelector('.main-description').textContent = project.description;
  modalContent.querySelector('.modal-text').textContent = project.modaltext;

  const tagsContainer = modalContent.querySelector('.main-tags');
  tagsContainer.innerHTML = '';
  project.tags.forEach((tag) => {
    const tagElement = document.createElement('li');
    tagElement.className = 'main-tag';
    tagElement.textContent = tag;
    tagsContainer.appendChild(tagElement);
  });

  modalContent.querySelector('.image').src = project.image;

  const seeLiveBtn = modalContent.querySelector('.see-btn:nth-child(1)');
  seeLiveBtn.href = project.live;

  const seeSourceBtn = modalContent.querySelector('.see-btn:nth-child(2)');
  seeSourceBtn.href = project.source;
}

// Attach event listeners to each images
const projectElements = document.querySelectorAll('.click-img');
projectElements.forEach((projectElement) => {
  projectElement.addEventListener('click', (e) => {
    // Show the modal
    modal.style.display = 'flex';
    modal.style.position = 'fixed';
    const content = projects[e.currentTarget.dataset.position];
    // Update the modal with the corresponding project details
    updateModal(content);
    window.scrollTo(0, 0);
  });
});

// Function to close the modal
function closeModal() {
  modal.style.display = 'none';
}

// Close the modal when the close button is clicked
const closeBtn = modal.querySelector('.close');
closeBtn.addEventListener('click', closeModal);

// Close the modal when the user clicks outside of it
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

// Validate-Contact_Form

const email = document.querySelector('#email');
const formBtn = document.querySelector('.form-btn');
const errorMessage = document.querySelector('.error-message');
const sentMessage = document.querySelector('.sent-message');
const contactForm = document.querySelector('.contact-form');

function isItUppercase(value) {
  if (value.match(/^[a-z@.0-9-_]*$/)) {
    return true;
  }
  return false;
}

formBtn.addEventListener('click', (e) => {
  if (email.value != "" && isItUppercase(email.value)) {
    sentMessage.textContent = ' Message is successfully send!';
    email.style.border = '1px solid green';
    contactForm.submit();
    contactForm.reset();
  } else {
    e.preventDefault();
    errorMessage.textContent = 'Your email should be in lowerCase';
    email.style.border = '2px solid red';
  }
});

