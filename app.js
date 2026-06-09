/* ==========================================================================
   CLAUDE EDITORIAL THEME - INTERACTIVE SCRIPT FOR VISHWAS SRIVASTAVA
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initScrollEffects();
  initTypingAnimation();
  initProjectAnimations();
});

/* ==========================================================================
   1. Mobile Navigation Toggle
   ========================================================================== */
function initMobileNav() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
      hamburger.classList.toggle('active');
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-open');
        hamburger.classList.remove('active');
      });
    });
  }
}

/* ==========================================================================
   2. Scroll Spy & Sticky Header
   ========================================================================== */
function initScrollEffects() {
  const topNav = document.getElementById('top-nav');
  const sections = document.querySelectorAll('section, header');
  const navItems = document.querySelectorAll('.nav-link-item');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    // Sticky header shrink
    if (topNav) {
      if (scrollPos > 50) {
        topNav.classList.add('scroll-scrolled');
      } else {
        topNav.classList.remove('scroll-scrolled');
      }
    }

    // Scroll Spy active indicator
    let currentSectionId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100; // offsets header height
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    if (currentSectionId) {
      navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${currentSectionId}`) {
          item.classList.add('active');
        }
      });
    }
  });
}

/* ==========================================================================
   3. Hero profile typing simulation
   ========================================================================== */
function initTypingAnimation() {
  const codeContainer = document.getElementById('typing-code');
  if (!codeContainer) return;

  const codeString = `<span class="syntax-keyword">class</span> <span class="syntax-function">DataAnalyst</span>:
    <span class="syntax-keyword">def</span> <span class="syntax-function">__init__</span>(self):
        self.name = <span class="syntax-string">"Vishwas Srivastava"</span>
        self.education = <span class="syntax-string">"NIT Jalandhar (B.Tech)"</span>
        self.credentials = [<span class="syntax-string">"Power BI Certified"</span>]
        self.focus = [
            <span class="syntax-string">"KPI Dashboards"</span>, 
            <span class="syntax-string">"Data Quality Rubrics"</span>,
            <span class="syntax-string">"AI Evaluation Frameworks"</span>
        ]
        self.rigor = <span class="syntax-string">"100%"</span>`;

  // Start with empty, then type in characters
  codeContainer.innerHTML = '';
  let idx = 0;
  let isTag = false;
  let tempString = '';

  function typeChar() {
    if (idx >= codeString.length) return;

    const char = codeString.charAt(idx);

    if (char === '<') {
      isTag = true;
    }

    tempString += char;

    if (char === '>') {
      isTag = false;
      codeContainer.innerHTML = tempString;
    }

    if (!isTag) {
      codeContainer.innerHTML = tempString + '<span style="color: var(--color-primary); font-weight: bold; animation: blink 1s infinite;">|</span>';
    }

    idx++;
    setTimeout(typeChar, isTag ? 0 : 25);
  }

  // Inject blink animation stylesheet keyframes
  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }
  `;
  document.head.appendChild(style);

  // Trigger typing
  setTimeout(typeChar, 800);
}

/* ==========================================================================
   4. Interactive Reference Switcher (Code Showcase Tabs)
   ========================================================================== */
const showcaseTabsContent = {
  sql: {
    title: 'fleet_metrics.sql',
    lines: '1\n2\n3\n4\n5\n6\n7\n8\n9\n10',
    code: `<span class="syntax-keyword">SELECT</span> 
    driver_id,
    <span class="syntax-function">COUNT</span>(delivery_id) <span class="syntax-keyword">AS</span> total_deliveries,
    <span class="syntax-function">SUM</span>(<span class="syntax-keyword">CASE WHEN</span> status = <span class="syntax-string">'Delayed'</span> <span class="syntax-keyword">THEN</span> 1 <span class="syntax-keyword">ELSE</span> 0 <span class="syntax-keyword">END</span>) <span class="syntax-keyword">AS</span> exceptions,
    <span class="syntax-function">ROUND</span>(<span class="syntax-function">AVG</span>(delivery_time_hours), 2) <span class="syntax-keyword">AS</span> avg_duration
<span class="syntax-keyword">FROM</span> fleet_operations
<span class="syntax-keyword">WHERE</span> operational_date >= <span class="syntax-string">'2025-01-01'</span>
<span class="syntax-keyword">GROUP BY</span> driver_id
<span class="syntax-keyword">ORDER BY</span> exceptions <span class="syntax-keyword">DESC</span>;`
  },
  python: {
    title: 'predictive_modeling.py',
    lines: '1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12',
    code: `<span class="syntax-keyword">import</span> pandas <span class="syntax-keyword">as</span> pd
<span class="syntax-keyword">from</span> sklearn.model_selection <span class="syntax-keyword">import</span> train_test_split
<span class="syntax-keyword">from</span> sklearn.ensemble <span class="syntax-keyword">import</span> RandomForestClassifier

<span class="syntax-comment"># Load 2,500+ operational delivery records</span>
df = pd.read_csv(<span class="syntax-string">"delivery_records.csv"</span>)
X = df[[<span class="syntax-string">"distance"</span>, <span class="syntax-string">"traffic_index"</span>, <span class="syntax-string">"weather_code"</span>]]
y = df[<span class="syntax-string">"is_delayed"</span>]

model = RandomForestClassifier(max_depth=5, random_state=42)
model.fit(X, y)
print(f<span class="syntax-string">"Achieved Model Accuracy: {model.score(X, y):.2%}"</span>) <span class="syntax-comment"># Target: 69%</span>`
  },
  rubric: {
    title: 'data_quality_rubric.json',
    lines: '1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11',
    code: `{
  <span class="syntax-string">"evaluation_metric"</span>: <span class="syntax-string">"Driver Performance Anomaly"</span>,
  <span class="syntax-string">"record_count_threshold"</span>: <span class="syntax-number">8000</span>,
  <span class="syntax-string">"data_schema_validation"</span>: {
    <span class="syntax-string">"required_fields"</span>: [<span class="syntax-string">"driver_id"</span>, <span class="syntax-string">"duration"</span>, <span class="syntax-string">"distance"</span>],
    <span class="syntax-string">"range_check"</span>: { <span class="syntax-string">"duration"</span>: [<span class="syntax-number">0.1</span>, <span class="syntax-number">24.0</span>] }
  },
  <span class="syntax-string">"exception_handling"</span>: {
    <span class="syntax-string">"null_handling"</span>: <span class="syntax-string">"Flag as data_integrity_alert"</span>
  }
}`
  }
};

function switchShowcaseTab(tabElement, key) {
  // Update tab classes
  const tabContainer = tabElement.parentElement;
  tabContainer.querySelectorAll('.code-window-tab').forEach(tab => {
    tab.classList.remove('active');
  });
  tabElement.classList.add('active');

  // Fetch title, lines and content elements
  const cardElement = tabContainer.closest('.code-window-card');
  const titleElement = cardElement.querySelector('.code-window-title');
  const linesElement = cardElement.querySelector('.code-window-lines');
  const contentElement = cardElement.querySelector('.code-window-content');

  const data = showcaseTabsContent[key];
  if (data) {
    titleElement.textContent = data.title;
    linesElement.textContent = data.lines;
    contentElement.innerHTML = data.code;
  }
}

/* ==========================================================================
   5. Projects Filtering
   ========================================================================== */
function filterProjects(tabElement, category) {
  // Update tab active classes
  const filterContainer = tabElement.parentElement;
  filterContainer.querySelectorAll('.category-tab').forEach(tab => {
    tab.classList.remove('active');
  });
  tabElement.classList.add('active');

  // Filter project cards
  const projectItems = document.querySelectorAll('.project-item');
  projectItems.forEach(item => {
    const itemCategory = item.getAttribute('data-category');
    
    // Add smooth fade out
    item.style.opacity = '0';
    item.style.transform = 'scale(0.98)';
    
    setTimeout(() => {
      if (category === 'all' || itemCategory === category) {
        item.style.display = 'grid';
        // Trigger reflow for animation
        void item.offsetWidth;
        item.style.opacity = '1';
        item.style.transform = 'scale(1)';
        
        // Trigger rubric bar fills inside project visual if visible
        const rubricFills = item.querySelectorAll('.rubric-fill');
        rubricFills.forEach(fill => {
          const targetWidth = fill.style.width;
          fill.style.width = '0';
          setTimeout(() => {
            fill.style.width = targetWidth;
          }, 150);
        });
      } else {
        item.style.display = 'none';
      }
    }, 200);
  });
}

function initProjectAnimations() {
  // Trigger rubric fills initially on load
  const rubricFills = document.querySelectorAll('.rubric-fill');
  rubricFills.forEach(fill => {
    const targetWidth = fill.style.width;
    fill.style.width = '0';
    setTimeout(() => {
      fill.style.width = targetWidth;
    }, 1000);
  });
}

/* ==========================================================================
   6. Contact Form Submission (Mocked)
   ========================================================================== */
function handleContactSubmit(event) {
  event.preventDefault();
  
  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');
  const submitBtn = form.querySelector('.btn-form-submit');
  
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  
  if (!name || !email || !message) {
    feedback.textContent = 'Please fill out all required fields.';
    feedback.className = 'form-message error';
    return;
  }
  
  // Disable button
  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending...';
  
  // Simulate network request
  setTimeout(() => {
    feedback.textContent = `Thank you, ${name}! Your message was successfully received. Vishwas will contact you soon.`;
    feedback.className = 'form-message success';
    
    // Reset form
    form.reset();
    submitBtn.disabled = false;
    submitBtn.textContent = 'Send Message';
    
    // Clear message after 6 seconds
    setTimeout(() => {
      feedback.style.display = 'none';
    }, 6000);
  }, 1200);
}
