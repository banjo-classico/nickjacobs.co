const projects = [
  {
    id: 'pitch-in',
    title: 'pitch in',
    tech: 'React, Redux, Express, Sass, PostGres',
    info: [
      {heading: "Summary",
       text: 'Pitch In was made as a final project during the last week of my training at Enspiral Dev Academy. I was in a team of five and assumed the product owner role and Front End Technical Lead. The concept of the app is that there is a disconnect between people wanting to volunteer their services and the volunteer opportunities that are out there. Pitch In was designed to simplify that connection and therefore improve volunteer engagement with micro-volunteer opportunites.'},
      {heading: "Development Process",
       text: ' We used an agile approach throughout development and maintained great communication. We used wireframes and an old-fashioned whiteboard to keep track of user stories and progress. We all worked extremely hard, often working long nights, but we were able to produce something that we are all very proud of.'},
      {heading: "Technologies",
       text: 'This project used Express  run our server and Knex make our SQL calls to our PostgreSQL database. Our front end was made with React and React-router, with Redux to control our state. Sockets were used to conenct the front end with the server and database. Styling was done using React Bootstrap and Sass, and it was all tied together with Browserify. We aimed to follow a TDD approach and we used Mocha, Chai and Enzyme for unit testing, and Nightwatch for integration tests.'}
    ],
    build: ['react', 'redux', 'node', 'sass', 'babel', 'react-router', 'socket']
  },
  {
    id: 'ww',
    title: "word's worth",
    tech: "React, socket.io, Sass, jQuery",
    info: [
      {heading: "Summary",
       text: 'This is a project I started at EDA. It is a game to encourage thinking about words and semantics, using a semantic similiarity comparison API.'},
      {heading: "Development Process",
       text: 'The development process was a long one, in which the project changed form several times. Initially using D3 to visualise semantic relationships between words, it then incorporated the Twitter Stream API to do the same for tweets, and then even had a world map depicting real-time tweeting of search terms. Eventually I decided to go back to the original idea but to "gameify" it.'},
      {heading: "Technologies",
       text: 'This was originally built with jQuery to manipulate the front end, but then rebuilt using React and Redux, which made for a much cleaner and easier construction. Sockets were again used between server and clients.'}
    ],
    build: ['react', 'redux', 'node', 'sass', 'babel', 'socket']
  },
  {
    id: 'eda',
    title: 'Enspiral Dev Academy',
    tech: 'So many technologies!',
    info: [
      {heading: "Summary",
       text: 'Enspiral Dev Academy runs an intensive bootcamp for web development training in a Node.js environment. I had an amazing time at EDA and learned more than I could possibly have hoped for. I worked harder than I\'ve ever done before but have come out of it with the capability to be a competent JavaScript developer who can build React apps, set up Express servers and work with SQL and NoSQL databases. There\'s always more to learn, and EDA has helped nurture that love of learning code within me.'}
    ],
    build: ['react', 'redux', 'node', 'sass', 'babel', 'react-router', 'webpack', 'socket', 'css', 'html']
  },
  {
    id: 'njco',
    title: 'nickjacobs.co',
    tech: 'React, Redux, Sass, Express',
    info: [
      {heading: "Summary",
       text: 'This is a personal website to showcase my portfolio and other projects that I may be working on. It has been fun to continue to develop my use of React, and of course to design and style it!'},
      {heading: "Further Development",
       text: 'Currently all data is kept in files on the client, which is not optimal. In the future I would like to store that data in a database, potentially looking at Firebase. I would also like to add more animation to the interactivity of the site to improve the UX.'}
    ],
    build: ['react', 'redux', 'node', 'sass', 'babel']
  }
]

export default projects