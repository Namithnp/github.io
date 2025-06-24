
  const contentMap = {
    install: {
      title: "Installation",
      text: "We set up your OS, drivers, and essential software so your system is ready from day one. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie velit in justo malesuada, non euismod enim vestibulum. Vestibulum molestie at dolor sed venenatis. Nam faucibus sit amet augue eu hendrerit. Cras scelerisque mi quis velit consectetur dapibus. Praesent finibus congue pharetra. Nullam egestas arcu ac lectus molestie efficitur. Nam et ultrices turpis. Ut mollis augue sollicitudin sodales aliquet. Aliquam aliquet leo fermentum, cursus ipsum et, placerat massa."
    },
    config: {
      title: "Config",
      text: "Tailored settings and optimization for performance, security, and ease of use. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie velit in justo malesuada, non euismod enim vestibulum. Vestibulum molestie at dolor sed venenatis. Nam faucibus sit amet augue eu hendrerit. Cras scelerisque mi quis velit consectetur dapibus. Praesent finibus congue pharetra. Nullam egestas arcu ac lectus molestie efficitur. Nam et ultrices turpis. Ut mollis augue sollicitudin sodales aliquet. Aliquam aliquet leo fermentum, cursus ipsum et, placerat massa."
    },
    maintain: {
      title: "Maintenance",
      text: "Keep your PC running like new with regular updates, cleanup, and tune-ups. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie velit in justo malesuada, non euismod enim vestibulum. Vestibulum molestie at dolor sed venenatis. Nam faucibus sit amet augue eu hendrerit. Cras scelerisque mi quis velit consectetur dapibus. Praesent finibus congue pharetra. Nullam egestas arcu ac lectus molestie efficitur. Nam et ultrices turpis. Ut mollis augue sollicitudin sodales aliquet. Aliquam aliquet leo fermentum, cursus ipsum et, placerat massa."
    },
    troubleshoot: {
      title: "Troubleshooting",
      text: "From system errors to network issues, we identify and resolve problems fast. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie velit in justo malesuada, non euismod enim vestibulum. Vestibulum molestie at dolor sed venenatis. Nam faucibus sit amet augue eu hendrerit. Cras scelerisque mi quis velit consectetur dapibus. Praesent finibus congue pharetra. Nullam egestas arcu ac lectus molestie efficitur. Nam et ultrices turpis. Ut mollis augue sollicitudin sodales aliquet. Aliquam aliquet leo fermentum, cursus ipsum et, placerat massa."
    },
    train: {
      title: "Training",
      text: "Personalized sessions to help you master your new machine and tools. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie velit in justo malesuada, non euismod enim vestibulum. Vestibulum molestie at dolor sed venenatis. Nam faucibus sit amet augue eu hendrerit. Cras scelerisque mi quis velit consectetur dapibus. Praesent finibus congue pharetra. Nullam egestas arcu ac lectus molestie efficitur. Nam et ultrices turpis. Ut mollis augue sollicitudin sodales aliquet. Aliquam aliquet leo fermentum, cursus ipsum et, placerat massa."
    }
  };

  const cards = document.querySelectorAll(".card");
  const tabContent = document.getElementById("tab-content");


  cards.forEach(card => {
    card.addEventListener("click", () => {
      // Highlight active card
      cards.forEach(c => c.classList.remove("active"));
      card.classList.add("active");

      // Grab content
      const tab = card.dataset.tab;
      const { title, text } = contentMap[tab];

      // Remove visible to trigger re-animation
      tabContent.classList.remove('visible');

      // Delay to allow opacity transition
      setTimeout(() => {
        tabContent.innerHTML = `<h2>${title}</h2><p>${text}</p>`;
        tabContent.classList.add('visible');
        tabContent.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    });
  });
 
/* MOBILE VIEWPORT

const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });
*/ 