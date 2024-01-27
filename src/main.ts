// src/main.ts


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
  fetchAndInsertContent('../pages/vista_no_3.html');

});

