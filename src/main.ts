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
  fetchAndInsertContent('../pages/index_content.html');



});

window.addEventListener('scroll', function () {
  var elements = document.querySelectorAll('.animated-content');

  elements.forEach(function (element) {
    var positionFromTop = element.getBoundingClientRect().top;
    var screenHeight = window.innerHeight;

    if (positionFromTop - screenHeight <= 0) {
      element.classList.add('animate-fly-in-bottom');
      element.classList.remove('opacity-0');
    }
  });
});


// search 
interface Page {
  url: string;
  sections: string[]; // Add sections property
}

interface SearchResult {
  pageUrl: string;
  section: string; // Add section property
  matches: string[];
}

class Website {
  pages: Page[];

  constructor(pages: Page[]) {
      this.pages = pages;
  }

  async fetchPageContent(url: string): Promise<string> {
      const response = await fetch(url);
      const content = await response.text();
      return content;
  }

  async search(query: string): Promise<SearchResult[]> {
      const results: SearchResult[] = [];

      for (const page of this.pages) {
          const content = await this.fetchPageContent(page.url);
          const matches: string[] = [];
          const regex = new RegExp(query, 'gi');
          let match;

          // Split the content into sections
          const sections = content.split("<!-- products card -->");

          for (let i = 0; i < sections.length; i++) {
              const sectionContent = sections[i];
              while (match = regex.exec(sectionContent)) {
                  matches.push(match[0]);
                  // Push section index along with the match
                  results.push({
                      pageUrl: page.url,
                      section: page.sections[i], // Store the section information
                      matches: [match[0]]
                  });
              }
          }
      }

      return results;
  }
}

async function handleSearch(event: KeyboardEvent) {
  if (event.key === "Enter") {
      const searchInput = document.getElementById("searchInput") as HTMLInputElement;
      const searchQuery = searchInput.value.trim();

      // Example pages data (URLs of pages in the "pages" directory)
      const pageURLs: string[] = [
          "../pages/products.html",
          "../pages/index_content.html",
          "../pages/bituminous_waterproofing_membrane.html",
          "../pages/cementitious_waterproofing.html",
          "../pages/roof_waterproofing.html",
          // Add more page URLs here
      ];

      const website = new Website([]); // Create an empty Website object

      const pages: Page[] = [];
      for (const url of pageURLs) {
          const content = await website.fetchPageContent(url);
          // Split the content into sections using the correct delimiter
          const sections = content.split('<!-- products card -->'); // Adjust delimiter accordingly
          pages.push({ url, sections }); // Include sections in the Page object
      }

      website.pages = pages; // Update the pages in the Website object

      const searchResults = await website.search(searchQuery);

      // Clear previous search results
      const searchResultsContainer = document.getElementById("searchResults") as HTMLDivElement;
      searchResultsContainer.innerHTML = '';

      // Display matches for each page
      searchResults.forEach(result => {
          const resultElement = document.createElement("div");
          resultElement.innerHTML = `<p>Page URL: ${result.pageUrl}</p><p>Section: ${result.section}</p>`;
          result.matches.forEach(match => {
              const matchElement = document.createElement("p");
              matchElement.textContent = match;
              resultElement.appendChild(matchElement);
          });
          searchResultsContainer.appendChild(resultElement);
      });
  }
}


const searchInput = document.getElementById("searchInput") as HTMLInputElement;
searchInput.addEventListener("keydown", handleSearch);


// Function to handle card click event
function handleCardClick(pageUrl: string) {
  fetch(pageUrl)
    .then(response => response.text())
    .then(html => {
      // Insert the fetched content into #insertedContent
      const insertedContent = document.getElementById('insertedContent');
      if (insertedContent) {
        insertedContent.innerHTML = html;
      } else {
        console.error('Element with id "insertedContent" not found.');
      }
    })
    .catch(error => console.error('Error fetching page:', error));
}

// Add event listeners to each card
document.querySelectorAll('.card').forEach((card: Element) => {
  card.addEventListener('click', function(this: HTMLElement, event: Event) {
    // Stop default behavior to prevent any unwanted action
    event.preventDefault();
    
    // Get the data-page attribute value to determine the page URL
    const pageUrl: string | null | undefined = this.getAttribute('data-page');
    if (pageUrl !== null && pageUrl !== undefined) {
      handleCardClick(pageUrl);
    } else {
      console.error('Data-page attribute not found on card element.');
    }
  });
});


