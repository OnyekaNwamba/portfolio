import travlr from 'images/travlr.jpg';
import snake from 'images/snake.png';
import portfolio from 'images/portfolio.png';
import Stormy from 'images/stormy.png';
import pong from 'images/pong.png'

// image can be any size. just make sure it is close to a 1:1 ratio - a square.

export default [
  {
    title: 'Foodiez',
    description:
      'Make finding a place to eat easier with this simple app, swipe right if you like it, swip left if you dont. This is an Android application that uses the Google Places API and Yelp API to find restaurants near you and their information, with also help of Firebase to Autheticate and storeusers. \n Currently in the works so preview not availabe ',
    skills: ['Android', 'Java', 'GoogleAPI', 'YelpAPI', 'Firebase'],
    image: travlr,
    links: {
      //github: 'https://github.com/vai0/travlr',
      preview: '#',
    },
  },

  {
    title: 'One Day Builds Series',
    description:
        'A series of mini-projects created in one day in various languages such as Javascript, HTML, Python etc. Click on Live Demo to see list of project, or clikc on Github to find the repositories of my One Day Builds'
        /*'Two paddles, a moving ball and a simple piece of artificial intelligence (AI) to play against. This is the simple yet classic game of Pong clone done in Javascript. Made as part of my "One Day Builds Series"'*/,
    skills: ['HTML5', 'CSS3', 'Javascript', 'ES6'],
    image: pong,
    links: {
        github: 'https://github.com/OnyekaNwamba/',
        preview: 'https://onyekanwamba.github.io/One-Day-Builds/',
    },
  },
  {
    title: 'Weather App',
    description:
      'My first ever app, created for android built in Java. It was a tremendous learning experience and built foundation for my Android Programming knowledge',
    skills: ['Android', 'Java', 'Material Design',
    ],
    image: Stormy,
    links: {
      github: 'https://github.com/OnyekaNwamba/Weather-App',
      preview: 'https://onyekanwamba.github.io/weather-preview',
    },
  },

  {
    title: 'Portfolio',
    description:
      'This page! Responsive website built with ReactJS. The site content is passed in as JSON data, auto-generating components for easy maintenance.',
    skills: ['HTML5', 'CSS3', 'Sass', 'JavaScript', 'ReactJS'],
    image: portfolio,
    links: {
      github: 'https://github.com/OnyekaNwamba/onyeka.nwamba.gitgub.io',
      preview: '#',
    },
  },
];
