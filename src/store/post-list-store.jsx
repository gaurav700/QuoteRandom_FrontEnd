import image0001 from '../assets/0001.png';
import image0002 from '../assets/0002.png';
import image0003 from '../assets/0003.png';
import icon1 from '../assets/warnerDark.svg';
import icon2 from '../assets/harleyDavidsonDark.svg';
import icon3 from '../assets/milkaDark.svg';
import icon4 from '../assets/netflixDark.svg';
import icon5 from '../assets/ogilvyDark.svg';
import icon6 from '../assets/penguinDark.svg';
import icon7 from '../assets/ravensburgerDark.svg';
import test from '../assets/test.jpg'
import test1 from '../assets/test2.jpeg'
import test2 from '../assets/test3.jpg'
import image001 from '../assets/001.png';
import image002 from '../assets/002.png';
import image003 from '../assets/003.png';
import img1 from '../assets/icons8-age-96.png';
import img2 from '../assets/icons8-alone-96.png';
import img3 from '../assets/icons8-amazing-96.png';
import img4 from '../assets/icons8-anger-96.png';
import img5 from '../assets/icons8-architecture-96.png';
import img6 from '../assets/icons8-art-96.png';
import img7 from '../assets/icons8-attitude-96.png';
import img8 from '../assets/icons8-barber-brush-96.png';
import img9 from '../assets/icons8-best-96.png';
import img10 from '../assets/icons8-birthday-96.png';
import img11 from '../assets/icons8-bonds-96.png';
import img12 from '../assets/icons8-car-96.png';
import img13 from '../assets/icons8-change-96.png';
import img14 from '../assets/icons8-communication-96.png';
import img15 from '../assets/icons8-computers-96.png';
import img16 from '../assets/icons8-cool-96.png';
import img17 from '../assets/icons8-courage-96.png';
import img18 from '../assets/icons8-dad-96.png';
import img19 from '../assets/icons8-dating-96.png';
import img20 from '../assets/icons8-death-96.png';
import img21 from '../assets/icons8-design-96.png';
import img22 from '../assets/icons8-dreams-96.png';
import img23 from '../assets/icons8-education-96.png';
import img24 from '../assets/icons8-environmental-96.png';
import img25 from '../assets/icons8-equality-96.png';
import img26 from '../assets/icons8-experience-96.png';
import img27 from '../assets/icons8-loser-96.png';
import img28 from '../assets/icons8-faith-96.png';
import img29 from '../assets/icons8-family-96.png';
import img30 from '../assets/icons8-famous-96.png';
import img31 from '../assets/icons8-fear-96.png';
import img32 from '../assets/icons8-fitness-96.png';
import img33 from '../assets/icons8-bread-96.png';
import img34 from '../assets/icons8-apologise-96.png';
import img35 from '../assets/icons8-freedom-96.png';
import img36 from '../assets/icons8-friendship-96.png';
import img37 from '../assets/icons8-funny-96.png';
import img38 from '../assets/icons8-future-96.png';
import img39 from '../assets/icons8-god-96.png';
import img40 from '../assets/icons8-good-96.png';
import img41 from '../assets/icons8-government-96.png';
import img42 from '../assets/icons8-graduation-96.png';
import img43 from '../assets/icons8-great-wall-96.png';
import img44 from '../assets/icons8-happiness-96.png';
import img45 from '../assets/icons8-health-96.png';
import img46 from '../assets/icons8-history-96.png';
import img47 from '../assets/icons8-home-96.png';
import img48 from '../assets/icons8-hope-96.png';
import img49 from '../assets/icons8-humour-96.png';
import img50 from '../assets/icons8-imagination-96.png';
import img51 from '../assets/icons8-inspiration-96.png';
import img52 from '../assets/icons8-intelligence-96.png';
import img53 from '../assets/icons8-jealous-96.png';
import img54 from '../assets/icons8-knowledge-96.png';
import img55 from '../assets/icons8-leadership-96.png';
import img56 from '../assets/icons8-learning-96.png';
import img57 from '../assets/icons8-legal-96.png';
import img58 from '../assets/icons8-life-96.png';
import img59 from '../assets/icons8-love-96.png';
import img60 from '../assets/icons8-marriage-96.png';
import img61 from '../assets/icons8-medical-96.png';
import img62 from '../assets/icons8-why-quest-96.png';
import img63 from '../assets/icons8-mom-96.png';
import img64 from '../assets/icons8-money-96.png';
import img65 from '../assets/icons8-morning-96.png';
import img66 from '../assets/icons8-movies-96.png';
import img67 from '../assets/icons8-success-96.png';



import { createContext } from "react";
import { useState } from "react";
export const ContextObj = createContext();

const PostListProvider = ({ children }) => {
  const wordsAndImages = [
    { word: "age", img: img1 },
    { word: "alone", img: img2 },
    { word: "amazing", img: img3 },
    { word: "anger", img: img4 },
    { word: "architecture", img: img5 },
    { word: "art", img: img6 },
    { word: "attitude", img: img7 },
    { word: "beauty", img: img8 },
    { word: "best", img: img9 },
    { word: "birthday", img: img10 },
    { word: "business", img: img11 },
    { word: "car", img: img12 },
    { word: "change", img: img13 },
    { word: "communication", img: img14 },
    { word: "computers", img: img15 },
    { word: "cool", img: img16 },
    { word: "courage", img: img17 },
    { word: "dad", img: img18 },
    { word: "dating", img: img19 },
    { word: "death", img: img20 },
    { word: "design", img: img21 },
    { word: "dreams", img: img22 },
    { word: "education", img: img23 },
    { word: "environmental", img: img24 },
    { word: "equality", img: img25 },
    { word: "experience", img: img26 },
    { word: "failure", img: img27 },
    { word: "faith", img: img28 },
    { word: "family", img: img29 },
    { word: "famous", img: img30 },
    { word: "fear", img: img31 },
    { word: "fitness", img: img32 },
    { word: "food", img: img33 },
    { word: "forgiveness", img: img34 },
    { word: "freedom", img: img35 },
    { word: "friendship", img: img36 },
    { word: "funny", img: img37 },
    { word: "future", img: img38 },
    { word: "god", img: img39 },
    { word: "good", img: img40 },
    { word: "government", img: img41 },
    { word: "graduation", img: img42 },
    { word: "great", img: img43 },
    { word: "happiness", img: img44 },
    { word: "health", img: img45 },
    { word: "history", img: img46 },
    { word: "home", img: img47 },
    { word: "hope", img: img48 },
    { word: "humor", img: img49 },
    { word: "imagination", img: img50 },
    { word: "inspirational", img: img51 },
    { word: "intelligence", img: img52 },
    { word: "jealousy", img: img53 },
    { word: "knowledge", img: img54 },
    { word: "leadership", img: img55 },
    { word: "learning", img: img56 },
    { word: "legal", img: img57 },
    { word: "life", img: img58 },
    { word: "love", img: img59 },
    { word: "marriage", img: img60 },
    { word: "medical", img: img61 },
    { word: "men", img: img62 },
    { word: "mom", img: img63 },
    { word: "money", img: img64 },
    { word: "morning", img: img65 },
    { word: "movies", img: img66 },
    { word: "success", img: img67 }
  ];

  const morefeature = [
    {
      title: "Merchandise",
      body: "Craft unique slogans or phrases for t-shirts, hats, mugs, and other merchandise."
    },
    {
      title: "Greeting Cards",
      body: "Produce a range of heartfelt, funny, or inspirational messages tailored for various occasions like birthdays, anniversaries, or holidays."
    },
    {
      title: "Social Media Content",
      body: "Generate catchy and relevant quotes to accompany your posts, enhancing engagement and shareability."
    },
    {
      title: "Wall Art & Home Decor",
      body: "Create motivational or aesthetic quotes for posters, wall decals, and other home decor items."
    },
    {
      title: "Educational Materials",
      body: "Generate insightful quotes to include in presentations, lesson plans, or classroom posters."
    },
    {
      title: "Advertising Campaigns",
      body: "Craft compelling taglines or phrases for your campaigns, ensuring the message resonates with your target audience."
    },
  ];

  const unique = [
    {
      img: image0001,
      title: "Boost Your Sales",
      body: "Tailor quotes to specific niches, themes, or audiences to ensure your merchandise connects with your target customers.",
    },
    {
      img: image0002,
      title: "Save Time and Effort",
      body: "Generate compelling quotes in seconds, eliminating lengthy research and brainstorming sessions, and speeding up your design process.",
    },
    {
      img: image0003,
      title: "Guaranteed Quality & Flexibility",
      body: "Kittl's AI-driven algorithms consistently deliver creative and high-quality quotes for your every need.",
    }
  ];

  const imagearray = [
    icon1, icon2, icon3, icon4, icon5, icon6, icon7
  ]

  const testmonials = [
    {
      img: test,
      position: "T-SHIRT DESIGNER & YOUTUBER",
      name: "Juna Duncan",
      body: "“Kittl is such a powerful tool, especially text effects! And it's all online too. It really helps create t-shirt designs easily.“"
    },
    {
      img: test1,
      position: "LOGO DESIGNER",
      name: "Will Paterson",
      body: "“Kittl has been an invaluable resource for our company this year. Their many fonts are of excellent quality and I’ve really enjoyed creating some stunning designs with them!“"
    },
    {
      img: test2,
      position: "MERCHANDISE DESIGNER & YOUTUBER",
      name: "Rich Khun",
      body: "“I just keep saying it's dope. You can create complex designs very easily.“"
    }
  ]

  const feature = [
    {
      img: image001,
      title: "1. Pick a niche for your quote",
      body: "Choose a niche from our library or enter your own to define the topic of your quotes."
    },
    {
      img: image002,
      title: "2. Pick a mood and length",
      body: "Should it sound funny, inspirational, smart, or romantic? Easily define the tone of your quote by picking a mood."
    },
    {
      img: image003,
      title: "3. Generate your quotes",
      body: "Kittl AI generates 6 unique quotes to use for your merch products. Simply open the quotes in the editor, copy, or download them for later."
    }
  ]

  return (
    <ContextObj.Provider value={{ unique, imagearray, testmonials, morefeature, feature, wordsAndImages, }}>
      {children}
    </ContextObj.Provider >
  )
}
export default PostListProvider;