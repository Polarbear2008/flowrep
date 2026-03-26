'use client';
import { useEffect, useState } from 'react';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const faqData = [
    {
      question: "How does the YouTube extension work?",
      answer: "Once installed, a 'Save to FlowRep' button appears directly under the video player on YouTube. Clicking it analyzes the description and video data to instantly create a trackable workout in your dashboard."
    },
    {
      question: "Can I use FlowRep on my mobile phone?",
      answer: "Yes, FlowRep is fully responsive and works beautifully on all mobile devices through your web browser."
    },
    {
      question: "Is my data private and secure?",
      answer: "Absolutely. We use industry-standard encryption and never sell your personal data to third parties."
    },
    {
      question: "How do creators earn money?",
      answer: "Creators earn through our revenue-share program based on how many users save and complete their workouts using FlowRep."
    },
    {
      question: "Do I need a gym membership?",
      answer: "Not necessarily. FlowRep works with any workout, whether at home, outdoors, or in a gym. You decide the workouts you track."
    },
    {
      question: "What if I want to cancel my Pro plan?",
      answer: "You can cancel your subscription at any time from your account settings. You will retain access until the end of your billing cycle."
    }
  ];

  useEffect(() => {
    
    // ===== Animated number counter =====
    function animateCounter(el: HTMLElement, target: number) {
      const duration = 2000;
      const startTime = performance.now();
      function update(currentTime: number) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(target * eased).toLocaleString();
        if (progress < 1) requestAnimationFrame(update);
      }
      requestAnimationFrame(update);
    }

    // ===== Stats observer =====
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.stat-card').forEach((card, i) => {
            setTimeout(() => {
              card.classList.add('stat-visible');
              const numEl = card.querySelector('.stat-number') as HTMLElement;
              if (numEl && numEl.dataset.target) {
                animateCounter(numEl, parseInt(numEl.dataset.target));
              }
            }, i * 200);
          });
          statsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05 });
    const statsGrid = document.querySelector('.stats-grid');
    if (statsGrid) statsObserver.observe(statsGrid);

    // ===== Workflow: scroll-draw curves + card reveal =====
    (function () {
      const paths = document.querySelectorAll<SVGPathElement>('.wf-curve-path');
      const steps = document.querySelectorAll<HTMLElement>('.wf-step');

      // Initialize path lengths for draw animation
      paths.forEach(path => {
        const len = path.getTotalLength().toString();
        path.style.strokeDasharray = '10 7';
        // Store the total length for proportional animation
        path.setAttribute('data-total-length', len);
        // Start fully hidden (offset = length hides the path)
        path.style.strokeDashoffset = len;
      });

      // Observe each step for card reveal
      const stepObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('wf-visible');
            stepObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.05 });

      steps.forEach(step => stepObserver.observe(step));

      // Observe each curve for draw-on-scroll
      const curveObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const path = entry.target as SVGPathElement;
            // Animate the curve drawing in
            path.style.transition = 'stroke-dashoffset 1.2s ease-out';
            path.style.strokeDashoffset = '0';
            curveObserver.unobserve(path);
          }
        });
      }, { threshold: 0.05, rootMargin: '0px 0px -10% 0px' });

      paths.forEach(path => curveObserver.observe(path));
    })();

    // ===== Features Bento Grid Observer =====
    const featuresObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          featuresObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05 });

    const featuresSection = document.querySelector('.features');
    if (featuresSection) featuresObserver.observe(featuresSection);

    // ===== Advanced Testimonials Logic =====
    function animateDecimal(el: HTMLElement, target: number, duration = 1500) {
      let start = 0;
      const step = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        el.innerText = (progress * target).toFixed(1);
        if (progress < 1) window.requestAnimationFrame(step);
      };
      window.requestAnimationFrame(step);
    }

    const testimonialsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          const cards = entry.target.querySelectorAll('.testimonial-card');

          cards.forEach((card, i) => {
            // 1. Entrance Stagger
            setTimeout(() => {
              card.classList.add('test-visible');

              // 2. Special Card Behaviors
              if (card.id === 'test-6') {
                const valEl = card.querySelector('.stat-value') as HTMLElement;
                if (valEl && valEl.dataset.target) {
                  animateDecimal(valEl, parseFloat(valEl.dataset.target));
                }
              }
              if (card.id === 'test-4') {
                card.classList.add('mia-glow');
              }

              // 3. Star Stagger
              const stars = card.querySelectorAll<HTMLElement>('.star');
              stars.forEach((star, si) => {
                setTimeout(() => star.style.opacity = '1', si * 100);
              });
            }, i * 80); // 0.08s stagger
          });
          testimonialsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05 });

    const testimonialsGrid = document.querySelector('.testimonials-grid');
    const testimonialsSection = document.querySelector('.testimonials');
    if (testimonialsSection) testimonialsObserver.observe(testimonialsSection);

    // ===== Pricing Observer =====
    const pricingObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          pricingObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05 });

    const pricingSection = document.querySelector('.pricing');
    if (pricingSection) pricingObserver.observe(pricingSection);

    // Continuous Loop: Random Pulse
    setInterval(() => {
      const cards = document.querySelectorAll('.testimonial-card.test-visible');
      if (cards.length > 0) {
        const randomCard = cards[Math.floor(Math.random() * cards.length)];
        randomCard.classList.add('card-pulse');
        setTimeout(() => randomCard.classList.remove('card-pulse'), 2000);
      }
    }, 5000); // Every 5 seconds

    // Continuous Loop: Timestamps
    setInterval(() => {
      const stamps = document.querySelectorAll<HTMLElement>('.user-timestamp[data-hours]');
      stamps.forEach(stamp => {
        let hrs = parseFloat(stamp.dataset.hours || '0');
        // Simulate slow time passage (adding small fraction)
        hrs += 0.01;
        stamp.dataset.hours = hrs.toString();
        if (hrs < 24) {
          stamp.innerText = Math.floor(hrs) + "H AGO";
        } else {
          stamp.innerText = Math.floor(hrs / 24) + "D AGO";
        }
      });
    }, 10000); // Check every 10s
  
  }, []);

  return (
    <>
      

  {/*  ========== NAVBAR ==========  */}
  <nav className="navbar" id="navbar">
    <div className="nav-container">
      <a href="#" className="nav-logo" id="nav-logo">
        <img src="/assets/logo.jpg" alt="FlowRep Logo" className="logo-icon" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
        <span className="logo-text">FLOWREP</span>
      </a>

      <ul className="nav-links" id="nav-links">
        <li><a href="#" className="nav-link">Home</a></li>
        <li><a href="#" className="nav-link">Features</a></li>
        <li><a href="#" className="nav-link">Pricing</a></li>
        <li><a href="#" className="nav-link">Resources</a></li>
        <li><a href="#" className="nav-link">Blog</a></li>
      </ul>

      <div className="nav-actions" id="nav-actions">
        <a href="#" className="nav-login" id="nav-login">Login</a>
        <a href="#" className="nav-cta" id="nav-cta">Get started</a>
      </div>
    </div>
  </nav>

  {/*  ========== HERO ==========  */}
  <section className="hero" id="hero">
    <div className="hero-bg">
      <img src="/assets/hero-bg.png" alt="" className="hero-bg-img" />
    </div>

    <div className="hero-content">
      {/*  Badge  */}
      <div className="hero-badge" id="hero-badge">
        <span className="badge-dot"></span>
        NOW IN PUBLIC BETA
      </div>

      {/*  Heading  */}
      <h1 className="hero-heading" id="hero-heading">
        Missing Layer for your<br />
        <span className="hero-heading-yt">
          <svg className="yt-icon" viewBox="0 0 28 20" width="28" height="20">
            <rect rx="4" ry="4" width="28" height="20" fill="#FF0000" />
            <polygon points="11,5 11,15 20,10" fill="#fff" />
          </svg>
          Youtube
        </span> Fitness
      </h1>

      {/*  Subtext  */}
      <p className="hero-subtext" id="hero-subtext">
        Plan. Play. Progress. Turn YouTube's infinite workout library into a structured,<br />
        trackable fitness routine — automatically.
      </p>

      {/*  CTA Row  */}
      <div className="hero-cta-row" id="hero-cta-row">
        <a href="#" className="btn-primary" id="btn-start">
          Start free today
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
              strokeLinejoin="round" />
          </svg>
        </a>
        <a href="#" className="btn-demo" id="btn-demo">
          <svg className="play-icon" viewBox="0 0 24 24" width="22" height="22">
            <circle cx="12" cy="12" r="11" fill="#FF0000" />
            <polygon points="10,7 10,17 17,12" fill="#fff" />
          </svg>
          Watch 90-sec demo
        </a>
      </div>

      {/*  Social Proof  */}
      <div className="hero-social-proof" id="hero-social-proof">
        <div className="avatar-stack">
          <div className="avatar" style={{"background":"#4A90D9"}}></div>
          <div className="avatar" style={{"background":"#E8A838"}}></div>
        </div>
        <p className="social-text">
          5,000+ <span className="social-highlight">FITNESS ENTHUSIASTS</span> ALREADY ON BOARD
        </p>
      </div>
    </div>

    {/*  Feature Pills with Connection Lines  */}
    <div className="pills-network" id="pills-network">
      {/*  SVG Connection Lines  */}
      <svg className="connection-lines" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid meet">
        <defs>
          <filter id="whiteGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/*  Top Left: 1 CLICK SAVE  */}
        <path className="conn-line" d="M200,105 L365,270 Q375,280 375,290 L375,340" />
        <g>
          <animateMotion dur="2.8s" repeatCount="indefinite" path="M200,105 L365,270 Q375,280 375,290 L375,340" />
          <rect className="conn-dot" width="6" height="6" x="-3" y="-3" transform="rotate(45)" />
        </g>
        <rect className="conn-dot" width="4" height="4" x="198" y="103" transform="rotate(45 200 105)" />
        <rect className="conn-dot" width="4" height="4" x="373" y="278" transform="rotate(45 375 280)" />

        {/*  Center: YOUTUBE VIDEOS  */}
        <path className="conn-line" d="M400,55 L400,340" />
        <g>
          <animateMotion dur="3.5s" repeatCount="indefinite" path="M400,55 L400,340" />
          <rect className="conn-dot" width="6" height="6" x="-3" y="-3" transform="rotate(45)" />
        </g>
        <rect className="conn-dot" width="4" height="4" x="398" y="53" transform="rotate(45 400 55)" />

        {/*  Top Right: WEEKLY PLANNER  */}
        <path className="conn-line" d="M600,105 L435,270 Q425,280 425,290 L425,340" />
        <g>
          <animateMotion dur="3.1s" repeatCount="indefinite" path="M600,105 L435,270 Q425,280 425,290 L425,340" />
          <rect className="conn-dot" width="6" height="6" x="-3" y="-3" transform="rotate(45)" />
        </g>
        <rect className="conn-dot" width="4" height="4" x="598" y="103" transform="rotate(45 600 105)" />
        <rect className="conn-dot" width="4" height="4" x="423" y="278" transform="rotate(45 425 280)" />

        {/*  Bottom Left: PROGRESS TRACKING  */}
        <path className="conn-line" d="M180,210 L250,210 Q260,210 267,217 L343,293 Q350,300 350,310 L350,340" />
        <g>
          <animateMotion dur="3.2s" repeatCount="indefinite"
            path="M180,210 L250,210 Q260,210 267,217 L343,293 Q350,300 350,310 L350,340" />
          <rect className="conn-dot" width="6" height="6" x="-3" y="-3" transform="rotate(45)" />
        </g>
        <rect className="conn-dot" width="4" height="4" x="178" y="208" transform="rotate(45 180 210)" />
        <rect className="conn-dot" width="4" height="4" x="258" y="208" transform="rotate(45 260 210)" />
        <rect className="conn-dot" width="4" height="4" x="348" y="298" transform="rotate(45 350 300)" />

        {/*  Bottom Right: CREATOR PROGRAM  */}
        <path className="conn-line" d="M620,210 L550,210 Q540,210 533,217 L457,293 Q450,300 450,310 L450,340" />
        <g>
          <animateMotion dur="2.9s" repeatCount="indefinite"
            path="M620,210 L550,210 Q540,210 533,217 L457,293 Q450,300 450,310 L450,340" />
          <rect className="conn-dot" width="6" height="6" x="-3" y="-3" transform="rotate(45)" />
        </g>
        <rect className="conn-dot" width="4" height="4" x="618" y="208" transform="rotate(45 620 210)" />
        <rect className="conn-dot" width="4" height="4" x="538" y="208" transform="rotate(45 540 210)" />
        <rect className="conn-dot" width="4" height="4" x="448" y="298" transform="rotate(45 450 300)" />
      </svg>

      {/*  Pills positioned around  */}
      <div className="pill pill-yt" id="pill-youtube">
        <svg width="16" height="12" viewBox="0 0 28 20">
          <rect rx="3" ry="3" width="28" height="20" fill="#FF0000" />
          <polygon points="11,5 11,15 20,10" fill="#fff" />
        </svg>
        YOUTUBE VIDEOS
      </div>

      <div className="pill pill-save" id="pill-save">
        <svg width="14" height="16" viewBox="0 0 14 18" fill="none">
          <path d="M1 1h12v16l-6-4-6 4V1z" stroke="#222" strokeWidth="1.5" fill="none" />
        </svg>
        1 CLICK SAVE
      </div>

      <div className="pill pill-planner" id="pill-planner">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <rect x="1" y="2" width="14" height="13" rx="2" stroke="#222" strokeWidth="1.5" fill="none" />
          <path d="M1 6h14" stroke="#222" strokeWidth="1.5" />
          <path d="M5 1v3M11 1v3" stroke="#222" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        WEEKLY PLANNER
      </div>

      <div className="pill pill-progress" id="pill-progress">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <rect x="1" y="1" width="14" height="14" rx="2" stroke="#222" strokeWidth="1.5" fill="none" />
          <path d="M4 10l3-3 2 2 3-4" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        PROGRESS TRACKING
      </div>

      <div className="pill pill-creator" id="pill-creator">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="5" r="3" stroke="#222" strokeWidth="1.5" fill="none" />
          <path d="M2 15c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#222" strokeWidth="1.5" fill="none"
            strokeLinecap="round" />
        </svg>
        CREATOR PROGRAM
      </div>

      {/*  Bottom Logo  */}
      <div className="hero-bottom-logo" id="hero-bottom-logo">
        <img src="/assets/logo.jpg" alt="FlowRep Logo" className="bottom-logo-img" />
      </div>
    </div>
  </section>

  {/*  ========== FEATURES SECTION ==========  */}
  <section className="features" id="features">
    <div className="features-container">
      {/*  Section Header  */}
      <div className="features-header">
        <span className="features-label">SYSTEM CAPABILITIES</span>
        <h2 className="features-title">The FlowRep Ecosystem</h2>
      </div>

      {/*  Bento Grid  */}
      <div className="bento-grid">

        {/*  Card 1: 1-Click Metadata Sync (large left)  */}
        <div className="bento-card bento-card-lg" id="card-metadata">
          <div className="bento-card-inner">
            <div className="bento-card-text">
              <div className="bento-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="9" stroke="#4caf50" strokeWidth="1.5" fill="none" />
                  <path d="M6 10.5l2.5 2.5L14 7.5" stroke="#4caf50" strokeWidth="1.8" strokeLinecap="round"
                    strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="bento-card-title">1-Click Metadata Sync</h3>
              <p className="bento-card-desc">Instantly parse workout duration, muscle focus, and equipment requirements from
                any YouTube URL. No manual entry required.</p>
              <a href="#" className="bento-learn-more">
                Learn more
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                    strokeLinejoin="round" />
                </svg>
              </a>
            </div>
            <div className="bento-card-visual bento-visual-plant">
              <div className="plant-circle-outer">
                <img src="/assets/plant-plate.png" alt="Plant on plate" className="plant-img" />
              </div>
            </div>
          </div>
        </div>

        {/*  Card 2: Weekly Architect (accent card)  */}
        <div className="bento-card bento-card-accent" id="card-weekly">
          <div className="bento-icon bento-icon-accent">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect x="2" y="3" width="16" height="15" rx="2" stroke="#fff" strokeWidth="1.5" fill="none" />
              <path d="M2 7h16" stroke="#fff" strokeWidth="1.5" />
              <path d="M6 1v4M14 1v4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
              <rect x="5" y="10" width="3" height="2" rx="0.5" fill="#fff" opacity="0.6" />
              <rect x="5" y="13" width="3" height="2" rx="0.5" fill="#fff" opacity="0.6" />
              <rect x="9" y="10" width="3" height="2" rx="0.5" fill="#fff" opacity="0.6" />
            </svg>
          </div>
          <h3 className="bento-card-title">Weekly Architect</h3>
          <p className="bento-card-desc">Drag and drop sessions from your favorite creators into a professional-grade
            training calendar.</p>
          <div className="calendar-preview">
            <div className="calendar-entry">
              <span className="calendar-day">TUESDAY</span>
              <span className="calendar-badge">HIIT</span>
            </div>
            <div className="calendar-workout">Upper Body Shred</div>
          </div>
        </div>

        {/*  Card 3: Omni-Channel Metrics (bottom left)  */}
        <div className="bento-card bento-card-metrics" id="card-metrics">
          <h3 className="bento-card-title">Omni-Channel Metrics</h3>
          <p className="bento-card-desc">Track volume and intensity across all your subscribed fitness channels in a unified
            dashboard.</p>
          <div className="metrics-chart">
            <div className="bar-group">
              <div className="bar" style={{"height":"40px","background":"#c8d8c0"}}></div>
              <div className="bar-line"></div>
            </div>
            <div className="bar-group">
              <div className="bar" style={{"height":"55px","background":"#a3bc90"}}></div>
              <div className="bar-line"></div>
            </div>
            <div className="bar-group">
              <div className="bar" style={{"height":"50px","background":"#8ea87a"}}></div>
              <div className="bar-line"></div>
            </div>
            <div className="bar-group">
              <div className="bar" style={{"height":"80px","background":"#4caf50"}}></div>
              <div className="bar-line"></div>
            </div>
            <div className="bar-group">
              <div className="bar" style={{"height":"30px","background":"#d4ddd0"}}></div>
              <div className="bar-line"></div>
            </div>
          </div>
        </div>

        {/*  Card 4: Advanced Discovery (bottom right)  */}
        <div className="bento-card bento-card-discovery" id="card-discovery">
          <div className="bento-discovery-content">
            <div className="bento-discovery-text">
              <h3 className="bento-card-title">Advanced Discovery</h3>
              <p className="bento-card-desc">Filter by equipment availability, specific muscle groups, or precise session
                duration.</p>
              <div className="discovery-tags">
                <span className="tag">Kettlebell</span>
                <span className="tag">15-30 Min</span>
                <span className="tag">Posterior Chain</span>
              </div>
            </div>
            <div className="discovery-visual">
              <div className="filter-bar" style={{"width":"100%"}}></div>
              <div className="filter-bar" style={{"width":"85%"}}></div>
              <div className="filter-bar" style={{"width":"70%"}}></div>
              <div className="filter-bar" style={{"width":"60%"}}></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  {/*  ========== HOW IT WORKS ==========  */}
  <section className="workflow" id="workflow">
    {/*  Decorative background blobs  */}
    <div className="wf-blob wf-blob-1"></div>
    <div className="wf-blob wf-blob-2"></div>
    <div className="wf-blob wf-blob-3"></div>

    <div className="workflow-container">
      {/*  Section Header  */}
      <div className="workflow-header">
        <span className="workflow-label">THE WORKFLOW</span>
        <h2 className="workflow-title">Elevate your routine<br />in seconds</h2>
        <p className="workflow-subtitle">Stop juggling tabs and screenshots. FlowRep turns inspiration into execution with a
          seamless five-step flow.</p>
      </div>

      {/*  Vertical Timeline  */}
      <div className="wf-timeline" id="wf-timeline">

        {/*  Central spine line  */}
        <div className="wf-spine"></div>

        {/*  SVG Curved Connectors  */}
        <svg className="wf-curves" viewBox="0 0 600 1500" preserveAspectRatio="xMidYMid meet" fill="none">
          <defs>
            <linearGradient id="curveGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#4caf50" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#2e7d32" stopOpacity="0.4" />
            </linearGradient>
            <filter id="curveGlow">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {/*  Curve 01 → 02 (left to right)  */}
          <path className="wf-curve-path" id="curve-1" d="M180,120 C180,180 300,180 300,240 C300,300 420,300 420,340" />
          {/*  Curve 02 → 03 (right to center)  */}
          <path className="wf-curve-path" id="curve-2" d="M420,520 C420,580 300,580 300,640 C300,700 180,700 180,740" />
          {/*  Curve 03 → 04 (left to right)  */}
          <path className="wf-curve-path" id="curve-3" d="M180,920 C180,980 300,980 300,1040 C300,1100 420,1100 420,1140" />
          {/*  Curve 04 → 05 (right to center)  */}
          <path className="wf-curve-path" id="curve-4" d="M420,1320 C420,1370 300,1370 300,1420" />
        </svg>

        {/*  Step 01 — Install Extension (LEFT)  */}
        <div className="wf-step wf-step-left" id="wf-step-1">
          <div className="wf-card wf-card-light">
            <div className="wf-badge">01</div>
            <div className="wf-icon-wrap wf-icon-light">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect x="2" y="2" width="16" height="16" rx="3" stroke="#2e7d32" strokeWidth="1.5" fill="none" />
                <path d="M7 10h6M10 7v6" stroke="#2e7d32" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="wf-card-title">Install Extension</h3>
            <p className="wf-card-desc">One-click install to your browser. Seamlessly integrates with your favorite
              platforms.</p>
            <div className="wf-progress">
              <span className="wf-bar wf-bar-dark"></span>
              <span className="wf-bar wf-bar-accent"></span>
              <span className="wf-bar wf-bar-muted"></span>
            </div>
          </div>
        </div>

        {/*  Step 02 — Save Workout (RIGHT)  */}
        <div className="wf-step wf-step-right" id="wf-step-2">
          <div className="wf-card wf-card-dark">
            <div className="wf-badge wf-badge-light">02</div>
            <div className="wf-icon-wrap wf-icon-dark">
              <svg width="18" height="20" viewBox="0 0 14 18" fill="none">
                <path d="M1 1h12v16l-6-4-6 4V1z" stroke="#81c784" strokeWidth="1.5" fill="none" />
              </svg>
            </div>
            <h3 className="wf-card-title">Save Workout</h3>
            <p className="wf-card-desc">Clip any YouTube or Instagram workout directly to your library with zero friction.
            </p>
            <div className="wf-progress">
              <span className="wf-bar wf-bar-accent"></span>
              <span className="wf-bar wf-bar-white"></span>
              <span className="wf-bar wf-bar-white"></span>
            </div>
          </div>
        </div>

        {/*  Step 03 — Plan Week (LEFT)  */}
        <div className="wf-step wf-step-left" id="wf-step-3">
          <div className="wf-card wf-card-light">
            <div className="wf-badge">03</div>
            <div className="wf-icon-wrap wf-icon-light">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect x="2" y="3" width="16" height="15" rx="2" stroke="#2e7d32" strokeWidth="1.5" fill="none" />
                <path d="M2 7h16" stroke="#2e7d32" strokeWidth="1.5" />
                <path d="M6 1v4M14 1v4" stroke="#2e7d32" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="wf-card-title">Plan Week</h3>
            <p className="wf-card-desc">Drag and drop sessions into your personalized training calendar for total clarity.
            </p>
            <div className="wf-progress">
              <span className="wf-bar wf-bar-muted"></span>
              <span className="wf-bar wf-bar-accent"></span>
              <span className="wf-bar wf-bar-dark"></span>
            </div>
          </div>
        </div>

        {/*  Step 04 — Track Progress (RIGHT)  */}
        <div className="wf-step wf-step-right" id="wf-step-4">
          <div className="wf-card wf-card-dark">
            <div className="wf-badge wf-badge-light">04</div>
            <div className="wf-icon-wrap wf-icon-dark">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect x="2" y="2" width="16" height="16" rx="2" stroke="#81c784" strokeWidth="1.5" fill="none" />
                <path d="M5 14l3-4 3 3 4-6" stroke="#81c784" strokeWidth="1.5" strokeLinecap="round"
                  strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="wf-card-title">Track Progress</h3>
            <p className="wf-card-desc">Watch your performance peaks with automated, high-fidelity data visualization.</p>
            <div className="wf-mini-chart">
              <div className="wf-mini-bar" style={{"height":"30%"}}></div>
              <div className="wf-mini-bar" style={{"height":"50%"}}></div>
              <div className="wf-mini-bar" style={{"height":"40%"}}></div>
              <div className="wf-mini-bar wf-mini-bar-active" style={{"height":"80%"}}></div>
              <div className="wf-mini-bar" style={{"height":"60%"}}></div>
            </div>
          </div>
        </div>

        {/*  Step 05 — Share Results (CENTER — new card)  */}
        <div className="wf-step wf-step-center" id="wf-step-5">
          <div className="wf-card wf-card-accent-glow">
            <div className="wf-badge wf-badge-gold">05</div>
            <div className="wf-icon-wrap wf-icon-accent">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="8" stroke="#2e7d32" strokeWidth="1.5" fill="none" />
                <path d="M7 10l2 2 4-4" stroke="#2e7d32" strokeWidth="1.5" strokeLinecap="round"
                  strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="wf-card-title">Share & Inspire</h3>
            <p className="wf-card-desc">Export your training splits and achievements. Build your fitness community on
              FlowRep.</p>
            <div className="wf-progress">
              <span className="wf-bar wf-bar-accent"></span>
              <span className="wf-bar wf-bar-accent"></span>
              <span className="wf-bar wf-bar-dark"></span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  {/*  ========== TESTIMONIALS SECTION (Wall of Love) ==========  */}
  <section className="testimonials" id="testimonials">
    <div className="testimonials-container">
      {/*  Section Header  */}
      <div className="testimonials-header">
        <h2 className="testimonials-title">Wall of Love</h2>
        <p className="testimonials-subtitle">Real check-ins from the community. Updated in real-time by athletes around the
          globe.</p>
      </div>

      {/*  Testimonials Grid (Masonry Style)  */}
      <div className="testimonials-grid">

        {/*  Card 1: @jake_lifts (Slide in from left)  */}
        <div className="testimonial-card ent-left" id="test-1">
          <div className="card-user">
            <div className="user-avatar" style={{"backgroundColor":"#c8e6c9"}}></div>
            <div className="user-info">
              <span className="user-handle">@jake_lifts <span className="verified-badge"></span></span>
              <span className="user-timestamp" data-hours="2">2H AGO</span>
            </div>
            <div className="user-rating">
              <span className="star-rating">
                <span className="star">★</span><span className="star">★</span><span className="star">★</span><span
                  className="star">★</span><span className="star">★</span>
              </span>
            </div>
          </div>
          <p className="card-quote">The habit tracking feature alone is worth the sub. Haven't missed a leg day in 4 months.
          </p>
        </div>

        {/*  Card 2: Men's Health (Editorial - Scale in, fades last)  */}
        <div className="testimonial-card card-editorial ent-scale" id="test-2">
          <p className="editorial-quote">"FlowRep is the silent partner in thousands of transformations."</p>
          <span className="editorial-source">— MEN'S HEALTH</span>
        </div>

        {/*  Card 3: @nick_lifts (Slide in from right)  */}
        <div className="testimonial-card ent-right" id="test-3">
          <div className="card-user">
            <div className="user-avatar" style={{"backgroundColor":"#f5f5f5"}}></div>
            <div className="user-info">
              <span className="user-handle">@nick_lifts <span className="verified-badge"></span></span>
              <span className="user-timestamp" data-hours="48">2D AGO</span>
            </div>
          </div>
          <p className="card-quote">The 1-click YouTube sync is a lifesaver. No more manually typing out exercises while I'm
            in the middle of a set.</p>
        </div>

        {/*  Card 4: @miaruns (Dark Green - Slide up, glow pulse)  */}
        <div className="testimonial-card card-dark-green ent-up" id="test-4">
          <div className="card-user">
            <div className="user-avatar" style={{"backgroundColor":"rgba(255,255,255,0.2)"}}></div>
            <div className="user-info">
              <span className="user-handle">@miaruns <span className="verified-badge-white"></span></span>
              <span className="user-timestamp" style={{"color":"rgba(255,255,255,0.6)"}} data-hours="5">5H AGO</span>
            </div>
          </div>
          <p className="card-quote">Filtering workouts by duration is so smart. Now I can find the perfect 20-min session
            for busy mornings on YouTube.</p>
        </div>

        {/*  Card 5: @coach_ben (Fades in center)  */}
        <div className="testimonial-card ent-fade" id="test-5">
          <div className="card-user">
            <div className="user-avatar" style={{"backgroundColor":"#e0e0e0"}}></div>
            <div className="user-info">
              <span className="user-handle">@coach_ben <span className="verified-badge"></span></span>
              <span className="user-timestamp" data-hours="24">1D AGO</span>
            </div>
          </div>
          <p className="card-quote">I recommend FlowRep to all my clients. The shared training plans make organizing their
            YouTube routines so much easier.</p>
        </div>

        {/*  Card 6: Satisfaction Stat (Slide up, count 0→9.2)  */}
        <div className="testimonial-card card-stat-green ent-up" id="test-6">
          <h3 className="stat-value" data-target="9.2">0</h3>
          <p className="stat-description">AVERAGE ATHLETE SATISFACTION</p>
        </div>

        {/*  Card 7: @the_real_kyle (Slide up)  */}
        <div className="testimonial-card ent-up" id="test-7">
          <div className="card-user">
            <div className="user-avatar" style={{"backgroundColor":"#eeeeee"}}></div>
            <div className="user-info">
              <span className="user-handle">@the_real_kyle <span className="verified-badge"></span></span>
              <span className="user-timestamp" data-hours="8">8H AGO</span>
            </div>
          </div>
          <p className="card-quote">Finally a platform that makes YouTube fitness feel organized. Clean UI, even better
            performance than keeping 100 tabs open.</p>
        </div>

        {/*  Card 8: App Store (Editorial/Stars - Slide up)  */}
        <div className="testimonial-card ent-up" id="test-8">
          <div className="card-rating-top">
            <span className="star-rating">
              <span className="star">★</span><span className="star">★</span><span className="star">★</span><span
                className="star">★</span><span className="star">★</span>
            </span>
          </div>
          <p className="card-quote italic-quote">"Literally the best $5.99/mo I spend. Better than a personal trainer for
            organizing my routine."</p>
          <span className="card-footer-label">REVIEW ON X</span>
        </div>

        {/*  Card 9: @fitness_freak_99 (Slide up)  */}
        <div className="testimonial-card ent-up" id="test-9">
          <div className="card-user">
            <div className="user-avatar" style={{"backgroundColor":"#bdbdbd"}}></div>
            <div className="user-info">
              <span className="user-handle">@fitness_freak_99 <span className="verified-badge"></span></span>
              <span className="user-timestamp" data-hours="72">3D AGO</span>
            </div>
          </div>
          <p className="card-quote">FlowRep combined my workout history and YouTube planner perfectly. Switched from a mess
            of notes and bookmarks.</p>
        </div>

        {/*  Card 10: @amanda_v (Slide up from bottom)  */}
        <div className="testimonial-card ent-up" id="test-10">
          <div className="card-user">
            <div className="user-avatar" style={{"backgroundColor":"#c8e6c9"}}></div>
            <div className="user-info">
              <span className="user-handle">@amanda_v <span className="verified-badge"></span></span>
              <span className="user-timestamp" data-hours="24">1D AGO</span>
            </div>
          </div>
          <p className="card-quote">The AI coaching suggestions are scary good. It knew I needed a deload before I did.</p>
        </div>

        {/*  Card 11: @sara_active (Fades in center)  */}
        <div className="testimonial-card ent-fade" id="test-11">
          <div className="card-user">
            <div className="user-avatar" style={{"backgroundColor":"#a5d6a7"}}></div>
            <div className="user-info">
              <span className="user-handle">@sara_active <span className="verified-badge"></span></span>
              <span className="user-timestamp" data-hours="48">2D AGO</span>
            </div>
          </div>
          <p className="card-quote">Joined for the tracking, stayed for the community. The local meetups are amazing.</p>
        </div>

        {/*  Card 12: @leo_runs (Slide in from right)  */}
        <div className="testimonial-card ent-right" id="test-12">
          <div className="card-user">
            <div className="user-avatar" style={{"backgroundColor":"#c8e6c9"}}></div>
            <div className="user-info">
              <span className="user-handle">@leo_runs <span className="verified-badge"></span></span>
              <span className="user-timestamp" data-hours="72">3D AGO</span>
            </div>
          </div>
          <p className="card-quote">PR'd my 5k today using the pacing tools. 19:42! FlowRep actually works.</p>
        </div>

      </div>
    </div>
  </section>

  {/*  ========== PRICING SECTION ==========  */}
  <section className="pricing" id="pricing">
    <div className="pricing-container">
      <div className="pricing-header">
        <span className="pricing-badge">TRANSPARENT PRICING</span>
        <h2 className="pricing-title">Choose your power level</h2>
        <p className="pricing-subtitle">Fuel your performance with plans built for every stage of your journey.</p>
      </div>

      <div className="pricing-grid">
        {/*  FREE Plan  */}
        <div className="pricing-card" id="pricing-free">
          <div className="card-type">
            <h3>FREE</h3>
            <div className="type-icon icon-light">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
          </div>
          <p className="plan-desc">Essential tools for beginners.</p>
          <div className="plan-price">
            <span className="currency">$</span>
            <span className="amount">0</span>
            <span className="period">/mo</span>
          </div>
          <ul className="plan-features">
            <li className="feature-included">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"
                strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Save up to 10 workouts
            </li>
            <li className="feature-included">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"
                strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Basic performance analytics
            </li>
            <li className="feature-disabled">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="15" y1="9" x2="9" y2="15" />
                <line x1="9" y1="9" x2="15" y2="15" />
              </svg>
              Pro Weekly Planner
            </li>
          </ul>
          <a href="#" className="btn-pricing-outline">Get Started</a>
        </div>

        {/*  PRO Plan (Most Popular)  */}
        <div className="pricing-card is-popular" id="pricing-pro">
          <div className="popular-tag">MOST POPULAR</div>
          <div className="card-type">
            <h3>PRO</h3>
            <div className="type-icon icon-flame">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round">
                <path
                  d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
              </svg>
            </div>
          </div>
          <p className="plan-desc">Unleash your full potential.</p>
          <div className="plan-price">
            <span className="currency">$</span>
            <span className="amount">5.99</span>
            <span className="period">/mo</span>
          </div>
          <ul className="plan-features">
            <li className="feature-included">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"
                strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Unlimited saved workouts
            </li>
            <li className="feature-included">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"
                strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Advanced Weekly Planner
            </li>
            <li className="feature-included">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"
                strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Real-time performance dashboard
            </li>
            <li className="feature-included">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"
                strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Priority 24/7 expert support
            </li>
          </ul>
          <a href="#" className="btn-pricing-primary">Start 7-Day Free Trial</a>
        </div>

        {/*  CREATOR Plan  */}
        <div className="pricing-card" id="pricing-creator">
          <div className="card-type">
            <h3>CREATOR</h3>
            <div className="type-icon icon-gem">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 3h12l4 6-10 12L2 9z" />
                <path d="M11 3 8 9l4 12 4-12-3-6" />
                <path d="M2 9h20" />
              </svg>
            </div>
          </div>
          <p className="plan-desc">Monetize your training routines.</p>
          <div className="plan-price">
            <span className="currency">$</span>
            <span className="amount">12.99</span>
            <span className="period">/mo</span>
          </div>
          <ul className="plan-features">
            <li className="feature-included">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"
                strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Everything in Pro plan
            </li>
            <li className="feature-included">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"
                strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Monetization & Adsense tools
            </li>
            <li className="feature-included">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"
                strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Creator analytics API access
            </li>
            <li className="feature-included">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"
                strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Custom white-label pages
            </li>
          </ul>
          <a href="#" className="btn-pricing-outline">Join Creator Hub</a>
        </div>
      </div>
    </div>
  </section>

  {/* ========== FAQ SECTION ========== */}
  <section className="faq" id="faq">
    <div className="faq-container">
      <div className="faq-header">
        <span className="faq-label">EVERYTHING YOU NEED TO KNOW</span>
        <h2 className="faq-title">Frequently Asked Questions</h2>
      </div>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div 
            key={index} 
            className={`faq-item ${openFaq === index ? 'is-open' : ''}`}
            onClick={() => setOpenFaq(openFaq === index ? null : index)}
          >
            <div className="faq-question">
              <h3>{item.question}</h3>
              <svg className="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* ========== CTA SECTION ========== */}
  <section className="cta-section" id="cta">
    <div className="cta-container">
      <div className="cta-card">
        <h2 className="cta-title">Ready to organize your fitness?</h2>
        <p className="cta-subtitle">Join 50,000+ athletes leveling up their performance every day.</p>
        <div className="cta-actions">
          <a href="#" className="btn-cta-primary">Get FlowRep Free</a>
          <a href="#" className="btn-cta-secondary">Book a Demo</a>
        </div>
      </div>
    </div>
  </section>

  {/* ========== FOOTER ========== */}
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-brand">
        <a href="#" className="footer-logo">
          <img src="/assets/logo.jpg" alt="FlowRep Logo" className="logo-icon" style={{ width: '24px', height: '24px', objectFit: 'contain', borderRadius: '4px' }} />
          <span>FLOWREP</span>
        </a>
        <p className="footer-desc">Plan. Play. Progress. Turn YouTube's infinite library into a structured, trackable fitness routine.</p>
        <div className="footer-socials">
          <a href="#" aria-label="Twitter">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
          </a>
          <a href="#" aria-label="Instagram">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
        </div>
      </div>
      <div className="footer-links-group">
        <div className="footer-col">
          <h4>Product</h4>
          <ul>
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Extension</a></li>
            <li><a href="#">Creator Program</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Resources</h4>
          <ul>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Community</a></li>
            <li><a href="#">Workout Templates</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; {new Date().getFullYear()} FlowRep. All rights reserved.</p>
      <div className="footer-bottom-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
      </div>
    </div>
  </footer>

    </>
  );
}
