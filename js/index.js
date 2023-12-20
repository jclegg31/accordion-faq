const accordion = document.getElementsByClassName('accordion');
let activeAccordion = null; // no accordion is active

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    const isAccordionActive = this.classList.contains('active');

    // Close all accordions if the clicked one is already open
    if (isAccordionActive) {
      this.classList.remove('active');
      const content = this.querySelector('.accordion-content p');
      content.style.height = '0';
      activeAccordion = null;
    } else {
      // Close the previously opened accordion
      if (activeAccordion) {
        activeAccordion.classList.remove('active');
        activeAccordion.querySelector('.accordion-content p').style.height =
          '0';
      }

      // Open the clicked accordion
      this.classList.add('active');
      const content = this.querySelector('.accordion-content p');
      content.style.height = content.scrollHeight + 'px';

      // Update the activeAccordion reference
      activeAccordion = this;
    }
  });
}
