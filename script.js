document.getElementById('year').textContent = new Date().getFullYear();

// Navigation menu toggle
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.main-nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Bureau Member Profile Data
const memberProfiles = {
  tsitohaina: {
    initials: "TR",
    photo: "images/photo1.jpg",
    name: "Tsitohaina RAZAFINDRAJOA",
    title: "Président & Co-fondateur de l'ONG AINGA",
    speciality: "Expert en Innovation Numérique, Transformation Digitale & Systèmes IoT",
    nationality: "Malgache 🇲🇬",
    location: "Antananarivo, Madagascar",
    doctoralSchool: "ED Doctorale en Réseaux, Intelligence Artificielle, Multimédia, Sécurité et Systèmes d'Information (RIMSS)",
    university: "Université d'Antananarivo (Doctorant D3 — 2022 à Présent)",
    researchSubject: "Recherche en Intelligence Artificielle appliquée et transformation numérique basée sur les données : Développement d'un modèle de Machine Learning pour prédire le rendement du riz pluvial et identifier les pratiques culturales optimales (données de 3 803 parcelles rizicoles du Lac Alaotra).",
    award: "🏆 Premier Prix – Catégorie Projet Pluridisciplinaire, XIIᵉ Édition des Doctoriales 2026 de l'Université d'Antananarivo (Projet SAPHIR).",
    contacts: {
      email: "rztsitohaina@gmail.com",
      whatsapp: "https://wa.me/261380493805",
      phone: "038-04-938-05",
      github: "https://github.com/tsitohainaraz",
      linkedin: "https://www.linkedin.com/in/tsitohaina-razafindrajoa-375b51203/",
      facebook: "https://www.facebook.com/rztsitohaina/"
    },
    education: [
      {
        degree: "Doctorat en Informatique, IA & Réseaux (D3 - En cours, 2022 – Présent)",
        institution: "ED RIMSS — Université d'Antananarivo",
        description: "Recherche appliquée sur les modèles de Machine Learning pour la prédiction agricole du riz pluvial (3 803 parcelles du Lac Alaotra)."
      },
      {
        degree: "Diplôme de Master en Ingénierie des Systèmes Avancés (ISA-Mécatronique) (2021)",
        institution: "ESPA — École Supérieure Polytechnique d'Antananarivo",
        description: "Développement et évaluation comparative de 7 algorithmes MPPT pour l'optimisation intelligente des systèmes photovoltaïques."
      },
      {
        degree: "Diplôme de Master en Automatisme, Électronique & Informatique Industrielle (AEII) (2017 – 2019)",
        institution: "Université de Vakinankaratra (Antsirabe)",
        description: "Conception d'une serre agricole intelligente intégrant automatisation et IoT pour la culture de la spiruline (ONG Mirana Tsiky)."
      },
      {
        degree: "Diplôme de Licence en AEII (2015 – 2017)",
        institution: "Université de Vakinankaratra (Antsirabe)",
        description: "Système industriel de tri automatique de pièces par couleur basé sur un Automate Programmable Industriel (API)."
      },
      {
        degree: "Diplôme de BAC en Électrotechnique (2011 – 2014)",
        institution: "LTP Antsirabe",
        description: "Formation technique spécialisée en électrotechnique, machines électriques et automatismes."
      }
    ],
    experience: [
      {
        role: "Consultant Technique",
        company: "WIETEC Manakara (Projet PAAEP - Accès Eau Potable Madagascar)",
        period: "Avr. 2026 – Mai 2026",
        description: "Études de dimensionnement de groupes électropompes, schémas électriques et ingénierie de site."
      },
      {
        role: "Consultant en Solutions Numériques & AI",
        company: "Entreprise Chanfui & Fils Akadimbahoaka",
        period: "Fév. 2026 – Mars 2026",
        description: "Développement de l'application 'Chanfui.AI' pour l'archivage automatisé et le suivi des indicateurs KPI."
      },
      {
        role: "Responsable Technique – Énergie Solaire & Thermique",
        company: "Madagascar Lano Groupe (Ivato)",
        period: "Mars 2025 – Janv. 2026",
        description: "Études technico-économiques, dimensionnement solaire sous PVsyst & HOMER Pro, modélisation 3D AutoCAD/SketchUp."
      },
      {
        role: "Responsable R&D / Solutions IoT",
        company: "Jirogasy Sarlu (Androhibe)",
        period: "Juin 2022 – Mai 2024",
        description: "Direction d'équipe R&D, conception électronique CAO, programmation embarquée C/C++ et Python, enregistreurs IoT."
      }
    ],
    skills: ["Intelligence Artificielle & Machine Learning", "IoT & Systèmes Embarqués (C/C++, Python)", "Ingénierie Mécatronique & Automatisme", "Solaire Photovoltaïque & PVsyst", "Gouvernance & Management de Projets", "Développement Web & Data Analysis"]
  },

  julien: {
    initials: "JU",
    name: "Julien",
    title: "Vice-Président & Co-fondateur de l'ONG AINGA",
    speciality: "Chercheur en Développement Rural, Agronomie & Gouvernance Communautaire",
    nationality: "Malgache 🇲🇬",
    location: "Antananarivo, Madagascar",
    doctoralSchool: "École Doctorale Sciences Humaines et Sociales / Agronomie",
    university: "Université d'Antananarivo (Doctorant)",
    researchSubject: "Gouvernance locale des ressources, résilience des systèmes agropastoraux et valorisation des initiatives communautaires à Madagascar.",
    award: "🏆 Co-lauréat du Prix du Meilleur Projet aux XIIᵉ Édition des Doctoriales 2026 (Projet SAPHIR).",
    contacts: {
      email: "rztsitohaina@gmail.com",
      facebook: "https://www.facebook.com/rztsitohaina/"
    },
    education: [
      {
        degree: "Doctorat en Agronomie & Développement Rural (En cours)",
        institution: "Université d'Antananarivo",
        description: "Recherches appliquées sur la gouvernance foncière et la résilience des petits producteurs."
      },
      {
        degree: "Master en Développement Rural & Agro-économie",
        institution: "Université d'Antananarivo",
        description: "Spécialisation dans le suivi et l'évaluation socio-économique des projets ruraux."
      }
    ],
    experience: [
      {
        role: "Vice-Président",
        company: "ONG AINGA",
        period: "2026 – Présent",
        description: "Co-direction des axes d'intervention terrain et relations avec les communautés locales."
      },
      {
        role: "Doctorant Chercheur",
        company: "Université d'Antananarivo",
        period: "2023 – Présent",
        description: "Enquêtes de terrain et diagnostics participatifs dans les régions agricoles."
      }
    ],
    skills: ["Sociologie Rurale", "Gouvernance Partagée", "Diagnostic Territorial", "Gestion de Projets Agro-pastoraux"]
  },

  aurelien: {
    initials: "AU",
    name: "Aurelien",
    title: "Secrétaire Général & Co-fondateur de l'ONG AINGA",
    speciality: "Spécialiste en Numérique Éducatif, Ingénierie de Formation & Communication",
    nationality: "Malgache 🇲🇬",
    location: "Antananarivo, Madagascar",
    doctoralSchool: "École Doctorale Innovation Éducative & Sciences du Langage",
    university: "Université d'Antananarivo (Doctorant)",
    researchSubject: "Inclusion numérique dans le milieu éducatif malgache et méthodes innovantes de transfert de connaissances dans les zones isolées.",
    contacts: {
      email: "rztsitohaina@gmail.com",
      facebook: "https://www.facebook.com/rztsitohaina/"
    },
    education: [
      {
        degree: "Doctorat en Innovation Éducative (En cours)",
        institution: "Université d'Antananarivo",
        description: "Modèles d'apprentissage hybrides et outils numériques accessibles."
      },
      {
        degree: "Master en Ingénierie Pédagogique",
        institution: "Université d'Antananarivo",
        description: "Conception de programmes de formation professionnelle pour les jeunes."
      }
    ],
    experience: [
      {
        role: "Secrétaire Général & Co-fondateur",
        company: "ONG AINGA",
        period: "2026 – Présent",
        description: "Coordination institutionnelle, rédaction des conventions et suivi administratif."
      }
    ],
    skills: ["Ingénierie Pédagogique", "Numérique Éducatif", "Communication Institutionnelle", "Gestion de Projets"]
  },

  nathalie: {
    initials: "NA",
    name: "Nathalie",
    title: "Trésorière & Co-fondatrice de l'ONG AINGA",
    speciality: "Spécialiste en Économie du Développement, Finance Solidaire & Micro-entrepreneuriat",
    nationality: "Malgache 🇲🇬",
    location: "Antananarivo, Madagascar",
    doctoralSchool: "École Doctorale Économie, Gestion & Modélisation Mathématique",
    university: "Université d'Antananarivo (Doctorante)",
    researchSubject: "Financement autonome des Activités Génératrices de Revenus (AGR) pour l'autonomisation économique des femmes et des jeunes.",
    contacts: {
      email: "rztsitohaina@gmail.com",
      facebook: "https://www.facebook.com/rztsitohaina/"
    },
    education: [
      {
        degree: "Doctorat en Économie du Développement (En cours)",
        institution: "Université d'Antananarivo",
        description: "Analyse des circuits de microfinance et résilience financière des ménages ruraux."
      },
      {
        degree: "Master en Gestion Financière & Économie",
        institution: "Université d'Antananarivo",
        description: "Modélisation budgétaire et comptabilité analytique des organisations."
      }
    ],
    experience: [
      {
        role: "Trésorière & Co-fondatrice",
        company: "ONG AINGA",
        period: "2026 – Présent",
        description: "Supervision des flux financiers, établissement des budgets prévisionnels et contrôle interne."
      }
    ],
    skills: ["Finance Solidaire", "Gestion Budgétaire", "Audit Financier", "Économie Sociale"]
  },

  sartana: {
    initials: "SA",
    name: "Sartana",
    title: "Secrétaire de séance & Co-fondateur de l'ONG AINGA",
    speciality: "Chercheur en Écologie, Évaluation Environnementale & Rédaction Institutionnelle",
    nationality: "Malgache 🇲🇬",
    location: "Antananarivo, Madagascar",
    doctoralSchool: "École Doctorale Sciences de la Terre & Environnement",
    university: "Université d'Antananarivo (Doctorant)",
    researchSubject: "Gestion intégrée des ressources naturelles et protection des bassins versants à Madagascar.",
    contacts: {
      email: "rztsitohaina@gmail.com",
      facebook: "https://www.facebook.com/rztsitohaina/"
    },
    education: [
      {
        degree: "Doctorat en Écologie & Environnement (En cours)",
        institution: "Université d'Antananarivo",
        description: "Évaluation environnementale et valorisation de l'économie circulaire."
      }
    ],
    experience: [
      {
        role: "Secrétaire de séance & Co-fondateur",
        company: "ONG AINGA",
        period: "2026 – Présent",
        description: "Tenue des procès-verbaux, capitalisation des travaux et archives officielles."
      }
    ],
    skills: ["Écologie Appliquée", "Rédaction Institutionnelle", "Économie Circulaire", "Gestion de l'Environnement"]
  },

  bienvenu: {
    initials: "BI",
    name: "Bienvenu",
    title: "Conseiller Scientifique, Secrétaire Financier & Co-fondateur de l'ONG AINGA",
    speciality: "Spécialiste en Économie, Environnement & Conseil Scientifique",
    nationality: "Malgache 🇲🇬",
    location: "Antananarivo, Madagascar",
    doctoralSchool: "École Doctorale Économie, Gestion & Environnement",
    university: "Université d'Antananarivo (Doctorant)",
    researchSubject: "Évaluation scientifique, modélisation des financements durables et gouvernance environnementale.",
    contacts: {
      email: "rztsitohaina@gmail.com",
      facebook: "https://www.facebook.com/rztsitohaina/"
    },
    education: [
      {
        degree: "Doctorat en Économie & Environnement (En cours)",
        institution: "Université d'Antananarivo",
        description: "Recherches sur les financements durables et la modélisation de la résilience communautaire."
      }
    ],
    experience: [
      {
        role: "Conseiller Scientifique, Secrétaire Financier & Co-fondateur",
        company: "ONG AINGA",
        period: "2026 – Présent",
        description: "Orientation scientifique des programmes, audit financier et reporting aux partenaires."
      }
    ],
    skills: ["Conseil Scientifique", "Contrôle de Gestion", "Audit Financier", "Gestion de l'Environnement"]
  },

  flavinen: {
    initials: "FL",
    name: "Flavien",
    title: "Conseiller Technique & Co-fondateur de l'ONG AINGA",
    speciality: "Expert & Chercheur Senior en Agronomie, Systèmes Techniques & Biologie Végétale",
    nationality: "Malgache 🇲🇬",
    location: "Antananarivo, Madagascar",
    doctoralSchool: "École Doctorale Agronomie & Sciences de la Terre",
    university: "Université d'Antananarivo (Doctorant Chercheur)",
    researchSubject: "Ingénierie agronomique, adaptation technique au changement climatique et résilience des systèmes agricoles.",
    contacts: {
      email: "rztsitohaina@gmail.com",
      facebook: "https://www.facebook.com/rztsitohaina/"
    },
    education: [
      {
        degree: "Doctorat en Agronomie & Biologie Végétale (En cours)",
        institution: "Université d'Antananarivo",
        description: "Recherches appliquées en ingénierie agronomique et optimisation des cultures."
      }
    ],
    experience: [
      {
        role: "Conseiller Technique & Co-fondateur",
        company: "ONG AINGA",
        period: "2026 – Présent",
        description: "Appui technique sur le terrain, supervision des démarches d'expérimentation et d'innovation."
      }
    ],
    skills: ["Conseil Technique", "Agronomie Avancée", "Ingénierie de Terrain", "Biologie Végétale"]
  },

  raissa: {
    initials: "RA",
    name: "Raissa",
    title: "Conseillère Scientifique & Co-fondatrice de l'ONG AINGA",
    speciality: "Experte & Chercheure en Biotechnologies Végétales & Environnement",
    nationality: "Malgache 🇲🇬",
    location: "Antananarivo, Madagascar",
    doctoralSchool: "École Doctorale Biologie Végétale & Environnement",
    university: "Université d'Antananarivo (Doctorante Chercheure)",
    researchSubject: "Biotechnologies végétales, gestion des écosystèmes et valorisation de la flore malgache.",
    contacts: {
      email: "rztsitohaina@gmail.com",
      facebook: "https://www.facebook.com/rztsitohaina/"
    },
    education: [
      {
        degree: "Doctorat en Biotechnologies Végétales (En cours)",
        institution: "Université d'Antananarivo",
        description: "Valorisation des espèces végétales et conservation de l'environnement."
      }
    ],
    experience: [
      {
        role: "Conseillère Scientifique & Co-fondatrice",
        company: "ONG AINGA",
        period: "2026 – Présent",
        description: "Conseil stratégique en biotechnologies, évaluation de l'impact environnemental des actions de l'ONG."
      }
    ],
    skills: ["Conseil Scientifique", "Biotechnologies Végétales", "Éco-innovation", "Analyse Environnementale"]
  },

  jadidia: {
    initials: "JA",
    name: "Jadidia",
    title: "Conseillère Scientifique & Co-fondatrice de l'ONG AINGA",
    speciality: "Experte & Chercheure en Sciences de l'Éducation & Pédagogie",
    nationality: "Malgache 🇲🇬",
    location: "Antananarivo, Madagascar",
    doctoralSchool: "École Doctorale Éducation & Sciences Humaines",
    university: "Université d'Antananarivo (Doctorante Chercheure)",
    researchSubject: "Innovation pédagogique, ingénierie de la formation et développement des compétences éducatives.",
    contacts: {
      email: "rztsitohaina@gmail.com",
      facebook: "https://www.facebook.com/rztsitohaina/"
    },
    education: [
      {
        degree: "Doctorat en Sciences de l'Éducation (En cours)",
        institution: "Université d'Antananarivo",
        description: "Recherches appliquées en ingénierie pédagogique et méthodologies d'apprentissage."
      }
    ],
    experience: [
      {
        role: "Conseillère Scientifique & Co-fondatrice",
        company: "ONG AINGA",
        period: "2026 – Présent",
        description: "Orientation scientifique des volets éducatifs, ingénierie de la formation et évaluation des programmes."
      }
    ],
    skills: ["Sciences de l'Éducation", "Conseil Scientifique", "Ingénierie Pédagogique", "Recherche Éducative"]
  }
};

// Modal Elements & Handler Logic
const modal = document.getElementById('profile-modal');
const modalBackdrop = document.getElementById('modal-backdrop');
const modalClose = document.getElementById('modal-close');
const modalContent = document.getElementById('modal-content');

function renderProfileModal(memberKey) {
  const profile = memberProfiles[memberKey];
  if (!profile) return;

  let awardHTML = '';
  if (profile.award) {
    awardHTML = `
      <div class="modal-award-box">
        <div class="award-trophy-icon">🏆</div>
        <div class="award-box-text">
          <h4>Distinction &amp; Prix Scientifique</h4>
          <p>${profile.award}</p>
        </div>
      </div>
    `;
  }

  let educationHTML = '';
  if (profile.education && profile.education.length > 0) {
    educationHTML = `
      <div class="modal-section">
        <h3 class="modal-section-title">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 6 2 6 2s6 0 6-2v-5"/></svg>
          Parcours Académique &amp; Diplômes
        </h3>
        <div class="timeline-list">
          ${profile.education.map(edu => `
            <div class="timeline-item">
              <div class="timeline-header">
                <span class="timeline-title">${edu.degree}</span>
                <span class="timeline-inst">${edu.institution}</span>
              </div>
              <p class="timeline-desc">${edu.description}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  let experienceHTML = '';
  if (profile.experience && profile.experience.length > 0) {
    experienceHTML = `
      <div class="modal-section">
        <h3 class="modal-section-title">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
          Expérience Professionnelle &amp; Projets
        </h3>
        <div class="timeline-list">
          ${profile.experience.map(exp => `
            <div class="timeline-item">
              <div class="timeline-header">
                <span class="timeline-title">${exp.role} — <strong>${exp.company}</strong></span>
                <span class="timeline-inst">${exp.period}</span>
              </div>
              <p class="timeline-desc">${exp.description}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  let skillsHTML = '';
  if (profile.skills && profile.skills.length > 0) {
    skillsHTML = `
      <div class="modal-section">
        <h3 class="modal-section-title">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          Compétences &amp; Domaines d'Expertise
        </h3>
        <div class="skills-tags-wrap">
          ${profile.skills.map(sk => `<span class="skill-tag-chip">${sk}</span>`).join('')}
        </div>
      </div>
    `;
  }

  let contactsHTML = '';
  if (profile.contacts) {
    contactsHTML = `
      <div class="modal-section">
        <h3 class="modal-section-title">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          Contact &amp; Réseaux
        </h3>
        <div class="modal-contact-bar">
          ${profile.contacts.email ? `<a href="mailto:${profile.contacts.email}" class="modal-contact-link">📧 ${profile.contacts.email}</a>` : ''}
          ${profile.contacts.whatsapp ? `<a href="${profile.contacts.whatsapp}" target="_blank" rel="noopener noreferrer" class="modal-contact-link">💬 WhatsApp (+261 38 04 938 05)</a>` : ''}
          ${profile.contacts.phone ? `<a href="tel:${profile.contacts.phone}" class="modal-contact-link">📞 ${profile.contacts.phone}</a>` : ''}
          ${profile.contacts.linkedin ? `<a href="${profile.contacts.linkedin}" target="_blank" rel="noopener noreferrer" class="modal-contact-link">💼 LinkedIn</a>` : ''}
          ${profile.contacts.github ? `<a href="${profile.contacts.github}" target="_blank" rel="noopener noreferrer" class="modal-contact-link">💻 GitHub</a>` : ''}
          ${profile.contacts.facebook ? `<a href="${profile.contacts.facebook}" target="_blank" rel="noopener noreferrer" class="modal-contact-link">🌐 Facebook</a>` : ''}
        </div>
      </div>
    `;
  }

  const avatarHTML = profile.photo 
    ? `<img src="${profile.photo}" alt="${profile.name}" class="member-avatar-box member-avatar-img" />`
    : `<div class="member-avatar-box">${profile.initials || 'A'}</div>`;

  modalContent.innerHTML = `
    <div class="modal-header-block">
      ${avatarHTML}
      <div class="member-title-info">
        <span class="member-role-tag">${profile.title}</span>
        <h2 id="modal-member-name">${profile.name}</h2>
        <p class="member-speciality">${profile.speciality}</p>
        <div class="member-meta-pills">
          <span class="meta-pill">🇲🇬 ${profile.nationality}</span>
          <span class="meta-pill">📍 ${profile.location}</span>
          <span class="meta-pill">🎓 ${profile.university}</span>
        </div>
      </div>
    </div>

    ${awardHTML}

    <div class="modal-section">
      <h3 class="modal-section-title">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
        École Doctorale &amp; Sujet de Recherche
      </h3>
      <p><strong>École Doctorale :</strong> ${profile.doctoralSchool}</p>
      <p style="margin-top: 6px; color: var(--text-main); font-size: 0.96rem;">${profile.researchSubject}</p>
    </div>

    ${educationHTML}
    ${experienceHTML}
    ${skillsHTML}
    ${contactsHTML}
  `;

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

// Bind click events on Bureau member cards
document.querySelectorAll('.org-card-modern').forEach(card => {
  card.addEventListener('click', () => {
    const memberKey = card.getAttribute('data-member');
    if (memberKey) {
      renderProfileModal(memberKey);
    }
  });
});

if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);
if (modalClose) modalClose.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('open')) {
    closeModal();
  }
});
