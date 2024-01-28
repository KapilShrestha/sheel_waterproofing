// sheel_waterproofing/src/main.ts

document.addEventListener('DOMContentLoaded', function () {
  // dropdown in hover
  const detailsElements = document.querySelectorAll('details');
  detailsElements.forEach((details) => {
    details.addEventListener('mouseover', function () {
      details.setAttribute('open', 'true');
    });
    details.addEventListener('focus', function () {
      details.setAttribute('open', 'true');
    });
    details.addEventListener('mouseout', function () {
      details.removeAttribute('open');
    });
    details.addEventListener('blur', function () {
      details.removeAttribute('open');
    });
  });

  // Function to fetch and insert content from a page
  function fetchAndInsertContent(page: string) {
    fetch(page)
      .then(response => response.text())
      .then(html => {
        // Insert the content into the specified element
        const insertedContentElement = document.getElementById('insertedContent');
        if (insertedContentElement) {
          insertedContentElement.innerHTML = html;
        } else {
          console.error('Element with id "insertedContent" not found.');
        }
      })
      .catch(error => console.error(`Error fetching ${page}:`, error));
  }

  // Function to handle navbar item clicks
  function handleNavbarItemClick(page: string) {
    return function (event: Event) {
      event.preventDefault();
      fetchAndInsertContent(page);
    };
  }

  // Attach click event listeners to navbar items
  const navbarItems = document.querySelectorAll('.navbar-item');
  navbarItems.forEach(item => {
    const page = item.getAttribute('data-page') || ''; // ensure a non-null value
    item.addEventListener('click', handleNavbarItemClick(page));
  });


   // Function to scroll to the About section
   function scrollToAbout() {
    
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error('About section not found.');
    }
  }

  // Attach click event listener to the About navbar item
  const aboutLink = document.getElementById('about-link');
  const aboutLinkSm = document.getElementById('about-link-sm');
  if (aboutLink) {
    aboutLink.addEventListener('click', () => {
      scrollToAbout();
    });
  } else {
    console.error('About link not found.');
  }
  if (aboutLinkSm) {
    aboutLinkSm.addEventListener('click', () => {
      scrollToAbout();
    });
  } else {
    console.error('About link not found.');
  }

   // Function to scroll to the Services section
   function scrollToServices() {
    const servicesSection = document.getElementById('services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error('Services section not found.');
    }
  }

  // Attach click event listener to the Services navbar item
  const servicesLink = document.getElementById('services-link');
  const servicesLinkSm = document.getElementById('services-link-sm');
  if (servicesLink) {
    servicesLink.addEventListener('click', () => {
      scrollToServices();
    });
  } else {
    console.error('Services link not found.');
  }
  if (servicesLinkSm) {
    servicesLinkSm.addEventListener('click', () => {
      scrollToServices();
    });
  } else {  
    console.error('Services link not found.');
  }

   // Function to scroll to the Contact section
   function scrollToContact() {
    fetchAndInsertContent('../pages/index_content.html');
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error('Contact section not found.');
    }
  }

  // Attach click event listener to the Contact navbar item
  const contactLink = document.getElementById('contact-link');
  const contactLinkSm = document.getElementById('contact-link-sm');
  if (contactLink) {
    contactLink.addEventListener('click', () => {
      scrollToContact();
    });
  } else {
    console.error('Contact link not found.');
  }
  if (contactLinkSm) {
    contactLinkSm.addEventListener('click', () => {
      scrollToContact();
    });
  }else {
    console.error('Contact link not found.');
  }




 


  // Load default content on page load
  fetchAndInsertContent('../pages/index_content.html');

});
