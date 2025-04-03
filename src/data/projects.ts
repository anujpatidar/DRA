export interface ProjectDetails {
  title: string;
  subtitle: string;
  period: string;
  description: string;
  heroImage: string;
  images: string[];
  details: {
    client: string;
    projectLocation: string;
    modeOfContract: string;
    projectValue: string;
    contractualDateOfCommencement: string;
    contractualDateOfCompletion: string;
    actualDateOfCompletion: string;
    projectDuration: string;
  };
  category: string;
}

export const projectCategories = [
  "Urban Infrastructure",
  "Buildings and Highways",
  "Environment",
  "Transportation",
  "Energy",
  "Heavy Manufacturing"
]

export const projectsData: Record<string, ProjectDetails> = {
  'dnd-faridabad': {
    title: "A PAVEMENT OF TRANSFORMATION",
    subtitle: "DND - Faridabad - Sohna",
    period: "2022-24",
    description: `With seven kilometres of elevated structures, 1,450 piles driven deep into the earth, and 229 precast segments to be installed, the project was a feat of modern engineering. The widest single-cell segmental flyover in India—28.5 metres—rose majestically on a single pier. Its vertical upswing, growing on piers all along the stretch, promised to deliver the future.

But this vision came with challenges. The alignment brushed perilously close to the Mahamaya End of the Delhi Metro at four locations and ran alongside the Agra Canal. Land acquisition from the forest and UP irrigation departments depended on threatening timelines. High-tension power lines needed shifting, and transporting the 33-ton, 28.5-metre-wide segments from the casting yard to the site was a logistical nightmare.

Yet, month by month, the highway grew. An innovative use of municipal solid waste for embankments exemplified the project's commitment to sustainability. It wasn't just infrastructure—it was transformation, a ribbon of progress binding the city together.`,
    heroImage: "/projects/dnd-faridabad/dnd-hero.jpg",
    images: [
      "/projects/dnd-faridabad/dnd-1.jpg",
      "/projects/dnd-faridabad/dnd-2.jpg",
      "/projects/dnd-faridabad/dnd-3.jpg",
      "/projects/dnd-faridabad/dnd-4.jpg"
    ],
    details: {
      client: "National Highways Authority of India (NHAI)",
      projectLocation: "Delhi, India",
      modeOfContract: "Hybrid Annuity Mode",
      projectValue: "USD 222 Million - INR 1816 Crore",
      contractualDateOfCommencement: "11.01.2022",
      contractualDateOfCompletion: "08.07.2024",
      actualDateOfCompletion: "08.07.2024",
      projectDuration: "24 months"
    },
    category: "Urban Infrastructure"
  },
  'global-city-development': {
    title: "The Global City Development - A vision for Gurugram",
    subtitle: "Haryana, India",
    period: "2024-26",
    description: `The Global City Project in Gurugram's Phase-I was an ambitious undertaking, transforming 587 acres of land into a state-of-the-art urban hub. It was a once-in-a-lifetime challenge as the scope was monumental: developing roads, water supply systems, waste management, utility tunnels, landscaping, and electrification, with a defect liability period extending five years.

Our team constructed over 13.8 kilometers of four- and six-lane roads, alongside 12.6 kilometers of service roads, 18.17 kilometers of cycle tracks, and pedestrian walkways spanning 27.6 kilometers. 

Beneath the surface, a 10.7 kilometers utility tunnel was built to house the vast network of pipes and cables, ensuring seamless operation of potable and recycled water systems, each stretching over 12 kilometers.

The project also featured a sprawling sewerage network of 17 kilometers, an extensive stormwater drainage system, and a 33 kV switching substation capable of handling 75 MVA. 

Fire safety was paramount, with over 21 kilometers of fire-fighting pipelines installed. Above the ground, meticulous landscaping adorned the city's entrance gates, reservoirs, and swales, blending functionality with aesthetic appeal.

Our greatest challenge was balancing the city's vast water demand of 70.5 MLD. Constructing a 350 ML RCC raw water mass balancing reservoir and three pump houses provided a reliable solution.

As the trial run commenced, our team marveled at how we had not just built infrastructure but crafted the foundation of a thriving community.`,
    heroImage: "/projects/global-city-development/gurugram-hero.jpg",
    images: [
      "/projects/global-city-development/gurugram-1.jpg",
      "/projects/global-city-development/gurugram-2.jpg"
    ],
    details: {
      client: "Haryana State Industrial and Infrastructure Development Corporation",
      projectLocation: "Haryana, India",
      modeOfContract: "Design and Build",
      projectValue: "INR 3245 Cr",
      contractualDateOfCommencement: "15.01.2024",
      contractualDateOfCompletion: "14.01.2026",
      actualDateOfCompletion: "In Progress",
      projectDuration: "24 months"
    },
    category: "Urban Infrastructure"
  },
  'mumbai-ahmedabad-rail': {
    title: "The Mumbai-Ahmedabad High-Speed Rail: A Journey in the Making",
    subtitle: "Gujarat, India",
    period: "2021-26",
    description: `The Mumbai-Ahmedabad High-Speed Rail project represents a significant leap forward in India's transportation infrastructure. This ambitious project aims to introduce India's first high-speed rail system, connecting two major economic hubs of the country.

The project showcases cutting-edge engineering and construction techniques, bringing Japanese Shinkansen technology to Indian railways. The elevated corridor design and state-of-the-art construction methods demonstrate our commitment to delivering world-class infrastructure.

This transformative project will significantly reduce travel time between Mumbai and Ahmedabad, fostering economic growth and regional development along the corridor.`,
    heroImage: "/projects/mumbai-ahmedabad-rail/mumbai-ahmedabad-hero.jpg",
    images: [
      "/projects/mumbai-ahmedabad-rail/mumbai-ahmedabad-1.jpg",
      "/projects/mumbai-ahmedabad-rail/mumbai-ahmedabad-2.jpg"
    ],
    details: {
      client: "National High Speed Rail Corporation Limited (NHSRCL)",
      projectLocation: "Gujarat, India",
      modeOfContract: "EPC",
      projectValue: "USD 350 Million - INR 2875 Crore",
      contractualDateOfCommencement: "15.03.2021",
      contractualDateOfCompletion: "14.03.2026",
      actualDateOfCompletion: "In Progress",
      projectDuration: "60 months"
    },
    category: "Transportation"
  },
  'prayagraj-junction': {
    title: "THE QUIET HUM OF PROGRESS",
    subtitle: "Redeveloping Prayagraj Junction Railway Station",
    period: "2023-26",
    description: `A transformation was underway—a major upgrade designed to bring the station into a new era of efficiency, comfort, and sustainability. This ambitious project was not just about modernizing the station; it was a commitment to creating a 'Green Building' environment.

Every aspect of the renovation focused on reducing energy consumption. Passive energy-saving features were employed, utilizing local and recycled materials wherever possible. Rainwater harvesting systems were installed, and solar panels lined the roof—their eyes on the station's roof, generating renewable energy to power operations. Waste was managed meticulously, every milestone was tracked on the surrounding environment.

Careful attention was paid to reducing noise, dust, and pollution. It was a delicate balancing of heavy work with respect for the ecosystem that surrounded the station. Every effort was made to protect the quality of the soil, water, and air.

One of the project's proudest achievements was the creation of a fully accessible environment. Proper traffic routing and well-thought-out pathways guided changing stations for electric vehicles were installed, along with designated parking for the disabled. Every corner of the station was designed for ease of navigation—logical flows of traffic, both human and vehicular, intertwined seamlessly. Clear signage, informative displays, and a crisp, clear public announcement system ensured that no one was ever lost.`,
    heroImage: "/projects/prayagraj-junction/prayagraj-hero.jpg",
    images: [
      "/projects/prayagraj-junction/prayagraj-1.jpg"
    ],
    details: {
      client: "North Central Railway",
      projectLocation: "Uttar Pradesh, India",
      modeOfContract: "Design and Build (EPC)",
      projectValue: "Rs 936.40 Cr",
      contractualDateOfCommencement: "08.12.2022",
      contractualDateOfCompletion: "30.12.2026",
      actualDateOfCompletion: "30.12.2026",
      projectDuration: "48 months"
    },
    category: "Transportation"
  },
  'ahmedabad-station': {
    title: "TRANSFORMING THE HEART OF AHMEDABAD",
    subtitle: "Ahmedabad Railway Station Redevelopment",
    period: "2023-26",
    description: `The plans for the redevelopment of the Ahmedabad Railway Station centered around a stunning Multi-Modal Transit Hub (MMTH)—a 16-floor skyscraper designed to house offices, hotels, retail spaces, and other commercial ventures. The iconic tower would not only enhance the skyline but seamlessly connect public transport, pedestrian access, and taxi services, all while offering ample parking.

Above the bustling tracks, a bold three-story space—a space dedicated to ticketing, access control, and passenger lounges. The Roof Plaza also linked the station to the future of travel: a High-Speed Rail, Metro, and an easy crossover to the far side of the tracks. Every corner of the station was designed with accessibility in mind, featuring ramps, tactile guides, and renewable energy solutions. Electric vehicle charging stations and rainwater harvesting systems were integrated into a green, sustainable design.

But this grand vision faced significant challenges. Construction was to proceed within an active, operational station, requiring careful coordination to ensure that passengers were safe, while heavy construction vehicles navigated the narrow, crowded premises. Elevated roads were built around the station, separating passenger traffic from city traffic and ensuring smooth flow for everyone.

With the clock ticking, the project team faced a tight 36-month timeline. Every task, from zone-wise asset dismantling to finalizing the uniform, sleek new architecture, had to be executed with precision. When completed, the redevelopment would not only modernize Ahmedabad's station but also provide a striking new architectural identity to the city itself.`,
    heroImage: "/projects/ahmedabad-station/ahmedabad-hero.jpg",
    images: [
      "/projects/ahmedabad-station/ahmedabad-1.jpg",
      "/projects/ahmedabad-station/ahmedabad-2.jpg"
    ],
    details: {
      client: "Rail land Development Authority",
      projectLocation: "India",
      modeOfContract: "Design and Build (EPC)",
      projectValue: "Rs.2354 Cr",
      contractualDateOfCommencement: "03.11.2023",
      contractualDateOfCompletion: "03.11.2026",
      actualDateOfCompletion: "30.12.2026",
      projectDuration: "36 months"
    },
    category: "Buildings and Highways"
  },
  'kota-sustainable': {
    title: "CREATING A SUSTAINABLE FUTURE FOR KOTA",
    subtitle: "in a rapidly urbanising environment",
    period: "2019-23",
    description: `In Kota City, the ambitious plan to modernise sanitation system was centred around providing a comprehensive sewer network and state-of-the-art treatment facilities to handle the increasing waste demands.

The project covered a vast 305-kilometer sewerage network, using advanced materials like DWC HDPE, RCC, and CI DI pipes. The installation included the construction of two large capacity treatment Plants (STPs)—one with a 40 MLD Capacity and another with a 30 MLD Capacity—using the advanced SBR process to treat wastewater. To support water storage and distribution, new facilities were also built, including 2 elevated storage reservoirs (ESR) and 1 underground sump.

One of the technical feats of the project was the 30-kilometer pipeline installation through trenchless methods, minimizing disruption to the city's bustling environment.

A power generation unit was installed at the STP, emphasizing sustainability by turning waste into energy. The project, designed for durability, included a comprehensive 10-year operation and maintenance plan to ensure long-term efficiency and reliability.`,
    heroImage: "/projects/kota-sustainable/kota-hero.jpg",
    images: [
      "/projects/kota-sustainable/kota-1.jpg",
      "/projects/kota-sustainable/kota-2.jpg"
    ],
    details: {
      client: "Rajasthan Urban Infrastructure Development Project",
      projectLocation: "Rajasthan, India",
      modeOfContract: "Item Rate",
      projectValue: "INR 546 Cr",
      contractualDateOfCommencement: "21.06.2019",
      contractualDateOfCompletion: "19.06.2022",
      actualDateOfCompletion: "06.10.2023",
      projectDuration: "3 Years"
    },
    category: "Urban Infrastructure"
  },
  'chennai-metro': {
    title: "THE UNDERGROUND ODYSSEY",
    subtitle: "Chennai Metro Rail Project",
    period: "2023-27",
    description: `In Chennai, a monumental project began: the construction of four underground metro stations at Moolakadai, Sembiyam, Perambur Market, and Perambur Metro as a part of Corridor 3 of the CMRL Phase-II Project.

Our team employed a Top-Down Construction Method, building the top, concourse, and bottom slabs of the underground metro stations. We installed the diaphragm wall, led the architectural works, along with building the conditional survey. Our team was responsible for the instrumentation and monitoring while taking care of traffic decking and diversions.

One of the key challenges was installing the Diaphragm Wall with a trench cutter to create a watertight barrier against the high-water table. Our team faced adverse weather, including cyclones, and navigated a maze of wet and dry utilities while managing traffic and space constraints.

Through diligent Building Conditional Surveys and real-time monitoring of adjacent structures, our team ensured safety and minimized damage within a 50-meter radius. The project included ground improvement with a slurry wall, showcasing innovative solutions.

As the stations took shape, blending functionality with aesthetics, they heralded a new era for Chennai's public transport. The completion of this underground metro was a testament to the team's resilience and a bright promise for the city's future.`,
    heroImage: "/projects/chennai-metro/chennai-hero.jpg",
    images: [
      "/projects/chennai-metro/chennai-1.jpg",
      "/projects/chennai-metro/chennai-2.jpg"
    ],
    details: {
      client: "Chennai Metro Rail Limited",
      projectLocation: "Tamil Nadu, India",
      modeOfContract: "Design Build (EPC)",
      projectValue: "USD 128 Million - INR 1064 Crore",
      contractualDateOfCommencement: "07.07.2023",
      contractualDateOfCompletion: "11.06.2027",
      actualDateOfCompletion: "11.06.2027",
      projectDuration: "48 months"
    },
    category: "Transportation"
  },
  'mumbai-road-revamp': {
    title: "Revamping the Roads Of Western Mumbai",
    subtitle: "Revamping the Roads Of Western Mumbai",
    period: "2023-25",
    description: `In the heart of Mumbai's bustling western suburbs, a major transformation was underway. The improvement of 137 roads across the H/East, H/West, and K/East wards of Zone-III was a project designed to address the city's aging infrastructure and enhance the daily commute for thousands of residents.

The scope of work was vast. Over 85 kilometers of road were to be dismantled, with 10.2 lakh cubic meters of debris cleared and disposed of efficiently. Workers then moved on to 5.6 lakh cubic meters of concreting, creating smoother surfaces, better drainage, and safer footpaths. 
The goal was clear: to build roads that would stand the test of time and handle the growing traffic demands of Mumbai's western suburbs.

Despite the challenges of working in a densely populated urban area, the project moved forward steadily. The team adhered to zero harm safety protocols, with no accidents reported during the 12-month work period. While a few minor quality issues arose, they were swiftly addressed, ensuring that the roads met the highest standards.

One of the biggest hurdles, however, was coordinating the movement of construction lorries through heavy Mumbai traffic. Restricted access and delays caused by utility companies created occasional setbacks.

But with determination and teamwork, the project stayed on track, mobilizing just before the first monsoon and completing all temporary construction before the second.`,
    heroImage: "/projects/default-hero.jpg",
    images: [
      "/projects/default-hero.jpg",
      "/projects/default-hero.jpg"
    ],
    details: {
      client: "Brihanmumbai Municipal Corporation",
      projectLocation: "Mumbai, India",
      modeOfContract: "Lumpsum (Item Rate) Construction Contract",
      projectValue: "NR 1145 C",
      contractualDateOfCommencement: "23.01.2023",
      contractualDateOfCompletion: "03.09.2025",
      actualDateOfCompletion: "03.09.2025",
      projectDuration: "24 months"
    },
    category: "Transportation"
  },
  'upper-narmada-drinking-water': {
    title: "Making drinking water accessible for all",
    subtitle: "Upper Narmada Drinking Water Supply Project",
    period: "2023-25",
    description: `The Upper Narmada Drinking Water Supply Project was an ambitious initiative aimed at transforming the lives of over 700,000 people in the villages of Dhar District, Madhya Pradesh. The goal was simple but critical: to deliver clean drinking water to 657 villages scattered across a vast and rugged landscape.

The project involved engineering, procurement, and construction of an extensive water supply system. At its heart was an Intake Well designed to draw up to 134 million liters of water per day from the Narmada River. This water would pass through a state-of-the-art Water Treatment Plant, capable of treating 103 million liters daily to ensure it met drinking standards. The treated water would then travel through a web of over 2,427 kilometers of pipes, including MS pipe, ductile iron pipe, and HDPE pipe, reaching the furthest corners of the district.

273 overhead tanks and 23 sumps were constructed, providing steady pressure and clean water to every household. New sub-stations and power lines were installed to energize the 56 powerful water pumps required to handle the region's diverse terrain.

The sheer size of the district and its scattered villages made logistics a constant battle. Acquiring land for construction was a slow process, further complicated by unexpected encounters with hard rock layers during excavation.

Yet, despite these hurdles, the team pressed on. With careful planning and tenacity, the Upper Narmada Water Supply Project aimed to ensure that clean, accessible water became a daily reality for the people of Dhar`,
    heroImage: "/projects/default-hero.jpg",
    images: [
      "/projects/default-hero.jpg",
      "/projects/default-hero.jpg"
    ],
    details: {
      client: "Madhya Pradesh Jal Nigam",
      projectLocation: "Madhya Pradesh, India",
      modeOfContract: "Design and Build (EPC)",
      projectValue: "INR 1044 Cr",
      contractualDateOfCommencement: "05.09.2023",
      contractualDateOfCompletion: "25.09.2025",
      actualDateOfCompletion: "25.09.2025",
      projectDuration: "24 months"
    },
    category: "Urban Infrastructure"
  },
  'mauritius-social-housing': {
    title: "Creating communities and a new way of life for Mauritius",
    subtitle: "Phase 1 of a new Social Housing Development",
    period: "2023-24",
    description: `The island of Mauritius was set to see a transformation as Phase 1 of a new Social Housing Development began to take shape. This ambitious project aimed to provide 800 modern housing units across four locations—Hermitage 1, Hermitage 2, La Source, and Puspass. Each area would be a secure, self-contained community, complete with car parks, bus shelters, a community center, commercial spaces, children's play areas, and accessible housing for the disabled.

The construction would span 37,000 square meters of carpet area, with each unit adhering to the high standards set by British Standard BS 8000. Fire safety was a priority, with sophisticated fire alarms and firefighting systems installed in every building. Outside, modern infrastructure took form, with well-paved roads, stormwater drainage, and a comprehensive sewer system, all built to the stringent UK standards.

The team faced challenges from the outset. A shortage of local construction labor led to delays, and mobilizing resources from abroad required navigating a maze of international regulations and permits. Despite these obstacles, safety remained a cornerstone, with the first nine months passing without a single safety incident.

While only three quality non-conformities were reported, they were swiftly addressed without compromising the British Standard benchmarks. This meticulous approach did not slow the project down; the construction timeline remained on track, with a promise of timely completion.

This development was more than just a housing project—it was a commitment to creating vibrant, safe, and accessible communities, bringing a new standard of living to Mauritius.`,
    heroImage: "/projects/default-hero.jpg",
    images: [
      "/projects/default-hero.jpg",
      "/projects/default-hero.jpg"
    ],
    details: {
      client: "New Social Living Development Limited, Mauritius",
      projectLocation: "Mauritius",
      modeOfContract: "Design and Build (EPC)",
      projectValue: "1840 million MUR (Rs.350 Cr)",
      contractualDateOfCommencement: "21.04.2023",
      contractualDateOfCompletion: "10.12.2024",
      actualDateOfCompletion: "10.12.2024",
      projectDuration: "20 months"
    },
    category: "Buildings and Highways"
  },
  'nimbahera-sewerage': {
    title: "Sewer Systems A hope for healthy living",
    subtitle: "Nimbahera Sewerage Project",
    period: "2016-19",
    description: `In the towns of Nimbahera, Bari Sadri, Fatehnagar Sanwar, and Kushalgarh, a transformative sewerage project was underway, promising to improve sanitation and water management for thousands of residents. The project involved the design, construction, and commissioning of a comprehensive sewer system that would not only manage waste but also treat and reuse water efficiently.

A vast network of over 173 kilometres of pipes was laid beneath the towns, connecting over 11,800 sewer manholes. This intricate system led to five state-of-the-art Sewage Treatment Plants (STPs) based on the innovative SBR process. These included three 1.0 MLD plants, a 1.5 MLD plant, and a larger 2.0 MLD facility, all designed to handle varying capacities of wastewater.

Additionally, nearly 8,000 household service connections were made, ensuring that families across the region had reliable and safe sanitation.

Despite the scope of the work, the project encountered only minor challenges, which were promptly addressed. The sewerage network construction and the installation of the SBR-based STPs progressed smoothly, a testament to careful planning and execution.

With a one-year defect liability period followed by ten years of operation and maintenance, the project was set to provide a sustainable and efficient solution for sanitation in these towns, ushering in a new era of cleanliness and environmental care.`,
    heroImage: "/projects/default-hero.jpg",
    images: [
      "/projects/default-hero.jpg",
      "/projects/default-hero.jpg"
    ],
    details: {
      client: "Rajasthan Urban Drinking Water Sewerage and Infrastructure",
      projectLocation: "Gujarat, India",
      modeOfContract: "Design and Build (EPC)",
      projectValue: "INR 150.23 Cr",
      contractualDateOfCommencement: "25.02.2016",
      contractualDateOfCompletion: "31.03.2019",
      actualDateOfCompletion: "27.03.2019",
      projectDuration: "37 months"
    },
    category: "Urban Infrastructure"
  },
  'ranavav-sewerage': {
    title: "More than just pipes and pumps a healthier future",
    subtitle: "Ranavav Sewerage Project",
    period: "2014-16",
    description: `In the town of Ranavav, nestled within Porbandar District, the aim was to transform the sanitation system by constructing a modern underground drainage network, improving the quality of life for thousands of residents.

The project spanned over 129 kilometres of sewer pipes (Stoneware pipe and RCC NP3) to ensure a long-lasting and efficient system. 3869 manholes were installed throughout the network, and over 5,400 households were connected to the new system. This comprehensive plan included bypass arrangements, effluent disposal, and crucial road crossings over both national highways and state railway lines. A pumping station was built to manage the flow, along with all necessary machinery and equipment. Even the smallest details, like a new compound wall and proper road crossings, were carefully handled.

Though the project presented only minor challenges—such as the technicalities of road-pushing work—they were managed without disrupting progress. With two years of operation and maintenance planned after completion, the new system was set to serve Ranavav for years to come.`,
    heroImage: "/projects/default-hero.jpg",
    images: [
      "/projects/default-hero.jpg",
      "/projects/default-hero.jpg"
    ],
    details: {
      client: "Gujarat Water Supply & Sewerage Board",
      projectLocation: "Gujarat, India",
      modeOfContract: "Design and Build (EPC)",
      projectValue: "INR 74.60 Cr",
      contractualDateOfCommencement: "03.09.2014",
      contractualDateOfCompletion: "02.03.2016",
      actualDateOfCompletion: "28.06.2016",
      projectDuration: "21 months"
    },
    category: "Urban Infrastructure"
  },
  'thangadh-sewerage': {
    title: "Meeting the future needs of Thangadh today",
    subtitle: "Thangadh Sewerage Project",
    period: "2014-15",
    description: `In the town of Thangadh, located in Surendranagar District, an underground drainage project was initiated to modernize the town's sanitation infrastructure. The project was designed to lay down an extensive sewer collecting system with 6,694 house connection chambers. This new system would direct wastewater safely away from homes, significantly improving hygiene in the area.

The project involved 127 kilometres of network of pipes, ranging from HDPE to RCC and stoneware, and DI K9 for rising main. Key infrastructure included the construction of Main Pumping Stations (MPS), Sub Pumping Stations (SPS), and a Lifting Station, with a total capacity of 10.98 MLD to ensure smooth wastewater management. Additionally, over 3,554 manholes were strategically placed to allow for maintenance and access.

Road and railway crossings required careful planning, but the team managed to integrate the necessary infrastructure seamlessly. With two years of operation and maintenance included, the new underground drainage network has marked a step forward in ensuring a cleaner and healthier environment for the community.`,
    heroImage: "/projects/default-hero.jpg",
    images: [
      "/projects/default-hero.jpg",
      "/projects/default-hero.jpg"
    ],
    details: {
      client: "Gujarat Water Supply & Sewerage Board",
      projectLocation: "Gujarat, India",
      modeOfContract: "Design and Build (EPC)",
      projectValue: "INR 54.40 Cr",
      contractualDateOfCommencement: "01.03.2014",
      contractualDateOfCompletion: "31.08.2015",
      actualDateOfCompletion: "31.08.2015",
      projectDuration: "17 months"
    },
    category: "Environment"
  },
  'santalpur-randhanpur-water-supply': {
    title: "Transforming lives in water scarce regions",
    subtitle: "Santalpur and Randhanpur",
    period: "2020-22",
    description: `In the arid regions of Santalpur and Randhanpur, Gujarat, a transformative water supply project began, aiming to quench the thirst of over 100 villages. The goal was to ensure a reliable source of clean water for the communities through a comprehensive and durable system.

At the heart of the project was the construction of a 60 MLD capacity Intake Well to draw raw water, supported by a 300-kilometer pipeline network. This network connected the Intake Well to remote areas, ensuring that every village would benefit. Along the way, two elevated storage reservoirs (ESR), each with a capacity of 500,000 litres and towering 20 meters high, were built to store and distribute water efficiently.

To manage the vast infrastructure, a high-capacity pumping station was constructed, capable of pushing water across long distances. In addition, the installation of modern HSCF pumps, complete with advanced electrical and mechanical equipment, ensured that the water supply would be consistent and reliable.

There were challenges, particularly with the complex task of laying 300 kilometres of pipeline, some of which required delicate road-pushing work over 3.57 kilometres to avoid disruption to local infrastructure. Despite these hurdles, the project pressed on, aiming to provide a steady water supply to Santalpur and Randhanpur.`,
    heroImage: "/projects/default-hero.jpg",
    images: [
      "/projects/default-hero.jpg",
      "/projects/default-hero.jpg"
    ],
    details: {
      client: "Gujarat Water Supply & Sewerage Board",
      projectLocation: "Gujarat, India",
      modeOfContract: "Design and Build (EPC)",
      projectValue: "INR 65.13 Cr",
      contractualDateOfCommencement: "15.09.2020",
      contractualDateOfCompletion: "13.03.2022",
      actualDateOfCompletion: "10.05.2022",
      projectDuration: "20 months"
    },
    category: "Environment"
  },
  'agartala-bypass': {
    title: "Lending a Shoulder To Agartala",
    subtitle: "Making the 4-lane highway a reality",
    period: "2014-15",
    description: `The Agartala Bypass project was unlike anything. Spanning 25.4 kilometers of western Tripura, the task was ambitious: a four-lane highway connecting NH-8 near Amtali to NH-108B near Lembuchhera. Flexible bituminous pavement would cover most of the stretch, while 1.14 kilometres would rise as an elevated structure, including bridges, viaducts, and two flyovers.

The challenges, however, began to pile up even before construction broke ground. The project site, veiled in monsoon clouds from May to September, endured an average rainfall of 312.64mm—turning earthworks into a muddy battleground. Worse, a 2-kilometer marshy stretch demanded the installation of Prefabricated Vertical Drains (PBDs) to stabilize the ground before any serious construction could begin. Transporting aggregates from distant Assam and Nagaland added logistical headaches to the mix.

However, we as a team relish solving problems. A nala diversion was created to newly align the water streams. As the nala diversions near km 0+200 and km 16+450 were completed, the retaining walls began to take shape, and the bypass grew from lines on a blueprint into reality. `,
    heroImage: "/projects/default-hero.jpg",
    images: [
      "/projects/default-hero.jpg",
      "/projects/default-hero.jpg"
    ],
    details: {
      client: "National Highways and Infrastructure Development Corporation (NHIDCL)",
      projectLocation: "Tripura, India",
      modeOfContract: "Design and Build (EPC)",
      projectValue: "USD 100 Million ~ INR 828.45 Cr",
      contractualDateOfCommencement: "Yet to confirm",
      contractualDateOfCompletion: "Yet to confirm",
      actualDateOfCompletion: "Yet to confirm",
      projectDuration: "Yet to confirm"
    },
    category: "Buildings and Highways"
  },
  'faridabad-ballabhgarh-bypass': {
    title: "Building smooth roads towards development",
    subtitle: "Faridabad-Ballabhgarh Bypass",
    period: "2020-23",
    description: `The Faridabad-Ballabhgarh Bypass project was more than just another highway—it was a test of ingenuity and perseverance. Spanning 24 kilometres, this six-lane, access-controlled highway promised to ease traffic between Jaitpur-Pushta Road and Sector 62/65 in Faridabad, connecting seamlessly to NH-19 near the Badarpur Border. Under the Bharatmala Pariyojana, this ambitious project blended engineering precision with urban sensitivity.

With 5.1 kilometres of elevated structures and 18.9 kilometres of flexible pavement, the design required 49,371 cubic meters of asphalt and nearly 1,900 retaining walls. The elevated sections, with six lanes supported by pre-tensioned girders on single piers, were an engineering marvel, while the Agra Canal crossing involved four spans of composite steel girders—each stretching up to 60 meters.

But the urban setting posed unique challenges. Clearing land from the forest and UP irrigation departments delayed progress. Relocating sewer lines, gas pipelines, electrical poles, and even a police station required navigating endless layers of bureaucracy. At one point, a small temple at a critical junction became a flashpoint for negotiations, testing the team's patience and diplomacy. `,
    heroImage: "/projects/default-hero.jpg",
    images: [
      "/projects/default-hero.jpg",
      "/projects/default-hero.jpg"
    ],
    details: {
      client: "National Highways Authority of India (NHAI)",
      projectLocation: "Delhi, India",
      modeOfContract: "Hybrid Annuity Mode",
      projectValue: "USD 208 Million ~ INR 1729 Cr",
      contractualDateOfCommencement: "15.09.2020",
      contractualDateOfCompletion: "09.08.2023",
      actualDateOfCompletion: "03.05.2024",
      projectDuration: "24 months"
    },
    category: "Buildings and Highways"
  },
  'faridabad-ballabhgarh-bypass-final-stretch': {
    title: "Finishing the final stretch",
    subtitle: "The Faridabad – Ballabhgarh Bypass",
    period: "2021-23",
    description: `The final stretch of the six-lane access-controlled highway connecting Faridabad-Ballabhgarh Bypass to the KMP Expressway was nothing short of a triumph. Stretching 26 kilometers through Haryana under the Bharatmala Pariyojana, the project demanded precision and speed.

We faced our biggest challenge early on: constructing a massive 60-meter span composite steel girder over the bustling six-lane NH2. Coordinating between heavy traffic, precision engineering, and tight deadlines felt like solving an intricate puzzle. 

Yet, with seamless teamwork and advanced techniques, the girder rose majestically, a testament to innovation. The work didn't stop there. Nearly 93,130 cubic meters of asphalt and 45,92,986 cubic meters of earthwork transformed the corridor into a sleek passageway. The project finished three months ahead of schedule—a rare feat.

The highway wasn't just infrastructure—it was progress, delivered faster than anyone thought possible.`,
    heroImage: "/projects/default-hero.jpg",
    images: [
      "/projects/default-hero.jpg",
      "/projects/default-hero.jpg"
    ],
    details: {
      client: "National Highways Authority of India (NHAI)",
      projectLocation: "Delhi, India",
      modeOfContract: "Hybrid Annuity Mode",
      projectValue: "USD 109 Million ~ INR 898 Crore",
      contractualDateOfCommencement: "14.05.2021",
      contractualDateOfCompletion: "14.05.2023",
      actualDateOfCompletion: "14.05.2023",
      projectDuration: "24 months"
    },
    category: "Buildings and Highways"
  },
  'narimbanglo-jatinga-junction': {
    title: "The Narimbanglo Jatinga Junction",
    subtitle: "A lifeline in the making",
    period: "2021-23",
    description: `Spanning 49.23 kilometers through the rugged terrain of Assam, the four-lane highway aimed to connect the northeastern states to the mainland, unlocking economic growth for Tripura, Manipur, and Mizoram. 

The steep, mountainous terrain demanded precision, with 21,76,526 cubic meters of hill cutting and over 2,86,472 cubic meters of gabion retaining walls to hold back the earth. Frequent landslides and unseasonal rains turned construction into a race against nature. 

Beyond natural challenges, human obstacles loomed large. Local protests over land compensation and demands for community benefits disrupted progress. The team worked tirelessly to mediate with local councils and resolve encroachment issues while ensuring approvals flowed smoothly.

Standing on the on-going highway, we know we are building more than just a road—we are bridging a gap and connecting dreams to reality.`,
    heroImage: "/projects/default-hero.jpg",
    images: [
      "/projects/default-hero.jpg",
      "/projects/default-hero.jpg"
    ],
    details: {
      client: "National Highways Authority of India (NHAI)",
      projectLocation: "Assam, India",
      modeOfContract: "Hybrid Annuity Mode",
      projectValue: "USD 231 Million ~ INR 1924 Crore",
      contractualDateOfCommencement: "16.01.2023",
      contractualDateOfCompletion: "15.01.2026",
      actualDateOfCompletion: "Ongoing",
      projectDuration: "3 Years (1095 Days)"
    },
    category: "Buildings and Highways"
  },
  'khammam-vijayawada-greenfield-highway': {
    title: "More than a highway",
    subtitle: "A foundation for progress",
    period: "2021-23",
    description: `The Khammam-Vijayawada Greenfield Highway project is a bold step toward modernizing Telangana's infrastructure. Spanning 29.92 kilometres, the four-lane access-controlled highway promises a seamless connection between V. Venkatayapalem and Brahmanapalli villages, carving a new economic corridor in the region.

The construction site witnesses 64,000 cubic meters of asphalt and 35,00,000 cubic meters of earthwork transform the rugged landscape into a sleek, paved artery. The highlight of the project is the installation of two massive steel girder bridges, each with a 90-meter span, standing as symbols of engineering brilliance. On another front, embankments are being fortified with live sods of grass, stabilizing the soil and enhancing aesthetics.

But the road to success is not without its hurdles. Disputes over land acquisition rates with local authorities create delays. The team spend weeks navigating tense negotiations, ensuring that both the project and the communities are treated fairly. Meanwhile, the team keeps pushing boundaries by incorporating sustainable practices, such as waste plastic in 5% of the highway's length and planting over 30,000 trees along the route.

Despite all the challenges, the highway is slowly coming to life—a testament to innovation and resilience. `,
    heroImage: "/projects/default-hero.jpg",
    images: [
      "/projects/default-hero.jpg",
      "/projects/default-hero.jpg"
    ],
    details: {
      client: "National Highways Authority of India (NHAI)",
      projectLocation: "Hyderabad, India",
      modeOfContract: "Hybrid Annuity Mode",
      projectValue: "USD 90 Million ~ INR 747 Crore",
      contractualDateOfCommencement: "Yet to confirm",
      contractualDateOfCompletion: "Not yet Allotted",
      actualDateOfCompletion: "Ongoing",
      projectDuration: "2 Years"
    },
    category: "Buildings and Highways"
  },
}

// Helper function to get related projects
export const getRelatedProjects = (currentProjectSlug: string): ProjectDetails[] => {
  const currentProject = projectsData[currentProjectSlug];
  if (!currentProject) return [];

  return Object.entries(projectsData)
    .filter(([slug, project]) => 
      slug !== currentProjectSlug && 
      (project.category === currentProject.category || 
       project.period.slice(-2) === currentProject.period.slice(-2))
    )
    .map(([_, project]) => project)
    .slice(0, 3);
} 