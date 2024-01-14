
import { useState, useEffect } from "react"
import {  Link } from "react-router-dom";
const advisorsList = [
    {
      id: 1,
      name: "Abbas Danesh",
      company: "Scranton Financial Group",
      website: "http://www.scrantonfinancialgroup.com/",
      tag: "RIS-SIS",
      franchise: 0,
      img: "abbas-danesh.jpg",
      oxy: "0",
    },
    {
      id: 2,
      name: "Randy Dorcey",
      company: "Dorcey Financial, LLC",
      website: "https://dorceyfinancial.com/",
      tag: "RIS-SIS",
      franchise: 0,
      img: "randy-dorcey.jpg",
      oxy: "0",
    },
    {
      id: 3,
      name: "Al Flores",
      company: "Retirement X Design Inc",
      website: "https://retirementxdesign.com/",
      tag: "RIS-SIS",
      franchise: 0,
      img: "al-flores.jpg",
      oxy: "0",
    },
    {
      id: 5,
      name: "Matthew Johnson",
      company: "Johnson Wealth and Income Management",
      website: "https://www.johnsonwim.com/",
      tag: "RIS-SIS",
      franchise: 0,
      img: "matthew-johnson.jpg",
      oxy: "1",
    },
    {
      id: 6,
      name: "Amanda Johnston",
      company: "Johnson Wealth and Income Management",
      website: "https://www.johnsonwim.com/",
      tag: "RIS-SIS",
      franchise: 0,
      img: "amanda-johnston.jpg",
      oxy: "0",
    },
    {
      id: 7,
      name: "Eric Lardner",
      company: "Abundant Wealth Management",
      website: "https://abundantwealthmanagement.com/",
      tag: "RIS-SIS",
      franchise: 0,
      img: "eric-lardner.jpg",
      oxy: "0",
    },
    {
      id: 8,
      name: "James Locke Jr.",
      company: "Poole Locke Associates",
      website: "https://poolelocke.com/",
      tag: "RIS-SIS",
      franchise: 0,
      img: "james-locke.jpg",
      oxy: "1",
    },
    {
      id: 9,
      name: "David McAdams",
      company: "McAdams Group LLC",
      website: "https://www.mcadamsgroupllc.com/",
      tag: "RIS-SIS",
      franchise: 0,
      img: "david-mcadams.jpg",
      oxy: "1",
    },
    {
      id: 10,
      name: "Karolyn McDonald",
      company: "Arbor Financial Services of Florida, Inc.",
      website: "https://arbor-financial.com/",
      tag: "RIS-SIS",
      franchise: 0,
      img: "karolyn-mcDonald.jpg",
      oxy: "0",
    },
    {
      id: 11,
      name: "John McCartin",
      company: "McCartin Financial",
      website: "https://safenestegg.com/",
      tag: "RIS-SIS",
      franchise: 0,
      img: "john-mccartin.jpg",
      oxy: "0",
    },
    {
      id: 12,
      name: "Gary Osing",
      company: "McAdams Group LLC",
      website: "https://www.mcadamsgroupllc.com/",
      tag: "RIS-SIS",
      franchise: 0,
      img: "gary-osing.jpg",
      oxy: "0",
    },
    {
      id: 13,
      name: "Shane Pearcy",
      company: "Retirement Income Solutions LLC",
      website: "https://risolutions.net/",
      tag: "RIS-SIS",
      franchise: 0,
      img: "shane-pearcy.jpg",
      oxy: "0",
    },
    {
      id: 14,
      name: "Pat Peason",
      company: "Peason Financial Group",
      website: "https://peasongroup.com/",
      tag: "RIS-SIS",
      franchise: 0,
      img: "pat-peason.jpg",
      oxy: "1",
    },
    {
      id: 15,
      name: "Drew Pelton",
      company: "Drew Pelton Investment Services",
      website: "https://www.drewpelton.com/",
      tag: "RIS-SIS",
      franchise: 0,
      img: "drew-pelton.jpg",
      oxy: "0",
    },
    {
      id: 17,
      name: "David Scranton",
      company: "Scranton Financial Group",
      website: "http://www.scrantonfinancialgroup.com/",
      tag: "RIS-SIS",
      franchise: 0,
      img: "david-scranton.jpg",
      oxy: "0",
    },
    {
      id: 18,
      name: "Jeff Small",
      company: "Arbor Financial Services of Florida, Inc.",
      website: "https://arbor-financial.com/",
      tag: "RIS-SIS",
      franchise: 0,
      img: "jeff-small.jpg",
      oxy: "1",
    },
    {
      id: 19,
      name: "Tim Sparks",
      company: "Sparks Financial Group",
      website: "https://sparksfg.com/",
      tag: "RIS-SIS",
      franchise: 0,
      img: "tim-sparks.jpg",
      oxy: "1",
    },
    {
      id: 20,
      name: "David Stearns",
      company: "Stearns Retirement Group",
      website: "https://stearnsretirementgroup.com/",
      tag: "RIS-SIS",
      franchise: 0,
      img: "david-stearns.jpg",
      oxy: "1",
    },
    {
      id: 21,
      name: "Connor Stewart",
      company: "Crystal Lake Tax and Financial Services",
      website: "https://crystallaketax.com/",
      tag: "RIS-SIS",
      franchise: 0,
      img: "connor-stewart.jpg",
      oxy: "0",
    },
    {
      id: 22,
      name: "Michael Stewart",
      company: "Crystal Lake Tax and Financial Services",
      website: "https://crystallaketax.com/",
      tag: "RIS-SIS",
      franchise: 0,
      img: "michael-stewart.jpg",
      oxy: "0",
    },
    {
      id: 23,
      name: "Aggie Valenta",
      company: "Scranton Financial Group",
      website: "http://www.scrantonfinancialgroup.com/",
      tag: "RIS-SIS",
      franchise: 0,
      img: "aggie-valenta.jpg",
      oxy: "0",
    },
    {
      id: 24,
      name: "Brad Williams",
      company: "Brad Williams Financial Services",
      website: "https://www.askbradwilliams.com/",
      tag: "RIS-SIS",
      franchise: 0,
      img: "brad-williams.jpg",
      oxy: "1",
    },
    {
      id: 27,
      name: "David Wright",
      company: "Wright Financial Group",
      website: "https://wrightfinancialgroup.com/",
      tag: "RIS-SIS",
      franchise: 0,
      img: "david-wright.jpg",
      oxy: "1",
    },
    {
      id: 28,
      name: "Micah Keel",
      company: "Retirement Income Source of Sarasota",
      website: "https://retirementincomesourcesarasota.com/",
      tag: "RIS-SIS-FRAN",
      franchise: 1,
      img: "micah-keel.jpg",
      oxy: "1",
    },
    {
      id: 29,
      name: "Billie Aponte",
      company: "Aponte Financial Services",
      website: "http://apontefinancialservices.com/",
      tag: "SIS",
      franchise: 0,
      img: "billie-aponte.jpg",
      oxy: "0",
    },
    {
      id: 30,
      name: "Benjamin Barning",
      company: "Scranton Financial Group",
      website: "https://www.scrantonfinancialgroup.com/",
      tag: "SIS",
      franchise: 0,
      img: "benjamin-barning.jpg",
      oxy: "0",
    },
    {
      id: 31,
      name: "Rick Bates",
      company: "Integrity Investment & Tax Advisory LLC",
      website: "https://www.iiata.com/",
      tag: "SIS",
      franchise: 0,
      img: "rick-bates.jpg",
      oxy: "0",
    },
    {
      id: 32,
      name: "Tim Beauregard",
      company: "Focus Financial Planning",
      website: "https://www.focusfpi.com/",
      tag: "SIS",
      franchise: 0,
      img: "tim-beauregard.jpg",
      oxy: "0",
    },
    {
      id: 33,
      name: "Jeff Bliss",
      company: "Bliss Wealth Management",
      website: "https://www.blisswealthmanagement.com/",
      tag: "SIS",
      franchise: 0,
      img: "jeff-bliss.jpg",
      oxy: "0",
    },
    {
      id: 34,
      name: "Stuart Chamberlin",
      company: "Chamberlin Financial Inc.",
      website: "https://www.chamberlinfinancial.com/",
      tag: "SIS",
      franchise: 0,
      img: "stuart-chamberlin.jpg",
      oxy: "0",
    },
    {
      id: 35,
      name: "Fabiano deFranco",
      company: "Retirement Solution LLC",
      website: "https://retirementsolutionva.com/",
      tag: "SIS",
      franchise: 0,
      img: "fabiano-defranco.jpg",
      oxy: "0",
    },
    {
      id: 37,
      name: "David Eissman",
      company: "Eissman Wealth Management",
      website: "https://eissmanwealth.com/",
      tag: "SIS",
      franchise: 0,
      img: "david-eissman.jpg",
      oxy: "0",
    },
    {
      id: 38,
      name: "Scott Enzor",
      company: "McKenzie Financial Group",
      website: "https://mckenziefinancialgroup.com/",
      tag: "SIS",
      franchise: 0,
      img: "scott-enzor.jpg",
      oxy: "0",
    },
    {
      id: 39,
      name: "Tom Falter",
      company: "North American Financial",
      website: "https://nafincome.com/",
      tag: "SIS",
      franchise: 0,
      img: "tom-falter.jpg",
      oxy: "0",
    },
    {
      id: 40,
      name: "Mark Graber",
      company: "Senior Advisors Inc",
      website: "https://www.senioradvisorsinc.com/",
      tag: "SIS",
      franchise: 0,
      img: "mark-graber.jpg",
      oxy: "0",
    },
    {
      id: 41,
      name: "Victor Green",
      company: "Goodman Green Wealth Management",
      website: "https://goodmangreen.us/",
      tag: "SIS",
      franchise: 0,
      img: "victor-green.jpg",
      oxy: "0",
    },
    {
      id: 42,
      name: "Gary Komarek",
      company: "North Shore Asset Management",
      website: "https://nshoreamta.fixedincomecounsel.com/",
      tag: "SIS",
      franchise: 0,
      img: "gary-komarek.jpg",
      oxy: "0",
    },
    {
      id: 43,
      name: "Chuck Kowalski",
      company: "Sound Income Strategies",
      website: "https://soundincomestrategies.com/",
      tag: "SIS",
      franchise: 0,
      img: "chuck-kowalski.jpg",
      oxy: "0",
    },
    {
      id: 45,
      name: "Rick Prosser",
      company: "North American Financial",
      website: "https://nafincome.com/",
      tag: "SIS",
      franchise: 0,
      img: "rick-prosser.jpg",
      oxy: "0",
    },
    {
      id: 46,
      name: "Bruce Rellstab",
      company: "Community Investments & Retirement Services",
      website: "https://commfinancial.com/",
      tag: "SIS",
      franchise: 0,
      img: "bruce-rellstab.jpg",
      oxy: "1",
    },
    {
      id: 47,
      name: "Lora Rolin",
      company: "WilLo Financial",
      website: "https://willofinancial.com/",
      tag: "SIS",
      franchise: 0,
      img: "lora-rolin.jpg",
      oxy: "1",
    },
    {
      id: 48,
      name: "Damian Rothermel",
      company: "Lifetime Planning Group",
      website: "https://www.lifetimeplanninggroup.com/",
      tag: "SIS",
      franchise: 0,
      img: "damian-rothermel.jpg",
      oxy: "1",
    },
    {
      id: 101,
      name: "Bill Richardson",
      company: "Retirement Income Source",
      website: "https://retirementincomesourcemn.com/",
      tag: "RIS-SIS-FRAN",
      franchise: 1,
      img: "bill-richardson.jpg",
      oxy: "1",
    },
    {
      id: 102,
      name: "Dwight Rich",
      company: "Rich Wealth Management",
      website: "https://www.richwealthmanagement.com/",
      tag: "IND",
      franchise: 0,
      img: "dwight-rich.jpg",
      oxy: "0",
    },
    {
      id: 103,
      name: "Deana Miller",
      company: "Arbor Financial Services of Florida, Inc.",
      website: "https://arbor-financial.com/",
      tag: "RIS-SIS",
      franchise: 0,
      img: "deana-miller.jpg",
      oxy: "0",
    },
    {
      id: 105,
      name: "Melanie Granville",
      company: "Sound Income Strategies",
      website: "https://pinehurst-wealth.com",
      tag: "SIS",
      franchise: 0,
      img: "melanie-granville.jpg",
      oxy: "0",
    },
    {
      id: 106,
      name: "David Lundberg",
      company: "Love Light Flourish",
      website: "https://lovelightflourish.com/about-us/",
      tag: "SIS",
      franchise: 0,
      img: "david-lunderg.png",
      oxy: "0",
    },
    {
      id: 107,
      name: "James McConaghy",
      company: "Sound Income Strategies",
      website: "https://soundincomestrategies.com/",
      tag: "SIS",
      franchise: 0,
      img: "james-mcConaghy.png",
      oxy: "0",
    },
    {
      id: 108,
      name: "Barry Wheeles",
      company: "Sound Income Strategies",
      website: "https://soundincomestrategies.com/",
      tag: "SIS",
      franchise: 0,
      img: "barry-wheeles.jpg",
      oxy: "0",
    },
    {
      id: 109,
      name: "Jeff Russitano",
      company: "Scranton Financial Group ",
      website: "http://www.scrantonfinancialgroup.com/",
      tag: "RIS-SIS",
      franchise: 0,
      img: "jeff-russitano.jpg",
      oxy: "0",
    },
    {
      id: 110,
      name: "Scott McLean",
      company: "McLean Advisory Group",
      website: "https://mcleantaxadvisory.com/",
      tag: "SIS",
      franchise: 0,
      img: "scott-mclean.jpg",
      oxy: "0",
    },
    {
      id: 111,
      name: "Martina Mason",
      company: "Mason Wealth Group LLC",
      website: "https://masonwealth.org/",
      tag: "IND",
      franchise: 0,
      img: "martina-mason.jpg",
      oxy: "0",
    },
    {
      id: 112,
      name: "Kris Cowles",
      company: "TEQUESTA RETIREMENT GROUP, LLC",
      website:
        "https://bisprofiles.com/fl/tequesta-retirement-group-l22000326495",
      tag: "IND",
      franchise: 0,
      img: "kris-cowles.jpg",
      oxy: "0",
    },
    {
      id: 113,
      name: "Chris Carrano",
      company: "Scranton Financial Group",
      website: "http://www.scrantonfinancialgroup.com/",
      tag: "RIS-SIS",
      franchise: 0,
      img: "default.jpg",
      oxy: "0",
    },
    {
      id: 114,
      name: "Stephen Mehr",
      company: "Liber Advisors",
      website: "https://www.liberadvisors.com/",
      tag: "IND",
      franchise: 0,
      img: "stephen-mehr.png",
      oxy: "0",
    },
    {
      id: 115,
      name: "Keith George",
      company: "LifeMark Securities Corp",
      website: "https://lifemark.com/",
      tag: "IND",
      franchise: 0,
      img: "default.jpg",
      oxy: "0",
    },

  ];
const SearchBar = () => {

    const [isFocused, setIsFocused] = useState(false)
    const [isTyping, setIsTyping] = useState(false) 
    const [query, setQuery] = useState("")
  
    const [advisors, setAdvisors] = useState([]);
    const [filteredAdvisor, setFilteredAdvisor] = useState([]);

    function handleFocus() {
        if(filteredAdvisor.length > 0) {
            setIsFocused(true)
        } else {
            setIsFocused(false)
        }
    }

    function handleChange(e) {
      if(e.target.value === "") {
        setIsFocused(false)
        setIsTyping(false)
        setQuery("")
      } else {
        setIsFocused(true)
        setIsTyping(true)
        setQuery(e.target.value)
      }
    }

    useEffect(() => {
        const handleSearch = () => {
            const filteredResults = advisors.filter((advisor) => {
                return (
                  advisor.name.toLowerCase().includes(query.toLowerCase()) ||
                  advisor.company.toLowerCase().includes(query.toLowerCase())
                );
              });
                setFilteredAdvisor(filteredResults);
          
        };
            handleSearch();
      }, [query, advisors]);

    useEffect(() => {
        setAdvisors(advisorsList);
      }, []);


  return (
    <div className="search-input-container">
        <input
            value={query} 
            onChange={(e) => handleChange(e)} 
            onBlur={()=>handleFocus()} 
            onFocus={()=>setIsFocused(!isFocused)} 
            className="search-input" 
            type="text" 
            placeholder="Search By Name Or Company!" />

        {isFocused && isTyping && query.length > 1 && (
            <>
                {filteredAdvisor.length === 0 ? 
                ( <div className="advisor-wrapper">
                    <p className="advisor-name">No Advisor Found?</p>
                  </div>) 
                : 
                filteredAdvisor.map((advisor) => {
                return  (
                    <Link  key={advisor.id} onClick={() => handleFocus()} className="advisor-anchor" to={`/advisors/${advisor.id}`}>
                        <div className="advisor-wrapper">
                            <p className="advisor-name">{advisor.name} - {advisor.company}</p>
                        </div>
                    </Link>
  
                    )
                })}
            </>
        )}

  </div>
  )
}

export default SearchBar




{/* <div className="search-content-wrapper">
    <div className="">
        <div className="">
            <input className="search-input" type="text" placeholder="Search By Name Or Company" />
            <div className="search-result-overlay-container">
                <div className="search-result-overlay">
                    dsdadasd
                </div>
            </div>
        </div>
        <div className="dropdown-advisor">

        </div>
    </div>
</div> */}

        {/* <div className="button container">
            <a data-id="all" className="filter-anchor selected" href="/advisors">ALL</a>
            <a data-id="ris-sis" className="filter-anchor" href="/ris-sis">RIS &amp; SIS</a>
            <a data-id="ris" className="filter-anchor" href="/ris">RIS</a>
            <a data-id="sis" className="filter-anchor" href="/sis">SIS</a>
            <a data-id="ind" className="filter-anchor" href="/ind">AA</a>
        </div> */}


            {/* <div id="result">
            <a className="advisor-anchor" href="/advisors/<?= $advisor->id  ?>">
                <div className="advisor-wrapper">
                    <div className="advisor-img-container">
                        <img className="advisor-img" src="images/<?= $advisor->img ?>" />
                    </div>
                    <p className="advisor-name">NAME</p>
                </div>
            </a>
    </div> */}