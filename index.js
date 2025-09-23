const questions = [
    { question: "Click on Afghanistan", lat: 33.93911, lng: 67.709953, country: "Afghanistan" },
    { question: "Click on Albania", lat: 41.153332, lng: 20.168331, country: "Albania" },
    { question: "Click on Algeria", lat: 28.033886, lng: 1.659626, country: "Algeria" },
    { question: "Click on Andorra", lat: 42.546245, lng: 1.601554, country: "Andorra" },
    { question: "Click on Angola", lat: -11.202692, lng: 17.873887, country: "Angola" },
    { question: "Click on Antigua and Barbuda", lat: 17.060816, lng: -61.796428, country: "Antigua and Barbuda" },
    { question: "Click on Argentina", lat: -38.416097, lng: -63.616672, country: "Argentina" },
    { question: "Click on Armenia", lat: 40.069099, lng: 45.038189, country: "Armenia" },
    { question: "Click on Australia", lat: -25.274398, lng: 133.775136, country: "Australia" },
    { question: "Click on Austria", lat: 47.516231, lng: 14.550072, country: "Austria" },
    { question: "Click on Azerbaijan", lat: 40.143105, lng: 47.576927, country: "Azerbaijan" },
    { question: "Click on Bahamas", lat: 25.03428, lng: -77.39628, country: "Bahamas" },
    { question: "Click on Bahrain", lat: 25.930414, lng: 50.637772, country: "Bahrain" },
    { question: "Click on Bangladesh", lat: 23.684994, lng: 90.356331, country: "Bangladesh" },
    { question: "Click on Barbados", lat: 13.193887, lng: -59.543198, country: "Barbados" },
    { question: "Click on Belarus", lat: 53.709807, lng: 27.953389, country: "Belarus" },
    { question: "Click on Belgium", lat: 50.503887, lng: 4.469936, country: "Belgium" },
    { question: "Click on Belize", lat: 17.189877, lng: -88.49765, country: "Belize" },
    { question: "Click on Benin", lat: 9.30769, lng: 2.315834, country: "Benin" },
    { question: "Click on Bhutan", lat: 27.514162, lng: 90.433601, country: "Bhutan" },
    { question: "Click on Bolivia", lat: -16.290154, lng: -63.588653, country: "Bolivia" },
    { question: "Click on Bosnia and Herzegovina", lat: 43.915886, lng: 17.679076, country: "Bosnia and Herzegovina" },
    { question: "Click on Botswana", lat: -22.328474, lng: 24.684866, country: "Botswana" },
    { question: "Click on Brazil", lat: -14.235004, lng: -51.92528, country: "Brazil" },
    { question: "Click on Brunei", lat: 4.535277, lng: 114.727669, country: "Brunei" },
    { question: "Click on Bulgaria", lat: 42.733883, lng: 25.48583, country: "Bulgaria" },
    { question: "Click on Burkina Faso", lat: 12.238333, lng: -1.561593, country: "Burkina Faso" },
    { question: "Click on Burundi", lat: -3.373056, lng: 29.918886, country: "Burundi" },
    { question: "Click on Cabo Verde", lat: 16.002082, lng: -24.013197, country: "Cabo Verde" },
    { question: "Click on Cambodia", lat: 12.565679, lng: 104.990963, country: "Cambodia" },
    { question: "Click on Cameroon", lat: 7.369722, lng: 12.354722, country: "Cameroon" },
    { question: "Click on Canada", lat: 56.130366, lng: -106.346771, country: "Canada" },
    { question: "Click on Central African Republic", lat: 6.611111, lng: 20.939444, country: "Central African Republic" },
    { question: "Click on Chad", lat: 15.454166, lng: 18.732207, country: "Chad" },
    { question: "Click on Chile", lat: -35.675147, lng: -71.542969, country: "Chile" },
    { question: "Click on China", lat: 35.86166, lng: 104.195397, country: "China" },
    { question: "Click on Colombia", lat: 4.570868, lng: -74.297333, country: "Colombia" },
    { question: "Click on Comoros", lat: -11.875001, lng: 43.872219, country: "Comoros" },
    { question: "Click on Congo", lat: -0.228021, lng: 15.827659, country: "Republic of the Congo" },
    { question: "Click on Costa Rica", lat: 9.748917, lng: -83.753428, country: "Costa Rica" },
    { question: "Click on Croatia", lat: 45.1, lng: 15.2, country: "Croatia" },
    { question: "Click on Cuba", lat: 21.521757, lng: -77.781167, country: "Cuba" },
    { question: "Click on Cyprus", lat: 35.126413, lng: 33.429859, country: "Cyprus" },
    { question: "Click on Czech Republic", lat: 49.817492, lng: 15.472962, country: "Czech Republic" },
    { question: "Click on Democratic Republic of the Congo", lat: -4.038333, lng: 21.758664, country: "Democratic Republic of the Congo" },
    { question: "Click on Denmark", lat: 56.26392, lng: 9.501785, country: "Denmark" },
    { question: "Click on Djibouti", lat: 11.825138, lng: 42.590275, country: "Djibouti" },
    { question: "Click on Dominica", lat: 15.414999, lng: -61.370976, country: "Dominica" },
    { question: "Click on Dominican Republic", lat: 18.735693, lng: -70.162651, country: "Dominican Republic" },
    { question: "Click on Ecuador", lat: -1.831239, lng: -78.183406, country: "Ecuador" },
    { question: "Click on Egypt", lat: 26.820553, lng: 30.802498, country: "Egypt" },
    { question: "Click on El Salvador", lat: 13.794185, lng: -88.89653, country: "El Salvador" },
    { question: "Click on Equatorial Guinea", lat: 1.650801, lng: 10.267895, country: "Equatorial Guinea" },
    { question: "Click on Eritrea", lat: 15.179384, lng: 39.782334, country: "Eritrea" },
    { question: "Click on Estonia", lat: 58.595272, lng: 25.013607, country: "Estonia" },
    { question: "Click on Eswatini", lat: -26.522503, lng: 31.465866, country: "Eswatini" },
    { question: "Click on Ethiopia", lat: 9.145, lng: 40.489673, country: "Ethiopia" },
    { question: "Click on Fiji", lat: -16.578193, lng: 179.414413, country: "Fiji" },
    { question: "Click on Finland", lat: 61.92411, lng: 25.748151, country: "Finland" },
    { question: "Click on France", lat: 46.603354, lng: 1.888334, country: "France" },
    { question: "Click on Gabon", lat: -0.803689, lng: 11.609444, country: "Gabon" },
    { question: "Click on Gambia", lat: 13.443182, lng: -15.310139, country: "Gambia" },
    { question: "Click on Georgia", lat: 42.315407, lng: 43.356892, country: "Georgia" },
    { question: "Click on Germany", lat: 51.165691, lng: 10.451526, country: "Germany" },
    { question: "Click on Ghana", lat: 7.946527, lng: -1.023194, country: "Ghana" },
    { question: "Click on Greece", lat: 39.074208, lng: 21.824312, country: "Greece" },
    { question: "Click on Grenada", lat: 12.262776, lng: -61.604171, country: "Grenada" },
    { question: "Click on Guatemala", lat: 15.783471, lng: -90.230759, country: "Guatemala" },
    { question: "Click on Guinea", lat: 9.945587, lng: -9.696645, country: "Guinea" },
    { question: "Click on Guinea-Bissau", lat: 11.803749, lng: -15.180413, country: "Guinea-Bissau" },
    { question: "Click on Guyana", lat: 4.860416, lng: -58.93018, country: "Guyana" },
    { question: "Click on Haiti", lat: 18.971187, lng: -72.285215, country: "Haiti" },
    { question: "Click on Holy See", lat: 41.902916, lng: 12.453389, country: "Vatican City" },
    { question: "Click on Honduras", lat: 15.199999, lng: -86.241905, country: "Honduras" },
    { question: "Click on Hungary", lat: 47.162494, lng: 19.503304, country: "Hungary" },
    { question: "Click on Iceland", lat: 64.963051, lng: -19.020835, country: "Iceland" },
    { question: "Click on India", lat: 20.593684, lng: 78.96288, country: "India" },
    { question: "Click on Indonesia", lat: -0.789275, lng: 113.921327, country: "Indonesia" },
    { question: "Click on Iran", lat: 32.427908, lng: 53.688046, country: "Iran" },
    { question: "Click on Iraq", lat: 33.223191, lng: 43.679291, country: "Iraq" },
    { question: "Click on Ireland", lat: 53.41291, lng: -8.24389, country: "Ireland" },
    { question: "Click on Israel", lat: 31.046051, lng: 34.851612, country: "Israel" },
    { question: "Click on Italy", lat: 41.87194, lng: 12.56738, country: "Italy" },
    { question: "Click on Ivory Coast", lat: 7.539989, lng: -5.54708, country: "Côte d'Ivoire" },
    { question: "Click on Jamaica", lat: 18.109581, lng: -77.297508, country: "Jamaica" },
    { question: "Click on Japan", lat: 36.204824, lng: 138.252924, country: "Japan" },
    { question: "Click on Jordan", lat: 30.585164, lng: 36.238414, country: "Jordan" },
    { question: "Click on Kazakhstan", lat: 48.019573, lng: 66.923684, country: "Kazakhstan" },
    { question: "Click on Kenya", lat: -0.023559, lng: 37.906193, country: "Kenya" },
    { question: "Click on Kiribati", lat: -3.370417, lng: -168.734039, country: "Kiribati" },
    { question: "Click on Kuwait", lat: 29.31166, lng: 47.481766, country: "Kuwait" },
    { question: "Click on Kyrgyzstan", lat: 41.20438, lng: 74.766098, country: "Kyrgyzstan" },
    { question: "Click on Laos", lat: 19.85627, lng: 102.495496, country: "Laos" },
    { question: "Click on Latvia", lat: 56.879635, lng: 24.603189, country: "Latvia" },
    { question: "Click on Lebanon", lat: 33.854721, lng: 35.862285, country: "Lebanon" },
    { question: "Click on Lesotho", lat: -29.609988, lng: 28.233608, country: "Lesotho" },
    { question: "Click on Liberia", lat: 6.428055, lng: -9.429499, country: "Liberia" },
    { question: "Click on Libya", lat: 26.3351, lng: 17.228331, country: "Libya" },
    { question: "Click on Liechtenstein", lat: 47.166, lng: 9.555373, country: "Liechtenstein" },
    { question: "Click on Lithuania", lat: 55.169438, lng: 23.881275, country: "Lithuania" },
    { question: "Click on Luxembourg", lat: 49.815273, lng: 6.129583, country: "Luxembourg" },
    { question: "Click on Madagascar", lat: -18.766947, lng: 46.869107, country: "Madagascar" },
    { question: "Click on Malawi", lat: -13.254308, lng: 34.301525, country: "Malawi" },
    { question: "Click on Malaysia", lat: 4.210484, lng: 101.975766, country: "Malaysia" },
    { question: "Click on Maldives", lat: 3.202778, lng: 73.22068, country: "Maldives" },
    { question: "Click on Mali", lat: 17.570692, lng: -3.996166, country: "Mali" },
    { question: "Click on Malta", lat: 35.937496, lng: 14.375416, country: "Malta" },
    { question: "Click on Marshall Islands", lat: 7.131474, lng: 171.184478, country: "Marshall Islands" },
    { question: "Click on Mauritania", lat: 21.00789, lng: -10.940835, country: "Mauritania" },
    { question: "Click on Mauritius", lat: -20.348404, lng: 57.552152, country: "Mauritius" },
    { question: "Click on Mexico", lat: 23.634501, lng: -102.552784, country: "Mexico" },
    { question: "Click on Micronesia", lat: 7.425554, lng: 150.550812, country: "Micronesia" },
    { question: "Click on Moldova", lat: 47.411631, lng: 28.369885, country: "Moldova" },
    { question: "Click on Monaco", lat: 43.750298, lng: 7.412841, country: "Monaco" },
    { question: "Click on Mongolia", lat: 46.862496, lng: 103.846656, country: "Mongolia" },
    { question: "Click on Montenegro", lat: 42.708678, lng: 19.37439, country: "Montenegro" },
    { question: "Click on Morocco", lat: 31.791702, lng: -7.09262, country: "Morocco" },
    { question: "Click on Mozambique", lat: -18.665695, lng: 35.529562, country: "Mozambique" },
    { question: "Click on Myanmar", lat: 21.913965, lng: 95.956223, country: "Myanmar" },
    { question: "Click on Namibia", lat: -22.95764, lng: 18.49041, country: "Namibia" },
    { question: "Click on Nauru", lat: -0.522778, lng: 166.931503, country: "Nauru" },
    { question: "Click on Nepal", lat: 28.394857, lng: 84.124008, country: "Nepal" },
    { question: "Click on Netherlands", lat: 52.132633, lng: 5.291266, country: "Netherlands" },
    { question: "Click on New Zealand", lat: -40.900557, lng: 174.885971, country: "New Zealand" },
    { question: "Click on Nicaragua", lat: 12.865416, lng: -85.207229, country: "Nicaragua" },
    { question: "Click on Niger", lat: 17.607789, lng: 8.081666, country: "Niger" },
    { question: "Click on Nigeria", lat: 9.081999, lng: 8.675277, country: "Nigeria" },
    { question: "Click on North Korea", lat: 40.339852, lng: 127.510093, country: "North Korea" },
    { question: "Click on North Macedonia", lat: 41.608635, lng: 21.745275, country: "North Macedonia" },
    { question: "Click on Norway", lat: 60.472024, lng: 8.468946, country: "Norway" },
    { question: "Click on Oman", lat: 21.512583, lng: 55.923255, country: "Oman" },
    { question: "Click on Pakistan", lat: 30.375321, lng: 69.345116, country: "Pakistan" },
    { question: "Click on Palau", lat: 7.51498, lng: 134.58252, country: "Palau" },
    { question: "Click on Palestine", lat: 31.952162, lng: 35.233154, country: "Palestine" },
    { question: "Click on Panama", lat: 8.537981, lng: -80.782127, country: "Panama" },
    { question: "Click on Papua New Guinea", lat: -6.314993, lng: 143.95555, country: "Papua New Guinea" },
    { question: "Click on Paraguay", lat: -23.442503, lng: -58.443832, country: "Paraguay" },
    { question: "Click on Peru", lat: -9.189967, lng: -75.015152, country: "Peru" },
    { question: "Click on Philippines", lat: 12.879721, lng: 121.774017, country: "Philippines" },
    { question: "Click on Poland", lat: 51.919438, lng: 19.145136, country: "Poland" },
    { question: "Click on Portugal", lat: 39.399872, lng: -8.224454, country: "Portugal" },
    { question: "Click on Qatar", lat: 25.354826, lng: 51.183884, country: "Qatar" },
    { question: "Click on Romania", lat: 45.943161, lng: 24.96676, country: "Romania" },
    { question: "Click on Russia", lat: 61.52401, lng: 105.318756, country: "Russia" },
    { question: "Click on Rwanda", lat: -1.940278, lng: 29.873888, country: "Rwanda" },
    { question: "Click on Saint Kitts and Nevis", lat: 17.357822, lng: -62.782998, country: "Saint Kitts and Nevis" },
    { question: "Click on Saint Lucia", lat: 13.909444, lng: -60.978893, country: "Saint Lucia" },
    { question: "Click on Saint Vincent and the Grenadines", lat: 12.984305, lng: -61.287228, country: "Saint Vincent and the Grenadines" },
    { question: "Click on Samoa", lat: -13.759029, lng: -172.104629, country: "Samoa" },
    { question: "Click on San Marino", lat: 43.94236, lng: 12.457777, country: "San Marino" },
    { question: "Click on Sao Tome and Principe", lat: 0.18636, lng: 6.613081, country: "São Tomé and Príncipe" },
    { question: "Click on Saudi Arabia", lat: 23.885942, lng: 45.079162, country: "Saudi Arabia" },
    { question: "Click on Senegal", lat: 14.497401, lng: -14.452362, country: "Senegal" },
    { question: "Click on Serbia", lat: 44.016521, lng: 21.005859, country: "Serbia" },
    { question: "Click on Seychelles", lat: -4.679574, lng: 55.491977, country: "Seychelles" },
    { question: "Click on Sierra Leone", lat: 8.460555, lng: -11.779889, country: "Sierra Leone" },
    { question: "Click on Singapore", lat: 1.352083, lng: 103.819836, country: "Singapore" },
    { question: "Click on Slovakia", lat: 48.669026, lng: 19.699024, country: "Slovakia" },
    { question: "Click on Slovenia", lat: 46.151241, lng: 14.995463, country: "Slovenia" },
    { question: "Click on Solomon Islands", lat: -9.64571, lng: 160.156194, country: "Solomon Islands" },
    { question: "Click on Somalia", lat: 5.152149, lng: 46.199616, country: "Somalia" },
    { question: "Click on South Africa", lat: -30.559482, lng: 22.937506, country: "South Africa" },
    { question: "Click on South Korea", lat: 35.907757, lng: 127.766922, country: "South Korea" },
    { question: "Click on South Sudan", lat: 6.876991, lng: 31.306978, country: "South Sudan" },
    { question: "Click on Spain", lat: 40.463667, lng: -3.74922, country: "Spain" },
    { question: "Click on Sri Lanka", lat: 7.873054, lng: 80.771797, country: "Sri Lanka" },
    { question: "Click on Sudan", lat: 12.862807, lng: 30.217636, country: "Sudan" },
    { question: "Click on Suriname", lat: 3.919305, lng: -56.027783, country: "Suriname" },
    { question: "Click on Sweden", lat: 60.128161, lng: 18.643501, country: "Sweden" },
    { question: "Click on Switzerland", lat: 46.818188, lng: 8.227512, country: "Switzerland" },
    { question: "Click on Syria", lat: 34.802075, lng: 38.996815, country: "Syria" },
    { question: "Click on Tajikistan", lat: 38.861034, lng: 71.276093, country: "Tajikistan" },
    { question: "Click on Tanzania", lat: -6.369028, lng: 34.888822, country: "Tanzania" },
    { question: "Click on Thailand", lat: 15.870032, lng: 100.992541, country: "Thailand" },
    { question: "Click on Timor-Leste", lat: -8.874217, lng: 125.727539, country: "East Timor" },
    { question: "Click on Togo", lat: 8.619543, lng: 0.824782, country: "Togo" },
    { question: "Click on Tonga", lat: -21.178986, lng: -175.198242, country: "Tonga" },
    { question: "Click on Trinidad and Tobago", lat: 10.691803, lng: -61.222503, country: "Trinidad and Tobago" },
    { question: "Click on Tunisia", lat: 33.886917, lng: 9.537499, country: "Tunisia" },
    { question: "Click on Turkey", lat: 38.963745, lng: 35.243322, country: "Turkey" },
    { question: "Click on Turkmenistan", lat: 38.969719, lng: 59.556278, country: "Turkmenistan" },
    { question: "Click on Tuvalu", lat: -7.109535, lng: 177.64933, country: "Tuvalu" },
    { question: "Click on Uganda", lat: 1.373333, lng: 32.290275, country: "Uganda" },
    { question: "Click on Ukraine", lat: 48.379433, lng: 31.16558, country: "Ukraine" },
    { question: "Click on United Arab Emirates", lat: 23.424076, lng: 53.847818, country: "United Arab Emirates" },
    { question: "Click on United Kingdom", lat: 55.378051, lng: -3.435973, country: "United Kingdom" },
    { question: "Click on United States", lat: 37.09024, lng: -95.712891, country: "United States of America" },
    { question: "Click on Uruguay", lat: -32.522779, lng: -55.765835, country: "Uruguay" },
    { question: "Click on Uzbekistan", lat: 41.377491, lng: 64.585262, country: "Uzbekistan" },
    { question: "Click on Vanuatu", lat: -15.376706, lng: 166.959158, country: "Vanuatu" },
    { question: "Click on Venezuela", lat: 6.42375, lng: -66.58973, country: "Venezuela" },
    { question: "Click on Vietnam", lat: 14.058324, lng: 108.277199, country: "Vietnam" },
    { question: "Click on Yemen", lat: 15.552727, lng: 48.516388, country: "Yemen" },
    { question: "Click on Zambia", lat: -13.133897, lng: 27.849332, country: "Zambia" },
    { question: "Click on Zimbabwe", lat: -19.015438, lng: 29.154857, country: "Zimbabwe" }
];

// Quiz state
let currentQuestionIndex = 0;
let score = 0;
let totalAnswered = 0;
let currentMarkers = [];
let waitingForAnswer = false;
let countriesLayer = null;

// Initialize map
const map = L.map("map").setView([20, 0], 2);

// Add OpenStreetMap tiles
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
}).addTo(map);

// Get DOM elements
const questionElement = document.getElementById("question");
const scoreElement = document.getElementById("score");
const feedbackElement = document.getElementById("feedback");
const nextButton = document.getElementById("next-question");
const skipButton = document.getElementById("skip-question");
const resetButton = document.getElementById("reset-quiz");

// Load country boundaries data
async function loadCountriesData() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson');
        const data = await response.json();
        
        // Create a layer for countries with invisible styling
        countriesLayer = L.geoJSON(data, {
            style: {
                fillColor: 'transparent',
                weight: 0,
                opacity: 0,
                fillOpacity: 0
            },
            onEachFeature: function(feature, layer) {
                // Store country name in the layer
                layer.countryName = feature.properties.name || feature.properties.NAME || feature.properties.NAME_EN;
            }
        }).addTo(map);
        
    } catch (error) {
        console.warn('Could not load country boundaries, falling back to distance-based detection');
        countriesLayer = null;
    }
}

// Function to shuffle questions array
function shuffleQuestions() {
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
}

// Function to calculate distance between two points (Haversine formula)
function calculateDistance(lat1, lng1, lat2, lng2) {
    const R = 6371; // Earth's radius in kilometers
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLng/2) * Math.sin(dLng/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}

// Function to check if click is within country boundaries
function isClickInCountry(clickLat, clickLng, targetCountry) {
    if (!countriesLayer) {
        // Fallback to distance-based detection
        const currentQuestion = questions[currentQuestionIndex];
        const distance = calculateDistance(clickLat, clickLng, currentQuestion.lat, currentQuestion.lng);
        return distance <= 500; // 500km tolerance
    }

    // Use actual country boundaries
    let clickedCountry = null;
    const clickPoint = L.latLng(clickLat, clickLng);
    
    countriesLayer.eachLayer(function(layer) {
        if (layer.getBounds && layer.getBounds().contains(clickPoint)) {
            // Check if the point is actually inside the polygon
            const geojson = layer.toGeoJSON();
            if (isPointInPolygon(clickPoint, geojson)) {
                clickedCountry = layer.countryName;
                return;
            }
        }
    });
    
    if (!clickedCountry) return false;
    
    // Normalize country names for comparison
    const normalizedClicked = normalizeCountryName(clickedCountry);
    const normalizedTarget = normalizeCountryName(targetCountry);
    
    return normalizedClicked === normalizedTarget;
}

// Function to normalize country names for comparison
function normalizeCountryName(name) {
    if (!name) return '';
    
    // Common name mappings
    const nameMap = {
        'United States of America': 'United States',
        'USA': 'United States',
        'UK': 'United Kingdom',
        'Britain': 'United Kingdom',
        'Great Britain': 'United Kingdom',
        'Cote d\'Ivoire': 'Côte d\'Ivoire',
        'Ivory Coast': 'Côte d\'Ivoire',
        'Czech Rep.': 'Czech Republic',
        'Czechia': 'Czech Republic',
        'Democratic Republic of Congo': 'Democratic Republic of the Congo',
        'DRC': 'Democratic Republic of the Congo',
        'Republic of Congo': 'Republic of the Congo',
        'Congo': 'Republic of the Congo',
        'East Timor': 'Timor-Leste',
        'Vatican': 'Vatican City',
        'Holy See': 'Vatican City',
        'Burma': 'Myanmar',
        'Swaziland': 'Eswatini',
        'Macedonia': 'North Macedonia',
        'FYROM': 'North Macedonia'
    };
    
    let normalized = name.toLowerCase().trim();
    
    // Check if we have a mapping for this name
    for (const [key, value] of Object.entries(nameMap)) {
        if (key.toLowerCase() === normalized) {
            return value.toLowerCase();
        }
    }
    
    return normalized;
}

// Function to check if a point is inside a polygon (ray casting algorithm)
function isPointInPolygon(point, geojson) {
    const lat = point.lat;
    const lng = point.lng;
    
    if (geojson.geometry.type === 'Polygon') {
        return isPointInPolygonRing(lat, lng, geojson.geometry.coordinates[0]);
    } else if (geojson.geometry.type === 'MultiPolygon') {
        for (let polygon of geojson.geometry.coordinates) {
            if (isPointInPolygonRing(lat, lng, polygon[0])) {
                return true;
            }
        }
    }
    return false;
}

// Ray casting algorithm implementation
function isPointInPolygonRing(lat, lng, ring) {
    let inside = false;
    let j = ring.length - 1;
    
    for (let i = 0; i < ring.length; i++) {
        const xi = ring[i][0], yi = ring[i][1];
        const xj = ring[j][0], yj = ring[j][1];
        
        if (((yi > lat) !== (yj > lat)) && (lng < (xj - xi) * (lat - yi) / (yj - yi) + xi)) {
            inside = !inside;
        }
        j = i;
    }
    
    return inside;
}

// Function to clear all markers from the map
function clearMarkers() {
    currentMarkers.forEach(marker => {
        map.removeLayer(marker);
    });
    currentMarkers = [];
}

// Function to load current question
function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
        showFinalScore();
        return;
    }

    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    feedbackElement.textContent = "";
    feedbackElement.className = "";
    nextButton.disabled = true;
    waitingForAnswer = true;
    clearMarkers();
}

// Function to show correct location
function showCorrectLocation(lat, lng) {
    const correctMarker = L.marker([lat, lng], {
        icon: L.divIcon({
            className: "correct-marker",
            html: "✓",
            iconSize: [20, 20]
        })
    }).addTo(map);
    
    currentMarkers.push(correctMarker);
}

// Function to show user's click
function showUserClick(lat, lng) {
    const userMarker = L.marker([lat, lng], {
        icon: L.divIcon({
            className: "user-marker",
            html: "●",
            iconSize: [16, 16]
        })
    }).addTo(map);
    
    currentMarkers.push(userMarker);
}

// Function to update score display
function updateScore() {
    scoreElement.textContent = `Score: ${score}/${totalAnswered}`;
}

// Function to show final score
function showFinalScore() {
    questionElement.textContent = "Quiz Complete!";
    feedbackElement.textContent = `Final Score: ${score}/${totalAnswered} (${Math.round((score/totalAnswered)*100)}%)`;
    feedbackElement.className = "feedback-correct";
    nextButton.style.display = "none";
    skipButton.style.display = "none";
    waitingForAnswer = false;
}

// Handle map clicks
map.on('click', function(e) {
    if (!waitingForAnswer) return;

    const clickLat = e.latlng.lat;
    const clickLng = e.latlng.lng;
    const currentQuestion = questions[currentQuestionIndex];
    
    // Show user's click
    showUserClick(clickLat, clickLng);
    
    // Show correct location
    showCorrectLocation(currentQuestion.lat, currentQuestion.lng);
    
    // Check if click is in the correct country
    const isCorrect = isClickInCountry(clickLat, clickLng, currentQuestion.country);
    
    totalAnswered++;
    
    if (isCorrect) {
        score++;
        feedbackElement.textContent = "Correct! You clicked on the right country.";
        feedbackElement.className = "feedback-correct";
    } else {
        // Calculate distance for feedback
        const distance = calculateDistance(clickLat, clickLng, currentQuestion.lat, currentQuestion.lng);
        feedbackElement.textContent = `Incorrect. You clicked outside of ${currentQuestion.country}. You were ${Math.round(distance)}km away from the country center.`;
        feedbackElement.className = "feedback-incorrect";
    }
    
    updateScore();
    nextButton.disabled = false;
    waitingForAnswer = false;
});

// Next question button event
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    loadQuestion();
});

// Skip question button event
skipButton.addEventListener("click", () => {
    if (!waitingForAnswer) return;
    
    const currentQuestion = questions[currentQuestionIndex];
    showCorrectLocation(currentQuestion.lat, currentQuestion.lng);
    
    totalAnswered++;
    feedbackElement.textContent = `Question skipped. The correct answer was ${currentQuestion.country}.`;
    feedbackElement.className = "feedback-incorrect";
    
    updateScore();
    nextButton.disabled = false;
    waitingForAnswer = false;
});

// Reset quiz button event
resetButton.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;
    totalAnswered = 0;
    waitingForAnswer = false;
    
    shuffleQuestions();
    clearMarkers();
    
    nextButton.style.display = "inline-block";
    skipButton.style.display = "inline-block";
    nextButton.disabled = true;
    
    updateScore();
    loadQuestion();
});

// Initialize quiz
async function initQuiz() {
    await loadCountriesData();
    shuffleQuestions();
    loadQuestion();
    updateScore();
}

// Start the quiz
initQuiz();