document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.topbanner > li');

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            // Toggle 'open' class to show/hide the dropdown
            item.classList.toggle('open');

            // Close other open dropdowns
            menuItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('open');
                }
            });
        });
    });
});

/* begin alternative js


document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.topbanner > li');

    menuItems.forEach(item => {
        // Add event listener for click
        item.addEventListener('click', () => {
            // Toggle the 'open' class to show/hide dropdown
            item.classList.toggle('open');

            // Close other open dropdowns
            menuItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('open');
                }
            });
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.topbanner')) {
            menuItems.forEach(item => item.classList.remove('open'));
        }
    });
});

end alternative js
*/