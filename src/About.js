import style from './styles/About.module.css';
import {Link} from "react-router-dom";
import chefcooking from './images/Dhoni cooking.jpeg';
import dho from './images/dhoni.jpg';
import virat from './images/virat.jpeg';
import rohit from './images/rohit.jpeg';
import resfound from './images/restaurant founding.png';

const About = () => {
  return (
    <div className={style.container}>
      <section className={style.hero}>
        <div className={style.heroContent}>
          <h1 className={style.heroTitle}>Our Story</h1>
          <p className={style.heroSubtitle}>Authentic flavors with a modern twist</p>
        </div>
      </section>

      <section className={style.storySection}>
        <div className={style.sectionContainer}>
          <div className={style.storyContent}>
            <h2 className={style.sectionTitle}>The Beginning</h2>
            <p className={style.paragraph}>
              Founded in 2020 by Chef Dhoni, began as a small family-owned eatery in the heart of the city. What started as a passion project quickly became a culinary landmark known for its commitment to authentic flavors and innovative techniques.
            </p>
            <p className={style.paragraph}>
              Our journey began with a simple mission: to create memorable dining experiences by combining time-honored recipes with contemporary presentation. Each dish tells a story of tradition, innovation, and the joy of sharing good food with loved ones.
            </p>
          </div>
          <div className={style.imageWrapper}>
            <img
              src={resfound}
              alt="Restaurant founding"
              className={style.storyImage}
            />
          </div>
        </div>
      </section>

      <section className={style.philosophySection}>
        <div className={style.sectionContainer}>
          <div className={style.imageWrapper}>
            <img
              src={chefcooking}
              alt="Chef preparing food"
              className={style.storyImage}
            />
          </div>
          <div className={style.storyContent}>
            <h2 className={style.sectionTitle}>Our Philosophy</h2>
            <p className={style.paragraph}>
              At India, we believe that exceptional food begins with exceptional ingredients. We source locally whenever possible, partnering with farmers and producers who share our commitment to sustainability and quality.
            </p>
            <p className={style.paragraph}>
              Our kitchen operates on the principles of respect— respect for ingredients, culinary traditions, our team members, and most importantly, our guests. We strive to create a warm, inclusive atmosphere where everyone feels welcome and valued.
            </p>
          </div>
        </div>
      </section>

      <section className={style.teamSection}>
        <div className={style.sectionContainerWide}>
          <h2 className={style.sectionTitleCenter}>Meet Our Team</h2>
          <div className={style.teamGrid}>
            <div className={style.teamMember}>
              <div className={style.teamImageContainer}>
                <img
                  src={dho}
                  alt="Chef Dhoni"
                  className={style.teamImage}
                />
              </div>
              <h3 className={style.teamName}>Dhoni</h3>
              <p className={style.teamRole}>Head Chef & Founder</p>
              <p className={style.teamBio}>With over 20 years of culinary experience, Chef Dhoni brings passion and expertise to every dish he creates.</p>
            </div>
            <div className={style.teamMember}>
              <div className={style.teamImageContainer}>
                <img
                  src={virat}
                  alt="Chef Virat Kohli"
                  className={style.teamImage}
                />
              </div>
              <h3 className={style.teamName}>Virat kohli</h3>
              <p className={style.teamRole}>Executive Chef</p>
              <p className={style.teamBio}>Father of pakistan, Virat brings global influences and technical precision to our kitchen.</p>
            </div>
            <div className={style.teamMember}>
              <div className={style.teamImageContainer}>
                <img
                  src={rohit}
                  alt="Chef Rohit Sharma"
                  className={style.teamImage}
                />
              </div>
              <h3 className={style.teamName}>Rohit Sharma</h3>
              <p className={style.teamRole}>Pastry Chef</p>
              <p className={style.teamBio}>Rohit's award-winning desserts combine classic techniques with unexpected flavors.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={style.valuesSection}>
        <div className={style.sectionContainerWide}>
          <h2 className={style.sectionTitleCenter}>Our Values</h2>
          <div className={style.valuesGrid}>
            <div className={style.valueCard}>
              <h3 className={style.valueTitle}>Quality</h3>
              <p className={style.valueDescription}>We never compromise on the quality of our ingredients or our service.</p>
            </div>
            <div className={style.valueCard}>
              <h3 className={style.valueTitle}>Sustainability</h3>
              <p className={style.valueDescription}>We are committed to environmentally responsible practices in every aspect of our business.</p>
            </div>
            <div className={style.valueCard}>
              <h3 className={style.valueTitle}>Community</h3>
              <p className={style.valueDescription}>We believe in giving back to the community that has supported us throughout our journey.</p>
            </div>
            <div className={style.valueCard}>
              <h3 className={style.valueTitle}>Innovation</h3>
              <p className={style.valueDescription}>While respecting tradition, we continuously explore new techniques and flavor combinations.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={style.cta}>
        <div className={style.ctaContent}>
          <h2 className={style.ctaTitle}>Come Experience Our Passion</h2>
          <p className={style.ctaText}>We look forward to welcoming you and sharing our culinary journey.</p>
          <Link to="/Reservation"><button className={style.ctaButton}>Reserve a Table</button></Link>
        </div>
      </section>
    </div>
  );
};

export default About;