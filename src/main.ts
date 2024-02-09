// sheel_waterproofing/src/main.ts
document.addEventListener('DOMContentLoaded', function () {
  // Function for search
  function search(query: string) {
    console.log("search function called");
    removeHighlights();
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
    const occurrences: Text[] = [];

    // Find occurrences and highlight them
    while (walker.nextNode()) {
      const textNode = walker.currentNode as Text;
      const parentNode = textNode.parentNode;

      if (parentNode && parentNode.nodeName !== "SCRIPT" && parentNode.nodeName !== "STYLE") {
        const textContent = textNode.textContent || "";
        const lowerCaseContent = textContent.toLowerCase();

        if (lowerCaseContent.includes(query.toLowerCase())) {
          const regex = new RegExp(`(${query})`, 'gi');
          const highlightedText = textContent.replace(regex, '<span class="bg-yellow-200">$1</span>');
          const span = document.createElement("span");
          span.innerHTML = highlightedText;
          parentNode.replaceChild(span, textNode);
          occurrences.push(span.firstChild as Text);
        }
      }
    }

    // Scroll to the first occurrence of the searched word
    if (occurrences.length > 0) {
      const firstOccurrence = occurrences[0];
      firstOccurrence.parentElement?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // Function to remove existing highlights
  function removeHighlights() {
    const highlightedElements = document.querySelectorAll('.bg-yellow-200');
    highlightedElements.forEach(element => {
      const text = element.textContent || '';
      const parent = element.parentNode;
      if (parent) {
        parent.replaceChild(document.createTextNode(text), element);
      }
    });
  }
  // Attach input event listener to the search input field
  const searchInput = document.getElementById('searchInput') as HTMLInputElement;
  const searchInputSm = document.getElementById('searchInputSm') as HTMLInputElement;
  if (searchInput) {
    searchInput.addEventListener('keyup', function (event) {
      if (event.key === 'Enter') { // Check if Enter key is pressed
        const searchTerm = searchInput.value.trim(); // Get the trimmed search term

        search(searchTerm); // Call the search function with the search term
      }
    });

  }
  if (searchInputSm) {
    searchInputSm.addEventListener('keyup', function (event) {
      if (event.key === 'Enter') { // Check if Enter key is pressed
        const searchTerm = searchInputSm.value.trim(); // Get the trimmed search term

        search(searchTerm); // Call the search function with the search term
      }
    });
  } else {
    console.error('Search input field not found.');
  }
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
    console.log("about link found");
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
  } else {
    console.error('Contact link not found.');
  }
  // Load default content on page load
  fetchAndInsertContent('../pages/roof_waterproofing.html');

 
  
});

window.addEventListener('scroll', function() {
  var elements = document.querySelectorAll('.animated-content');

  elements.forEach(function(element) {
    var positionFromTop = element.getBoundingClientRect().top;
    var screenHeight = window.innerHeight;

    if (positionFromTop - screenHeight <= 0) {
      element.classList.add('animate-fly-in-bottom');
      element.classList.remove('opacity-0');
    }
  });
});

