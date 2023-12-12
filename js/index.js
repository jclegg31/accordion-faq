const accordion = document.getElementsByClassName('accordion');
let activeAccordion = null;

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    if (this !== activeAccordion) {
      //close previously opened accordion
      if (activeAccordion) {
        activeAccordion.classList.remove('active');
        activeAccordion.querySelector('.accordion-content p').style.height =
          '0';
      }

      //Open the clicked accordion
      this.classList.toggle('active');
      const content = this.querySelector('.accordion-content p');
      content.style.height = content.scrollHeight + 'px';

      // Update the activeAccordion reference
      activeAccordion = this;
    } else {
      // Toggle the clicked accordion if it was the active one
      this.classList.toggle('active');
      const content = this.querySelector('.accordion-content p');
      content.style.height = content.scrollHeight + 'px';

      // Clear the activeAccordion reference
      activeAccordion = null;
    }
  });
}
