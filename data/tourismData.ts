import { Destination, Attraction, Program, Review } from '../types';

export const destinations: Destination[] = [
  {
    "id": "bali",
    "name": "Bali",
    "slug": "bali",
    "image": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
    "description": "The legendary Island of the Gods, famous for its forested volcanic mountains, iconic rice paddies, beaches, and coral reefs.",
    "attractionCount": 2,
    "quickFacts": {
      "capital": "Denpasar",
      "population": "4.3 Million",
      "language": "Balinese & Indonesian",
      "timezone": "GMT+8 (WITA)"
    },
    "weather": {
      "temperature": "28°C",
      "condition": "Sunny & Tropical"
    },
    "bestTimeToVisit": "April to October (Dry Season)",
    "gallery": [
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1604999333679-b86d54738315?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "jakarta",
    "name": "Jakarta",
    "slug": "jakarta",
    "image": "https://images.unsplash.com/photo-1555899434-94d1368aa7af?w=500&q=80",
    "description": "The dynamic, sprawling capital of Indonesia. A fascinating melting pot of modern skyscrapers, historic colonial quarters, and rich cultural heritage.",
    "attractionCount": 3,
    "quickFacts": {
      "capital": "Jakarta",
      "population": "10.5 Million",
      "language": "Indonesian (Betawi)",
      "timezone": "GMT+7 (WIB)"
    },
    "weather": {
      "temperature": "31°C",
      "condition": "Partly Cloudy"
    },
    "bestTimeToVisit": "June to September",
    "gallery": [
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "yogyakarta",
    "name": "Yogyakarta",
    "slug": "yogyakarta",
    "image": "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?auto=format&fit=crop&w=1200&q=80",
    "description": "The soul of Java, renowned as a center for classical Javanese fine art and culture, from batik and ballet to traditional shadow puppetry.",
    "attractionCount": 4,
    "quickFacts": {
      "capital": "Yogyakarta",
      "population": "3.8 Million",
      "language": "Javanese & Indonesian",
      "timezone": "GMT+7 (WIB)"
    },
    "weather": {
      "temperature": "27°C",
      "condition": "Tropical Warm"
    },
    "bestTimeToVisit": "May to October",
    "gallery": [
      "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1604999333679-b86d54738315?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "lombok",
    "name": "Lombok",
    "slug": "lombok",
    "image": "https://images.unsplash.com/photo-1530948990335-1eb93cbe6430?auto=format&fit=crop&w=1200&q=80",
    "description": "An unspoiled paradise east of Bali, known for its pristine white-sand beaches, crystal clear waters, Gili islands, and majestic Mount Rinjani.",
    "attractionCount": 1,
    "quickFacts": {
      "capital": "Mataram",
      "population": "3.5 Million",
      "language": "Sasak & Indonesian",
      "timezone": "GMT+8 (WITA)"
    },
    "weather": {
      "temperature": "29°C",
      "condition": "Tropical Breeze"
    },
    "bestTimeToVisit": "May to October",
    "gallery": [
      "https://images.unsplash.com/photo-1530948990335-1eb93cbe6430?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1582298538104-fc2c095a436c?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "bogor",
    "name": "Bogor",
    "slug": "bogor",
    "image": "https://images.unsplash.com/photo-1633948450914-46f57be6ba2c?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "description": "A charming city south of Jakarta, known for its cooler climate, colonial-era botanical gardens, and surrounding mountains.",
    "attractionCount": 1,
    "quickFacts": {
      "capital": "Bogor",
      "population": "1.1 Million",
      "language": "Sundanese & Indonesian",
      "timezone": "GMT+7 (WIB)"
    },
    "weather": {
      "temperature": "26°C",
      "condition": "Rainy & Cool"
    },
    "bestTimeToVisit": "May to September",
    "gallery": [
      "https://images.unsplash.com/photo-1590564313998-f58448839002?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "dieng",
    "name": "Dieng Plateau",
    "slug": "dieng",
    "image": "https://images.unsplash.com/photo-1724667523248-cb55bf707427?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "description": "A misty volcanic plateau in Central Java, famous for multi-colored lakes, ancient Hindu temples, and dramatic sunrise views.",
    "attractionCount": 1,
    "quickFacts": {
      "capital": "Wonosobo",
      "population": "800,000",
      "language": "Javanese & Indonesian",
      "timezone": "GMT+7 (WIB)"
    },
    "weather": {
      "temperature": "15°C",
      "condition": "Misty & Cold"
    },
    "bestTimeToVisit": "June to August",
    "gallery": [
      "https://images.unsplash.com/photo-1597050519391-7667d0256860?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "bromo",
    "name": "Mount Bromo",
    "slug": "bromo",
    "image": "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "description": "Part of the Bromo Tengger Semeru National Park, showcasing active volcanic craters, dramatic sand seas, and epic sunrise viewpoints.",
    "attractionCount": 1,
    "quickFacts": {
      "capital": "Probolinggo",
      "population": "N/A",
      "language": "Tenggerese & Indonesian",
      "timezone": "GMT+7 (WIB)"
    },
    "weather": {
      "temperature": "12°C",
      "condition": "Cold & Clear"
    },
    "bestTimeToVisit": "April to October",
    "gallery": [
      "https://images.unsplash.com/photo-1602183188581-9b165d4b5683?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "purwakarta",
    "name": "Purwakarta",
    "slug": "purwakarta",
    "image": "https://images.unsplash.com/photo-1761565966665-8ae515401a8b?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "description": "A scenic regency in West Java, home to the massive Jatiluhur Dam, scenic volcanic hills, and rich Sundanese cultural history.",
    "attractionCount": 1,
    "quickFacts": {
      "capital": "Purwakarta",
      "population": "1 Million",
      "language": "Sundanese & Indonesian",
      "timezone": "GMT+7 (WIB)"
    },
    "weather": {
      "temperature": "29°C",
      "condition": "Sunny"
    },
    "bestTimeToVisit": "May to September",
    "gallery": [
      "https://images.unsplash.com/photo-1626266028882-963a7df23023?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "banyuwangi",
    "name": "Banyuwangi",
    "slug": "banyuwangi",
    "image": "https://images.unsplash.com/photo-1596389996692-c9a70a9bca46?q=80&w=2662&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "description": "The \"Sunrise of Java\", located on the eastern tip of Java, serving as the gateway to Ijen Crater and wild national parks.",
    "attractionCount": 1,
    "quickFacts": {
      "capital": "Banyuwangi",
      "population": "1.7 Million",
      "language": "Osing & Javanese",
      "timezone": "GMT+7 (WIB)"
    },
    "weather": {
      "temperature": "28°C",
      "condition": "Tropical Warm"
    },
    "bestTimeToVisit": "July to September",
    "gallery": [
      "https://images.unsplash.com/photo-1604999333679-b86d54738315?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "toba",
    "name": "Lake Toba",
    "slug": "toba",
    "image": "https://images.unsplash.com/photo-1601058497548-f247dfe349d6?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "description": "The largest volcanic lake in the world, featuring Samosir Island at its center, surrounded by majestic pine-covered peaks and Batak culture.",
    "attractionCount": 2,
    "quickFacts": {
      "capital": "Balige",
      "population": "N/A",
      "language": "Batak & Indonesian",
      "timezone": "GMT+7 (WIB)"
    },
    "weather": {
      "temperature": "22°C",
      "condition": "Cool & Fresh"
    },
    "bestTimeToVisit": "May to September",
    "gallery": [
      "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "palembang",
    "name": "Palembang",
    "slug": "palembang",
    "image": "https://images.unsplash.com/photo-1598675551183-1b091d43f99f?q=80&w=3392&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "description": "One of the oldest cities in Southeast Asia, capital of the ancient Srivijaya Kingdom, famous for the Musi River and Pempek culinary arts.",
    "attractionCount": 1,
    "quickFacts": {
      "capital": "Palembang",
      "population": "1.6 Million",
      "language": "Palembang Malay & Indonesian",
      "timezone": "GMT+7 (WIB)"
    },
    "weather": {
      "temperature": "31°C",
      "condition": "Hot & Humid"
    },
    "bestTimeToVisit": "June to September",
    "gallery": [
      "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "makassar",
    "name": "Makassar (Malino)",
    "slug": "makassar",
    "image": "https://images.unsplash.com/photo-1647611158121-8d819856ce30?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "description": "The largest city in Eastern Indonesia, gateway to the highland resort town of Malino with pine forests and waterfalls.",
    "attractionCount": 1,
    "quickFacts": {
      "capital": "Makassar",
      "population": "1.5 Million",
      "language": "Buginese & Makassarese",
      "timezone": "GMT+8 (WITA)"
    },
    "weather": {
      "temperature": "24°C",
      "condition": "Cool & Mountain Breeze"
    },
    "bestTimeToVisit": "July to October",
    "gallery": [
      "https://images.unsplash.com/photo-1542856391-010fb87dcfed?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1647611158121-8d819856ce30?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  {
    "id": "lampung",
    "name": "Lampung",
    "slug": "lampung",
    "image": "https://images.unsplash.com/photo-1662083823095-c509c12e3d7d?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "description": "The southern gateway to Sumatra, featuring pristine bays like Pahawang, coral reefs, and wild elephant national parks.",
    "attractionCount": 2,
    "quickFacts": {
      "capital": "Bandar Lampung",
      "population": "9 Million",
      "language": "Lampungese & Indonesian",
      "timezone": "GMT+7 (WIB)"
    },
    "weather": {
      "temperature": "28°C",
      "condition": "Coastal Breeze"
    },
    "bestTimeToVisit": "May to October",
    "gallery": [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "semarang",
    "name": "Semarang",
    "slug": "semarang",
    "image": "https://images.unsplash.com/photo-1625967445155-bf8cc0412e9b?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "description": "A historic port city on Java's north coast, featuring colonial Lawang Sewu and a vibrant Chinatown.",
    "attractionCount": 2,
    "quickFacts": {
      "capital": "Semarang",
      "population": "1.8 Million",
      "language": "Javanese & Indonesian",
      "timezone": "GMT+7 (WIB)"
    },
    "weather": {
      "temperature": "30°C",
      "condition": "Sunny & Coastal"
    },
    "bestTimeToVisit": "June to August",
    "gallery": [
      "https://images.unsplash.com/photo-1579294819770-5b1285074b62?auto=format&fit=crop&w=800&q=80"
    ]
  }
];

export const attractions: Attraction[] = [
  {
    "id": "monas",
    "name": "National Monument (Monas)",
    "slug": "monas",
    "destinationId": "jakarta",
    "image": "https://images.unsplash.com/photo-1740500892840-c6f243e2c71e?q=80&w=2352&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "description": "A 132-meter tower in the center of Merdeka Square, symbolizing the struggle for Indonesian Independence.",
    "location": "Central Jakarta",
    "rating": 4.5,
    "history": "Commissioned by President Sukarno and opened in 1975, the flame at the top is covered with 35 kg of gold foil, representing independence spirit.",
    "openingHours": "08:00 AM - 04:00 PM",
    "facilities": [
      "Museum of National History",
      "Observation Deck",
      "Electric Trains",
      "Parks",
      "Food Courts"
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "kota-tua",
    "name": "Old Batavia (Kota Tua)",
    "slug": "kota-tua",
    "destinationId": "jakarta",
    "image": "https://images.unsplash.com/photo-1695444297748-7da0c8dac186?q=80&w=985&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "description": "The historic core of Jakarta, boasting 17th-century Dutch colonial buildings centered around Fatahillah Square.",
    "location": "West Jakarta",
    "rating": 4.4,
    "history": "Established by the Dutch East India Company (VOC) in 1619 as Batavia, it was the administrative headquarters of the colonial Dutch Empire in Asia.",
    "openingHours": "24 Hours (Museums close at 03:00 PM)",
    "facilities": [
      "Bicycle Rental",
      "Jakarta History Museum",
      "Cafe Batavia",
      "Street Performers",
      "Train Station"
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "kebun-raya-bogor",
    "name": "Kebun Raya Bogor",
    "slug": "kebun-raya-bogor",
    "destinationId": "bogor",
    "image": "https://images.unsplash.com/photo-1656693156830-0a281c6f866c?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "description": "The world-famous Bogor Botanical Gardens established in 1817, featuring over 13,000 species of tropical plants.",
    "location": "Kota Bogor, Jawa Barat",
    "rating": 4.8,
    "history": "Founded by the Dutch colonial administration. It is the oldest botanical gardens in Southeast Asia and served as a major center for agricultural research.",
    "openingHours": "08:00 AM - 04:00 PM",
    "facilities": [
      "Museum Zoologi",
      "Taman Bunga",
      "Cafe",
      "Restrooms",
      "Parking",
      "Electric cars"
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1590564313998-f58448839002?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "omah-tabon",
    "name": "Omah Tabon Heritage",
    "slug": "omah-tabon",
    "destinationId": "yogyakarta",
    "image": "/omah.webp",
    "description": "A beautiful traditional Javanese wooden house and cultural space located in Bantul, Yogyakarta.",
    "location": "Bantul, Yogyakarta",
    "rating": 4.7,
    "history": "A conserved Javanese heritage compound showing rural Javanese lifestyle, traditional architecture, and serving authentic local culinary feasts.",
    "openingHours": "09:00 AM - 09:00 PM",
    "facilities": [
      "Traditional Restaurant",
      "Cultural Workshop Space",
      "Meeting Area",
      "Restrooms",
      "Parking"
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1579294819770-5b1285074b62?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "kepulauan-seribu",
    "name": "Kepulauan Seribu Bahari",
    "slug": "kepulauan-seribu",
    "destinationId": "jakarta",
    "image": "/bahari.webp",
    "description": "A chain of islands north of Jakarta's coast, offering snorkeling, diving, Stand Up Paddleboarding, and historical fort ruins.",
    "location": "Kepulauan Seribu, DKI Jakarta",
    "rating": 4.6,
    "history": "A historical archipelago containing ruins of 17th-century Dutch forts on Onrust Island, now preserved as an eco-marine national park.",
    "openingHours": "24 Hours (Boat trips leave mornings)",
    "facilities": [
      "Boat Charters",
      "Snorkeling rentals",
      "Diving spots",
      "Guest houses",
      "Restrooms"
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "dieng-plateau",
    "name": "Dieng Temple & Lakes",
    "slug": "dieng-plateau",
    "destinationId": "dieng",
    "image": "/dieng.jpg",
    "description": "A historical active volcanic field in Central Java, boasting 8th-century Hindu temples and the stunning multi-colored Telaga Warna lake.",
    "location": "Wonosobo, Jawa Tengah",
    "rating": 4.8,
    "history": "Dieng was a sacred site for Javanese Hindus in the 8th and 9th centuries. The temples are some of the oldest surviving stone structures in Java.",
    "openingHours": "07:00 AM - 05:00 PM",
    "facilities": [
      "Candi Arjuna Complex",
      "Telaga Warna pathway",
      "Geothermal viewing platform",
      "Local guides",
      "Souvenir shops"
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1597050519391-7667d0256860?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "mount-bromo",
    "name": "Mount Bromo Volcano",
    "slug": "mount-bromo",
    "destinationId": "bromo",
    "image": "https://images.unsplash.com/photo-1602183188581-9b165d4b5683?auto=format&fit=crop&w=800&q=80",
    "description": "An iconic active volcano sitting inside the Tengger Caldera, famous for its massive sea of sand and sunrise trails.",
    "location": "Taman Nasional Bromo Tengger Semeru, Jawa Timur",
    "rating": 4.9,
    "history": "A sacred volcano for the local Tenggerese Hindu people, who perform the annual Yadnya Kasada festival throwing offerings into the active crater.",
    "openingHours": "24 Hours",
    "facilities": [
      "Jeep Rentals",
      "Horse riding trails",
      "Viewing decks",
      "Crater stairs",
      "Restrooms",
      "Food stalls"
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1602183188581-9b165d4b5683?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "waduk-jatiluhur",
    "name": "Waduk Jatiluhur Reservoir",
    "slug": "waduk-jatiluhur",
    "destinationId": "purwakarta",
    "image": "https://images.unsplash.com/photo-1626266028882-963a7df23023?auto=format&fit=crop&w=800&q=80",
    "description": "Indonesia's oldest and largest multi-purpose reservoir, surrounded by beautiful volcanic hills like Gunung Parang.",
    "location": "Purwakarta, Jawa Barat",
    "rating": 4.6,
    "history": "Constructed in 1957 by French engineers, creating a massive 8,300-hectare lake that provides electricity and water to Jakarta and West Java.",
    "openingHours": "08:00 AM - 06:00 PM",
    "facilities": [
      "Water Sports",
      "Boat charters",
      "Camping grounds",
      "Lakeside restaurants",
      "Restrooms",
      "Parking"
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1626266028882-963a7df23023?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "kintamani",
    "name": "Kintamani Batur Volcano",
    "slug": "kintamani",
    "destinationId": "bali",
    "image": "/kintamani.jpg",
    "description": "A spectacular highland region overlooking the active volcano Mount Batur and its crater lake.",
    "location": "Kintamani, Bangli, Bali",
    "rating": 4.8,
    "history": "An ancient volcanic caldera formed thousands of years ago, Mount Batur remains active with volcanic fields and hot springs, sacred to Balinese Hindus.",
    "openingHours": "24 Hours",
    "facilities": [
      "Panoramic Cafes",
      "Hot Springs",
      "Trekking paths",
      "Lake boat charters",
      "Restrooms"
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "taman-gandrung-terakota",
    "name": "Taman Gandrung Terakota",
    "slug": "taman-gandrung-terakota",
    "destinationId": "banyuwangi",
    "image": "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?auto=format&fit=crop&w=800&q=80",
    "description": "A unique cultural site showcasing 1,000 terracotta statues of Gandrung dancers, celebrating Osing tribal agricultural heritage.",
    "location": "Licin, Banyuwangi, Jawa Timur",
    "rating": 4.8,
    "history": "Built by local art conservators to preserve the traditional Gandrung dance, a harvest ritual dance dating back centuries in the Osing community.",
    "openingHours": "08:00 AM - 05:00 PM",
    "facilities": [
      "Amphitheater",
      "Art Gallery",
      "Rice field pathways",
      "Coffee shop",
      "Restrooms",
      "Parking"
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "danau-toba",
    "name": "Danau Toba Caldera",
    "slug": "danau-toba",
    "destinationId": "toba",
    "image": "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?auto=format&fit=crop&w=800&q=80",
    "description": "A spectacular volcanic lake formed by a supervolcanic eruption 74,000 years ago, surrounded by dramatic hills and Batak culture.",
    "location": "Toba Regency, Sumatera Utara",
    "rating": 4.9,
    "history": "The site of the largest supervolcanic eruption in Earth's history, which triggered a volcanic winter and dramatically shaped human evolution.",
    "openingHours": "24 Hours",
    "facilities": [
      "Viewing points",
      "Ferry access",
      "Water sports",
      "Batak villages",
      "Restaurants",
      "Restrooms"
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "kali-talang",
    "name": "Kali Talang Merapi",
    "slug": "kali-talang",
    "destinationId": "yogyakarta",
    "image": "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?auto=format&fit=crop&w=800&q=80",
    "description": "An eco-tourism canyon on the slopes of Mount Merapi, offering majestic, up-close volcanic views.",
    "location": "Balerante, Klaten, Jawa Tengah",
    "rating": 4.7,
    "history": "A river gorge formed by Merapi's historical lava paths, recently converted into a scenic nature park run by the local Balerante community.",
    "openingHours": "06:00 AM - 05:00 PM",
    "facilities": [
      "Viewing decks",
      "Pine forests",
      "Mountain bike trails",
      "Local food stalls",
      "Restrooms",
      "Parking"
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "sirkuit-mandalika",
    "name": "Sirkuit Mandalika",
    "slug": "sirkuit-mandalika",
    "destinationId": "lombok",
    "image": "https://images.unsplash.com/photo-1530948990335-1eb93cbe6430?auto=format&fit=crop&w=800&q=80",
    "description": "The Pertamina Mandalika International Street Circuit, a world-class beachside racetrack host to MotoGP.",
    "location": "Kuta Lombok, Lombok Tengah",
    "rating": 4.8,
    "history": "Completed in 2021 as a key national infrastructure project, integrating a premium race track with the pristine beaches of Kuta Lombok.",
    "openingHours": "08:00 AM - 06:00 PM",
    "facilities": [
      "Grandstands",
      "Pit building",
      "Bicycle tracks",
      "Beach access",
      "Restrooms",
      "Parking"
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1530948990335-1eb93cbe6430?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "pulau-samosir",
    "name": "Pulau Samosir",
    "slug": "pulau-samosir",
    "destinationId": "toba",
    "image": "https://images.unsplash.com/photo-1601058497548-f247dfe349d6?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "description": "A large volcanic island in the center of Lake Toba, the cultural heart of the Batak Toba people.",
    "location": "Samosir Regency, Sumatera Utara",
    "rating": 4.9,
    "history": "An island formed by the resurgent dome of the Toba caldera, Samosir is rich in Batak stone graves, traditional houses, and cultural dance arts.",
    "openingHours": "24 Hours (Ferry required)",
    "facilities": [
      "Ferry ports",
      "Cultural museums",
      "Stone tomb heritage sites",
      "Bicycle rentals",
      "Hotels",
      "Restrooms"
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "lrt-palembang",
    "name": "LRT Palembang",
    "slug": "lrt-palembang",
    "destinationId": "palembang",
    "image": "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=800&q=80",
    "description": "The first Light Rail Transit system in Indonesia, connecting Sultan Mahmud Badaruddin II Airport to Jakabaring Sport City.",
    "location": "Kota Palembang, Sumatera Selatan",
    "rating": 4.6,
    "history": "Completed in 2018 to host the Asian Games, this 22km elevated rail serves as a futuristic landmark and a modern transportation hub in South Sumatra.",
    "openingHours": "06:00 AM - 08:00 PM",
    "facilities": [
      "Elevated Stations",
      "Air-conditioned trains",
      "LRT Pass card",
      "Accessibility lifts",
      "Restrooms"
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "candi-plaosan",
    "name": "Candi Plaosan",
    "slug": "candi-plaosan",
    "destinationId": "yogyakarta",
    "image": "https://images.unsplash.com/photo-1604999333679-b86d54738315?auto=format&fit=crop&w=800&q=80",
    "description": "A pair of beautiful Buddhist temples built in the 9th century, representing a historical alliance between a Hindu King and Buddhist Queen.",
    "location": "Prambanan, Klaten, Jawa Tengah",
    "rating": 4.8,
    "history": "Built by Rakai Pikatan of the Sanjaya Dynasty for his consort Pramodawardhani. It blends Javanese Hindu and Buddhist artistic styles.",
    "openingHours": "08:00 AM - 05:00 PM",
    "facilities": [
      "Twin main temples",
      "Pusaka garden area",
      "Visitor path",
      "Restrooms",
      "Parking"
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1604999333679-b86d54738315?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "kota-malino",
    "name": "Malino Highlands",
    "slug": "kota-malino",
    "destinationId": "makassar",
    "image": "https://images.unsplash.com/photo-1542856391-010fb87dcfed?auto=format&fit=crop&w=800&q=80",
    "description": "A scenic mountain resort town in South Sulawesi, famous for tea estates, pine trees, and Takapala waterfall.",
    "location": "Gowa, Sulawesi Selatan",
    "rating": 4.8,
    "history": "A colonial hill retreat built during Dutch rule in the 1920s to escape the heat of Makassar, known as a lush agricultural garden.",
    "openingHours": "08:00 AM - 06:00 PM",
    "facilities": [
      "Takapala Waterfall access",
      "Tea estate cafe",
      "Pine forest walks",
      "Camping grounds",
      "Restrooms",
      "Parking"
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1542856391-010fb87dcfed?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "rhino-camp-tanggamus",
    "name": "Rhino Camp TNBBS",
    "slug": "rhino-camp-tanggamus",
    "destinationId": "lampung",
    "image": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
    "description": "A conservation research camp deep inside the Bukit Barisan Selatan National Park, protecting the endangered Sumatran Rhinoceros.",
    "location": "Tanggamus, Lampung",
    "rating": 4.7,
    "history": "Established as part of a global effort to conserve the Sumatran Rhinoceros and the dense tropical rainforest of southern Sumatra.",
    "openingHours": "Pre-registered booking only",
    "facilities": [
      "Research station",
      "Ranger office",
      "Camping deck",
      "Jungle pathways",
      "Basic restrooms"
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "pecinan-semarang",
    "name": "Semarang Chinatown",
    "slug": "pecinan-semarang",
    "destinationId": "semarang",
    "image": "https://images.unsplash.com/photo-1579294819770-5b1285074b62?auto=format&fit=crop&w=800&q=80",
    "description": "A historic Chinese settlement area featuring centuries-old temples like Tay Kak Sie and dynamic culinary streets like Gang Lombok.",
    "location": "Semarang, Jawa Tengah",
    "rating": 4.7,
    "history": "Formed in the 17th century after the Dutch moved the Chinese population to a separate quarter. It remains the commercial and spiritual heart of Semarangs Chinese-Indonesian community.",
    "openingHours": "24 Hours (Market open morning & night)",
    "facilities": [
      "Tay Kak Sie Temple",
      "Gang Lombok food stalls",
      "Traditional medicine shops",
      "Restrooms",
      "Parking"
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1579294819770-5b1285074b62?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "alun-alun-yogyakarta",
    "name": "Alun-Alun Kidul Yogyakarta",
    "slug": "alun-alun-yogyakarta",
    "destinationId": "yogyakarta",
    "image": "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?auto=format&fit=crop&w=800&q=80",
    "description": "The southern royal square of Yogyakarta palace, famous for the twin sacred banyan trees and illuminated pedal cars.",
    "location": "City Center, Yogyakarta",
    "rating": 4.6,
    "history": "A critical part of the Yogyakarta Palace alignment. According to myth, anyone who can walk blindfolded between the two banyan trees (Masangin) has a clean heart.",
    "openingHours": "24 Hours (Lively at night)",
    "facilities": [
      "Masangin area",
      "Illuminated rental carts",
      "Angkringan street food stalls",
      "Parking",
      "Restrooms"
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "pulau-pahawang",
    "name": "Pulau Pahawang",
    "slug": "pulau-pahawang",
    "destinationId": "lampung",
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    "description": "A beautiful island in Pesawaran, Lampung, famous for crystal clear waters, clownfish reef gardens, and white sandbars.",
    "location": "Pesawaran, Lampung",
    "rating": 4.8,
    "history": "Once a quiet fishing island, Pahawang has grown into a major eco-tourism diving site in Lampung, protecting its coral reefs and clownfish habitats.",
    "openingHours": "24 Hours (Boat charters leave morning)",
    "facilities": [
      "Snorkeling reefs",
      "Diving centers",
      "Beach villas",
      "Restrooms",
      "Boat docks"
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "desa-wisata-petang",
    "name": "Desa Wisata Petang",
    "slug": "desa-wisata-petang",
    "destinationId": "bali",
    "image": "/petang.webp",
    "description": "An eco-cultural tourist village in Badung, Bali, showcasing authentic rural Balinese farming, bamboo crafts, and river adventures.",
    "location": "Badung, Bali",
    "rating": 4.7,
    "history": "A community-run tourism village designed to promote sustainable eco-tourism and preserve traditional Balinese Subak agriculture in the highlands.",
    "openingHours": "08:00 AM - 05:00 PM",
    "facilities": [
      "Bamboo eco-lodges",
      "Rice field pathways",
      "Ayung River rafting point",
      "Traditional kitchen",
      "Restrooms",
      "Parking"
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "pasar-ambarawa",
    "name": "Pasar Tradisional Ambarawa",
    "slug": "pasar-ambarawa",
    "destinationId": "semarang",
    "image": "https://images.unsplash.com/photo-1579294819770-5b1285074b62?auto=format&fit=crop&w=800&q=80",
    "description": "A lively traditional heritage market in Ambarawa, serving as a hub for local Javanese spices and foods.",
    "location": "Ambarawa, Kabupaten Semarang",
    "rating": 4.5,
    "history": "A historic market near the Dutch military fortress of Willem I, serving as a trading center for Javanese highlands for over a century.",
    "openingHours": "05:00 AM - 03:00 PM",
    "facilities": [
      "Spice stalls",
      "Traditional snack vendors",
      "Heritage buildings",
      "Parking",
      "Restrooms"
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1579294819770-5b1285074b62?auto=format&fit=crop&w=800&q=80"
    ]
  }
];

export const programs: Program[] = [
  {
    "id": "bogor-surviving-in-the-analog-age",
    "name": "SURVIVING IN THE ANALOG AGE",
    "slug": "surviving-in-the-analog-age",
    "destinationId": "bogor",
    "attractionId": "kebun-raya-bogor",
    "image": "/bogor_analog.jpeg",
    "description": "Program team building berbasis destinasi yang mengajak peserta kembali pada kekuatan fundamental manusia di tengah ketergantungan terhadap teknologi. Dalam simulasi \"digital blackout\", peserta ditantang menyelesaikan berbagai misi tanpa bantuan gadget, mengandalkan kemampuan berpikir strategis, komunikasi, navigasi analog, dan kolaborasi tim di tengah keindahan dan kekayaan sejarah Kebun Raya Bogor.",
    "duration": "4 s/d 6 jam",
    "price": 550000,
    "rating": 4.9,
    "reviewsCount": 77,
    "category": "Adventure and Challenge",
    "highlights": [
      "Peserta akan mendapatkan experience Dimana system yang serba digital saat ini, tiba2 down (rekayasa tidak boleh menggunakan gadget), menentukan arah yang biasanya menggunakan aplikasi map, dalam program ini harus menggunakan Kompas (kemampuan tambahan bagi peserta)"
    ],
    "included": [
      "Tiket masuk Kebun Raya Bogor",
      "Design program",
      "Atribut Bandana/Slayer, Rain Coat, Banner Event",
      "Asuransi",
      "Peralatan & pendukung (games dll)",
      "SDM",
      "Air minum selama kegiatan berlangsung",
      "Dokumentasi (video & photo)"
    ],
    "excluded": [
      "Transportasi",
      "Konsumsi",
      "Kaos & atribut lain",
      "Biaya/keperluan pribadi"
    ],
    "meetingPoint": "Lokasi Kegiatan",
    "itinerary": [
      {
        "title": "07.30 – 08.00",
        "activities": [
          "Opening & Conditionong",
          "Main area",
          "Treasury hunt Framing"
        ]
      },
      {
        "title": "08.00 – 10.00",
        "activities": [
          "Finding The Treasury",
          "KBR",
          "Gamess & Reward"
        ]
      },
      {
        "title": "10.00 – 10.30",
        "activities": [
          "We Are One",
          "Main area",
          "Final Project"
        ]
      },
      {
        "title": "10.30 – 11.00",
        "activities": [
          "Wrap up & Conculsion",
          "Main area",
          "Sharing experience"
        ]
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1590564313998-f58448839002?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "yogyakarta-busana-gunungan-berkah-csr-budaya-yang-mempererat-kebersamaan",
    "name": "Busana & Gunungan Berkah: CSR Budaya yang Mempererat Kebersamaan",
    "slug": "busana-gunungan-berkah-csr-budaya-yang-mempererat-kebersamaan",
    "destinationId": "yogyakarta",
    "attractionId": "omah-tabon",
    "image": "/csr.jpeg",
    "description": "Program CSR dan budaya yang mengajak peserta menjadi \"Abdi Dalem Perusahaan\" dalam sebuah perjalanan budaya Jawa yang penuh makna. Peserta menjalankan misi berburu hasil bumi di pasar tradisional, mengenakan busana adat Jawa, merakit Gunungan Lanang dan Gunungan Wadon, hingga mengarak dan membagikan gunungan kepada masyarakat sebagai simbol rasa syukur, kebersamaan, dan kepedulian sosial.",
    "duration": "4 jam / half day",
    "price": 1750000,
    "rating": 4.9,
    "reviewsCount": 37,
    "category": "Community and Social Impact",
    "highlights": [
      "Pengalaman menjadi \"Abdi Dalem Perusahaan\" dalam misi budaya Jawa.",
      "Berbelanja langsung di pasar tradisional Yogyakarta untuk menyiapkan bahan gunungan.",
      "Mengenakan kebaya dan busana adat Jawa lengkap beserta filosofinya.",
      "Merakit dua jenis gunungan tradisional:",
      "Gunungan Lanang (simbol kekuatan dan penciptaan kehidupan)",
      "Gunungan Wadon (simbol kesuburan dan kesejahteraan)",
      "Prosesi arak-arakan dan pembagian gunungan kepada masyarakat sebagai aktivitas CSR.",
      "Perpaduan unik antara team building, cultural immersion, dan social impact program.",
      "Mendorong kolaborasi, gotong royong, serta rasa syukur melalui pengalaman yang mendalam dan bermakna."
    ],
    "included": [
      "Fasilitator profesional (Lead & Tim),",
      "kebaya/baju adat Jawa untuk dipakai selama program,",
      "semua bahan (sayuran, buah-buahan, umbi-umbian, wajik, jadah,  rengginang, kerupuk, dan kue tradisional),",
      "peralatan merakit gunungan,",
      "tandu untuk arak-arakan,",
      "dokumentasi foto dan video profesional,",
      "sertifikat peserta,",
      "air minum dan snack, serta",
      "seluruh biaya retribusi pasar dan sewa lokasi."
    ],
    "excluded": [
      "Biaya transportasi peserta dari titik kumpul menuju Lokasi Kegiatan"
    ],
    "meetingPoint": "Omah Tabon",
    "itinerary": [
      {
        "title": "08.00 / 30 menit",
        "activities": [
          "OPENING: Registrasi &  Pembukaan Misi",
          "Omah Tabon",
          "Sambutan adat,",
          "pembagian kostum",
          "Jawa, dan panduan cara  mengenakannya.."
        ]
      },
      {
        "title": "08.30 / 45 menit",
        "activities": [
          "MISI I: Tim Lanang ke  Pasar Beringharjo",
          "Pasar Bringharjo",
          "Tim Lanang berbelanja  sayuran mentah (kacang  panjang, cabai, terong),  buah-buahan, dan umbi umbian ."
        ]
      },
      {
        "title": "08.30 / 45 menit",
        "activities": [
          "MISI I: Tim Wadon ke  Pasar Kranggan",
          "Pasar kranggan",
          "Tim Wadon berbelanja  makanan matang: wajik,  jadah, rengginang,",
          "kerupuk, dan aneka kue  tradisional ."
        ]
      },
      {
        "title": "09.15 / 30 menit",
        "activities": [
          "Kembali ke Omah",
          "tabon",
          "Kendaraan",
          "Kedua Tim Kembali ke  Omah Tabon dengan  membawa hasil belanja"
        ]
      },
      {
        "title": "09.45 / 30 menit",
        "activities": [
          "MISI II: memakai",
          "Busana Adat",
          "Omah tabon",
          "Peserta mengenakan  kebaya/baju adat Jawa. Fasilitator menjelaskan  makna dan filosofi",
          "busana . Foto bersama"
        ]
      },
      {
        "title": "10.15 / 60 menit",
        "activities": [
          "MISI III: Briefing &",
          "Merakit Gunungan",
          "Area Pembuatan",
          "Penjelasan teknik",
          "merakit, pembagian",
          "tugas, dan proses",
          "merakit Gunungan",
          "Lanang (sayuran/umbi)  dan Gunungan Wadon  (makanan matang)"
        ]
      },
      {
        "title": "11.15 / 15 menit",
        "activities": [
          "Melihat Karya &",
          "persiapan Mengarak  Gunungan",
          "Area Pembuatan",
          "Mengamati gunungan  dari berbagai sudut,  persiapan tandu dan  arak-arakan."
        ]
      },
      {
        "title": "11.30 / 30 menit",
        "activities": [
          "PUNCAK: Arak-arakan  & Pembagian Berkah",
          "Jalan Sekitar Omah  Tabon",
          "Mengarak gunungan  dan membagikannya  kepada masyarakat",
          "yang lewat."
        ]
      },
      {
        "title": "12.00 / 30 menit",
        "activities": [
          "Penutupan & Debrief",
          "Omah Tabon Resto",
          "Sharing circle,",
          "pembagian sertifikat,  dan pengisian survei  kepuasan."
        ]
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "jakarta-second-life-expedition",
    "name": "SECOND LIFE EXPEDITION",
    "slug": "second-life-expedition",
    "destinationId": "jakarta",
    "attractionId": "kota-tua",
    "image": "/second_live.jpeg",
    "description": "Second Life Expedition adalah program pre-retirement berbasis destinasi yang mengajak calon purnabakti menelusuri jejak perubahan Kota Tua Jakarta sebagai metafora perjalanan menuju kehidupan kedua. Melalui eksplorasi, dialog dengan komunitas lokal, tantangan reflektif, dan workshop perencanaan hidup, peserta menyusun Future Life Map dan Personal Retirement Action Plan agar masa purnabakti menjadi fase hidup yang lebih sehat, produktif, dan bermakna.",
    "duration": "Full Day (08.00-18.00) atau 2 Hari 1 Malam",
    "price": 450000,
    "rating": 4.8,
    "reviewsCount": 85,
    "category": "Community and Social Impact",
    "highlights": [
      "Membantu peserta mempersiapkan transisi dari kehidupan kerja menuju purnabakti melalui pengalaman eksploratif berbasis destinasi. Peserta tidak hanya menerima materi, tetapi mengalami inspirasi kehidupan kedua dari sejarah kota, tokoh lokal, komunitas, dan aktivitas reflektif."
    ],
    "included": [
      "Fasilitator, modul, mission kit, Second Life Passport, worksheet, dokumentasi standar, sertifikat, perlengkapan program, air mineral, dan koordinasi program."
    ],
    "excluded": [
      "Transportasi peserta menuju lokasi kumpul, penginapan (sesuai Kondisi program), konsumsi tambahan, tiket khusus, biaya izin khusus, asuransi tambahan, dokumentasi premium, dan kebutuhan khusus klien."
    ],
    "meetingPoint": "Lokasi Kegiatan",
    "itinerary": [
      {
        "title": "08.00-09.00",
        "activities": [
          "Opening & Mission Briefing: Second Life Explorer",
          "Meeting point / area Kota Tua",
          "Bangun konteks, bagi paspor misi, jelaskan aturan keselamatan."
        ]
      },
      {
        "title": "09.00-10.30",
        "activities": [
          "Kota Tua Exploration: Life Transition Mission",
          "Kota Tua Jakarta",
          "Observasi simbol perubahan; refleksi peran lama dan identitas baru."
        ]
      },
      {
        "title": "10.30-12.00",
        "activities": [
          "Museum Bahari Experience: Legacy Navigation Challenge",
          "Museum Bahari",
          "Gunakan metafora kompas, kapal, navigasi, dan warisan."
        ]
      },
      {
        "title": "12.00-13.00",
        "activities": [
          "Istirahat, makan siang, dan sensory pause",
          "Area lokal/UMKM",
          "Dorong peserta mencatat insight pribadi dalam jurnal."
        ]
      },
      {
        "title": "13.00-14.30",
        "activities": [
          "Sunda Kelapa Reflection Journey: Future Voyage",
          "Pelabuhan Sunda Kelapa",
          "Refleksi pilihan hidup kedua, risiko, dan dukungan yang dibutuhkan."
        ]
      },
      {
        "title": "14.30-16.00",
        "activities": [
          "Community Inspiration Session",
          "Kampung Akuarium / UMKM",
          "Dialog tokoh lokal; tekankan resilience, usaha, dan kontribusi sosial."
        ]
      },
      {
        "title": "16.00-17.00",
        "activities": [
          "Future Life Mapping & Legacy Design Workshop",
          "Ruang debrief / meeting point",
          "Peserta menyusun peta hidup, prioritas, aktivitas, dan rencana 30-90 hari."
        ]
      },
      {
        "title": "17.00-18.00",
        "activities": [
          "Reflection Circle & Commitment Declaration",
          "Ruang debrief / titik penutup",
          "Closing transformatif; deklarasi komitmen; foto bersama; evaluasi.",
          "Rundown Opsi 2 Hari 1 Malam",
          "Hari / Waktu",
          "Sesi",
          "Fokus Pembelajaran",
          "Hari 1 Pagi",
          "Mission Briefing dan Kota Tua Exploration",
          "Menyadari perubahan identitas dan fase hidup.",
          "Hari 1 Siang",
          "Museum Bahari dan Sunda Kelapa Journey",
          "Navigasi masa depan, risiko, dan dukungan.",
          "Hari 1 Sore",
          "Community Resilience Dialogue",
          "Belajar dari komunitas yang bangkit dan pelaku UMKM.",
          "Hari 1 Malam",
          "Life Story Circle",
          "Sharing perjalanan karier, rasa syukur, dan makna peran lama.",
          "Hari 2 Pagi",
          "Health, Wealth, Relationship, Purpose Mapping",
          "Menyusun keseimbangan kehidupan kedua.",
          "Hari 2 Siang",
          "Legacy Design Presentation",
          "Presentasi rencana hidup dan umpan balik kelompok.",
          "Hari 2 Sore",
          "Commitment Ceremony",
          "Deklarasi komitmen pribadi dan penutupan transformatif."
        ]
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1555899434-94d1368aa7af?w=500&q=80"
    ]
  },
  {
    "id": "jakarta-guardians-of-the-thousand-islands",
    "name": "Guardians of the Thousand Islands",
    "slug": "guardians-of-the-thousand-islands",
    "destinationId": "jakarta",
    "attractionId": "kepulauan-seribu",
    "image": "/guardian.jpeg",
    "description": "Guardians of the Thousand Islands adalah program eksplorasi bahari berbasis destinasi yang mengajak peserta menjelajahi keindahan dan kekayaan ekosistem Kepulauan Seribu melalui pengalaman Stand Up Paddle (SUP). Peserta berperan sebagai anggota ekspedisi laut yang bertugas menjelajahi, memahami, dan menjaga kawasan pesisir Indonesia melalui tantangan eksplorasi, observasi lingkungan, navigasi tim, dan refleksi bermakna.\n\nProgram ini memadukan petualangan laut, pembelajaran kolaboratif, dan kesadaran lingkungan dalam pengalaman yang autentik dan transformatif.",
    "duration": "Full Day / 2 Hari 1 Malam",
    "price": 1,
    "rating": 5,
    "reviewsCount": 26,
    "category": "Adventure and Challenge",
    "highlights": [
      "Program ini dirancang untuk menghubungkan peserta dengan laut Indonesia melalui pengalaman eksplorasi  langsung menggunakan Stand Up Paddle Board di Kepulauan Seribu.",
      "Peserta tidak hanya menikmati keindahan alam, tetapi juga mengalami petualangan yang menumbuhkan  kesadaran lingkungan, kolaborasi, kepemimpinan, dan koneksi yang lebih dalam dengan alam.",
      "Yang membuat program ini unik adalah perpaduan antara marine adventure, destination exploration, dan  experiential learning yang hanya dapat dirasakan di ekosistem bahari Kepulauan Seribu."
    ],
    "included": [
      "✔ Lead Facilitator Experiential Learning",
      "✔ Assistant Facilitator",
      "✔ Marine Adventure Guide",
      "✔ Safety Officer",
      "✔ Stand Up Paddle Board",
      "✔ Paddle",
      "✔ Life Jacket",
      "✔ Dry Bag",
      "✔ Modul Aktivitas & Learning Materials",
      "✔ Dokumentasi Foto",
      "✔ Dokumentasi Video Highlight",
      "✔ Transportasi lokal sesuai itinerary",
      "✔ Kapal pendukung (support boat)",
      "✔ Konsumsi selama program",
      "✔ Air mineral",
      "✔ Asuransi aktivitas",
      "✔ First Aid & Safety Equipment",
      "✔ Sertifikat Partisipasi",
      "✔ Reflection & Debrief Session"
    ],
    "excluded": [
      "✖ Transportasi peserta menuju titik keberangkatan (Marina Ancol/Jakarta)",
      "✖ Tiket perjalanan menuju Jakarta (untuk peserta luar kota)",
      "✖ Pengeluaran pribadi",
      "✖ Penginapan tambahan di luar itinerary",
      "✖ Permintaan dokumentasi profesional tambahan (drone khusus, video cinematic full production)",
      "✖ Merchandise atau souvenir khusus",
      "✖ Biaya akibat perubahan itinerary karena cuaca ekstrem atau kondisi force majeure",
      "✖ Pajak (apabila diperlukan sesuai ketentuan yang berlaku)"
    ],
    "meetingPoint": "Marina Ancol, Jakarta Utara.",
    "itinerary": [],
    "gallery": [
      "https://images.unsplash.com/photo-1555899434-94d1368aa7af?w=500&q=80"
    ]
  },
  {
    "id": "dieng-dieng-culture-resonance",
    "name": "Dieng Culture Resonance",
    "slug": "dieng-culture-resonance",
    "destinationId": "dieng",
    "attractionId": "dieng-plateau",
    "image": "/dieng.jpeg",
    "description": "Sebuah perjalanan seni dan budaya yang mengajak peserta merasakan Dieng sebagai ruang budaya pegunungan melalui tiga pengalaman utama: Ritual → Rhythm → Reflection. Peserta tidak hanya mengunjungi destinasi, tetapi terlibat langsung dalam tari ritual, permainan ritme perkusi tradisional, dan penciptaan karya seni kolektif.",
    "duration": "3-4 jam dengan rundown utama 3,5 jam",
    "price": 850000,
    "rating": 4.6,
    "reviewsCount": 17,
    "category": "Cultural Immersion",
    "highlights": [
      "Program ini mengajak peserta mengalami Dieng sebagai dataran tinggi budaya melalui tiga ekspresi seni: gerak, bunyi, dan rupa. Melalui tari ritual di Candi Arjuna, klothekan percussion di Kawah Sikidang, dan puzzle painting di Telaga Menjer, peserta tidak hanya melihat Dieng sebagai destinasi alam, tetapi merasakan bagaimana budaya hidup melalui tubuh, suara, karya, dan kebersamaan."
    ],
    "included": [
      "Fasilitator program, local guide, jip lokal venue to venue, perlengkapan tari ritual sederhana, alat klothekan percussion / media bambu, kanvas kecil, cat, kuas, perlengkapan puzzle painting, perlengkapan program, dokumentasi foto/video, air mineral, coffee break / snack lokal Dieng, P3K dasar, dan tiket wisata."
    ],
    "excluded": [
      "Transportasi menuju dan dari Dieng serta makan siang."
    ],
    "meetingPoint": "Lokasi Kegiatan",
    "itinerary": [
      {
        "title": "08.00-08.20 / 20”",
        "activities": [
          "Opening, Mission Briefing",
          "Candi Arjuna",
          "Pengantar cerita Dieng Culture Resonance dan memasuki benang merah Ritual → Rhythm → Reflection.."
        ]
      },
      {
        "title": "08.20-09.00 / 20”",
        "activities": [
          "Ritual Dancing",
          "Candi Arjuna",
          "Bantu seniman tari lokal melatih aktivitas tari ritual"
        ]
      },
      {
        "title": "09.00-09.20 / 20”",
        "activities": [
          "Jip Transfer",
          "Candi Arjuna menuju Kawah Sikidang menggunakan jip lokal."
        ]
      },
      {
        "title": "09.20-10.00 / 40”",
        "activities": [
          "Klothekan Percussion",
          "Kawah Sikidang",
          "Bantu seniman musik lokal melatih aktivitas klothekan bambu"
        ]
      },
      {
        "title": "10.00-10.20 / 20”",
        "activities": [
          "Jip Transfer",
          "Kawah Sikidang menuju Telaga Menjer menggunakan jip lokal"
        ]
      },
      {
        "title": "10.20-10.35 / 15”",
        "activities": [
          "Coffebreak",
          "Telaga Menjer",
          "Pastikan peserta regrouping, dan siap melanjutkan misi."
        ]
      },
      {
        "title": "10.35-11.15 / 40”",
        "activities": [
          "Puzzle Painting",
          "Telaga Menjer",
          "Pandu menyatukan lukisan menjadi kanvas besar."
        ]
      },
      {
        "title": "11.15-11.30 / 15”",
        "activities": [
          "Debrief & Closing",
          "Telaga Menjer",
          "Berikan final debrief dan tutup dengan makna utama program."
        ]
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1597050519391-7667d0256860?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "bromo-bromo-expedition-guardians-of-the-bromo-caldera",
    "name": "Bromo Expedition: Guardians of The Bromo Caldera",
    "slug": "bromo-expedition-guardians-of-the-bromo-caldera",
    "destinationId": "bromo",
    "attractionId": "mount-bromo",
    "image": "/bromo.jpeg",
    "description": "Kabut Bromo menyimpan sebuah misi. Hanya tim yang bersatu yang mampu menuntaskannya. Bromo Expedition: Guardians of The Caldera adalah program destination-based exploration yang menggabungkan petualangan alam, experiential learning, dan kearifan lokal Suku Tengger dalam sebuah misi epik penyelamatan harmoni Kaldera Bromo.\nPeserta berperan sebagai \"Guardians of The Caldera\", tim terpilih yang ditugaskan untuk mengumpulkan Fragments of Harmony yang tersebar di berbagai titik ikonik Bromo. Dalam perjalanan, peserta akan menghadapi tantangan navigasi, pemecahan masalah, pengambilan keputusan di bawah tekanan, serta refleksi mendalam mengenai kepemimpinan, komunikasi, dan kolaborasi.\nProgram ini dirancang untuk menghadirkan pengalaman yang tidak hanya menyenangkan dan penuh petualangan, tetapi juga menghasilkan pembelajaran nyata yang dapat diterapkan dalam kehidupan dan dunia kerja.",
    "duration": "Full day (00.00-12.00)",
    "price": 595000,
    "rating": 4.9,
    "reviewsCount": 66,
    "category": "Nature and Eco-Tourism",
    "highlights": [
      "Program ini hadir untuk mentransformasi pengembangan tim menjadi misi epik penyelamatan harmoni alam, di mana peserta akan merasakan kombinasi menegangkan antara taktik kolaborasi di medan ekstrem dan koneksi magis dengan kearifan lokal suku Tengger. Pengalaman ini sepenuhnya tidak dapat direplikasi di tempat lain karena memanfaatkan lanskap geografis unik lautan pasir aktif dan spiritualitas hidup Sang Kaldera secara langsung sebagai ruang bermain sekaligus refleksi dinamika kelompok."
    ],
    "included": [
      "✓ Transportasi shuttle start Malang Kota",
      "✓ Transportasi jip 4x4 meeting point rest area Tumpang / Wringinanom",
      "✓ Driver, BBM, Parkir",
      "✓ Retribusi kendaraan Jip Paguyuban",
      "✓ Tiket masuk kawasan TNBTS",
      "✓ Asuransi lokasi wisata Kawasan TNBTS",
      "✓ Tour guide yang ramah dan berpengalaman",
      "✓ 7 Destinasi wisata di Bromo:",
      "• Sunrise view point",
      "• Widodaren",
      "• Kawah Bromo",
      "• Pura Luhur Poten",
      "• Pasir berbisik",
      "• Savana",
      "• Lembah Watangan",
      "✓ Medical kit/P3K Standar"
    ],
    "excluded": [
      "Hotel,",
      "makan peserta,",
      "video,",
      "perizinan drone di bromo,",
      "transportasi luar kota malang"
    ],
    "meetingPoint": "Lokasi Kegiatan",
    "itinerary": [
      {
        "title": "00.00 – 00.30",
        "activities": [
          "Penjemputan peserta",
          "Kota Malang",
          "Koordinasi kehadiran peserta, pengecekan jumlah dan kondisi fisik awal, briefing singkat perjalanan dan keselamatan."
        ]
      },
      {
        "title": "00.30 – 01.30",
        "activities": [
          "Perjalanan ke rest area",
          "Rest Area Tumpang / Wringinanom",
          "Shuttle jip, penggunaan toilet, dan memastikan kesiapan sebelum berangkat; pengingat penggunaan pakaian hangat."
        ]
      },
      {
        "title": "01.30 – 03.30",
        "activities": [
          "Perjalanan menuju Bromo",
          "Bromo",
          "Monitoring kondisi peserta selama perjalanan malam dan menjaga ketertiban di kendaraan. Pastikan peserta beristirahat."
        ]
      },
      {
        "title": "03.30 – 05.30",
        "activities": [
          "Sunrise Time",
          "Bukit Kingkong",
          "Atur posisi peserta, briefing keamanan area tebing, dokumentasi, dan pengelolaan waktu sunrise. Pastikan peserta tidak terpencar."
        ]
      },
      {
        "title": "05.30 – 06.30",
        "activities": [
          "Perjalanan menuju Bukit Widodaren",
          "Bromo",
          "Transisi kegiatan, memastikan peserta tetap hangat dan aman, serta persiapan aktivitas reflektif di Widodaren."
        ]
      },
      {
        "title": "06.30 – 07.00",
        "activities": [
          "Explore Wisata",
          "Widodaren",
          "Fasilitasi journaling alam, piknik ringan, dan fun games; menjaga suasana kondusif serta kebersihan area."
        ]
      },
      {
        "title": "07.00 – 08.00",
        "activities": [
          "Explore Wisata",
          "Kawah Gunung Bromo & Pura Luhur Poten",
          "Briefing etika budaya dan keselamatan, pengaturan alur kunjungan, serta pengawasan di area kawah."
        ]
      },
      {
        "title": "08.00 – 09.00",
        "activities": [
          "Explore Wisata",
          "Pasir Berbisik",
          "Arahkan aktivitas eksplorasi dan foto, jaga jarak aman, serta pastikan peserta tidak terpencar."
        ]
      },
      {
        "title": "09.00 – 10.00",
        "activities": [
          "Explore Wisata",
          "Savana & Lembah Watangan",
          "Pengelolaan waktu eksplorasi dan foto, serta penggunaan toilet."
        ]
      },
      {
        "title": "10.00 – 11.00",
        "activities": [
          "Perjalanan kembali ke rest area & shuttle jip",
          "Rest Area Tumpang / Wringinanom",
          "Koordinasi transportasi dan memastikan tidak ada peserta yang tertinggal."
        ]
      },
      {
        "title": "11.00 – 12.00",
        "activities": [
          "Perjalanan kembali ke dropping point",
          "Kota Malang",
          "Koordinasi transportasi dan memastikan tidak ada peserta yang tertinggal."
        ]
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1602183188581-9b165d4b5683?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "purwakarta-corporate-team-leader-team-power-excellence-an-experiential-leadership-character-building-program",
    "name": "CORPORATE TEAM LEADER & TEAM POWER EXCELLENCE – An Experiential Leadership & Character Building Program",
    "slug": "corporate-team-leader-team-power-excellence-an-experiential-leadership-character-building-program",
    "destinationId": "purwakarta",
    "attractionId": "waduk-jatiluhur",
    "image": "https://images.unsplash.com/photo-1626266028882-963a7df23023?auto=format&fit=crop&w=800&q=80",
    "description": "Program experiential learning berbasis alam terbuka yang dirancang untuk membangun karakter, kepemimpinan, teamwork, komunikasi, dan resiliensi karyawan melalui berbagai aktivitas outdoor seperti canoeing, raft building, lintas medan, high rope, dan low rope simulation di kawasan Waduk Jatiluhur.",
    "duration": "Mulai 3 Hari 2 Malam atau 3 Hari 3 Malam.",
    "price": 2000000,
    "rating": 4.5,
    "reviewsCount": 37,
    "category": "Nature and Eco-Tourism",
    "highlights": [
      "Melalui program CORPORATE TEAM LEADER & TEAM POWER EXCELLENCE, para peserta yang merupakan karyawan baik Junior maupun Senior termasuk Board of Director (BOD) dapat menemukan kekuatan bersinergi (Cross Layer & Cross Function) dan mampu beradaptasi dengan berbagai situasi dan kondisi terkini yang secara dinamis berubah serta memahami dan terlatih dalam memenuhi tuntutan dunia bisnis dan korporasi yang menuntut Kepemimpinan (Leading by Example) yang dapat memberi contoh dan kemampuan bergotong royong mencapai pertumbuhan yang sesuai dengan tuntutan Perusahaan.",
      "Melalui SAMAPTA CHARACTER BUILDING BOOT CAMP, para peserta calon karyawan baru dibentuk untuk memiliki kemampuan berkomunikasi (Inter Relationship Skill), siap beradaptasi, suka tantangan dan respect pada lingkungan setempat termasuk para Junior dan Senior di perusahaan."
    ],
    "included": [
      "Fasilitator, Transportasi Bus dan Perahu, Peralatan Safety, Perlengkapan Simulasi,",
      "Perlengkapan Rescue Boat",
      "Makan Minum & Logistik selama aktifitas",
      "Dokumentasi Photo dan Video"
    ],
    "excluded": [
      "Perlengkapan Pribadi (Personal Effect)",
      "Obat2an Pribadi",
      "Camilan (Snakck) Pribadi"
    ],
    "meetingPoint": "Lokasi Kegiatan",
    "itinerary": [],
    "gallery": [
      "https://images.unsplash.com/photo-1626266028882-963a7df23023?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "bali-balinese-gastronomy-experience-the-nyat-nyat-challenge",
    "name": "Balinese Gastronomy Experience - The Nyat – Nyat Challenge",
    "slug": "balinese-gastronomy-experience-the-nyat-nyat-challenge",
    "destinationId": "bali",
    "attractionId": "kintamani",
    "image": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
    "description": "Program experiential learning berbasis gastronomi yang mengajak peserta mengeksplorasi budaya kuliner Bali melalui pengalaman berbelanja di pasar tradisional, memasak hidangan khas Mujair Nyat-Nyat, serta merefleksikan nilai kolaborasi, kepemimpinan, komunikasi, dan adaptasi dalam tim.",
    "duration": "Half day",
    "price": 50000002000000,
    "rating": 4.5,
    "reviewsCount": 72,
    "category": "Culinary Journey",
    "highlights": [
      "Gastronomy Experience adalah sebuah program pembelajaran berbasis Experiential Learning yang mengajak peserta memasuki dunia gastronomi bukan sebagai koki, melainkan sebagai pembelajar. tentang budaya, kerja sama, kreativitas, dan kesadaran terhadap keberlanjutan. Melalui rangkaian tantangan kuliner yang interaktif dan penuh makna, peserta tidak hanya belajar memasak makanan, tetapi juga memahami bagaimana setiap peran, setiap keputusan, dan setiap komunikasi memengaruhi hasil akhir yang dicapai bersama. Dengan pendekatan ini, program Gastronomy bukan lagi sekadar kegiatan memasak, tetapi menjadi simulasi organisasi yang sangat kuat untuk mempelajari kolaborasi, kepemimpinan, komunikasi, inovasi, adaptabilitas, ownership, trust, dan budaya kerja berkinerja tinggi"
    ],
    "included": [
      "Fasilitator, Transport peserta dalam program bukan menuju dan pulang ke venue, Coffee Break, perijinan lokasi, Refreshment Water, alat memasak, modal belanja bahan & Bumbu, Dokumentasi program"
    ],
    "excluded": [
      "Transport peserta menuju Kintamani dan balik/pulang",
      "Penginapan",
      "Pengeluaran di luar harga paket"
    ],
    "meetingPoint": "Lokasi Kegiatan",
    "itinerary": [],
    "gallery": [
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "banyuwangi-beautiful-terracotta-of-banyuwangi",
    "name": "Beautiful Terracotta of Banyuwangi",
    "slug": "beautiful-terracotta-of-banyuwangi",
    "destinationId": "banyuwangi",
    "attractionId": "taman-gandrung-terakota",
    "image": "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?auto=format&fit=crop&w=800&q=80",
    "description": "Sebuah perjalanan pembelajaran berbasis destinasi yang mengajak peserta menjelajahi keindahan budaya, seni, dan alam Banyuwangi melalui pengalaman langsung di Taman Gandrung Terakota. Peserta memasuki peran sebagai Pejalan Gandrung, mengikuti rangkaian eksplorasi budaya dan alam yang dirancang untuk membangun kolaborasi, kepemimpinan, kepekaan lingkungan, serta refleksi diri.",
    "duration": "4 Jam",
    "price": 1450000,
    "rating": 4.8,
    "reviewsCount": 49,
    "category": "Cultural Immersion",
    "highlights": [
      "Program ini mengubah destinasi menjadi ruang belajar yang hidup melalui rangkaian tantangan, observasi, interaksi budaya, eksplorasi alam, dan refleksi, serta menggunakan Taman Gandrung Terakota sebagai sumber utama pengalaman belajar. Setiap tantangan dirancang berdasarkan karakter budaya, lanskap, karya seni, dan ekologi yang hanya dimiliki oleh destinasi ini sebagai ruang pembelajaran. Peserta diajak membangun makna dari setiap pengalaman sehingga memperoleh pembelajaran yang dapat diterapkan dalam kehidupan pribadi, sosial, maupun profesional."
    ],
    "included": [
      "Learning concept, mission kit, all facilitators team, tiket masuk kawasan dan perijinan kegiatan, meals & snack, spanduk/banner/backdrop, air mineral, transport peserta PP hotel - venue, alat & bahan permainan utama, P3K standard, tim medis, dokumentasi foto+video+drone"
    ],
    "excluded": [
      "Biaya menuju dan dari Banyuwangi, akomodasi hotel, hadiah, doorprize, sewa alat, wisata lainnya, mini stage, extra property, personal expenses, sertifikat, asuransi"
    ],
    "meetingPoint": "Lokasi Kegiatan",
    "itinerary": [],
    "gallery": [
      "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "jakarta-the-lost-code",
    "name": "THE LOST CODE",
    "slug": "the-lost-code",
    "destinationId": "jakarta",
    "attractionId": "kota-tua",
    "image": "https://images.unsplash.com/photo-1555899434-94d1368aa7af?w=500&q=80",
    "description": "The Lost Code adalah program Amazing Race berbasis eksplorasi destinasi yang mengajak peserta menjalankan misi mengungkap sebuah kode rahasia yang hilang. Melalui serangkaian tantangan kolaboratif yang tersebar di berbagai titik destinasi Jakarta, peserta dituntut untuk berkomunikasi secara efektif, menyusun strategi, memecahkan masalah, dan bekerja sama untuk mengumpulkan petunjuk hingga berhasil membuka The Lost Code.\n\nProgram ini menghadirkan pengalaman belajar yang menyenangkan sekaligus bermakna, di mana peserta memahami bahwa keberhasilan tidak ditentukan oleh kemampuan individu semata, tetapi oleh kemampuan tim dalam membangun kolaborasi, kepercayaan, dan koordinasi menuju tujuan bersama.",
    "duration": "2 - 4 jam",
    "price": 1000000,
    "rating": 4.7,
    "reviewsCount": 77,
    "category": "Cultural Immersion",
    "highlights": [
      "Amazing Race Experience dengan storyline misteri yang kuat dan engaging.",
      "Memanfaatkan destinasi ikonik Jakarta sebagai arena petualangan nyata.",
      "Menggabungkan eksplorasi kota, pemecahan masalah, dan team challenge.",
      "Mengembangkan keterampilan komunikasi, kolaborasi, strategi, dan pengambilan keputusan.",
      "Menggunakan pendekatan Experiential Learning dengan sesi refleksi dan debrief.",
      "Fleksibel dilaksanakan di berbagai area Jakarta seperti GBK Senayan maupun Kota Tua.",
      "Cocok untuk corporate gathering, employee engagement, leadership development, dan team building."
    ],
    "included": [
      "fasilitator, mission kit, dokumentasi foto, sertifikat, air minum, venue"
    ],
    "excluded": [
      "transportasi peserta, makan siang."
    ],
    "meetingPoint": "Lokasi Kegiatan",
    "itinerary": [
      {
        "title": "00:00 - 00:10",
        "activities": [
          "Opening, Briefing & Mission Introduction"
        ]
      },
      {
        "title": "00:10 - 00:20",
        "activities": [
          "Team Formation & Team Identity Challenge"
        ]
      },
      {
        "title": "00:20 - 00:35",
        "activities": [
          "Challenge 1 – Number Code"
        ]
      },
      {
        "title": "00:35 - 00:50",
        "activities": [
          "Challenge 2 – Finding Picture"
        ]
      },
      {
        "title": "00:50 - 01:05",
        "activities": [
          "Challenge 3 – Dart Balloon Challenge"
        ]
      },
      {
        "title": "01:05 - 01:20",
        "activities": [
          "Challenge 4 – Ring Toss Challenge"
        ]
      },
      {
        "title": "01:20 - 01:35",
        "activities": [
          "Challenge 5 – Code Break Challenge"
        ]
      },
      {
        "title": "01:35 - 01:50",
        "activities": [
          "Final Mission – Unlock The Lost Code"
        ]
      },
      {
        "title": "01:50 - 02:00",
        "activities": [
          "Debrief, Winner Announcement & Closing"
        ]
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1555899434-94d1368aa7af?w=500&q=80"
    ]
  },
  {
    "id": "toba-batak-journey",
    "name": "BATAK JOURNEY",
    "slug": "batak-journey",
    "destinationId": "toba",
    "attractionId": "danau-toba",
    "image": "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?auto=format&fit=crop&w=800&q=80",
    "description": "Danau Toba banyak cerita klasik rakyat Sumatera Utara Juga banyak versi maka dijadikan produk program EL dengan latar belakang budaya dan kultur serta keindahan seperti kepingan surga. aneka ragam marga yang ada di kawasan danau toba.",
    "duration": "Full Day",
    "price": 1200000,
    "rating": 4.7,
    "reviewsCount": 43,
    "category": "Cultural Immersion",
    "highlights": [
      "Mengenal Budaya Batak yang sangat banyak turunan MARGA",
      "Khas kuliner yang sangat spesial",
      "Tempat penuh sejarah",
      "Destinasi wisata seperti kepingan surga"
    ],
    "included": [
      "Suvenir ulos wisata..Sor Tali/Topi Tali",
      "Kapal Wisata",
      "Program",
      "Tiketing Venue",
      "Air Mineral",
      "Back up Sound",
      "Property Memasak",
      "Fasilitator",
      "Lunch 1x prasmanan",
      "Dokumentasi foto dan video berupa file soft copy"
    ],
    "excluded": [
      "Saweran tor tor",
      "Cofee Break."
    ],
    "meetingPoint": "Lokasi Kegiatan",
    "itinerary": [],
    "gallery": [
      "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "yogyakarta-kalitalang-the-living-trail",
    "name": "Kalitalang; The Living Trail",
    "slug": "kalitalang-the-living-trail",
    "destinationId": "yogyakarta",
    "attractionId": "kali-talang",
    "image": "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?auto=format&fit=crop&w=800&q=80",
    "description": "The Living Trail – Where Nature Teaches, Experience Transforms adalah program trekking berbasis experiential learning yang menjadikan alam sebagai ruang belajar untuk pengembangan personal dan tim. Melalui perjalanan di jalur Kalitalang dengan panorama Gunung Merapi, peserta diajak menghadapi berbagai tantangan yang merefleksikan dinamika kehidupan dan pekerjaan: bagaimana beradaptasi, mengambil keputusan, membangun kepercayaan, dan berkolaborasi untuk mencapai tujuan bersama.",
    "duration": "5 Jam",
    "price": 1250000,
    "rating": 4.7,
    "reviewsCount": 87,
    "category": "Nature and Eco-Tourism",
    "highlights": [
      "Trekking experiential learning dengan panorama langsung Gunung Merapi.",
      "Alam sebagai media pembelajaran dan refleksi diri.",
      "Menggunakan metafora perjalanan untuk pengembangan individu dan tim.",
      "Mengangkat nilai adaptabilitas, resiliensi, kolaborasi, dan sustainability.",
      "Mengintegrasikan storytelling tentang Merapi dan ketangguhan masyarakat lereng gunung.",
      "Menghadirkan immersive learning journey yang sulit direplikasi di destinasi lain."
    ],
    "included": [
      "Course Director",
      "Lead Experiential Learning Facilitator",
      "Experiential Learning Facilitator",
      "Logistic & Technical Support",
      "Trek & Safety Facilitator",
      "Medical Team"
    ],
    "excluded": [
      "Creative Program Development",
      "Training Need Analysis",
      "Accident Insurance",
      "First Aid Bag",
      "Venue Permit & Entrance Fee",
      "Meals (Lunch & Snack)",
      "Sound System Standard",
      "Program Properties"
    ],
    "meetingPoint": "Lokasi Kegiatan",
    "itinerary": [
      {
        "title": "08.00 – 08.20",
        "activities": [
          "(20 menit)",
          "Conditioning & Framing: Opening Circle & Storytelling Merapi",
          "Area Parkir/ Pintu Masuk Kalitalang",
          "Jangan terlalu banyak briefing teknis. Bangun rasa kagum (awe) terhadap Merapi dan alam. Fokus pada pertanyaan: \"Apa yang alam dapat ajarkan kepada kita hari ini?\" Hindari menjelaskan learning point terlalu dini."
        ]
      },
      {
        "title": "08.20 – 08.35 (15 menit)",
        "activities": [
          "The Gate of Transformation",
          "“Leave & Carry”",
          "Area Parkir/ Pintu Masuk Kalitalang",
          "Dorong peserta jujur terhadap dirinya sendiri. Tidak perlu sharing panjang. Simpan hasilnya untuk direview kembali saat closing."
        ]
      },
      {
        "title": "08.35 – 09.30 (55 menit)",
        "activities": [
          "The Shifting Path",
          "“Pace Challenge”",
          "Jalur trekking awal menuju area perkebunan / vegetasi",
          "Mulai observasi perilaku alami. Jangan terlalu sering memberi instruksi. Catat siapa yang memimpin, siapa yang menjaga kelompok, siapa yang cenderung pasif.",
          "Biarkan peserta menemukan ritme sendiri. Amati bagaimana kelompok merespon anggota yang lebih lambat.",
          "Debrief Singkat dengan gunakan pertanyaan pendek. Hindari analisis panjang. Fokus pada fakta dan perasaan."
        ]
      },
      {
        "title": "09.30 – 10.40",
        "activities": [
          "(70 menit)",
          "The Resilience Field",
          "“Rise Again Challenge”",
          "Area terbuka dengan view bekas aliran material vulkanik",
          "Ini titik utama munculnya ketidaknyamanan. Jangan menghilangkan frustrasi peserta terlalu cepat. Ketidaknyamanan adalah bahan belajar. Intervensi hanya jika tim benar-benar stuck.",
          "Debrief singkat mulai dengan \"Apa yang terjadi?\" sebelum masuk ke \"Mengapa itu terjadi?\". Hindari memberi kesimpulan sebelum peserta menemukan sendiri maknanya."
        ]
      },
      {
        "title": "10.40 – 11.45",
        "activities": [
          "(65 menit)",
          "The Ecosystem Zone",
          "“Nature Network”",
          "Area vegetasi / jalur alami yang lebih teduh",
          "Fokus observasi pada aliran informasi. Siapa yang mendominasi? Siapa yang tidak didengar? Jangan hanya melihat hasil, tetapi proses interaksi.",
          "Debrief gunakan metafora ekosistem alam. Hubungkan perilaku peserta dengan bagaimana alam bekerja melalui keterhubungan dan saling ketergantungan."
        ]
      },
      {
        "title": "11.45 – 12.20 (35 menit)",
        "activities": [
          "The Survivor’s LEsson",
          "“Decision Under The Pressure”",
          "Area yang menghadap kawasan Kaliadem atau titik yang dapat digunakan untuk storytelling sejarah Merapi",
          "Kurangi instruksi. Biarkan peserta menikmati lanskap. Momen ini penting untuk transisi dari challenge menuju reflection.",
          "Jangan fokus pada benar atau salahnya keputusan. Fokus pada bagaimana keputusan dibuat dan bagaimana tim merespon konsekuensinya."
        ]
      },
      {
        "title": "12.20 – 13.00",
        "activities": [
          "(40 menit)",
          "The Merapi Summit View",
          "“Silent Reflection”",
          "Gardu Pandang Kalitalang / View Point Utama Merapi",
          "aga suasana tetap tenang. Hindari suara pengeras atau briefing panjang. Berikan waktu hening minimal 5 menit sebelum pertanyaan refleksi diberikan. Ini adalah titik emosional tertinggi dalam program.",
          "Sesi debrief hubungkan pengalaman dengan dunia kerja secara bertahap. Hindari ceramah. Gunakan pertanyaan seperti: \"Di mana situasi ini terjadi dalam pekerjaan kita?\""
        ]
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "lombok-amazing-journey-sirkuit-mandalika",
    "name": "Amazing journey Sirkuit Mandalika",
    "slug": "amazing-journey-sirkuit-mandalika",
    "destinationId": "lombok",
    "attractionId": "sirkuit-mandalika",
    "image": "https://images.unsplash.com/photo-1530948990335-1eb93cbe6430?auto=format&fit=crop&w=800&q=80",
    "description": "Amazing Journey Sirkuit Mandalika merupakan program eksplorasi berbasis destinasi yang mengajak peserta merasakan sensasi menjadi seorang pembalap di salah satu sirkuit internasional terbaik di dunia. Melalui perjalanan menyusuri lintasan Sirkuit Mandalika, peserta akan menghadapi berbagai tantangan tim yang memadukan unsur budaya Lombok, kerja sama, strategi, dan semangat kompetitif. Program ini menghadirkan pengalaman unik yang menggabungkan sport tourism, experiential learning, dan destination exploration.",
    "duration": "2 Jam",
    "price": 400000,
    "rating": 4.9,
    "reviewsCount": 70,
    "category": "Adventure and Challenge",
    "highlights": [
      "Eksplorasi di lintasan resmi Sirkuit Internasional Mandalika.",
      "Menghadirkan sensasi menjadi pembalap MotoGP.",
      "Perpaduan sport tourism, budaya Lombok, dan experiential learning.",
      "Tantangan tim yang mendorong komunikasi dan kolaborasi.",
      "Aktivitas interaktif dengan elemen budaya lokal seperti Cukli dan busana adat Sasak.",
      "Penutupan dengan pengalaman eksklusif foto di podium juara."
    ],
    "included": [
      "Tiket masuk sirkuit, sepeda listrik , helm, desain program, air mineral, equipment game,snack"
    ],
    "excluded": [
      "Dokumentasi"
    ],
    "meetingPoint": "Lokasi Kegiatan",
    "itinerary": [
      {
        "title": "16.30 -17.00",
        "activities": [
          "Ice Breaking",
          "Depan garasi pembalap"
        ]
      },
      {
        "title": "17.00 -18.00",
        "activities": [
          "Amazing Journey",
          "Sepanjang lintasin",
          "sirkuitmana?",
          "Instruksi khusus"
        ]
      },
      {
        "title": "18.00 -18.30",
        "activities": [
          "Debriefing",
          "Depan garasi",
          "pembalapDi mana?",
          "Instruksi khusus"
        ]
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1530948990335-1eb93cbe6430?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "toba-samosir-journey-kayu-pun-bisa-menari",
    "name": "Samosir Journey – Kayu Pun Bisa Menari",
    "slug": "samosir-journey-kayu-pun-bisa-menari",
    "destinationId": "toba",
    "attractionId": "pulau-samosir",
    "image": "/samosir.jpeg",
    "description": "program destination-based exploration yang mengajak peserta menyelami filosofi dan kisah budaya Batak melalui legenda Sigale-gale. Peserta diajak menjadi keturunan terakhir Batak Toba yang bertugas menemukan Sigale-gale dan mempelajari tiga tarian Tor-tor melalui serangkaian tantangan berupa mystery box, trekking, bersepeda, hingga eksplorasi Desa Tomok. Program ini menggabungkan petualangan, budaya, dan pembelajaran tentang makna kerja, kolaborasi, serta warisan yang melampaui diri sendiri.",
    "duration": "3 – 4 Jam",
    "price": 1650000,
    "rating": 4.5,
    "reviewsCount": 98,
    "category": "Cultural Immersion",
    "highlights": [
      "Menggabungkan adventure challenge dengan eksplorasi budaya Batak yang autentik.",
      "Berlangsung di kawasan Danau Toba UNESCO Global Geopark.",
      "Menghadirkan pengalaman imersif melalui legenda Sigale-gale dan Tor-tor Batak.",
      "Memadukan trekking, gowes, permainan misi, dan cultural immersion dalam satu rangkaian program.",
      "Memiliki experiential learning yang relevan dengan dunia kerja: purpose, kolaborasi, dan legacy.",
      "Melibatkan komunitas lokal, pemandu lokal, dan pelaku usaha setempat."
    ],
    "included": [
      "1. Fasilitator",
      "2. Media program",
      "3. Property program",
      "4. Retribusi",
      "5. Transportasi selama program",
      "6. Air mineral",
      "7. Backup first aid",
      "8. Backup sound"
    ],
    "excluded": [
      "Fotographer & Videographer",
      "Belanja Souvenir",
      "Akomodasi di Marianna Resort"
    ],
    "meetingPoint": "Lokasi Kegiatan",
    "itinerary": [],
    "gallery": [
      "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "palembang-journey-in-1-hour-lrt-palembang-challenge",
    "name": "Journey in 1 Hour: LRT Palembang Challenge",
    "slug": "journey-in-1-hour-lrt-palembang-challenge",
    "destinationId": "palembang",
    "attractionId": "lrt-palembang",
    "image": "/palembang.jpeg",
    "description": "Program eksplorasi kota berbasis petualangan yang mengajak peserta menjelajahi Palembang menggunakan moda transportasi LRT pertama di luar Pulau Jawa. Peserta ditantang menyelesaikan berbagai misi di sejumlah stasiun, mengungkap sejarah, budaya, kuliner, dan transformasi Kota Palembang melalui pengalaman belajar yang interaktif, kompetitif, dan menyenangkan.",
    "duration": "4 jam",
    "price": 787500,
    "rating": 4.8,
    "reviewsCount": 78,
    "category": "Adventure and Challenge",
    "highlights": [
      "Petualangan seru dan menantang berbatas waktu dengan menggunakan moda LRT di kota Palembang"
    ],
    "included": [
      "Fasilitator, program, air mineral, kartu pass LRT, sertifikat peserta, makan siang, dokumentasi foto, tiket masuk area"
    ],
    "excluded": [
      "Snack dan keperluan pribadi"
    ],
    "meetingPoint": "Lokasi Kegiatan",
    "itinerary": [
      {
        "title": "08.30 / 30 menit",
        "activities": [
          "Pembukaan dan Ice Breaking",
          "Stasiun SMB 2",
          "Buat semangat, happy dan jelas Rules kegiatannya"
        ]
      },
      {
        "title": "09.00 / 150 menit",
        "activities": [
          "Adventure Program",
          "Seluruh Stasiun LRT",
          "Aman dalam kegiatan"
        ]
      },
      {
        "title": "11.30 / 30 menit",
        "activities": [
          "Debrief",
          "Jakabaring Sport City",
          "Refleksi dan Feedback"
        ]
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "jakarta-the-batavia-trail-jakarta-heritage-adventure-challenge",
    "name": "The Batavia Trail – Jakarta Heritage Adventure Challenge",
    "slug": "the-batavia-trail-jakarta-heritage-adventure-challenge",
    "destinationId": "jakarta",
    "attractionId": "kota-tua",
    "image": "https://images.unsplash.com/photo-1555899434-94d1368aa7af?w=500&q=80",
    "description": "Program petualangan urban yang mengajak peserta menjadi Trail Keeper untuk menelusuri jejak Batavia melalui serangkaian tantangan berbasis sejarah, budaya, dan kerja sama tim. Peserta bergerak dari Kota Tua hingga Glodok untuk memecahkan clue, mengumpulkan bukti perjalanan, dan menyusun Trail Code sebagai komitmen perilaku yang dibawa pulang.",
    "duration": "Paket utama Half Day 4-5 jam. Tersedia Lite 3 jam, Full Day 7-8 jam, dan Corporate Challenge Lab",
    "price": 295000,
    "rating": 4.6,
    "reviewsCount": 18,
    "category": "Adventure and Challenge",
    "highlights": [
      "Urban adventure berbasis kawasan heritage Jakarta Barat.",
      "Menggabungkan sejarah, budaya, dan experiential learning.",
      "Menggunakan metode clue hunt dan mission challenge.",
      "Cocok untuk sekolah, korporasi, komunitas, dan keluarga.",
      "Memiliki sesi refleksi dan Trail Code yang menghubungkan pengalaman dengan kehidupan nyata dan dunia kerja.",
      "Dapat disesuaikan untuk berbagai segmen peserta dan kebutuhan organisasi."
    ],
    "included": [
      "Lead facilitator, co-facilitator sesuai rasio, safety officer, mission kit, clue card, map challenge, lanyard/ID sederhana, air minum/refill, dokumentasi foto standar, P3K, sertifikat digital."
    ],
    "excluded": [
      "Transportasi peserta, parkir, makan siang, tiket tambahan di luar paket, asuransi tambahan, venue khusus, konsumsi premium, bilingual facilitator, dan biaya izin khusus jika muncul."
    ],
    "meetingPoint": "Lokasi Kegiatan",
    "itinerary": [
      {
        "title": "08.00-08.20",
        "activities": [
          "Registrasi, hydration check, mission kit",
          "Taman Fatahillah",
          "Cek peserta, lanyard, kelompok, emergency contact."
        ]
      },
      {
        "title": "08.20-08.45",
        "activities": [
          "Opening: The Trail Begins",
          "Taman Fatahillah",
          "Script pembuka, safety, peran Trail Keeper."
        ]
      },
      {
        "title": "08.45-09.30",
        "activities": [
          "Checkpoint 1 - Decision Maze",
          "Museum Sejarah Jakarta",
          "Clue sejarah, keputusan rute, mini debrief."
        ]
      },
      {
        "title": "09.30-10.15",
        "activities": [
          "Checkpoint 2 - Trust Challenge",
          "Museum Bank Indonesia / area sekitar",
          "Koordinasi pendaftaran jika masuk museum; opsi outdoor clue jika tidak masuk."
        ]
      },
      {
        "title": "10.15-11.00",
        "activities": [
          "Checkpoint 3 - Riverside Evidence Hunt",
          "Kali Besar",
          "Photo evidence, observasi, peta, dan batas waktu."
        ]
      },
      {
        "title": "11.00-11.35",
        "activities": [
          "Checkpoint 4 - Final Code Walk",
          "Glodok/Pancoran atau titik terdekat",
          "Komunikasi etis, clue akhir, dan nilai keberagaman."
        ]
      },
      {
        "title": "11.35-12.15",
        "activities": [
          "Trail Code Council",
          "Area teduh Kota Tua",
          "Presentasi bukti, nilai, dan solusi tim."
        ]
      },
      {
        "title": "12.15-12.45",
        "activities": [
          "After-Trail Reflection & Victory Ritual",
          "Area debrief",
          "Debrief EL, action card, foto bersama."
        ]
      },
      {
        "title": "08.00-08.20",
        "activities": [
          "Registrasi, hydration check, mission kit",
          "Taman Fatahillah",
          "Cek peserta, lanyard, kelompok, emergency contact."
        ]
      },
      {
        "title": "08.20-08.45",
        "activities": [
          "Opening: The Trail Begins",
          "Taman Fatahillah",
          "Script pembuka, safety, peran Trail Keeper."
        ]
      },
      {
        "title": "08.45-09.30",
        "activities": [
          "Checkpoint 1 - Decision Maze",
          "Museum Sejarah Jakarta",
          "Clue sejarah, keputusan rute, mini debrief."
        ]
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1555899434-94d1368aa7af?w=500&q=80"
    ]
  },
  {
    "id": "yogyakarta-plaosan-past-present-future",
    "name": "Plaosan - Past, Present, Future",
    "slug": "plaosan-past-present-future",
    "destinationId": "yogyakarta",
    "attractionId": "candi-plaosan",
    "image": "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?auto=format&fit=crop&w=800&q=80",
    "description": "Program eksplorasi sejarah dan budaya yang mengajak peserta menyusuri jejak peradaban di Candi Plaosan, sebuah candi unik yang merepresentasikan akulturasi dua agama besar pada masa lampau. Melalui berbagai tantangan dan misi, peserta diajak kembali ke masa lalu untuk memahami nilai toleransi, peradaban, dan pembelajaran yang relevan bagi kehidupan masa kini.",
    "duration": "4 jam halfday",
    "price": 240000,
    "rating": 4.6,
    "reviewsCount": 74,
    "category": "Cultural Immersion",
    "highlights": [
      "Eksplorasi di Candi Plaosan, candi dengan sejarah akulturasi dua agama yang unik di Indonesia.",
      "Menggabungkan unsur sejarah, budaya, dan experiential learning.",
      "Menghadirkan pengalaman “kembali ke masa lampau” melalui misi dan tantangan eksplorasi."
    ],
    "included": [
      "Fasilitator, Master Game, Dokumentasi, Perijinan, Mineral water"
    ],
    "excluded": [
      "Konsumsi snack dan makan siang"
    ],
    "meetingPoint": "Lokasi Kegiatan",
    "itinerary": [],
    "gallery": [
      "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "makassar-malino-amazing-journey",
    "name": "MALINO AMAZING JOURNEY",
    "slug": "malino-amazing-journey",
    "destinationId": "makassar",
    "attractionId": "kota-malino",
    "image": "/malino.jpeg",
    "description": "Malino Amazing Journey adalah sebuah program perjalanan ke destinasi-destinasi yang khas dan unik yang dapat memberikan pengalaman yang berkesan bagi yang mengalaminya. Dikemas dengan konsep Eksperiential Learning, peserta akan merasakan pengalaman berpetualang sambil belajar bekerja sama dalam satu tim. Peserta akan melakukan perjalanan ke destinasi yang mewakili unsur culture, kuliner dan heritage di sekitar lokasi kegiatan. Di setiap lokasi, peserta akan dihadapkan kepada tantangan yang harus diselesaikan untuk memperoleh petunjuk menuju perjalanan berikutnya sampai ke garis finish.",
    "duration": "3 – 4 jam",
    "price": 450000,
    "rating": 4.6,
    "reviewsCount": 62,
    "category": "Adventure and Challenge",
    "highlights": [
      "Peserta melakukan perjalanan ke beberapa destinasi khas di Malino yang mewakili unsur wisata alam (Air Terjun Takapala), kuliner (Cendol Malino/Tenteng Malino/Kopi Luwak Malino) dan heritage (Balla Lompoa)."
    ],
    "included": [
      "Mission Kit, Media Transportasi, Dokumentasi, Snack, Sertifikat, HTM Destinasi"
    ],
    "excluded": [
      "Biaya perjalanan Makassar - Malino",
      "Hotel / Penginapan",
      "Atribut dll"
    ],
    "meetingPoint": "Lokasi Kegiatan",
    "itinerary": [
      {
        "title": "09.00 – 09.30 / 30 menit",
        "activities": [
          "Penjelasan Program",
          "Start Point",
          "Scan QR Code"
        ]
      },
      {
        "title": "09.30 – 11.30 /120 menit",
        "activities": [
          "Perjalanan (Journey) Peserta",
          "Semua destinasi",
          "Ikuti instruksi yang telah disiapkan"
        ]
      },
      {
        "title": "11.30 – 12.00 / 30 menit",
        "activities": [
          "Penyelesaian tugas (upload video)",
          "Finish Point",
          "Ikuti instruksi yang telah disiapkan"
        ]
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1542856391-010fb87dcfed?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "lampung-sasmita-rimba-ritual-utusan-datuk-tnbbs",
    "name": "SASMITA RIMBA: RITUAL UTUSAN DATUK TNBBS",
    "slug": "sasmita-rimba-ritual-utusan-datuk-tnbbs",
    "destinationId": "lampung",
    "attractionId": "rhino-camp-tanggamus",
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    "description": "Sebuah ekspedisi imersif selama 4 jam di jantung Taman Nasional Bukit Barisan Selatan, di mana peserta bertransformasi menjadi \"Utusan Datuk\" yang menjalankan misi konservasi melalui river trekking, jungle tracking, pelacakan jejak Gajah Sumatra, dan pencarian habitat Rafflesia arnoldii. Program ini dirancang untuk meluruhkan ego, membangun resiliensi, serta memperkuat kolaborasi tim melalui pengalaman alam yang autentik dan penuh makna.",
    "duration": "4 Jam",
    "price": 750000,
    "rating": 4.6,
    "reviewsCount": 24,
    "category": "Adventure and Challenge",
    "highlights": [
      "Di dalam jantung TNBBS, keajaiban terbesar tidak lahir dari kekuatan untuk berdiri sendiri, melainkan dari keberanian untuk saling terhubung dan bersandar. Program ini dikemas sebagai sebuah simulasi peran (role-play expedition) intensif selama 4 jam yang menantang resiliensi (daya juang) fisik dan mental peserta. Di sini, keberhasilan tidak dinilai dari siapa yang tercepat, melainkan bagaimana setiap individu mampu menekan ego mereka untuk saling bersandar, berkolaborasi, dan menjaga keselarasan dengan tim serta alam demi menyelesaikan misi konservasi"
    ],
    "included": [
      "SIMAKSI",
      "Pemandu lokal",
      "air mineral",
      "expedition kit",
      "fasilitator",
      "Makan siang",
      "Dokumentasi ( foto & video )"
    ],
    "excluded": [
      "Penginapan",
      "Transportasi ke Krui"
    ],
    "meetingPoint": "Lokasi Kegiatan",
    "itinerary": [
      {
        "title": "08.00 / 20’",
        "activities": [
          "Peserta tiba di Gerbang Batas TNBBS.",
          "Pembukaan oleh Pemandu lokal sebagai Tetua Adat dengan membacakan narasi \"Perjanjian Lama\".",
          "Pembagian kelompok (5-7 orang) dan pembagian peran sakral secara mandiri (Sang Malim, Pawang Jejak, Bujang Penjaga, Tabib Rimba, Pewarta Rimba).",
          "Pendistribusian Kit Utusan (Peta Buta, Kompas, Logbook, P3K",
          "Peserta tiba di Gerbang Batas TNBBS"
        ]
      },
      {
        "title": "08.20 / 60’",
        "activities": [
          "Perjalanan dimulai dengan memasuki jalur aliran sungai TNBBS.",
          "The Challenge: Berjalan menyusuri arus air dan batuan licin. Sang Malim menavigasi arah, Bujang Penjaga mengatur keselamatan barisan.",
          "Ultimate Team Challenge (Menit ke-08.50): Tim harus menyeberangi area sungai terdalam menggunakan formasi rantai manusia tanpa tali (Rope-less Chain) untuk menjaga agar Logbook Ekspedisi tidak basah.",
          "Perjalanan dimulai dengan memasuki jalur aliran sungai TNBBS."
        ]
      },
      {
        "title": "09.20 / 60’",
        "activities": [
          "Tim keluar dari sungai dan masuk ke vegetasi hutan hujan tropis yang rapat dan lembap.",
          "Stamina mulai terkuras, medan mulai menanjak.",
          "The Challenge: Pawang Jejak memimpin tim merunduk di lantai hutan untuk mencari dan mengidentifikasi minimal 3 bukti autentik jejak Gajah Sumatra (Datuk). Pewarta Rimba mencatat koordinat dan menggambarnya di logbook. Tabib Rimba mencari vegetasi obat tradisional di sekitar jalur",
          "Tim keluar dari sungai dan masuk ke vegetasi hutan hujan tropis yang rapat dan lembap."
        ]
      },
      {
        "title": "10.20 / 40’",
        "activities": [
          "Tim bergerak cepat di bawah tekanan batas waktu menuju koordinat habitat Rafflesia arnoldii.",
          "The Challenge: Menemukan inang tanaman merambat (liana) tempat bunga raksasa tersebut tumbuh. Ketelitian diuji di tengah kelelahan fisik puncak.",
          "Begitu bunga/kuncup ditemukan, seluruh anggota tim wajib meletakkan perlengkapan dan berdiri melingkar",
          "Koordinat habitat Rafflesia arnoldii."
        ]
      },
      {
        "title": "11.00 / 30’",
        "activities": [
          "Aktivitas: Duduk melingkar di bawah kanopi hutan purba di dekat area habitat.",
          "Memulai Ritual Hening Rimba selama 3 menit (mata terpejam, gawai mati).",
          "Fasilitasi Debrief: The Mentor mengumpulkan logbook dan memimpin diskusi reflektif (What & So What?) mengenai peluruhan ego, arti penting saling bersandar dalam tim, serta filosofi ketangguhan hidup dari bunga Rafflesia",
          "Vegetasi Lembap & Habitat Rafflesia"
        ]
      },
      {
        "title": "11.30 / 30",
        "activities": [
          "Perjalanan keluar dari kawasan hutan menuju kebun masyarakat penyangga TNBBS.",
          "Aktivitas: Peserta menuliskan satu komitmen aksi nyata tanpa ego (Sumpah Utusan) di selembar kertas.",
          "Kertas diserahkan secara simbolis kepada perwakilan warga sebagai tiket masuk perjamuan.",
          "Selebrasi: Menikmati makan siang bersama dengan menu kuliner tradisional khas lokal yang disiapkan oleh warga desa penyangga. Program selesai.",
          "Kebun Masyarakat Penyangga"
        ]
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "jakarta-capital-quest-the-nation-builders",
    "name": "Capital Quest: The Nation Builders",
    "slug": "capital-quest-the-nation-builders",
    "destinationId": "jakarta",
    "attractionId": "monas",
    "image": "https://images.unsplash.com/photo-1555899434-94d1368aa7af?w=500&q=80",
    "description": "Peserta berperan sebagai Nation Builders: tim yang ditugaskan menelusuri jejak  keputusan-keputusan besar yang membentuk Indonesia, dari Monas, Museum Nasional, Istiqlal-Katedral,  hingga Lapangan Banteng. Di setiap titik, tim memecahkan tantangan yang mengungkap hidden connection  antara sejarah dan kepemimpinan modern. Puncaknya: menyusun Blueprint Bangsa, dokumen nilai-nilai tim yang  terinspirasi dari perjalanan Nation Builders dan dibawa pulang sebagai kompas kerja",
    "duration": "3-4 jam",
    "price": 350000,
    "rating": 4.8,
    "reviewsCount": 85,
    "category": "Adventure and Challenge",
    "highlights": [
      "Capital Quest hadir untuk membuktikan bahwa nilai-nilai terbaik sebuah tim sudah  pernah diwujudkan dalam skala bangsa, dan jejaknya masih bisa ditemukan di kawasan Monas hingga  Lapangan Banteng. Seluruh tantangan dirancang dari karakter nyata lokasi: arsitektur Monas yang  monumental, koleksi 140.000+ artefak Museum Nasional, dialog toleransi Istiqlal-Katedral, dan sejarah  Lapangan Banteng. Pengalaman ini tidak bisa direplikasi di ruangan mana pun."
    ],
    "included": [
      "Fasilitator dan Game Master Marshal di setiap titik, tiket masuk monas, mission kit  (peta custom, mission sheet, kartu clue), briefing dan debriefing, dokumentasi foto,  air minum peserta, Blueprint Bangsa (lembar nilai tim)"
    ],
    "excluded": [
      "Transportasi peserta, makan dan minum peserta, kostum tematik (lanyard dan ID  card Nation Builders), videografi dan highlight reel, merchandise"
    ],
    "meetingPoint": "Lokasi Kegiatan",
    "itinerary": [
      {
        "title": "08.30 / 30 menit",
        "activities": [
          "Registrasi dan briefing  umum",
          "Area parkir Monas / titik  kumpul",
          "Distribusikan mission kit,  otoped/sepeda listrik  disiapkan"
        ]
      },
      {
        "title": "09.00 / 15 menit",
        "activities": [
          "Character reveal dan  mission briefing: Nation  Builders",
          "Kaki Monas",
          "Bacakan narasi",
          "pembuka. Peserta",
          "menerima identitas",
          "Nation Builders dan misi  pertama"
        ]
      },
      {
        "title": "09.15 / 165 menit",
        "activities": [
          "Eksplorasi 4 titik, final  mission Blueprint",
          "Bangsa, debrief, dan",
          "penutupan",
          "Monas, Museum  Nasional, Istiqlal Katedral, Lapangan  Banteng",
          "Game Master Marshal  standby di setiap titik.  Blueprint Bangsa",
          "disusun di Lapangan  Banteng. Selesai pukul  12.00"
        ]
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1555899434-94d1368aa7af?w=500&q=80"
    ]
  },
  {
    "id": "semarang-the-bamboo-scroll-secrets-of-the-perfect-fold",
    "name": "THE BAMBOO SCROLL: SECRETS OF THE PERFECT FOLD",
    "slug": "the-bamboo-scroll-secrets-of-the-perfect-fold",
    "destinationId": "semarang",
    "attractionId": "pecinan-semarang",
    "image": "https://images.unsplash.com/photo-1579294819770-5b1285074b62?auto=format&fit=crop&w=800&q=80",
    "description": "Rahasia cita rasa yang abadi tidak terletak pada ketatnya takaran resep, melainkan pada konsistensi nilai yang dijaga lintas generasi.",
    "duration": "3,5 Jam (210 Menit)",
    "price": 280000,
    "rating": 4.9,
    "reviewsCount": 20,
    "category": "Culinary Journey",
    "highlights": [
      "Fisik: Mengaktifkan indra taktil saat menguleni kulit lumpia, serta indra gustatori dan olfaktori saat pematangan.",
      "Pengetahuan: Memahami asimilasi sosiologis Tionghoa-Jawa lewat jalur kuliner",
      "perdagangan Semarang.",
      "Emosional: Menyadari nilai ketekunan, integritas terhadap kualitas proses, dan",
      "kebanggaan atas sebuah karya tangan."
    ],
    "included": [
      "1. Customize Games Challenge Activity",
      "2. Master Games/Ice Breaker",
      "3. Fasilitator Experiential Learning 1:10-12 peserta",
      "4. Tim Logistic Support",
      "5. EL Program Design",
      "6. Standard First Aid Kit",
      "7. Program Leader",
      "8. Tim Advance",
      "9. Alat Games",
      "10. Profesional Fotografer",
      "11. Short Video",
      "12. Ijin pemakaian lokasi",
      "13. BONUS 1 Box Lunpia"
    ],
    "excluded": [
      "Transportasi Peserta dari lokasi asal, Makan Siang, Belanja Oleh-oleh Lunpia pribadi"
    ],
    "meetingPoint": "Lokasi Kegiatan",
    "itinerary": [],
    "gallery": [
      "https://images.unsplash.com/photo-1579294819770-5b1285074b62?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "yogyakarta-jogja-heritage-quest",
    "name": "Jogja Heritage Quest",
    "slug": "jogja-heritage-quest",
    "destinationId": "yogyakarta",
    "attractionId": "alun-alun-yogyakarta",
    "image": "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?auto=format&fit=crop&w=800&q=80",
    "description": "Peserta akan menjelajahi berbagai ikon budaya Jogja melalui serangkaian tantangan yang menguji kerja sama, kreativitas, dan strategi. Di setiap lokasi, tim akan mengumpulkan atribut serta petunjuk yang menjadi bagian dari perjalanan mereka hingga akhirnya disatukan dalam Solving The Big Puzzle, sebagai simbol bahwa setiap pengalaman dan kontribusi individu memiliki peran penting dalam mencapai tujuan bersama.",
    "duration": "4 – 8 Jam",
    "price": 1550000,
    "rating": 4.9,
    "reviewsCount": 59,
    "category": "Adventure and Challenge",
    "highlights": [
      "Jogja Heritage Quest hadir sebagai program Indonesia Destination-Based Exploration untuk mengungkap seluk-beluk sejarah dan kearifan lokal Yogyakarta melalui petualangan interaktif."
    ],
    "included": [
      "Program, Property Games, Sound System, Crowd Permit, Banner Photo, Bajaj & Becak Transport, Best Team Prize 1, 2, 3, Dokumentasi Highlight, Man. Power, Jas Hujan bila hujan, P3K"
    ],
    "excluded": [
      "Venue",
      "Food & Drink",
      "Ppn",
      "Insurance"
    ],
    "meetingPoint": "Lokasi Kegiatan",
    "itinerary": [
      {
        "title": "08.00 / 45’",
        "activities": [
          "Ice Breaking &",
          "Grouping serta",
          "Briefing",
          "Hotel / Venue Awal",
          "Kondisioning",
          "peserta,",
          "pembagian",
          "kelompok,",
          "pembagian Mission  Sheet dan atribut."
        ]
      },
      {
        "title": "08.45 / 15’",
        "activities": [
          "Mobilisasi ke",
          "Lapangan",
          "Menuju Titik Nol  KM",
          "Drop peserta di",
          "area Titik Nol KM  menggunakan",
          "transportasi yang  disiapkan."
        ]
      },
      {
        "title": "09.00 / 30’",
        "activities": [
          "1st Mission: Break  the Code",
          "POS 1: Titik Nol",
          "KM",
          "Pemecahan teka teki visual arsitektur  kolonial. Kelompok  langsung jalan kaki  ke Pos 2 (~400m)."
        ]
      },
      {
        "title": "09.30 / 30’",
        "activities": [
          "2nd Mission:",
          "Transaksi Budaya",
          "POS 2: Pasar",
          "Beringharjo",
          "Berburu Aksesoris  Jogja asli. Refleksi  singkat 5 menit",
          "dilakukan di akhir  pos ini."
        ]
      },
      {
        "title": "10.00 / 30’",
        "activities": [
          "3rd Mission: Aksara  Jawa & Becak",
          "POS 3: Selasar",
          "Malioboro",
          "Misi",
          "menerjemahkan  petunjuk Aksara  Jawa & steel tower,  dilanjutkan naik",
          "Becak menuju post  4 dengan becak",
          "(1,2 km)."
        ]
      },
      {
        "title": "10.30 / 30’",
        "activities": [
          "4th Mission:",
          "Membuat video",
          "POS 4 : Gapura",
          "Utara alun-alun",
          "Misi membuat",
          "video kearifan jogja  dengan team"
        ]
      },
      {
        "title": "11.00 / 15’",
        "activities": [
          "Mobilisasi ke",
          "Venue Akhir",
          "Menuju Final Pos",
          "Menggunakan bajaj"
        ]
      },
      {
        "title": "11.15 / 15’",
        "activities": [
          "Final Mission: Big  Puzzle",
          "Collaboration",
          "Venue Final",
          "Semua kelompok  menyatukan",
          "potongan misi.",
          "Refleksi singkat 5  menit dilakukan setelah rakitan",
          "selesai."
        ]
      },
      {
        "title": "11.30 / 30’",
        "activities": [
          "Debrief Mendalam  & Foto Bersama",
          "Venue Final",
          "Debrief 20 menit  mengaitkan filosofi  program dengan  dunia kerja,",
          "pengumuman",
          "pemenang, dan",
          "foto bersama."
        ]
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "lampung-roots-and-reefs",
    "name": "Roots and Reefs",
    "slug": "roots-and-reefs",
    "destinationId": "lampung",
    "attractionId": "pulau-pahawang",
    "image": "/suhita.jpeg",
    "description": "program eksplorasi alam selama 2 hari 1 malam yang mengajak peserta memahami hubungan antara daratan, laut, dan manusia melalui pengalaman langsung bersama ekosistem lebah madu dan konservasi terumbu karang. Peserta akan memanen madu, membuat eco printing, menyelami kehidupan bawah laut, serta terlibat dalam transplantasi terumbu karang sebagai bentuk nyata kepedulian terhadap lingkungan.",
    "duration": "2 hari 1 malam",
    "price": 2000000,
    "rating": 4.9,
    "reviewsCount": 69,
    "category": "Nature and Eco-Tourism",
    "highlights": [
      "Menggabungkan pengalaman daratan dan laut dalam satu program terpadu.",
      "Panen madu langsung bersama beekeeper profesional.",
      "Aktivitas eco printing dengan material alami yang dikumpulkan sendiri oleh peserta.",
      "Terlibat langsung dalam transplantasi terumbu karang di Pulau Pahawang.",
      "Snorkeling di area terumbu karang sehat dan area konservasi.",
      "Pembelajaran konservasi yang didampingi fasilitator, edukator, dan komunitas lokal.",
      "Program berbasis keberlanjutan dan pelibatan masyarakat setempat."
    ],
    "included": [
      "Fasilitator, edukator, dokumentasi, tenaga relawan, guide snorkeling, penyelam, makan & minum selama kegiatan, kapal penyebrangan, alat keselamatan, paket harvesting honeycomb, bis medium"
    ],
    "excluded": [
      "Pembelian produk Madu, asuransi, souvenir & seragam, obat pribadi, pembelian diluar paket"
    ],
    "meetingPoint": "Lokasi Kegiatan",
    "itinerary": [],
    "gallery": [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "bali-tri-hita-karana",
    "name": "Tri Hita Karana",
    "slug": "tri-hita-karana",
    "destinationId": "bali",
    "attractionId": "desa-wisata-petang",
    "image": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
    "description": "Program team building berbasis filosofi Bali Tri Hita Karana yang mengajak peserta membangun keseimbangan antara Purpose (Parahyangan), People (Pawongan), dan Impact (Palemahan). Melalui serangkaian tantangan kolaboratif, eksplorasi desa, dan interaksi dengan masyarakat lokal, peserta belajar membangun kepercayaan, kepemimpinan, dan dampak positif dalam tim.",
    "duration": "2 hari 1 malam",
    "price": 3750000,
    "rating": 4.5,
    "reviewsCount": 27,
    "category": "Adventure and Challenge",
    "highlights": [
      "Team building berbasis filosofi asli Bali, Tri Hita Karana.",
      "Diselenggarakan di Desa Wisata Petang yang masih autentik dan sarat nilai budaya.",
      "Menggabungkan experiential learning, cultural immersion, dan nature-based activities.",
      "Mendorong penguatan komunikasi, kepemimpinan, kolaborasi, dan kesadaran akan dampak sosial serta lingkungan.",
      "Melibatkan komunitas lokal dan memberikan manfaat ekonomi bagi masyarakat setempat."
    ],
    "included": [
      "Licensed Facilitator & Team Building Instructor, Team Building Equipment & Game Materials, Seluruh Aktivitas dan Tantangan Program, Penggunaan Area Desa Wisata Petang, Transportasi PP menuju lokasi kegiatan, Akomodasi 1 Malam Menginap di Tenda (Camping Experience), Makan dan Coffee Break selama program berlangsung, Air Mineral selama kegiatan, Dokumentasi Foto Kegiatan, First Aid Kit & Safety Support, Sertifikat."
    ],
    "excluded": [
      "Tiket Pesawat, Asuransi"
    ],
    "meetingPoint": "Lokasi Kegiatan",
    "itinerary": [],
    "gallery": [
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "semarang-the-bamboo-scroll-secrets-of-the-perfect-fold-alt",
    "name": "THE BAMBOO SCROLL: SECRETS OF THE PERFECT FOLD",
    "slug": "the-bamboo-scroll-secrets-of-the-perfect-fold",
    "destinationId": "semarang",
    "attractionId": "pecinan-semarang",
    "image": "https://images.unsplash.com/photo-1579294819770-5b1285074b62?auto=format&fit=crop&w=800&q=80",
    "description": "Rahasia cita rasa yang abadi tidak terletak pada ketatnya takaran resep, melainkan pada konsistensi nilai yang dijaga lintas generasi.",
    "duration": "3,5 Jam (210 Menit)",
    "price": 280000,
    "rating": 4.5,
    "reviewsCount": 25,
    "category": "Culinary Journey",
    "highlights": [
      "Fisik: Mengaktifkan indra taktil saat menguleni kulit lumpia, serta indra gustatori dan olfaktori saat pematangan.",
      "Pengetahuan: Memahami asimilasi sosiologis Tionghoa-Jawa lewat jalur kuliner",
      "perdagangan Semarang.",
      "Emosional: Menyadari nilai ketekunan, integritas terhadap kualitas proses, dan",
      "kebanggaan atas sebuah karya tangan."
    ],
    "included": [
      "Customize Games Challenge Activity, Master Games"
    ],
    "excluded": [
      "Ice Breaker, Fasilitator Experiential Learning 1:10-12 peserta, Tim Logistic Support, EL Program Design, Standard First Aid Kit, Program Leader, Tim Advance, Alat Games, Profesional Fotografer, Short Video, Ijin pemakaian lokasi, BONUS 1 Box Lunpia"
    ],
    "meetingPoint": "Lokasi Kegiatan",
    "itinerary": [],
    "gallery": [
      "https://images.unsplash.com/photo-1579294819770-5b1285074b62?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "semarang-the-javanese-alchemy-from-the-shamans-mortar-to-the-alt",
    "name": "THE JAVANESE ALCHEMY: FROM THE SHAMAN’S MORTAR TO THE",
    "slug": "the-javanese-alchemy-from-the-shamans-mortar-to-the",
    "destinationId": "semarang",
    "attractionId": "pasar-ambarawa",
    "image": "https://images.unsplash.com/photo-1579294819770-5b1285074b62?auto=format&fit=crop&w=800&q=80",
    "description": "Kekuatan sejati seringkali disarikan dari komponen-komponen yang terasa paling pahit  saat pertama kali diekstraksi.",
    "duration": "3,5 Jam (210 Menit)",
    "price": 250000,
    "rating": 4.8,
    "reviewsCount": 64,
    "category": "Culinary Journey",
    "highlights": [
      "Fisik: Menggunakan lumpang dan alu kayu untuk mengekstrak konsentrat rimpang mentah  serta mengaktifkan indra gustatori.",
      "Pengetahuan: Memahami ilmu etnobotani tradisional Jawa (Jamu) yang diakui UNESCO  sebagai warisan budaya tak benda.",
      "Emosional: Membina mentalitas tangguh dalam menerima proses yang berat demi hasil  akhir yang menyehatkan organisasi."
    ],
    "included": [
      "Customize Games Challenge Activity, Master Games"
    ],
    "excluded": [
      "Ice Breaker, Fasilitator Experiential Learning 1:10-12 peserta, Tim Logistic Support, EL Program Design, Standard First Aid Kit, Program Leader, Tim Advance, Alat Games, Profesional Fotografer, Short Video, Ijin pemakaian lokasi , Alat Bahan Membuat Jamu"
    ],
    "meetingPoint": "Lokasi Kegiatan",
    "itinerary": [],
    "gallery": [
      "https://images.unsplash.com/photo-1579294819770-5b1285074b62?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "lampung-sasmita-rimba-ritual-utusan-datuk-tnbbs-alt",
    "name": "SASMITA RIMBA: RITUAL UTUSAN DATUK TNBBS",
    "slug": "sasmita-rimba-ritual-utusan-datuk-tnbbs",
    "destinationId": "lampung",
    "attractionId": "rhino-camp-tanggamus",
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    "description": "Sebuah ekspedisi imersif selama 4 jam di jantung Taman Nasional Bukit Barisan Selatan, di mana peserta bertransformasi menjadi \"Utusan Datuk\" yang menjalankan misi konservasi melalui river trekking, jungle tracking, pelacakan jejak Gajah Sumatra, dan pencarian habitat Rafflesia arnoldii. Program ini dirancang untuk meluruhkan ego, membangun resiliensi, serta memperkuat kolaborasi tim melalui pengalaman alam yang autentik dan penuh makna.",
    "duration": "4 Jam",
    "price": 750000,
    "rating": 4.6,
    "reviewsCount": 82,
    "category": "Adventure and Challenge",
    "highlights": [
      "Di dalam jantung TNBBS, keajaiban terbesar tidak lahir dari kekuatan untuk berdiri sendiri, melainkan dari keberanian untuk saling terhubung dan bersandar. Program ini dikemas sebagai sebuah simulasi peran (role-play expedition) intensif selama 4 jam yang menantang resiliensi (daya juang) fisik dan mental peserta. Di sini, keberhasilan tidak dinilai dari siapa yang tercepat, melainkan bagaimana setiap individu mampu menekan ego mereka untuk saling bersandar, berkolaborasi, dan menjaga keselarasan dengan tim serta alam demi menyelesaikan misi konservasi"
    ],
    "included": [
      "SIMAKSI",
      "Pemandu lokal",
      "air mineral",
      "expedition kit",
      "fasilitator",
      "Makan siang",
      "Dokumentasi ( foto & video )"
    ],
    "excluded": [
      "Penginapan",
      "Transportasi ke Krui"
    ],
    "meetingPoint": "Lokasi Kegiatan",
    "itinerary": [
      {
        "title": "08.00 / 20’",
        "activities": [
          "Peserta tiba di Gerbang Batas TNBBS.",
          "Pembukaan oleh Pemandu lokal sebagai Tetua Adat dengan membacakan narasi \"Perjanjian Lama\".",
          "Pembagian kelompok (5-7 orang) dan pembagian peran sakral secara mandiri (Sang Malim, Pawang Jejak, Bujang Penjaga, Tabib Rimba, Pewarta Rimba).",
          "Pendistribusian Kit Utusan (Peta Buta, Kompas, Logbook, P3K",
          "Peserta tiba di Gerbang Batas TNBBS"
        ]
      },
      {
        "title": "08.20 / 60’",
        "activities": [
          "Perjalanan dimulai dengan memasuki jalur aliran sungai TNBBS.",
          "The Challenge: Berjalan menyusuri arus air dan batuan licin. Sang Malim menavigasi arah, Bujang Penjaga mengatur keselamatan barisan.",
          "Ultimate Team Challenge (Menit ke-08.50): Tim harus menyeberangi area sungai terdalam menggunakan formasi rantai manusia tanpa tali (Rope-less Chain) untuk menjaga agar Logbook Ekspedisi tidak basah.",
          "Perjalanan dimulai dengan memasuki jalur aliran sungai TNBBS."
        ]
      },
      {
        "title": "09.20 / 60’",
        "activities": [
          "Tim keluar dari sungai dan masuk ke vegetasi hutan hujan tropis yang rapat dan lembap.",
          "Stamina mulai terkuras, medan mulai menanjak.",
          "The Challenge: Pawang Jejak memimpin tim merunduk di lantai hutan untuk mencari dan mengidentifikasi minimal 3 bukti autentik jejak Gajah Sumatra (Datuk). Pewarta Rimba mencatat koordinat dan menggambarnya di logbook. Tabib Rimba mencari vegetasi obat tradisional di sekitar jalur",
          "Tim keluar dari sungai dan masuk ke vegetasi hutan hujan tropis yang rapat dan lembap."
        ]
      },
      {
        "title": "10.20 / 40’",
        "activities": [
          "Tim bergerak cepat di bawah tekanan batas waktu menuju koordinat habitat Rafflesia arnoldii.",
          "The Challenge: Menemukan inang tanaman merambat (liana) tempat bunga raksasa tersebut tumbuh. Ketelitian diuji di tengah kelelahan fisik puncak.",
          "Begitu bunga/kuncup ditemukan, seluruh anggota tim wajib meletakkan perlengkapan dan berdiri melingkar",
          "Koordinat habitat Rafflesia arnoldii."
        ]
      },
      {
        "title": "11.00 / 30’",
        "activities": [
          "Aktivitas: Duduk melingkar di bawah kanopi hutan purba di dekat area habitat.",
          "Memulai Ritual Hening Rimba selama 3 menit (mata terpejam, gawai mati).",
          "Fasilitasi Debrief: The Mentor mengumpulkan logbook dan memimpin diskusi reflektif (What & So What?) mengenai peluruhan ego, arti penting saling bersandar dalam tim, serta filosofi ketangguhan hidup dari bunga Rafflesia",
          "Vegetasi Lembap & Habitat Rafflesia"
        ]
      },
      {
        "title": "11.30 / 30",
        "activities": [
          "Perjalanan keluar dari kawasan hutan menuju kebun masyarakat penyangga TNBBS.",
          "Aktivitas: Peserta menuliskan satu komitmen aksi nyata tanpa ego (Sumpah Utusan) di selembar kertas.",
          "Kertas diserahkan secara simbolis kepada perwakilan warga sebagai tiket masuk perjamuan.",
          "Selebrasi: Menikmati makan siang bersama dengan menu kuliner tradisional khas lokal yang disiapkan oleh warga desa penyangga. Program selesai.",
          "Kebun Masyarakat Penyangga"
        ]
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "yogyakarta-jogja-heritage-quest-alt",
    "name": "Jogja Heritage Quest",
    "slug": "jogja-heritage-quest",
    "destinationId": "yogyakarta",
    "attractionId": "alun-alun-yogyakarta",
    "image": "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?auto=format&fit=crop&w=800&q=80",
    "description": "Peserta akan menjelajahi berbagai ikon budaya Jogja melalui serangkaian tantangan yang menguji kerja sama, kreativitas, dan strategi. Di setiap lokasi, tim akan mengumpulkan atribut serta petunjuk yang menjadi bagian dari perjalanan mereka hingga akhirnya disatukan dalam Solving The Big Puzzle, sebagai simbol bahwa setiap pengalaman dan kontribusi individu memiliki peran penting dalam mencapai tujuan bersama.",
    "duration": "4 – 8 Jam",
    "price": 1550000,
    "rating": 4.9,
    "reviewsCount": 91,
    "category": "Adventure and Challenge",
    "highlights": [
      "Jogja Heritage Quest hadir sebagai program Indonesia Destination-Based Exploration untuk mengungkap seluk-beluk sejarah dan kearifan lokal Yogyakarta melalui petualangan interaktif."
    ],
    "included": [
      "Program, Property Games, Sound System, Crowd Permit, Banner Photo, Bajaj & Becak Transport, Best Team Prize 1, 2, 3, Dokumentasi Highlight, Man. Power, Jas Hujan bila hujan, P3K"
    ],
    "excluded": [
      "Venue",
      "Food & Drink",
      "Ppn",
      "Insurance"
    ],
    "meetingPoint": "Lokasi Kegiatan",
    "itinerary": [
      {
        "title": "08.00 / 45’",
        "activities": [
          "Ice Breaking &",
          "Grouping serta",
          "Briefing",
          "Hotel / Venue Awal",
          "Kondisioning",
          "peserta,",
          "pembagian",
          "kelompok,",
          "pembagian Mission  Sheet dan atribut."
        ]
      },
      {
        "title": "08.45 / 15’",
        "activities": [
          "Mobilisasi ke",
          "Lapangan",
          "Menuju Titik Nol  KM",
          "Drop peserta di",
          "area Titik Nol KM  menggunakan",
          "transportasi yang  disiapkan."
        ]
      },
      {
        "title": "09.00 / 30’",
        "activities": [
          "1st Mission: Break  the Code",
          "POS 1: Titik Nol",
          "KM",
          "Pemecahan teka teki visual arsitektur  kolonial. Kelompok  langsung jalan kaki  ke Pos 2 (~400m)."
        ]
      },
      {
        "title": "09.30 / 30’",
        "activities": [
          "2nd Mission:",
          "Transaksi Budaya",
          "POS 2: Pasar",
          "Beringharjo",
          "Berburu Aksesoris  Jogja asli. Refleksi  singkat 5 menit",
          "dilakukan di akhir  pos ini."
        ]
      },
      {
        "title": "10.00 / 30’",
        "activities": [
          "3rd Mission: Aksara  Jawa & Becak",
          "POS 3: Selasar",
          "Malioboro",
          "Misi",
          "menerjemahkan  petunjuk Aksara  Jawa & steel tower,  dilanjutkan naik",
          "Becak menuju post  4 dengan becak",
          "(1,2 km)."
        ]
      },
      {
        "title": "10.30 / 30’",
        "activities": [
          "4th Mission:",
          "Membuat video",
          "POS 4 : Gapura",
          "Utara alun-alun",
          "Misi membuat",
          "video kearifan jogja  dengan team"
        ]
      },
      {
        "title": "11.00 / 15’",
        "activities": [
          "Mobilisasi ke",
          "Venue Akhir",
          "Menuju Final Pos",
          "Menggunakan bajaj"
        ]
      },
      {
        "title": "11.15 / 15’",
        "activities": [
          "Final Mission: Big  Puzzle",
          "Collaboration",
          "Venue Final",
          "Semua kelompok  menyatukan",
          "potongan misi.",
          "Refleksi singkat 5  menit dilakukan setelah rakitan",
          "selesai."
        ]
      },
      {
        "title": "11.30 / 30’",
        "activities": [
          "Debrief Mendalam  & Foto Bersama",
          "Venue Final",
          "Debrief 20 menit  mengaitkan filosofi  program dengan  dunia kerja,",
          "pengumuman",
          "pemenang, dan",
          "foto bersama."
        ]
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "jakarta-capital-quest-the-nation-builders-alt",
    "name": "Capital Quest: The Nation Builders",
    "slug": "capital-quest-the-nation-builders",
    "destinationId": "jakarta",
    "attractionId": "monas",
    "image": "https://images.unsplash.com/photo-1555899434-94d1368aa7af?w=500&q=80",
    "description": "Peserta berperan sebagai Nation Builders: tim yang ditugaskan menelusuri jejak  keputusan-keputusan besar yang membentuk Indonesia, dari Monas, Museum Nasional, Istiqlal-Katedral,  hingga Lapangan Banteng. Di setiap titik, tim memecahkan tantangan yang mengungkap hidden connection  antara sejarah dan kepemimpinan modern. Puncaknya: menyusun Blueprint Bangsa, dokumen nilai-nilai tim yang  terinspirasi dari perjalanan Nation Builders dan dibawa pulang sebagai kompas kerja",
    "duration": "3-4 jam",
    "price": 350000,
    "rating": 4.6,
    "reviewsCount": 89,
    "category": "Adventure and Challenge",
    "highlights": [
      "Capital Quest hadir untuk membuktikan bahwa nilai-nilai terbaik sebuah tim sudah  pernah diwujudkan dalam skala bangsa, dan jejaknya masih bisa ditemukan di kawasan Monas hingga  Lapangan Banteng. Seluruh tantangan dirancang dari karakter nyata lokasi: arsitektur Monas yang  monumental, koleksi 140.000+ artefak Museum Nasional, dialog toleransi Istiqlal-Katedral, dan sejarah  Lapangan Banteng. Pengalaman ini tidak bisa direplikasi di ruangan mana pun."
    ],
    "included": [
      "Fasilitator dan Game Master Marshal di setiap titik, tiket masuk monas, mission kit  (peta custom, mission sheet, kartu clue), briefing dan debriefing, dokumentasi foto,  air minum peserta, Blueprint Bangsa (lembar nilai tim)"
    ],
    "excluded": [
      "Transportasi peserta, makan dan minum peserta, kostum tematik (lanyard dan ID  card Nation Builders), videografi dan highlight reel, merchandise"
    ],
    "meetingPoint": "Lokasi Kegiatan",
    "itinerary": [
      {
        "title": "08.30 / 30 menit",
        "activities": [
          "Registrasi dan briefing  umum",
          "Area parkir Monas / titik  kumpul",
          "Distribusikan mission kit,  otoped/sepeda listrik  disiapkan"
        ]
      },
      {
        "title": "09.00 / 15 menit",
        "activities": [
          "Character reveal dan  mission briefing: Nation  Builders",
          "Kaki Monas",
          "Bacakan narasi",
          "pembuka. Peserta",
          "menerima identitas",
          "Nation Builders dan misi  pertama"
        ]
      },
      {
        "title": "09.15 / 165 menit",
        "activities": [
          "Eksplorasi 4 titik, final  mission Blueprint",
          "Bangsa, debrief, dan",
          "penutupan",
          "Monas, Museum  Nasional, Istiqlal Katedral, Lapangan  Banteng",
          "Game Master Marshal  standby di setiap titik.  Blueprint Bangsa",
          "disusun di Lapangan  Banteng. Selesai pukul  12.00"
        ]
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1555899434-94d1368aa7af?w=500&q=80"
    ]
  }
];

export const reviews: Review[] = [
  {
    "id": "1",
    "name": "Chloe Tremblay",
    "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
    "country": "Canada",
    "rating": 5,
    "text": "INDEX-AELI made our honeymoon in Bali and Labuan Bajo absolutely flawless. The luxury Phinisi cruise was the highlight of our life. Breathtaking scenes!"
  },
  {
    "id": "2",
    "name": "Yuki Tanaka",
    "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
    "country": "Japan",
    "rating": 5,
    "text": "The Borobudur sunrise program was majestic. The guide spoke perfect Japanese and took us to spots away from the crowd. 10/10 highly recommend!"
  },
  {
    "id": "3",
    "name": "Marcus Vance",
    "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
    "country": "Australia",
    "rating": 5,
    "text": "Fascinating local culture, amazing food, and incredible scenery. The booking process was super simple, and the support was extremely fast."
  },
  {
    "id": "4",
    "name": "Amara Diop",
    "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80",
    "country": "France",
    "rating": 4,
    "text": "Gili islands snorkeling was stunning, we swam alongside three huge sea turtles! The only minor issue was high waves on the fast boat, but the crew handled it well."
  }
];
