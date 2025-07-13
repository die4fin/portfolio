document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio page loaded successfully!');

    const explainButtons = document.querySelectorAll('.explain-skill');
    const modal = document.getElementById('skillExplanationModal');
    const modalContent = document.getElementById('modalContent');
    const closeButton = document.querySelector('.close-button');
    const aboutMeText = document.getElementById('about-me-text').innerText;

    // Function to show the modal with loading state
    function showLoadingModal() {
        modalContent.innerHTML = '<div class="spinner"></div><p class="text-center mt-6 text-gray-400">Generating explanation...</p>';
        modal.classList.remove('hidden');
    }

    // Function to hide the modal
    function hideModal() {
        modal.classList.add('hidden');
    }

    // Event listener for close button
    closeButton.addEventListener('click', hideModal);

    // Close modal when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            hideModal();
        }
    });

    explainButtons.forEach(button => {
        button.addEventListener('click', async function() {
            const skill = this.dataset.skill;
            showLoadingModal();

            try {
                let chatHistory = [];
                const prompt = `Given the following information about a student's profile:\n\n"${aboutMeText}"\n\nPlease provide a concise explanation of the skill "${skill}" and its relevance to this student's profile and interests (Data Science, Front-End Programming). Keep the explanation to 2-3 sentences.`;

                chatHistory.push({ role: "user", parts: [{ text: prompt }] });
                const payload = { contents: chatHistory };
                const apiKey = ""; // Canvas will automatically provide the API key
                const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });

                const result = await response.json();

                if (result.candidates && result.candidates.length > 0 &&
                    result.candidates[0].content && result.candidates[0].content.parts &&
                    result.candidates[0].content.parts.length > 0) {
                    const text = result.candidates[0].content.parts[0].text;
                    modalContent.innerHTML = `<p>${text}</p>`;
                } else {
                    modalContent.innerHTML = '<p class="text-red-500">Error: Could not generate explanation. Please try again.</p>';
                    console.error('Gemini API response structure unexpected:', result);
                }
            } catch (error) {
                modalContent.innerHTML = '<p class="text-red-500">Error: Failed to connect to the API. Please check your network connection.</p>';
                console.error('Error calling Gemini API:', error);
            }
        });
    });

    // Intersection Observer for fade-in on scroll
    const fadeInSections = document.querySelectorAll('.card'); // Target all cards for fade-in

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Stop observing once it's visible
            }
        });
    }, observerOptions);

    fadeInSections.forEach(section => {
        observer.observe(section);
    });

    // Navbar active state on scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function highlightNavLink() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100; // Adjusted for fixed navbar height
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', highlightNavLink);
    highlightNavLink(); // Call on load to set initial active link
});
