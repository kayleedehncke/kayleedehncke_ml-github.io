//const nav = document.querySelector('.navbar');
// Fetch the navbar HTML and insert it into the page
fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar-placeholder').innerHTML = data;
        let currentPage = window.location.pathname.split("/").pop().toLowerCase().split("?")[0].split("#")[0];
        if (!currentPage) 
        {
            currentPage = "home.html";
        }
        const navLinks = document.querySelectorAll('#navbar-placeholder .nav-link');
        navLinks.forEach(link => {
            if (link.getAttribute('href').toLowerCase() === currentPage) 
            {
                link.classList.add('active');
                link.setAttribute('aria-current', 'page');
            } 
            else 
            {
                link.classList.remove('active');
                link.removeAttribute('aria-current');
            }
        });
    })

/* <script>
        fetch('navbar.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('navbar-placeholder').innerHTML = data;

                // Highlight current page link
                let currentPage = window.location.pathname.split("/").pop().toLowerCase().split("?")[0].split("#")[0];
                if (!currentPage) currentPage = "home.html";
                const navLinks = document.querySelectorAll('#navbar-placeholder .nav-link');
                navLinks.forEach(link => {
                    if (link.getAttribute('href').toLowerCase() === currentPage) {
                        link.classList.add('active');
                        link.setAttribute('aria-current', 'page');
                    } else {
                        link.classList.remove('active');
                        link.removeAttribute('aria-current');
                    }
                });
            });
    </script> */