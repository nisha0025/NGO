

  window.onload = function () {
    const testimonials = [
      {
        quote: "LIFEBRIDGE changed my life by providing school supplies and meals.",
        author: "– Amina, 12"
      },
      {
        quote: "Volunteering here helped me grow and serve my community.",
        author: "– John, Volunteer"
      },
      {
        quote: "This NGO gave me hope and opportunity.",
        author: "– Fatima, Beneficiary"
      }
    ];

    let current = 0;
    const quoteEl = document.getElementById('testimonial');
    const authorEl = document.getElementById('author');

    function showTestimonial(index) {
      quoteEl.textContent = `"${testimonials[index].quote}"`;
      authorEl.textContent = testimonials[index].author;
    }

    showTestimonial(current); 

    setInterval(() => {
      current = (current + 1) % testimonials.length;
      showTestimonial(current);
    }, 4000);

    // Optional form submission alert
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Thank you for contacting us!');
      });
    }
  };
  const ngoInfo = {
  values: [
    "Integrity",
    "Accountability",
    "Empowerment",
    "Inclusivity",
    "Sustainability",
    "Transparency",
    "Compassion",
    "Collaboration",
    "Respect for Human Rights",
    "Innovation"
  ],
  team: [
    { name: "Amina Yusuf", role: "Executive Director" },
    { name: "John Okoro", role: "Program Manager" },
    { name: "Lilian Chen", role: "Finance Officer" },
    { name: "Mark Obi", role: "Outreach Coordinator" },
    { name: "Fatima Bello", role: "Communications Lead" }
  ],
  pastProjects: [
    {
      title: "Clean Water Initiative",
      year: 2022,
      description: "Installed solar-powered water systems in 10 rural communities."
    },
    {
      title: "Youth Empowerment Program",
      year: 2023,
      description: "Trained over 500 youths in digital skills and entrepreneurship."
    },
    {
      title: "Food Security Drive",
      year: 2021,
      description: "Provided emergency food relief to 2,000 households during drought."
    }
  ]
};




const valuesSection = document.getElementById("coreValues");
ngoInfo.values.forEach(value => {
  const li = document.createElement("li");
  li.className = "bg-white p-4 rounded-lg shadow text-center";
  li.textContent = value;
  valuesSection.appendChild(li);
});


const teamSection = document.getElementById("teamMembers");
ngoInfo.team.forEach(member => {
  const div = document.createElement("div");
  div.className = "bg-white p-4 rounded-lg shadow text-center";
  div.innerHTML = `
    <h3 class="font-semibold text-lg">${member.name}</h3>
    <p class="text-sm text-gray-600">${member.role}</p>
  `;
  teamSection.appendChild(div);
});
const projectSection = document.getElementById("pastProjects");
ngoInfo.pastProjects.forEach(project => {
  const div = document.createElement("div");
  div.className = "bg-white p-4 rounded-lg shadow";
  div.innerHTML = `
    <h3 class="text-xl font-semibold">${project.title}</h3>
    <p class="text-sm text-gray-500">${project.year}</p>
    <p class="mt-2">${project.description}</p>
  `;
  projectSection.appendChild(div);
});