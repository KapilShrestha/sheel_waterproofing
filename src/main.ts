// src/main.ts
// import * as google from 'googlemaps';


document.addEventListener('DOMContentLoaded', function () {
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
  
    // Load default content on page load
    fetchAndInsertContent('../pages/index_content.html');




     // search functionality
  
  const searchInput = document.querySelector<HTMLInputElement>("#search-input");
  const searchResultsContainer = document.querySelector("#inserted-content");

  if (searchInput && searchResultsContainer) {
    searchInput.addEventListener("input", () => {
      const searchTerm = searchInput.value.toLowerCase();
      const entirePageContent = document.body.textContent?.toLowerCase();

      // Clear previous search results
      searchResultsContainer.innerHTML = "";

      if (entirePageContent && searchTerm.trim() !== "") {
        const matches = findMatches(entirePageContent, searchTerm);

        if (matches.length > 0) {
          // Display matching words and their context in the search results
          matches.forEach((match) => {
            const resultParagraph = document.createElement("p");
            const highlightedContent = highlightMatchedWord(entirePageContent, match);
            resultParagraph.innerHTML = `Match in context: ${highlightedContent}`;
            searchResultsContainer.appendChild(resultParagraph);
          });
        }
      }
    });
  }

    
  });



 

function findMatches(content: string, term: string): string[] {
  const matches: string[] = [];
  const words = content.split(/\s+/);

  words.forEach((word) => {
    if (word.includes(term)) {
      matches.push(word);
    }
  });

  return matches;
}

function highlightMatchedWord(content: string, term: string): string {
  const regex = new RegExp(`\\b${term}\\b`, 'gi');
  return content.replace(regex, (match) => `<span class="highlight">${match}</span>`);
}



function initMap(): void {
  // Example: Create a map centered at a specific location
  const map = new google.maps.Map(document.getElementById('map') as HTMLDivElement, {
    center: { lat: 27.6841746, lng: 85.2975386 },
    zoom: 15
  });

  // Example: Add a marker
  const marker = new google.maps.Marker({
    position: { lat: 27.6841746, lng: 85.2975386 },
    map: map,
    title: 'Sheel Waterproofing'
  });

  console.log(marker.getPosition());

  // You can customize the map and marker as needed
}



  
  
    
 