document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0;

    function showSlide(index) {
        const slides = document.querySelectorAll('.carousel-item');
        if (index >= slides.length) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = slides.length - 1;
        } else {
            currentIndex = index;
        }
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === currentIndex);
        });
    }

    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    function prevSlide() {
        showSlide(currentIndex - 1);
    }

    document.querySelector('.carousel-control-next').addEventListener('click', function(event) {
        event.preventDefault();
        nextSlide();
    });

    document.querySelector('.carousel-control-prev').addEventListener('click', function(event) {
        event.preventDefault();
        prevSlide();
    });

    // Auto slide every 5 seconds
    setInterval(nextSlide, 5000);
});

document.addEventListener('DOMContentLoaded', function() {
    let currentTestimonialIndex = 0;
    const testimonials = document.querySelectorAll('.testimonial');

    function showPrevTestimonial() {
        testimonials[currentTestimonialIndex].classList.remove('active');
        currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
        testimonials[currentTestimonialIndex].classList.add('active');
    }

    function showNextTestimonial() {
        testimonials[currentTestimonialIndex].classList.remove('active');
        currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
        testimonials[currentTestimonialIndex].classList.add('active');
    }

    // Optional: Automatic cycling of testimonials
    setInterval(showNextTestimonial, 5000); // Change testimonial every 5 seconds

    // Attach event listeners to buttons
    document.querySelector('.carousel-content button:nth-child(1)').addEventListener('click', showPrevTestimonial);
    document.querySelector('.carousel-content button:nth-child(3)').addEventListener('click', showNextTestimonial);
});