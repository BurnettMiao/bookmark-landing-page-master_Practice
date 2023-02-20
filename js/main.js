let nav = document.querySelector('.nav');

nav.onclick = () => {
  nav.classList.toggle('active');
}

window.onscroll = () => {
  nav.classList.remove('active');
}

const tabBorder = document.querySelectorAll('.tab-header-all');
const tabContent = document.querySelectorAll('.tab-border');

function selectTab(e) {
  removeBorder();
  removeConent();

  this.classList.add('tab-header-active');

  const addContent = document.querySelector(`#${this.id}-content`);
  addContent.classList.add('show');
}

function removeBorder() {
  tabBorder.forEach((item) => item.classList.remove('tab-header-active'));
}

function removeConent() {
  tabContent.forEach((item) => item.classList.remove('show'));
}

tabBorder.forEach((item) => item.addEventListener('click', selectTab));


// FAQ section
const faqTitle = document.querySelectorAll('.question-card-heading');

faqTitle.forEach(function(btn){
  btn.addEventListener('click', function(e){
    // console.log(e.currentTarget.parentElement);
    const question = e.currentTarget.parentElement;
    question.classList.toggle('show-text');
  })
})


