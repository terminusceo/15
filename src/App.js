import React, { useState } from 'react';
import * as s from './styles/globalStyles';
import { useDispatch } from "react-redux";
import { connect } from "./redux/blockchain/blockchainActions";
import styled from 'styled-components'; // Make sure you have this import statement
import Header from './Header';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();



function App() {
  const dispatch = useDispatch();
  const gifs = ["/config/images/art2.gif", "/config/images/art3.gif", "/config/images/art4.gif", "/config/images/art5.gif", "/config/images/art6.gif", "/config/images/art1.gif"];
  const [currentGif, setCurrentGif] = useState(0);

  const handleNextGif = () => {
    setCurrentGif((prevGif) => (prevGif + 1) % gifs.length);
  };

  const handlePreviousGif = () => {
    setCurrentGif((prevGif) => (prevGif - 1 + gifs.length) % gifs.length);
  };

  // State for FAQ toggle
  const [faqItems, setFaqItems] = useState([
    { question: "THE STORY", answer: "De Factory emerged from a vision to honor the delicate dance of human craftsmanship with state-of-the-art technology. As an homage to both age-old artisan techniques and the futuristic realm of the digital world, our 1,111 collectibles are the embodiment of precision, dedication, and artistic fervor. From the first spark of inspiration to the final polished piece, De Factory chronicles the transcendence of art in the age of technology, ensuring each creation captures the growth and adaptability of our interconnected worlds.", isOpen: false },
    { question: "MINT", answer: "The Mint will start at 1 PM UTC, on August 19th. The price is 0.111ETH per mint.", isOpen: false },
    { question: "REVEAL", answer: "The reveal will take place within 24 hours after the conclusion of the mint.", isOpen: false },
    { question: "THE ARTISANS", answer: "Our craftsmen at De Factory are both the guardians of ancient artistic traditions and pioneers of digital innovation. Bringing together seasoned artisans and cutting-edge tech enthusiasts, our team has tirelessly worked to mold, chisel, and refine each piece, ensuring every collectible stands as a testament to the marriage of manual skill and technological prowess.", isOpen: false },
    // Add more questions and answers here
  ]);



  // Function to toggle FAQ item visibility
  const toggleFAQItem = (index) => {
    setFaqItems((prevItems) =>
      prevItems.map((item, i) => ({
        ...item,
        isOpen: i === index ? !item.isOpen : false,
      }))
    );
  };





  return (
    <div>
      <Header /> {/* Use the Header component here */}
      <s.BodyContainer>
        {/* Components and content inside the main body go here */}
      </s.BodyContainer>
      <s.ScrollContainer>
        <s.ScrollText>Scroll to start exploring</s.ScrollText>
        <s.ArrowContainer>
          <s.AnimatedArrow />
          <s.AnimatedArrow />
          <s.AnimatedArrow />
        </s.ArrowContainer>
      </s.ScrollContainer>

      <s.IntroductionSection data-aos="fade-up" data-aos-duration="2000">
        <s.IntroductionTitle>De Factory: An Assembly of 1111 Digital Collectibles</s.IntroductionTitle>
        <s.ContentWrapper>
          <s.IntroductionGif src="/config/images/art1.gif" alt="Introduction Gif" />
          <s.IntroductionText>
            <s.Subtitle>De Factory: The Birthplace of Digital Craftsmanship</s.Subtitle>
            <s.Text>The digital age has brought with it a renaissance of creativity and innovation. At De Factory, this spirit is captured and rendered into each NFT,
              creating tokens that are not just digital assets but monuments to the symbiosis of art and technology.</s.Text>
            <s.Text> Every token from De Factory is a reflection of dedication - an ode to the countless hours, intricate planning, and technological advancements poured into its creation.
              Much like a horologist painstakingly assembles a timepiece, ensuring every gear fits perfectly, each NFT here is the result of a masterful blend of art and tech.</s.Text>


            <s.Text>De Factory: Assembling the Future, One Craft at a Time</s.Text>
          </s.IntroductionText>
        </s.ContentWrapper>
      </s.IntroductionSection>

      <s.ArtSection data-aos="fade-up" data-aos-duration="2000">
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          <s.ArtTextTitle>De Factory art</s.ArtTextTitle> {/* Title or text above the art */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <s.ArrowLeft onClick={() => setCurrentGif(currentGif === 0 ? gifs.length - 1 : currentGif - 1)}>
              &#8592;
            </s.ArrowLeft>
            <s.ArtImage src={gifs[currentGif]} alt="Art" />
            <s.ArrowRight onClick={() => setCurrentGif((currentGif + 1) % gifs.length)}>
              &#8594;
            </s.ArrowRight>
          </div>
          <s.ArtTextPlaceholder>
            {/* Place your text here */}
            <p>De Factory is where the majesty of human touch meets the precision of digital creation. Each artwork springs from a blend of traditional craftsmanship and modern technology,
              breathing life into every pixel and curve. Over 1,111 collectibles, each emerges from the intricacies of design and the beauty of production, echoing the growth and evolution of the digital realm.
            </p>
          </s.ArtTextPlaceholder>

          <s.ArtTextPlaceholder>
            {/* Place your text here */}
            <p>

              The symphony of shapes tells tales of dedication, patience, and the ever-persistent human spirit. Every contour, every gradient is a testament to the artisan's journey—meticulously molding, shaping, and refining. At De Factory, each piece isn't just a visual delight; it's a chronicle.
              It beckons you to delve deeper, to appreciate the myriad forms and palettes, and to recognize the timeless hands that shaped its beauty in an ever-evolving digital tapestry.</p>
          </s.ArtTextPlaceholder>
        </div>
      </s.ArtSection>
      <s.MintScheduleSection data-aos="fade-up" data-aos-duration="1000">
        <s.MintScheduleTitle>Mint Schedule</s.MintScheduleTitle>


        <s.Box>
          <div className="top-row">
            <s.SmallBox>19 AUGUST - 1-3 PM UTC</s.SmallBox>

          </div>
          <div className="bottom-row">
            <div className="section">
              <div className="title">WHITELIST</div>
              <div className="text">The whitelist sale is reserved for project supporters included in the prepaid Whitelist.
                Every person on this list has the secured option to mint five De Factory.</div>
            </div>
            {/* Add more sections as needed */}
          </div>
        </s.Box>
        <s.Box>
          <div className="top-row">
            <s.SmallBox>19 AUGUST - 3-4 PM UTC</s.SmallBox>
            <s.SmallBox>PRICE: 0.111 ETH</s.SmallBox>
          </div>
          <div className="bottom-row">
            <div className="section">
              <div className="title">WAITLIST</div>
              <div className="text">Should there be any supply left after the Whitelist stage, the Waitlist sale will commence at once.
                Those who applied via the portal, qualify for the Waitlist. Please note that the Waitlist allows only one mint for each wallet.</div>
            </div>
            {/* Add more sections as needed */}
          </div>
        </s.Box>
        <s.Box>
          <div className="top-row">
            <s.SmallBox>19 AUGUST - 4 PM UTC</s.SmallBox>
            <s.SmallBox>PRICE: 0.111 ETH</s.SmallBox>
          </div>
          <div className="bottom-row">
            <div className="section">
              <div className="title">PUBLIC SALE</div>
              <div className="text">If there's remaining supply after the Waitlist stage, the Public sale will initiate without delay. This stage limits minting to five per wallet.</div>
            </div>
            {/* Add more sections as needed */}
          </div>
        </s.Box>
      </s.MintScheduleSection>
      <s.FAQSection data-aos="fade-up" data-aos-duration="2000">
        <s.FAQTitle>Frequently Asked Questions</s.FAQTitle>
        {faqItems.map((item, index) => (
          <s.FAQItem key={index}>
            <s.FAQQuestionContainer onClick={() => toggleFAQItem(index)}> {/* Use container here */}
              <s.FAQQuestionText>{item.question}</s.FAQQuestionText>
              <s.FAQArrow>{item.isOpen ? '↑' : '↓'}</s.FAQArrow>
            </s.FAQQuestionContainer>
            {item.isOpen && <s.FAQAnswer>{item.answer}</s.FAQAnswer>}
          </s.FAQItem>
        ))}
      </s.FAQSection>





    </div>
  );
}

export default App;
