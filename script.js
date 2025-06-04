// Sample testimonials for Eddy Restaurant
const testimonials = [
  {
    quote: "“The Chef’s Tasting Menu at Eddy Restaurant was an unforgettable experience! Every dish was a work of art, and the flavors were incredible.”",
    author: "— Grace M., 28"
  },
  {
    quote: "“We celebrated our anniversary at Eddy and the staff made us feel so special. The ambiance and food were both perfect!”",
    author: "— Daniel & Priya"
  },
  {
    quote: "“From the fresh ingredients to the creative plating, Eddy Restaurant exceeded all my expectations. Highly recommend the vegan options!”",
    author: "— Alex T., 35"
  },
  {
    quote: "“The desserts here are out of this world! Save room for the chocolate lava cake.”",
    author: "— Jamie R., 22"
  },
  {
    quote: "“Eddy’s team went above and beyond for our corporate dinner. The private dining room was elegant and the menu was tailored to our needs.”",
    author: "— Samantha L., 41"
  }
];

// Show two testimonials at a time
let currentIndex = 0;

function renderTestimonials() {
  const cardsContainer = document.getElementById('testimonial-cards');
  cardsContainer.innerHTML = '';
  for (let i = 0; i < 2; i++) {
    const idx = (currentIndex + i) % testimonials.length;
    const cardClass = i === 0 ? 'testimonial-card card-light' : 'testimonial-card card-dark';
    const testimonial = testimonials[idx];
    const card = document.createElement('div');
    card.className = cardClass;
    card.innerHTML = `
      <div class="testimonial-quote">${testimonial.quote}</div>
      <div class="testimonial-author">${testimonial.author}</div>
    `;
    cardsContainer.appendChild(card);
  }
}

document.getElementById('arrow-left').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  renderTestimonials();
});

document.getElementById('arrow-right').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  renderTestimonials();
});

// Initial render
renderTestimonials();




// FAQ data for Eddy Restaurant
const faqs = [
  {
    question: "How do I make a reservation?",
    answer: "You can reserve a table online via our website, call us directly, or walk in. For special events, we recommend booking in advance."
  },
  {
    question: "Do you offer vegetarian or vegan options?",
    answer: "Absolutely! Our menu includes a variety of vegetarian and vegan dishes. Please let our staff know about any dietary preferences."
  },
  {
    question: "Is there parking available at Eddy Restaurant?",
    answer: "Yes, we offer complimentary parking for all our guests in the lot adjacent to the restaurant."
  },
  {
    question: "Can I host private events or parties?",
    answer: "Yes, we have private dining spaces perfect for celebrations, business meetings, or special occasions. Contact us for details."
  },
  {
    question: "Are children welcome?",
    answer: "Families are always welcome! We offer a kids’ menu and high chairs for our youngest guests."
  },
  {
    question: "Do you accommodate food allergies?",
    answer: "Yes, please inform your server of any allergies. Our kitchen takes great care to accommodate special dietary needs."
  }
];

// Render FAQ items
const faqList = document.getElementById('faq-list');
faqs.forEach((faq, idx) => {
  const item = document.createElement('div');
  item.className = 'faq-item';
  item.innerHTML = `
    <button class="faq-question" aria-expanded="false" aria-controls="faq-answer-${idx}">
      <span>${faq.question}</span>
      <span class="faq-plus" aria-hidden="true">+</span>
    </button>
    <div class="faq-answer" id="faq-answer-${idx}" aria-hidden="true">${faq.answer}</div>
  `;
  faqList.appendChild(item);
});

// Add toggle functionality
faqList.addEventListener('click', function(e) {
  const btn = e.target.closest('.faq-question');
  if (!btn) return;
  const item = btn.parentElement;
  const answer = item.querySelector('.faq-answer');
  const expanded = btn.getAttribute('aria-expanded') === 'true';
  // Close all
  document.querySelectorAll('.faq-item').forEach(i => {
    i.classList.remove('open');
    i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
    i.querySelector('.faq-answer').setAttribute('aria-hidden', 'true');
  });
  // Open if not already open
  if (!expanded) {
    item.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
    answer.setAttribute('aria-hidden', 'false');
  }
});


  