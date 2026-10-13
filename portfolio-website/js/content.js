/* =====================================================================
   YOUR CONTENT  -  THIS IS THE ONLY FILE YOU NEED TO EDIT
   =====================================================================

   HOW TO EDIT (4 simple rules)
   1. Change only the text between the "quotes".
   2. Keep every "quote" and every comma at the end of a line.
   3. Do not type a double quote (") inside your text. Use a single
      quote (') instead, like in: "I'm a fast learner".
   4. Save this file, then refresh the website in your browser.

   HOW TO ADD A NEW ITEM TO A LIST
   Copy one whole { ... }, block, paste it right below, then change the text.

   HOW TO ADD PICTURES
   Put your picture files in the "images" folder, then type the file name
   in the matching "image:" line below. See HOW-TO-EDIT.txt for details.
   If a picture file is missing, the site shows a neat placeholder instead.

   ICON NAMES YOU CAN USE (for the "icon:" lines)
   mail  phone  map-pin  clock  globe  calendar  check  headset  shield
   layers  wifi  monitor  zap  clipboard  task  chat  message  database
   send  image  file  palette  film  cloud  board  grid  layout  video
   users  cpu  check-circle  table  presentation  briefcase  user
   lightbulb  repeat  search  award  graduation
   ===================================================================== */

const SITE = {

  /* ===================================================================
     1. BASIC INFORMATION
     =================================================================== */
  siteTitle:       "Yrma Lorraine Barilla",     // text shown on the browser tab
  siteDescription: "Portfolio of Yrma Lorraine Barilla, entry-level administrative virtual assistant based in the Philippines.",

  name:      "Yrma Lorraine Barilla",
  shortName: "Yrma Barilla",                     // shown at the top-left of the menu
  initials:  "YB",                               // shown when there is no profile picture
  role:      "Administrative Virtual Assistant",

  email:     "barillayrmalorraine@gmail.com",
  phone:     "+63 938 081 2450",
  phoneLink: "+639380812450",                    // same number, no spaces (used by the Call button)

  location:      "Puerto Princesa City, Palawan, Philippines",
  timezoneLabel: "PHT (UTC+8)",
  timezoneId:    "Asia/Manila",                  // used for the live clock. Leave as it is.


  /* ===================================================================
     2. PICTURES
     Put the files inside the "images" folder, then type the path below.
     Tip: JPG or PNG. Keep each file under 1 MB so the site loads fast.
     =================================================================== */
  images: {

    // Your profile picture (a square or portrait photo of your face works best)
    profile: "images/profile/profile.png",

    // Cover picture at the top of each page. Wide pictures (about 1600 x 600) work best.
    // If a file is missing, the site shows colorful cover art instead.
    covers: {
      home:     "images/covers/home.jpg",
      about:    "images/covers/about.jpg",
      projects: "images/covers/projects.jpg",
      resume:   "images/covers/resume.jpg",
      contact:  "images/covers/contact.jpg"
    }
  },


  /* ===================================================================
     3. HOME PAGE
     =================================================================== */
  home: {

    statusText: "Available for remote work",

    // The pitch under your name
    intro: "I take care of the details that slow your day down: your inbox, calendar, records and customer follow-ups. I already support international customers every day through live chat, so I know how to communicate clearly, stay accurate and work to a process.",

    // The three small facts under the buttons
    quickFacts: [
      { icon: "map-pin", text: "Puerto Princesa, Philippines (UTC+8)" },
      { icon: "globe",   text: "English fluent" },
      { icon: "clock",   text: "US, UK and AU hours" }
    ],

    // ---- "Why hire me" cards ----
    whyTitle: "Why you can trust me with your work",
    whySub:   "I'm early in my career. Here is what I already do well.",
    why: [
      { icon: "headset", title: "Real customer experience",
        text: "Since June 2026 I help international customers on live chat, handling several conversations at once and keeping clear case notes." },
      { icon: "shield",  title: "Careful with records",
        text: "At a pharmacy I kept confidential prescription and customer records, processed payments and handled insurance paperwork with close attention to detail." },
      { icon: "layers",  title: "Ready with your tools",
        text: "Google Workspace, Microsoft 365, Salesforce, Trello and Canva are tools I already know, so you spend less time on training." },
      { icon: "wifi",    title: "Set up to work remotely",
        text: "Fiber internet with a mobile data backup, a desktop PC and a nearby coworking space if the power or connection drops." }
    ],

    // ---- Tools ----
    toolsTitle: "Tools I use",
    toolsSub:   "The apps I work in, so I can start on your existing setup.",
    tools: [
      { icon: "grid",         name: "Google Workspace", detail: "Docs, Sheets, Slides, Drive, Gmail, Calendar" },
      { icon: "layout",       name: "Microsoft 365",    detail: "Word, Excel, Outlook and more" },
      { icon: "cloud",        name: "Salesforce",       detail: "Customer records and cases" },
      { icon: "board",        name: "Trello",           detail: "Task boards and workflows" },
      { icon: "palette",      name: "Canva",            detail: "Graphics, posts and presentations" },
      { icon: "film",         name: "CapCut",           detail: "Short video editing" },
      { icon: "video",        name: "Zoom",             detail: "Video meetings" },
      { icon: "video",        name: "Google Meet",      detail: "Video meetings" },
      { icon: "users",        name: "Microsoft Teams",  detail: "Chat and calls" },
      { icon: "message",      name: "Discord",          detail: "Team chat" },
      { icon: "cpu",          name: "AI assistants",    detail: "Claude, ChatGPT, Google Gemini" },
      { icon: "check-circle", name: "Grammarly",        detail: "Clear, error-free writing" }
    ],

    // ---- Niche ----
    nicheTitle: "My niche",
    nicheText:  "Administrative support with a customer-support background. I'm a good fit for businesses that need someone dependable on the everyday work.",
    niche: [
      { icon: "mail",     title: "Inbox and calendar support",       text: "Sorting email, scheduling meetings and keeping deadlines visible." },
      { icon: "table",    title: "Data entry and records",           text: "Accurate, confidential and easy to find later." },
      { icon: "chat",     title: "Customer support and live chat",   text: "Friendly, clear replies and complete case documentation." },
      { icon: "task",     title: "Task tracking and follow-ups",     text: "Trello boards, checklists and reminders that keep work moving." }
    ],

    // ---- Featured projects (the first few projects from section 4) ----
    featuredTitle: "Featured projects",
    featuredSub:   "A few samples of how I would organize everyday work.",
    featuredCount: 3,                            // how many projects to show here

    // ---- Ready to start ----
    readyTitle: "Ready to start",
    ready: [
      { icon: "globe",   label: "Time zones",  text: "US, UK and AU. Open to night shifts." },
      { icon: "wifi",    label: "Internet",    text: "PLDT Fiber 300 Mbps with DITO mobile data hotspot backup" },
      { icon: "monitor", label: "Equipment",   text: "Desktop PC (AMD Ryzen 3 3200G)" },
      { icon: "zap",     label: "Backup plan", text: "Nearby coworking space if power or internet goes down" }
    ],

    // ---- Bottom banner ----
    cta: {
      title:  "Need an extra pair of hands?",
      text:   "Tell me what is piling up and I will suggest a simple way to take it off your plate.",
      button: "Contact me"
    }
  },


  /* ===================================================================
     4. ABOUT PAGE
     =================================================================== */
  about: {

    headline: "Organized, reliable and easy to work with.",
    subline:  "A short introduction to who I am and how I work.",

    // Your story. The first paragraph is shown larger.
    paragraphs: [
      "Hi, I'm Yrma, an entry-level administrative virtual assistant based in Puerto Princesa City, Palawan, Philippines.",
      "Today I support international customers through live chat. I'm now looking for a remote role where I can put my organization, communication and attention to detail to work for a client's business.",
      "Before customer service, I worked as a pharmacy assistant. Accurate records, payments and paperwork mattered every day there. It taught me to double-check my work and to protect confidential information. In customer service I learned to explain things clearly, stay calm with several conversations open and write down every case so the next person can pick it up.",
      "I completed Senior High School in Accountancy, Business and Management at STI College, which gave me a base in business basics. Since then I have built hands-on skills with Google Workspace, Microsoft 365, Salesforce, Trello and Canva.",
      "I'm early in my career, and I'm upfront about that. What I bring is a steady work ethic, a habit of writing things down and a real willingness to learn the way you like things done."
    ],

    // The quick facts box next to your story
    facts: [
      { label: "Based in",     value: "Puerto Princesa City, Palawan, Philippines" },
      { label: "Time zone",    value: "PHT (UTC+8)" },
      { label: "Availability", value: "US, UK and AU time zones. Open to night shifts." },
      { label: "Languages",    value: "English (fluent, spoken and written). Filipino (native)." },
      { label: "Education",    value: "Senior High School, Accountancy, Business and Management (ABM), STI College, 2021 to 2023" }
    ],

    // ---- How I work ----
    principlesTitle: "How I work",
    principlesSub:   "Habits I bring to every task.",
    principles: [
      { icon: "clipboard", title: "I write things down",   text: "Clear notes and complete records, so anyone can pick up where I left off." },
      { icon: "task",      title: "I follow the process",  text: "I stick to your procedures and checklists, and I suggest improvements only after I understand them." },
      { icon: "chat",      title: "I communicate early",   text: "If something is unclear or running late, you hear it from me first and I ask before I guess." },
      { icon: "repeat",    title: "I follow up",           text: "I track deadlines and open items until they are done." }
    ],
    strengths: ["Time management", "Attention to detail", "Confidentiality", "Adaptability", "Problem solving", "Remote collaboration"],

    // ---- What I can help with ----
    servicesTitle: "What I can help with",
    servicesSub:   "",
    services: [
      { icon: "calendar",     title: "Inbox and calendar",      text: "Email sorting, scheduling, reminders and meeting set-up in Gmail and Google Calendar." },
      { icon: "database",     title: "Data entry and records",  text: "Accurate entry, tidy files and organized folders in Google Sheets, Drive and Microsoft 365." },
      { icon: "headset",      title: "Customer support",        text: "Live chat and written support, billing and account questions, and case notes in Salesforce." },
      { icon: "task",         title: "Task tracking",           text: "Trello boards, priorities, due dates and weekly check-ins." },
      { icon: "presentation", title: "Documents and design",    text: "Docs, slides and simple graphics in Google Workspace and Canva, plus short videos in CapCut." },
      { icon: "lightbulb",    title: "Research and drafts",     text: "First drafts and research with AI tools and Grammarly. I always review the result before it reaches you." }
    ],

    cta: {
      title: "Want to know more?",
      text:  "See my resume, or send me a message about the work you need done."
    }
  },


  /* ===================================================================
     5. PROJECTS PAGE

     Each project is one block between { and },
     To add a project: copy a whole block, paste it below the last one,
     then change the text. To remove one: delete its whole block.

       title      = project name
       caption    = one or two sentences about it
       tools      = tools you used (add or remove names inside the [ ])
       category   = the group name used by the filter buttons
       image      = the picture file (put it in images/projects/)
       fit        = "contain" shows the whole picture (best for screenshots)
                    "cover" fills the whole frame (best for photos)
       focus      = only matters for "cover". Where to crop from:
                    "center", "top" or "bottom"
       icon       = icon shown while there is no picture yet
       link       = optional web address for a "View project" button.
                    Leave it as "" if you do not need it.

     All project cards are the same size, whatever the shape of your picture.
     =================================================================== */
  projects: {

    headline: "How I organize the work.",
    subline:  "Sample projects that show how I set up and run everyday virtual assistant tasks. Each one lists the tools I used.",

    // Small label on top of each card. Change it to "Project" once you have real client work.
    badge: "Sample project",

    items: [
      {
        title:    "My Portfolio",
        caption:  "I created this portfolio from scratch using Canva, without relying on pre-made templates, to showcase my creativity, skills, and personality. I wanted to give you a better understanding of who I am, what I can do, and how I can contribute to your team.",
        tools:    ["Canva"],
        category: "Design",
        image:    "images/projects/portfolio.jpg",
        fit:      "contain",
        focus:    "center",
        icon:     "palette",
        link:     "https://canva.link/xxi6emqneqd54fo"
      },
      {
        title:    "Travel Vlog",
        caption:  "A travel and motorcycle trip vlog featuring the scenic destinations of Napsan, Palawan. Edited using CapCut, the video captures the journey, beautiful landscapes, and memorable moments of the trip through engaging visuals and smooth transitions.",
        tools:    ["Capcut"],
        category: "Design",
        image:    "images/projects/travel_vlog.jpg",
        fit:      "contain",
        focus:    "center",
        icon:     "palette",
        link:     "https://vt.tiktok.com/ZSbofaBh3/"
      },
      {
        title:    "DailyCha-Fe Menu",
        caption:  "I designed a menu using Canva for a matcha coffee shop I created in Roblox. This project allowed me to showcase my creativity, visual design skills, and attention to detail while creating a menu that matched the shop’s aesthetic and theme.",
        tools:    ["Canva"],
        category: "Design",
        image:    "images/projects/dailycha_menu.png",
        fit:      "contain",
        focus:    "center",
        icon:     "palette",
        link:     "https://canva.link/wn0hfyf05ld1v63"
      },
      {
        title:    "House Design",
        caption:  "A house design project in *Welcome to Bloxburg* on Roblox, featuring creative interior and exterior designs. It showcases home layouts, furniture arrangements, color combinations, and decorative details to create a visually appealing and personalized virtual home.",
        tools:    ["Roblox"],
        category: "Design",
        image:    "images/projects/house_design.png",
        fit:      "contain",
        focus:    "center",
        icon:     "palette",
        link:     ""
      },
      // {
      //   title:    "Inbox and Calendar Routine",
      //   caption:  "A daily routine for sorting email into labels, flagging urgent messages and blocking time for deadlines.",
      //   tools:    ["Gmail", "Google Calendar"],
      //   category: "Organization",
      //   image:    "images/projects/inbox-calendar.jpg",
      //   fit:      "contain",
      //   focus:    "center",
      //   icon:     "calendar",
      //   link:     ""
      // },
      // {
      //   title:    "Customer Case Notes Template",
      //   caption:  "A clear format for recording each concern, the steps taken and the resolution, so any teammate can follow up.",
      //   tools:    ["Google Docs", "Salesforce"],
      //   category: "Customer support",
      //   image:    "images/projects/case-notes.jpg",
      //   fit:      "contain",
      //   focus:    "center",
      //   icon:     "clipboard",
      //   link:     ""
      // },
      // {
      //   title:    "Weekly Task Board",
      //   caption:  "A Trello board with columns for to do, in progress, waiting and done, plus due dates and checklists.",
      //   tools:    ["Trello"],
      //   category: "Organization",
      //   image:    "images/projects/task-board.jpg",
      //   fit:      "contain",
      //   focus:    "center",
      //   icon:     "board",
      //   link:     ""
      // },
      // {
      //   title:    "Social Media Post Set",
      //   caption:  "A set of branded posts and a story template designed for a small business.",
      //   tools:    ["Canva", "Canva AI"],
      //   category: "Design",
      //   image:    "images/projects/social-posts.jpg",
      //   fit:      "contain",
      //   focus:    "center",
      //   icon:     "palette",
      //   link:     ""
      // },
      // {
      //   title:    "Expense and Data Entry Tracker",
      //   caption:  "A spreadsheet with drop-down lists, running totals and clean formatting for monthly records.",
      //   tools:    ["Google Sheets"],
      //   category: "Data",
      //   image:    "images/projects/expense-tracker.jpg",
      //   fit:      "contain",
      //   focus:    "center",
      //   icon:     "table",
      //   link:     ""
      // },
      // {
      //   title:    "Client Meeting Pack",
      //   caption:  "An agenda, a short slide deck and a follow-up summary prepared for a client call.",
      //   tools:    ["Google Slides", "Google Docs", "Zoom"],
      //   category: "Organization",
      //   image:    "images/projects/meeting-pack.jpg",
      //   fit:      "contain",
      //   focus:    "center",
      //   icon:     "presentation",
      //   link:     ""
      // }
    ]
  },


  /* ===================================================================
     6. RESUME PAGE
     =================================================================== */
  resume: {

    summary: "Entry-level Administrative Virtual Assistant with experience supporting international customers through live chat, handling account and billing concerns, maintaining customer documentation and following structured workflows. Proficient in Google Workspace, Microsoft 365, Salesforce, Trello and Canva. Detail-oriented, organized and comfortable working independently in a remote environment. Based in the Philippines and flexible to adjust working hours to client time zones and business needs.",

    // ---- Work experience (newest first) ----
    experience: [
      {
        title:   "Customer Service Representative (Avast / AVG)",
        dates:   "June 2026 to Present",
        company: "Foundever, Puerto Princesa City, Palawan, Philippines",
        bullets: [
          "Support international customers through live chat, resolving installation, setup and software issues while managing multiple conversations at once.",
          "Handle account, subscription, billing and renewal concerns accurately and in line with company procedures.",
          "Help customers who are considering cancellation by understanding their concerns, explaining available plan options and recommending suitable solutions.",
          "Educate customers on their accounts and subscriptions so they understand their services and can resolve concerns on their own.",
          "Document every concern and resolution clearly and completely in case records to support follow-ups and smooth handoffs."
        ]
      },
      {
        title:   "Pharmacy Assistant",
        dates:   "November 2024 to October 2025",
        company: "CSB Pharmacy, Puerto Princesa City, Palawan, Philippines",
        bullets: [
          "Maintained accurate and confidential prescription and customer records while following established procedures.",
          "Processed payments, receipts, insurance documentation and prescription-related paperwork accurately.",
          "Prepared and labeled medications with close attention to detail and accuracy.",
          "Assisted customers with insurance and prescription documentation and answered questions about products and services."
        ]
      }
    ],

    // ---- Education ----
    education: [
      {
        title:  "Senior High School, Accountancy, Business and Management (ABM)",
        dates:  "September 2021 to June 2023",
        school: "STI College, Puerto Princesa City, Philippines"
      }
    ],

    // ---- Core skills (groups of small tags) ----
    skills: [
      { group: "Administrative support",  items: ["Data entry", "Records management", "Customer documentation", "Document organization", "Administrative assistance", "File organization"] },
      { group: "Client communication",    items: ["Live chat support", "Customer service", "Issue resolution", "Customer retention", "Billing and subscription support", "Case documentation", "Professional written communication"] },
      { group: "Task coordination",       items: ["Task tracking", "Prioritization", "Deadline management", "Workflow organization", "Follow-ups", "Trello"] },
      { group: "Professional strengths",  items: ["Time management", "Attention to detail", "Confidentiality", "Adaptability", "Problem solving", "Remote collaboration"], highlight: true }
    ],

    // ---- Technical proficiency ----
    tech: [
      { group: "Administrative and productivity", items: ["Google Docs", "Google Sheets", "Google Slides", "Google Drive", "Gmail", "Google Calendar", "Microsoft 365"] },
      { group: "CRM and task management",         items: ["Salesforce", "Trello"] },
      { group: "Communication",                   items: ["Zoom", "Google Meet", "Microsoft Teams", "Discord"] },
      { group: "Content and design",              items: ["Canva", "CapCut"] },
      { group: "AI tools",                        items: ["Claude", "ChatGPT", "Google Gemini", "Grammarly", "Canva AI"] }
    ],

    // ---- Remote work readiness ----
    remote: [
      { icon: "wifi",    text: "PLDT Fiber 300 Mbps plus DITO mobile data hotspot backup" },
      { icon: "monitor", text: "Desktop PC (AMD Ryzen 3 3200G)" },
      { icon: "zap",     text: "Nearby coworking space in case of power or internet interruption" },
      { icon: "clock",   text: "Flexible schedule. Available for US, UK and AU time zones and open to night shifts." }
    ],

    // ---- Languages ----
    languages: [
      "English: Fluent (professional working proficiency, spoken and written)",
      "Filipino: Native proficiency"
    ]
  },


  /* ===================================================================
     7. CONTACT PAGE
     (Your email, phone and location come from section 1.)
     =================================================================== */
  contact: {

    headline: "Let's work together.",
    subline:  "Tell me about the tasks you want off your plate. I will reply with how I can help.",

    emailNote: "The best way to reach me.",
    phoneNote: "Feel free to reach out anytime.",

    availabilityTitle: "US, UK and AU time zones",
    availabilityNote:  "Flexible schedule and open to night or graveyard shifts.",

    stepsTitle: "How we can start",
    steps: [
      { title: "Tell me what you need",        text: "Send a short note about your tasks, your tools and the hours you want covered." },
      { title: "We agree on a simple plan",    text: "I suggest a routine and the tools to use, and we confirm how you want updates." },
      { title: "Start with a small task",      text: "A short trial task lets you see how I work before we commit to more." }
    ]
  }

};
