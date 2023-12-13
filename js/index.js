const accordion = document.getElementsByClassName('accordion');
let activeAccordion = null; //no accordion is active

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    //checks if the clicked accordion is not the same as the currently active one
    if (this !== activeAccordion) {
      //close previously opened accordion if there is an active accordion and it's not null
      if (activeAccordion) {
        activeAccordion.classList.remove('active');
        activeAccordion.querySelector('.accordion-content p').style.height =
          '0';
      }

      //Open the clicked accordion
      this.classList.toggle('active');
      //This selects the <p> element inside the clicked accordion's content.
      const content = this.querySelector('.accordion-content p');
      //It sets the height of the <p> element to its full height, effectively showing the content.
      content.style.height = content.scrollHeight + 'px';

      // It updates the activeAccordion variable to point
      // to the accordion that has been clicked, making it the new active accordion.
      activeAccordion = this;
    } else {
      // Toggle the clicked accordion if it was the active one
      this.classList.toggle('active');
      const content = this.querySelector('.accordion-content p');
      content.style.height = content.scrollHeight + 'px';

      // Clear the activeAccordion reference because now no accordion is open.
      activeAccordion = null;
    }
  });
}
