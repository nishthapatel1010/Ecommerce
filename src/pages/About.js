import React from 'react';
import './css/About.css';

function About() {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Us</h1>
        <p>Learn more about our company, our mission, and our team.</p>
      </div>
      <div className="about-section">
        <h2>Our Company</h2>
        <p>
          At MyClothesStore, we are dedicated to providing the best quality clothing for our customers. Our store offers a wide range of fashionable and affordable items for all ages.
        </p>
      </div>
      <div className="about-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to make fashion accessible to everyone. We believe in offering stylish and comfortable clothing that reflects the latest trends while maintaining high quality and affordability.
        </p>
      </div>
      <div className="about-section">
        <h2>Our Vision</h2>
        <p>
          We envision a world where everyone can express their unique style through our clothing. Our goal is to become a leading brand in the fashion industry, known for our commitment to quality and customer satisfaction.
        </p>
      </div>
      <div className="about-team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="https://images.moneycontrol.com/static-mcnews/2020/11/Vinay-Bharathwaj-Co-Founder-Co-CEO-Stockal-770x433.jpg?impolicy=website&width=770&height=431" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK66Rmo89b4FbxRo4OW2WZiO3kGV8l595qLpfDD7567LZEGJTp-i_qShhCGY3mcKUNS8M&usqp=CAU" alt="Team Member 2" />
            <h3>Jane Smith</h3>
            <p>Chief Designer</p>
          </div>
          <div className="team-member">
            <img src="https://media.istockphoto.com/id/1447567421/photo/young-happy-businesswoman-having-a-meeting-with-her-colleagues-in-the-office-and-looking-at.jpg?s=612x612&w=0&k=20&c=CE_2iveyWpl1ocRITDlAk2tLfTbVdtL66uswrkoTgCU=" alt="Team Member 3" />
            <h3>Emily Johnson</h3>
            <p>Marketing Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
