// --- Data ---
const hamiltonChampionshipPositions = [
  { year: 2007, position: 2 },
  { year: 2008, position: 1 },
  { year: 2009, position: 5 },
  { year: 2010, position: 4 },
  { year: 2011, position: 5 },
  { year: 2012, position: 4 },
  { year: 2013, position: 4 },
  { year: 2014, position: 1 },
  { year: 2015, position: 1 },
  { year: 2016, position: 2 },
  { year: 2017, position: 1 },
  { year: 2018, position: 1 },
  { year: 2019, position: 1 },
  { year: 2020, position: 1 },
  { year: 2021, position: 2 },
  { year: 2022, position: 6 },
  { year: 2023, position: 3 },
];

const hamiltonCountryStats = [
  { country: 'UK', wins: 9, podiums: 13 },
  { country: 'Hungary', wins: 8, podiums: 10 },
  { country: 'Canada', wins: 7, podiums: 9 },
  { country: 'China', wins: 6, podiums: 9 },
  { country: 'Spain', wins: 6, podiums: 9 },
  { country: 'Italy', wins: 5, podiums: 8 },
  { country: 'Belgium', wins: 6, podiums: 7 },
  { country: 'UAE', wins: 5, podiums: 9 },
  { country: 'Bahrain', wins: 5, podiums: 8 },
  { country: 'Japan', wins: 5, podiums: 7 },
  { country: 'Singapore', wins: 4, podiums: 7 },
  { country: 'USA', wins: 6, podiums: 10 },
  { country: 'Russia', wins: 5, podiums: 6 },
  { country: 'Brazil', wins: 3, podiums: 6 },
  { country: 'Australia', wins: 2, podiums: 8 },
  { country: 'Austria', wins: 1, podiums: 4 },
  { country: 'Saudi Arabia', wins: 1, podiums: 2 },
  { country: 'Other', wins: 10, podiums: 15 }
];

// --- Translations ---
const translations = {
  en: {
    dashboardTitle: "Lewis Hamilton F1 Dashboard",
    navAbout: "About",
    navCharts: "Charts",
    aboutTitle: "About Lewis Hamilton",
    driverDescription: "Sir Lewis Hamilton is a British racing driver and seven-time Formula One World Champion. He is widely regarded as one of the greatest drivers in the history of the sport. Hamilton made his F1 debut in 2007 with McLaren and has since achieved unprecedented success, particularly during his dominant years with Mercedes from 2014 to 2021. Known for his exceptional speed, consistency, and ability to perform under pressure, Hamilton has broken numerous records and continues to be a formidable competitor in Formula One.",
    statsTitle: "Key Statistics",
    stat1: "7 World Championships (2008, 2014-2015, 2017-2020)",
    stat2: "105 Grand Prix Victories (Most in F1 History)",
    stat3: "202 Podium Finishes (Most in F1 History)",
    stat4: "These graphs display his career statiscs throughout his F1 career such as his position in the championship, his wins and podiums by country, and his position in the championship by season. All this data was gathered from motorsportstats.com",
    lineChartTitle: "Championship Position per Season",
    barChartTitle: "Wins per Country",
    barChartTitlePodiums: "Podiums per Country",
    yearRange: "Year Range",
    wins: "Wins",
    podiums: "Podiums",
    circuit: "Circuit",
    position: "Position",
    season: "Season",
    language: "Language",
    english: "English",
    french: "French",
    tooltipPosition: "Position: ",
    tooltipYear: "Year: ",
    tooltipWins: "Wins: ",
    tooltipPodiums: "Podiums: ",
    country: "Country"
  },
  fr: {
    dashboardTitle: "Tableau de bord F1 de Lewis Hamilton",
    navAbout: "À propos",
    navCharts: "Graphiques",
    aboutTitle: "À propos de Lewis Hamilton",
    driverDescription: "Sir Lewis Hamilton est un pilote automobile britannique et septuple champion du monde de Formule 1. Il est largement considéré comme l'un des plus grands pilotes de l'histoire du sport. Hamilton a fait ses débuts en F1 en 2007 avec McLaren et a depuis connu un succès sans précédent, particulièrement pendant ses années dominantes avec Mercedes de 2014 à 2021. Connu pour sa vitesse exceptionnelle, sa constance et sa capacité à performer sous pression, Hamilton a battu de nombreux records et continue d'être un concurrent redoutable en Formule 1.",
    statsTitle: "Statistiques Clés",
    stat1: "7 Championnats du Monde (2008, 2014-2015, 2017-2020)",
    stat2: "105 Victoires en Grand Prix (Record en F1)",
    stat3: "202 Podiums (Record en F1)",
    stat4: "Ces graphiques affichent ses statistiques de carrière tout au long de sa carrière en F1, telles que sa position au championnat, ses victoires et podiums par pays, et sa position au championnat par saison. Toutes ces données proviennent de motorsportstats.com",
    lineChartTitle: "Position au championnat par saison",
    barChartTitle: "Victoires par pays",
    barChartTitlePodiums: "Podiums par pays",
    yearRange: "Plage d'années",
    wins: "Victoires",
    podiums: "Podiums",
    circuit: "Circuit",
    position: "Position",
    season: "Saison",
    language: "Langue",
    english: "Anglais",
    french: "Français",
    tooltipPosition: "Position : ",
    tooltipYear: "Année : ",
    tooltipWins: "Victoires : ",
    tooltipPodiums: "Podiums : ",
    country: "Pays"
  }
};

// --- Year Ranges ---
const yearRanges = [
  { label: '2007–2013', start: 2007, end: 2013 },
  { label: '2014–2023', start: 2014, end: 2023 },
  { label: '2007–2023', start: 2007, end: 2023 }
];

// --- React Components ---

function Header({ currentLang, onLanguageChange, currentSection }) {
  const t = (key) => translations[currentLang][key] || key;
  
  return (
    <header>
      <img src="ferrari.png" alt="Ferrari Logo" className="ferrari-logo" />
      <div className="header-content">
        <h1>{t('dashboardTitle')}</h1>
        <nav className="header-nav">
          <a href="#about" className={currentSection === 'about' ? 'active' : ''}>
            {t('navAbout')}
          </a>
          <a href="#charts" className={currentSection === 'charts' ? 'active' : ''}>
            {t('navCharts')}
          </a>
        </nav>
      </div>
      <div className="language-switcher">
        <span>{t('language')}:</span>
        <button 
          aria-pressed={currentLang === 'en'}
          onClick={() => onLanguageChange('en')}
        >
          {t('english')}
        </button>
        <button 
          aria-pressed={currentLang === 'fr'}
          onClick={() => onLanguageChange('fr')}
        >
          {t('french')}
        </button>
      </div>
    </header>
  );
}

function AboutSection({ currentLang }) {
  const t = (key) => translations[currentLang][key] || key;
  
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="driver-image">
          <img src="lewis-hamilton.jpg" alt="Lewis Hamilton" className="driver-photo" />
        </div>
        <div className="driver-info">
          <h2>{t('aboutTitle')}</h2>
          <p>{t('driverDescription')}</p>
          <div className="stats-highlight">
            <h3>{t('statsTitle')}</h3>
            <ul>
              <li>{t('stat1')}</li>
              <li>{t('stat2')}</li>
              <li>{t('stat3')}</li>
            </ul>
            <p>{t('stat4')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function LineChart({ currentLang, selectedRange }) {
  const t = (key) => translations[currentLang][key] || key;
  const chartRef = React.useRef(null);
  const chartInstance = React.useRef(null);
  
  React.useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      const filtered = hamiltonChampionshipPositions.filter(
        d => d.year >= selectedRange.start && d.year <= selectedRange.end
      );
      
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
      
      chartInstance.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: filtered.map(d => d.year),
          datasets: [{
            label: t('position'),
            data: filtered.map(d => d.position),
            borderColor: '#d40000',
            backgroundColor: 'rgba(255,242,0,0.2)',
            tension: 0.3,
            pointRadius: 5,
            pointHoverRadius: 8,
            fill: false
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: '#fff200',
              titleColor: '#d40000',
              bodyColor: '#222',
              borderColor: '#d40000',
              borderWidth: 1.5,
              callbacks: {
                title: (items) => t('tooltipYear') + items[0].label,
                label: (item) => t('tooltipPosition') + item.parsed.y
              }
            }
          },
          scales: {
            x: {
              title: { display: true, text: t('season'), color: '#d40000', font: { weight: 'bold', size: 16 } },
              ticks: { color: '#222' }
            },
            y: {
              title: { display: true, text: t('position'), color: '#d40000', font: { weight: 'bold', size: 16 } },
              reverse: true,
              min: 0,
              max: 10,
              ticks: { stepSize: 1, color: '#222' }
            }
          }
        }
      });
    }
    
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [currentLang, selectedRange]);
  
  return <canvas ref={chartRef} height="170" />;
}

function BarChart({ currentLang, showPodiums }) {
  const t = (key) => translations[currentLang][key] || key;
  const chartRef = React.useRef(null);
  const chartInstance = React.useRef(null);
  
  React.useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
      
      chartInstance.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: hamiltonCountryStats.map(d => d.country),
          datasets: [{
            label: showPodiums ? t('podiums') : t('wins'),
            data: hamiltonCountryStats.map(d => showPodiums ? d.podiums : d.wins),
            backgroundColor: showPodiums ? '#fff200' : '#d40000',
            borderColor: '#222',
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: '#fff200',
              titleColor: '#d40000',
              bodyColor: '#222',
              borderColor: '#d40000',
              borderWidth: 1.5,
              callbacks: {
                title: (items) => t('tooltipWins') + items[0].label,
                label: (item) => (showPodiums ? t('tooltipPodiums') : t('tooltipWins')) + item.parsed.y
              }
            }
          },
          scales: {
            x: {
              title: { display: true, text: t('country'), color: '#d40000', font: { weight: 'bold', size: 16 } },
              ticks: { color: '#222' }
            },
            y: {
              title: { display: true, text: showPodiums ? t('podiums') : t('wins'), color: '#d40000', font: { weight: 'bold', size: 16 } },
              ticks: { color: '#222' }
            }
          }
        }
      });
    }
    
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [currentLang, showPodiums]);
  
  return <canvas ref={chartRef} height="170" />;
}

function ChartsSection({ currentLang }) {
  const t = (key) => translations[currentLang][key] || key;
  const [selectedRange, setSelectedRange] = React.useState(yearRanges[2]);
  const [showPodiums, setShowPodiums] = React.useState(false);
  
  return (
    <main id="charts">
      <div className="dashboard-card">
        <div className="card-header">
          <h2>{t('lineChartTitle')}</h2>
          <label>
            <span>{t('yearRange')}</span>
            <select 
              value={selectedRange.label}
              onChange={(e) => {
                const range = yearRanges.find(r => r.label === e.target.value);
                setSelectedRange(range);
              }}
            >
              {yearRanges.map(range => (
                <option key={range.label} value={range.label}>
                  {range.label}
                </option>
              ))}
            </select>
          </label>
        </div>
        <LineChart currentLang={currentLang} selectedRange={selectedRange} />
      </div>
      
      <div className="dashboard-card">
        <div className="card-header">
          <h2>{showPodiums ? t('barChartTitlePodiums') : t('barChartTitle')}</h2>
          <label>
            <input 
              type="checkbox" 
              checked={!showPodiums}
              onChange={(e) => setShowPodiums(!e.target.checked)}
            />
            <span>{t('wins')}</span>
            <input 
              type="checkbox" 
              checked={showPodiums}
              onChange={(e) => setShowPodiums(e.target.checked)}
            />
            <span>{t('podiums')}</span>
          </label>
        </div>
        <BarChart currentLang={currentLang} showPodiums={showPodiums} />
      </div>
    </main>
  );
}

function Footer() {
  return (
    <footer>
      &copy; {new Date().getFullYear()} Lewis Hamilton F1 Dashboard
    </footer>
  );
}

function App() {
  const [currentLang, setCurrentLang] = React.useState('en');
  const [currentSection, setCurrentSection] = React.useState('about');
  
  // Handle navigation
  React.useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      const chartsSection = document.getElementById('charts');
      
      if (aboutSection && chartsSection) {
        const aboutTop = aboutSection.offsetTop;
        const chartsTop = chartsSection.offsetTop;
        const scrollY = window.scrollY;
        
        if (scrollY < chartsTop - 100) {
          setCurrentSection('about');
        } else {
          setCurrentSection('charts');
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div>
      <Header 
        currentLang={currentLang} 
        onLanguageChange={setCurrentLang}
        currentSection={currentSection}
      />
      <AboutSection currentLang={currentLang} />
      <ChartsSection currentLang={currentLang} />
      <Footer />
    </div>
  );
}

// Render the app
ReactDOM.createRoot(document.getElementById('root')).render(<App />);