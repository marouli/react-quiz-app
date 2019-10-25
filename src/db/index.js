const db = [
    {
      question: "The Royal Palace in the centre of Amsterdam is located on what big square?",
      answers: ["Rembrandtsplein", "Dam", "Munt", "Leidseplein"],
      correct: "Dam",
      questionId: "099099"
    },
    {
      question:
        'The biggest museum in Amsterdam, and home of many famous paintings by Rembrandt, is called?',
      answers: ["Rijksmuseum", "Stedelijk Museum", "Van Gogh Museum", "Hermitage Amsterdam"],
      correct: "Rijksmuseum",
      questionId: "183452"
    },
    {
      question:
        "The official nickname for Amsterdam?",
      answers: ["Coffeeshop City", "Venice Of The North", "Best of the Rest", "Greatest of the Little Big Towns"],
      correct: "Venice Of The North",
      questionId: "267908"
    },
    {
      question: "The Olympic Games took place in Amsterdam in what year?",
      answers: ["1932", "1928", "1936", "1922"],
      correct: "1928",
      questionId: "333247"
    },
    {
      question: "The highest building in Amsterdam is named after a famous Dutch painter. What is the name of this building?",
      answers: ["Klashorst Tower", "Van Gogh Tower", "Rembrandt Tower", "Vermeer Tower"],
      correct: "Rembrandt Tower",
      questionId: "496293"
    },
    {
      question:
        "Which of these is one of the main tourist attractions in Amsterdam?",
      answers: [
        "The Green Light District",
        "The Purple Light District",
        "The Orange Light District",
        "The Red Light District"
      ],
      correct: "The Red Light District",
      questionId: "588909"
    },
    {
      question: 'The most famous sports club in Amsterdam, which is really known worldwide, is called?',
      answers: ["Feijenoord", "PSV", "Vitesse", "Ajax"],
      correct: "Ajax",
      questionId: "648452"
    },
    {
      question: "The big river that runs through the city is called?",
      answers: ["Noordzeekanaal", "Ijssel", "Amstel", "Boerenwetering"],
      correct: "Amstel",
      questionId: "786649"
    },
    {
      question: "What was the name of the Amsterdam American Football team that played in the Amsterdam Arena?",
      answers: ["Amsterdam Angels", "Amsterdam Attractions", "Amsterdam Animals", "Amsterdam Admirals"],
      correct: "Amsterdam Admirals",
      questionId: "839754"
    },
    {
      question: "What is the name of the most important railway station in Amsterdam?",
      answers: [
        "Amstel Station",
        "Bijlmer Station",
        "Muiderpoort Station",
        "Central Station"
      ],
      correct: "Central Station",
      questionId: "98390"
    },
    {
      question: "Amsterdam hosted what big sports-event in 1998?",
      answers: ["World Championship Speed Skating", "Olympic Games For Students", "European Championship Bowling", "The Gay Games"],
      correct: "The Gay Games",
      questionId: "1071006"
    },
    {
      question: "Amsterdam was founded as which type of community in the thirteenth century?",
      answers: ["Fishing Village", "Farming Community", "Artist Community", "Merchants village"],
      correct: "Fishing Village",
      questionId: "1174154"
    },
    {
      question: "What is the city code for Amsterdam",
      answers: ["1", "15", "88", "20"],
      correct: "20",
      questionId: "1226535"
    },
    {
      question: "What is the emergency number to call for the police, fire department, and ambulance in Amsterdam?",
      answers: ["199", "112", "100", "166"],
      correct: "112",
      questionId: "1310938"
    },
    {
      question: "In what year did the Netherlands decriminalize possession of soft drugs such as cannabis?",
      answers: ["1990", "1969", "1985", "1976"],
      correct: "1976",
      questionId: "1436873"
    },
    {
      question: "What is located at 263 Prinsengracht in Amsterdam?",
      answers: ["Anne Frank House", "Rembrandt House Museum", "Van Gogh Museum", "Westerpoort"],
      correct: "Anne Frank House",
      questionId: "1515110"
    },
    {
      question: "What is Koninginnedag?",
      answers: ["Cannabis Competition", "International Music Festival", "Queen's Day", "Gay Pride Weekend"],
      correct: "Queen's Day",
      questionId: "1642728"
    },
    {
      question: "What is the common name of the Amsterdam version of Gothic architecture?",
      answers: ["Flat Style", "Dutch Classicism", "Louis Style", "Polder Gothic"],
      correct: "Polder Gothic",
      questionId: "1747256"
    },
    {
      question: "Where is the Red Light District in Amsterdam?",
      answers: ["De Wallen", "Amsterdam West", "Rembrandtplein", "Leidseplein"],
      correct: "De Wallen",
      questionId: "1822532"
    },
    {
      question: "How many canals are in Amsterdam?",
      answers: ["1200", "1000", "160", "45"],
      correct: "160",
      questionId: "195075"
    },
    {
      question: 'What is the Snoga in Amsterdam?',
      answers: ["Museum", "Jewish Synagogue", "Lighthouse", "Canal"],
      correct: "Jewish Synagogue",
      questionId: "2019778"
    }
  ];
  
  export default (n = 5) =>
    Promise.resolve(db.sort(() => 0.5 - Math.random()).slice(0, n));
  