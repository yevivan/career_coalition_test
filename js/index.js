"use strict";

// SLIDER

let slideNumber = 1;
let slides = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dot");
showSlides(slideNumber);

function showSlides(n) {
  let i;

  if (n > slides.length) {
    slideNumber = 1;
  }
  if (n < 1) {
    slideNumber = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideNumber - 1].style.display = "block";
  dots[slideNumber - 1].className += " active";
}

dots.forEach((el, index) => {
  el.addEventListener("click", () => {
    currentSlide(index + 1);
  });
});

function currentSlide(n) {
  showSlides((slideNumber = n));
}

// TABS & ACCORDION
const climbSectTabs = document.querySelectorAll(".climb-section_tab");
const climbScheduleContent = document.querySelectorAll("#climb-schedule_block");
const viewportWidth = window.innerWidth;

climbSectTabs.forEach((tab, tabIndex) => {
  removeTabsActiveClasses(tab);
  removeContentActiveClasses(climbScheduleContent);
  tab.addEventListener("click", (e) => {
    console.log(viewportWidth);
    if (viewportWidth < 800) {
      swithTabsAccordion(e);
      swithAccordionContent(tabIndex, e);
    } else if (viewportWidth > 800) {
      swithTabs(e);
      swithTabsContent(tabIndex);
    }
  });
});

function swithTabs(e) {
  climbSectTabs.forEach((tab) => {
    if (
      !e.currentTarget.classList.contains("climb-tab_actve") &&
      tab === e.currentTarget
    ) {
      tab.classList.add("climb-tab_actve");
    } else if (
      tab !== e.currentTarget &&
      tab.classList.contains("climb-tab_actve")
    ) {
      tab.classList.remove("climb-tab_actve");
    }
  });
}

function swithTabsContent(tabIndex) {
  climbScheduleContent.forEach((content, contentIndex) => {
    if (contentIndex === tabIndex) {
      content.classList.add("climb-schedule_block_active");
    } else {
      content.classList.remove("climb-schedule_block_active");
    }
  });
}

function swithTabsAccordion(e) {
  e.currentTarget.classList.toggle("climb-tab_actve");
}

function swithAccordionContent(tabIndex, e) {
  climbScheduleContent.forEach((content, contentIndex) => {
    if (
      contentIndex === tabIndex &&
      e.currentTarget.classList.contains("climb-tab_actve")
    ) {
      content.classList.add("climb-schedule_block_active");
      e.currentTarget.after(content);
    } else if (
      contentIndex === tabIndex &&
      !e.currentTarget.classList.contains("climb-tab_actve")
    ) {
      content.classList.remove("climb-schedule_block_active");
    }
  });
}

function removeTabsActiveClasses(tab) {
  if (viewportWidth < 800) {
    tab.classList.remove("climb-tab_actve");
  }
}

function removeContentActiveClasses(climbScheduleContent) {
  if (viewportWidth < 800) {
    climbScheduleContent.forEach((content) => {
      content.classList.remove("climb-schedule_block_active");
    });
  }
}
