// Gestione lingua globale per tutte le pagine
class LanguageManager {
    constructor() {
        this.currentLang = localStorage.getItem('preferredLanguage') || 'it';
        this.translations = {
            it: {
                // Navbar comune
                'nav-about': 'Chi Sono',
                'nav-education': 'Formazione',
                'nav-skills': 'Competenze',
                'nav-projects': 'Progetti',
                'nav-contact': 'Contatti',
                
                // Hero comune
                'hero-title': 'Marco Ferraresso',
                'hero-subtitle': 'Studente di Informatica | Sviluppatore Software',
                'hero-description': 'Appassionato di tecnologie emergenti e sviluppo software. Sempre alla ricerca di nuove sfide per migliorare le mie competenze.',
                'hero-home': 'Home Page',
                'hero-contact': 'Contattami',
                'hero-skills': 'Le Mie Competenze',
                'hero-projects': 'I Miei Progetti',
                'hero-download': 'Scarica CV',
                
                // Footer
                'footer-copyright': '© 2025 Marco Ferraresso. Tutti i diritti riservati.',
                
                // index.html
                'about-title': 'Chi Sono',
                'about-text1': "Sono uno studente del quarto anno presso l'ITI F.Severi, un istituto tecnico superiore. Il mio obiettivo principale è essere il migliore della mia classe, e so che non lo sono ancora e questo mi spinge a impegnarmi per apprendere nuove strategie, idee, informazioni, ecc.",
                'about-text2': "Sono un apprendista veloce: una volta compresa l'idea di base, la riformulo aggiungendovi la mia competenza personale. Aiuto attivamente i miei compagni che hanno bisogno di supporto guidandoli attraverso materiale complesso.",
                'birth-date': 'Data di nascita',
                'birth-place': 'Luogo di nascita',
                'nationality': 'Nazionalità',
                'license': 'Patente',
                'expiry': 'Scadenza',
                'interests-title': 'Interessi & Hobby',
                'interest1': 'Motorsport (moto, auto, camion)',
                'interest2': 'Pallanuoto',
                'interest3': 'Tecnologie emergenti',
                'interest4': 'Motori a combustione interna',
                'education-title': 'Formazione',
                'education-degree': 'Diploma di Scuola Superiore - ITI F. Severi',
                'education-dates': '12/09/2022 – Attuale | Padova, Italia',
                'education-text': "Alla fine del quarto anno, gli studenti dell'indirizzo ITI 'Severi' possono:",
                'education-point1': 'Identificare e scegliere gli strumenti IT appropriati rispetto alle loro caratteristiche funzionali',
                'education-point2': 'Utilizzare capacità di pensiero analitico e critico per risolvere problemi, elaborando proposte di soluzioni appropriate, sia in termini di algoritmi informatici che della loro implementazione',
                'education-field': 'Indirizzo di studio',
                'education-eqf': 'Livello EQF',
                'education-field-value': 'Sviluppo e analisi di software e applicazioni, Progettazione e amministrazione di database e reti, Programmi e qualifiche interdisciplinari che coinvolgono le tecnologie dell\'informazione e della comunicazione (TIC)',
                'education-eqf-value': 'Livello 4',
                
                // mySkills.html
                'skills-title': 'Competenze',
                'digital-skills': 'Competenze Digitali',
                'digital-skill1': 'Uso avanzato di Windows e Linux (Kali, Debian)',
                'digital-skill2': 'Familiarità con GSuite (Docs, Sheets, ecc.), Microsoft Office (Word, Excel, ecc.), LibreOffice (Writer, Calc) e Work (Pages, Numbers)',
                'it-skills': 'Competenze Informatiche',
                'it-skills-text': 'Progettazione e implementazione di:',
                'it-skill1': 'Algoritmi e applicazioni in linguaggi di programmazione procedurale (C, C++, Python)',
                'it-skill2': 'Algoritmi e applicazioni in linguaggi di programmazione orientata agli oggetti (Java, Java Swing)',
                'it-skill3': 'Pagine web che seguono lo standard W3C (HTML, CSS, JavaScript, Bootstrap framework)',
                'it-skill4': 'Videogiochi in diversi motori di gioco (Unity, Godot)',
                'it-tools': 'Utente esperto di Visual Studio Code, Visual Studio Community, Geany, IntelliJ.',
                'interpersonal-skills': 'Competenze Interpersonali',
                'teamwork': 'Lavoro di Squadra',
                'teamwork1': 'Di solito si integra bene tra i membri del team',
                'teamwork2': 'In grado di lavorare sotto pressione',
                'teamwork3': 'Aiuta i membri del team che hanno bisogno di supporto guidandoli attraverso compiti complessi',
                'language-skills': 'Competenze Linguistiche',
                'italian': 'Italiano',
                'mother-tongue': 'Madrelingua',
                'english': 'Inglese',
                'english-level': 'Livello B2 - Utente indipendente',
                'listening': 'Ascolto',
                'use-of-english': 'Uso dell\'inglese',
                'spoken-interaction': 'Interazione orale',
                'reading': 'Lettura',
                'writing': 'Scrittura',
                'cambridge-report': 'Report Card Cambridge',
                
                // myProjects.html
                'projects-title': 'Progetti & Esperienze',
                'project1-title': 'Advanced Algorithms Summer School',
                'project1-date': '07/07/2025 – 12/07/2025',
                'project1-text1': 'Selezionato per partecipare alla Advanced Algorithms Summer School presso l\'Università di Venezia attraverso un processo di ammissione competitivo.',
                'project1-text2': 'Questo programma intensivo mi ha permesso di affinare le mie tecniche di programmazione e approfondire il mio approccio analitico alla risoluzione di problemi algoritmici.',
                'download-certificate': 'Scarica certificato',
                'project2-title': '"Informatica x Gioco = Regole + Fantasia" Game Contest',
                'project2-date': '19/11/2023 – 30/03/2024',
                'project2-text1': 'Partecipazione a una competizione di sviluppo di giochi organizzata dall\'Università di Camerino (Macerata - Italia), collaborando in un team di quattro studenti.',
                'project2-text2': 'Questa esperienza mi ha permesso di sviluppare competenze tecniche nella progettazione e implementazione di videogiochi, affinando allo stesso tempo le mie capacità di coordinamento e problem solving in un ambiente di lavoro collaborativo.',
                'project3-title': 'Daydream Padua - Hackclub Padua',
                'project3-date': '28/09/2025 – 28/09/2025',
                'project3-text1': 'Partecipazione a un hackathon (maratona ICT) organizzato dall\'HackClub di Padova.',
                'project3-text2': 'In questa esperienza di 9 ore ho migliorato la mia capacità di adattamento a nuovi ambienti (come programmare in un nuovo linguaggio di programmazione e motore di gioco) collaborando con nuovi membri del team, migliorando i punti di forza e di debolezza di ciascuno.',
                'project4-title': 'Progetto App Vremea',
                'project4-date': '05/12/2025 – 16/01/2026',
                'project4-text': 'In un gruppo di tre sviluppatori, ho creato un\'applicazione web meteorologica. Ho sviluppato, pulito e perfezionato l\'intero codice backend utilizzando javascript e gestendo chiamate API a Leaflet - Open street Map, Geocoding API, Forecast API - Open Meteo. Ho acquisito molta esperienza del mondo reale grazie a questo progetto, come la creazione di documentazione tecnica per il mio codice, il rispetto delle scadenze e la collaborazione con altri membri del team.',
                'git-repository': 'Repository Git',
                'website': 'Sito Web',
                
                // contactMe.html
                'contact-title': 'Contatti',
                'contact-name': 'Nome',
                'contact-email': 'Email',
                'contact-message': 'Messaggio',
                'contact-send': 'Invia Messaggio',
                'contact-address': 'Via Santa Giovanna d\'Arco, 3 35020 Padova, Italia',

                // Mailto
                'contact-subject': 'Oggetto',
                'collaboration-opportunity': 'Opportunità di collaborazione',
                'information-request': 'Richiesta informazioni',
                'project-proposal': 'Proposte di progetto',
                'other': 'Altro',
                'copy-email': 'Copia Email',
                'email-copied': 'Email copiata negli appunti!',
                'fill-all-fields': 'Per favore, compila tutti i campi.',
                'opening-email': 'Sto aprendo il tuo client email...',

                // Notifiche 
                'quick-actions': 'Azioni Rapide',
                'contact-form-title': 'Inviami un Messaggio',
                'sending': 'Invio in corso...',
                'success': 'Successo',
                'message-sent': 'Messaggio inviato con successo!',
                'send-error': 'Errore nell\'invio del messaggio.',
                'invalid-email': 'Inserisci un indirizzo email valido.',
                'network-error': 'Errore di connessione. Verifica la tua rete.',
                'form-success': 'Messaggio inviato con successo!',
                'form-error': 'Errore nell\'invio del messaggio.',
            },
            en: {
                // Navbar comune
                'nav-about': 'About Me',
                'nav-education': 'Education',
                'nav-skills': 'Skills',
                'nav-projects': 'Projects',
                'nav-contact': 'Contact',
                
                // Hero comune
                'hero-title': 'Marco Ferraresso',
                'hero-subtitle': 'Computer Science Student | Software Developer',
                'hero-description': 'Passionate about emerging technologies and software development. Always looking for new challenges to improve my skills.',
                'hero-home': 'Home Page',
                'hero-contact': 'Contact Me',
                'hero-skills': 'My Skills',
                'hero-projects': 'My Projects',
                'hero-download': 'Download CV',
                
                // Footer
                'footer-copyright': '© 2025 Marco Ferraresso. All rights reserved.',
                
                // index.html
                'about-title': 'About Me',
                'about-text1': "I'm a fourth year student at the ITI F.Severi technical high school. My main goal is to be the best in my class, and I know I'm not there yet, which pushes me to strive to learn new strategies, ideas, information, etc.",
                'about-text2': "I'm a fast learner: once I understand the basic concept, I reframe it by adding my personal expertise. I actively help my classmates who need support by guiding them through complex material.",
                'birth-date': 'Date of birth',
                'birth-place': 'Place of birth',
                'nationality': 'Nationality',
                'license': 'Driving License',
                'expiry': 'Expiry',
                'interests-title': 'Interests & Hobbies',
                'interest1': 'Motorsports (motorcycles, cars, trucks)',
                'interest2': 'Water polo',
                'interest3': 'Emerging technologies',
                'interest4': 'Internal combustion engines',
                'education-title': 'Education',
                'education-degree': 'High School Diploma - ITI F. Severi Technical High School',
                'education-dates': '12/09/2022 – Current | Padua, Italy',
                'education-text': "At the end of the fourth year, ITI 'Severi' students in the IT course of study can:",
                'education-point1': 'Identify and choose the appropriate IT tools with respect to their functional characteristics',
                'education-point2': 'Use analytical and critical thinking skills for problem solving tasks, elaborating appropriate solution proposals, both in terms of computer algorithms and their implementation',
                'education-field': 'Field of study',
                'education-eqf': 'EQF Level',
                'education-field-value': 'Software and applications development and analysis, Database and network design and administration, Inter-disciplinary programmes and qualifications involving Information and Communication Technologies (ICTs)',
                'education-eqf-value': 'Level 4',
                
                // mySkills.html
                'skills-title': 'Skills',
                'digital-skills': 'Digital Skills',
                'digital-skill1': 'Extensive use of Windows and Linux (Kali, Debian)',
                'digital-skill2': 'Familiar with GSuite (Docs, Sheets, etc.), Microsoft Office (Word, Excel, etc.), LibreOffice (Writer, Calc) and Work (Pages, Numbers)',
                'it-skills': 'IT Skills',
                'it-skills-text': 'Design and implementation of:',
                'it-skill1': 'Algorithms and applications in procedural-oriented programming languages (C, C++, Python)',
                'it-skill2': 'Algorithms and applications in object-oriented programming languages (Java, Java Swing)',
                'it-skill3': 'Web pages which follow W3C standard (HTML, CSS, JavaScript, Bootstrap framework)',
                'it-skill4': 'Videogames in different game engines (Unity, Godot)',
                'it-tools': 'Experienced user of Visual Studio Code, Visual Studio Community, Geany, IntelliJ.',
                'interpersonal-skills': 'Interpersonal Skills',
                'teamwork': 'Teamwork',
                'teamwork1': 'Usually integrates well among team members',
                'teamwork2': 'Able to work under pressure',
                'teamwork3': 'Helps team members who need support by mentoring them while working on challenging tasks',
                'language-skills': 'Language Skills',
                'italian': 'Italian',
                'mother-tongue': 'Mother tongue',
                'english': 'English',
                'english-level': 'Level B2 - Independent user',
                'listening': 'Listening',
                'use-of-english': 'Use of English',
                'spoken-interaction': 'Spoken interaction',
                'reading': 'Reading',
                'writing': 'Writing',
                'cambridge-report': 'Cambridge Report Card',
                
                // myProjects.html
                'projects-title': 'Projects & Experiences',
                'project1-title': 'Advanced Algorithms Summer School',
                'project1-date': '07/07/2025 – 12/07/2025',
                'project1-text1': 'I was selected to attend the Advanced Algorithms Summer School at the University of Venice following a competitive admission process.',
                'project1-text2': 'This intensive program provided me with the opportunity to substantially refine my programming techniques and deepen my analytical approach to algorithmic problem-solving.',
                'download-certificate': 'Download certificate',
                'project2-title': '"Informatica x Gioco = Regole + Fantasia" Game Contest',
                'project2-date': '19/11/2023 – 30/03/2024',
                'project2-text1': 'I participated in a game development competition organized by the University of Camerino (Macerata - Italy), collaborating within a team of four students.',
                'project2-text2': 'This experience enabled me to develop technical competencies in video game design and implementation, while simultaneously refining my coordination and problem-solving abilities in a collaborative work environment.',
                'project3-title': 'Daydream Padua - Hackclub Padua',
                'project3-date': '28/09/2025 – 28/09/2025',
                'project3-text1': 'I participated in a hackathon (ICT marathon) organized by the HackClub of Padua.',
                'project3-text2': 'This 9-hour experience allowed me to improve my adaptability to new environments (as programming in a new programming language and game engine) while collaborating with new team members, enhancing each other\'s strengths and weaknesses.',
                'project4-title': 'Vremea App Project',
                'project4-date': '05/12/2025 – 16/01/2026',
                'project4-text': 'In a group of three developers, I created a weather web application. I developed, cleaned and refined the entire backend code using javascript and managing API calls to Leaflet - Open street Map, Geocoding API, Forecast API - Open Meteo. I gained a lot of real-world experience thanks to this project, such as creating technical documentation for my code, meeting deadlines and collaborating with other team members.',
                'git-repository': 'Git repository',
                'website': 'Website',
                
                // contactMe.html
                'contact-title': 'Contact',
                'contact-name': 'Name',
                'contact-email': 'Email',
                'contact-message': 'Message',
                'contact-send': 'Send Message',
                'contact-address': 'Via Santa Giovanna d\'Arco, 3 35020 Padua, Italy',

                // Mailto
                'contact-subject': 'Subject',
                'collaboration-opportunity': 'Collaboration opportunity',
                'information-request': 'Information request',
                'project-proposal': 'Project proposals',
                'other': 'Other',
                'copy-email': 'Copy Email',
                'email-copied': 'Email copied to clipboard!',
                'fill-all-fields': 'Please fill in all fields.',
                'opening-email': 'Opening your email client...',

                // Notifications
                'quick-actions': 'Quick Actions',
                'contact-form-title': 'Send Me a Message',
                'sending': 'Sending...',
                'success': 'Success',
                'message-sent': 'Message sent successfully!',
                'send-error': 'Error sending message.',
                'invalid-email': 'Please enter a valid email address.',
                'network-error': 'Network error. Please check your connection.',
                'form-success': 'Message sent successfully!',
                'form-error': 'Error sending message.',
            }
        };
    }

    init() {
        // Imposta la lingua iniziale
        this.setLanguage(this.currentLang);
        
        // Aggiungi event listeners ai bottoni toggle
        document.querySelectorAll('.language-toggle').forEach(btn => {
            btn.addEventListener('click', () => {
                const newLang = this.currentLang === 'it' ? 'en' : 'it';
                this.setLanguage(newLang);
            });
        });
    }

    setLanguage(lang) {
        this.currentLang = lang;
        document.documentElement.lang = lang;
        localStorage.setItem('preferredLanguage', lang);
        
        // Aggiorna tutti gli elementi con data-i18n
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (this.translations[lang] && this.translations[lang][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = this.translations[lang][key];
                } else if (element.hasAttribute('value') && element.type === 'submit') {
                    element.value = this.translations[lang][key];
                } else {
                    element.textContent = this.translations[lang][key];
                }
            }
        });
        
        // Aggiorna i bottoni lingua
        document.querySelectorAll('.language-toggle').forEach(btn => {
            btn.innerHTML = lang === 'it' 
                ? '<i class="fas fa-globe mr-1"></i> IT' 
                : '<i class="fas fa-globe mr-1"></i> EN';
        });
        
        // Aggiorna titoli delle pagine
        this.updatePageTitle(lang);
    }

    updatePageTitle(lang) {
        const page = window.location.pathname.split('/').pop();
        let title = '';
        
        switch(page) {
            case 'index.html':
            case '':
            case 'index.html':
                title = lang === 'it' ? 'Marco Ferraresso - CV Digitale' : 'Marco Ferraresso - Digital CV';
                break;
            case 'mySkills.html':
                title = lang === 'it' ? 'Marco Ferraresso - Competenze' : 'Marco Ferraresso - Skills';
                break;
            case 'myProjects.html':
                title = lang === 'it' ? 'Marco Ferraresso - Progetti' : 'Marco Ferraresso - Projects';
                break;
            case 'contactMe.html':
                title = lang === 'it' ? 'Marco Ferraresso - Contatti' : 'Marco Ferraresso - Contact';
                break;
            default:
                title = 'Marco Ferraresso';
        }
        
        document.title = title;
    }
}

// Inizializza quando il DOM è pronto
document.addEventListener('DOMContentLoaded', () => {
    window.languageManager = new LanguageManager();
    window.languageManager.init();
});