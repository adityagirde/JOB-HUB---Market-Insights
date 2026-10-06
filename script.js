// Data Analytics Dataset
const skillsData = [
  { name: "Python & Pandas", category: "Data & AI", demand: "89%", growth: "+24.5%", icon: "fa-brands fa-python", color: "text-amber-400" },
  { name: "SQL & Data Warehousing", category: "Data Analytics", demand: "94%", growth: "+18.2%", icon: "fa-solid fa-database", color: "text-blue-400" },
  { name: "Tableau / PowerBI", category: "Business Intelligence", demand: "78%", growth: "+15.0%", icon: "fa-solid fa-chart-simple", color: "text-purple-400" },
  { name: "LLM Fine-Tuning & RAG", category: "AI/ML", demand: "96%", growth: "+42.8%", icon: "fa-solid fa-brain", color: "text-emerald-400" },
  { name: "React & Next.js", category: "Web Dev", demand: "82%", growth: "+12.1%", icon: "fa-brands fa-react", color: "text-cyan-400" },
  { name: "Docker & Kubernetes", category: "DevOps", demand: "86%", growth: "+21.4%", icon: "fa-brands fa-docker", color: "text-sky-400" }
];

const jobsData = [
  {
    title: "Data Analyst & Insights Lead",
    category: "Data Science",
    company: "Analytics Corp",
    salary: "₹8.5 - ₹14 LPA",
    experience: "1-3 Yrs",
    location: "Bangalore / Hybrid",
    logo: "https://cdn-icons-png.flaticon.com/512/2920/2920329.png",
    tags: ["SQL", "Python", "Tableau", "PowerBI"],
    description: "Analyze market datasets, create operational dashboards, and generate key business insights for enterprise clients."
  },
  {
    title: "AI / ML Data Scientist",
    category: "AI/ML",
    company: "Neural Mind Labs",
    salary: "₹16 - ₹28 LPA",
    experience: "2-5 Yrs",
    location: "Hyderabad / Remote",
    logo: "https://cdn-icons-png.flaticon.com/512/2103/2103832.png",
    tags: ["PyTorch", "NLP", "Scikit-Learn", "FastAPI"],
    description: "Design machine learning workflows, predictive analytics models, and deploy scalable ML services."
  },
  {
    title: "Senior Backend Developer",
    category: "Software",
    company: "CloudScale Systems",
    salary: "₹14 - ₹22 LPA",
    experience: "3-6 Yrs",
    location: "Pune / On-site",
    logo: "https://cdn-icons-png.flaticon.com/512/1006/1006771.png",
    tags: ["Node.js", "PostgreSQL", "Redis", "AWS"],
    description: "Architect distributed backend microservices handling millions of daily transactions."
  },
  {
    title: "Cloud & DevOps Engineer",
    category: "Cloud",
    company: "InfraOps Global",
    salary: "₹12 - ₹20 LPA",
    experience: "2-4 Yrs",
    location: "Gurugram / Hybrid",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968853.png",
    tags: ["Kubernetes", "Terraform", "CI/CD", "Docker"],
    description: "Maintain cloud infrastructure, CI/CD pipelines, and automated deployment architectures."
  },
  {
    title: "Business Intelligence Specialist",
    category: "Data Science",
    company: "FinData Solutions",
    salary: "₹9 - ₹15 LPA",
    experience: "2-4 Yrs",
    location: "Mumbai / Remote",
    logo: "https://cdn-icons-png.flaticon.com/512/1541/1541402.png",
    tags: ["PowerBI", "SQL", "Excel", "Data Modeling"],
    description: "Transform raw financial records into actionable business intelligence reports and strategic forecasts."
  },
  {
    title: "Full Stack Engineer (React + Python)",
    category: "Software",
    company: "Nexus Tech Studio",
    salary: "₹10 - ₹18 LPA",
    experience: "1-4 Yrs",
    location: "Remote",
    logo: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png",
    tags: ["React", "Python", "Tailwind CSS", "MongoDB"],
    description: "Build user-facing web applications with responsive design and high-performance Python backends."
  }
];

// Initialize Page Elements
document.addEventListener("DOMContentLoaded", () => {
  renderSkills();
  renderJobs(jobsData);
  initCharts();
  setupEventListeners();
});

// Render High-Demand Skills
function renderSkills() {
  const container = document.getElementById("skillsGrid");
  container.innerHTML = skillsData.map(skill => `
    <div class="bg-[#121218] border border-zinc-800 rounded-xl p-4 hover:border-zinc-700 transition">
      <div class="flex items-center justify-between mb-2">
        <div class="flex items-center space-x-3">
          <div class="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center">
            <i class="${skill.icon} ${skill.color} text-sm"></i>
          </div>
          <div>
            <h3 class="text-xs font-bold text-white">${skill.name}</h3>
            <span class="text-[10px] text-zinc-500">${skill.category}</span>
          </div>
        </div>
        <span class="text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-900 px-2 py-0.5 rounded">
          ${skill.growth}
        </span>
      </div>
      <div class="mt-3">
        <div class="flex justify-between text-[11px] text-zinc-400 mb-1">
          <span>Market Adoption</span>
          <span class="font-mono text-zinc-200">${skill.demand}</span>
        </div>
        <div class="w-full bg-zinc-900 h-1.5 rounded-full overflow-hidden">
          <div class="bg-indigo-500 h-full rounded-full" style="width: ${skill.demand}"></div>
        </div>
      </div>
    </div>
  `).join('');
}

// Render Job Cards
function renderJobs(data) {
  const container = document.getElementById("jobsGrid");
  if (data.length === 0) {
    container.innerHTML = `<p class="col-span-full text-center text-zinc-500 py-8 text-xs">No matching job market insights found.</p>`;
    return;
  }

  container.innerHTML = data.map(job => `
    <div class="bg-[#121218] border border-zinc-800 rounded-xl p-5 hover:border-zinc-700 transition flex flex-col justify-between group">
      <div>
        <div class="flex items-start justify-between gap-3 mb-3">
          <div class="flex items-center space-x-3">
            <img src="${job.logo}" alt="${job.category}" class="w-9 h-9 p-1.5 bg-zinc-900 border border-zinc-800 rounded-lg object-contain group-hover:border-zinc-700 transition" />
            <div>
              <h3 class="text-sm font-bold text-white group-hover:text-indigo-400 transition">${job.title}</h3>
              <p class="text-xs text-zinc-400">${job.company} • <span class="text-zinc-500">${job.location}</span></p>
            </div>
          </div>
        </div>

        <p class="text-xs text-zinc-400 line-clamp-2 mb-4">${job.description}</p>

        <!-- Tech Stack Tags -->
        <div class="flex flex-wrap gap-1.5 mb-4">
          ${job.tags.map(tag => `<span class="text-[10px] bg-zinc-900 border border-zinc-800 text-zinc-300 px-2 py-0.5 rounded">${tag}</span>`).join('')}
        </div>
      </div>

      <div class="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs">
        <span class="font-semibold text-emerald-400">${job.salary}</span>
        <span class="text-[11px] text-zinc-500 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">${job.experience}</span>
      </div>
    </div>
  `).join('');
}

// Filter and Search Event Handling
function setupEventListeners() {
  const searchInput = document.getElementById("searchInput");
  const filterBtns = document.querySelectorAll(".filter-btn");

  let activeCategory = "all";

  // Search input handler
  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = jobsData.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(query) || 
                            job.tags.some(t => t.toLowerCase().includes(query)) ||
                            job.company.toLowerCase().includes(query);
      const matchesCategory = activeCategory === "all" || job.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
    renderJobs(filtered);
  });

  // Filter tab buttons
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeCategory = btn.getAttribute("data-filter");

      const query = searchInput.value.toLowerCase();
      const filtered = jobsData.filter(job => {
        const matchesSearch = job.title.toLowerCase().includes(query) || 
                              job.tags.some(t => t.toLowerCase().includes(query));
        const matchesCategory = activeCategory === "all" || job.category === activeCategory;
        return matchesSearch && matchesCategory;
      });
      renderJobs(filtered);
    });
  });
}

// Initialize Charts with Chart.js
function initCharts() {
  // Chart 1: Bar Chart (Top Tech Stack)
  const ctxDemand = document.getElementById("demandChart").getContext("2d");
  new Chart(ctxDemand, {
    type: "bar",
    data: {
      labels: ["Python", "SQL", "LLMs/AI", "React", "Docker", "PowerBI"],
      datasets: [{
        label: "Open Job Postings Count",
        data: [42500, 38200, 31000, 27400, 22100, 19800],
        backgroundColor: "#6366f1",
        borderRadius: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { ticks: { color: "#a1a1aa", font: { size: 11 } }, grid: { display: false } },
        y: { ticks: { color: "#71717a", font: { size: 10 } }, grid: { color: "#27272a" } }
      }
    }
  });

  // Chart 2: Doughnut Chart (Domain Share)
  const ctxDomain = document.getElementById("domainChart").getContext("2d");
  new Chart(ctxDomain, {
    type: "doughnut",
    data: {
      labels: ["Data & Analytics", "AI & ML", "Software Dev", "Cloud & DevOps"],
      datasets: [{
        data: [35, 25, 25, 15],
        backgroundColor: ["#6366f1", "#10b981", "#a855f7", "#f59e0b"],
        borderWidth: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "bottom",
          labels: { color: "#a1a1aa", boxWidth: 12, font: { size: 11 } }
        }
      }
    }
  });
}