import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <div className="logo">APADE SCHOOL</div>
            <ul className="nav-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Admissions</a></li>
              <li><a href="#">Academics</a></li>
              <li><a href="#">News & Events</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <h1>Welcome to APADE School</h1>
          <p>Educating future leaders with excellence, integrity, and compassion.</p>
          <a href="#" className="btn-primary">Apply Now</a>
        </div>
      </section>

      <main>
        <section className="about">
          <h2>About Us</h2>
          <p>
            APADE School is committed to providing high-quality education for students from diverse
            backgrounds. We foster academic excellence, leadership, and social responsibility.
          </p>
        </section>

        <section className="news">
          <h2>Latest News</h2>
          <div className="news-grid">
            <article className="news-item">
              <img
                src="https://apadeschoolrw.org/wp-content/uploads/2021/11/news1.jpg"
                alt="News 1"
              />
              <div className="news-item-content">
                <h3>New Academic Year Begins</h3>
                <p>We warmly welcome new and returning students to the 2025 academic year.</p>
              </div>
            </article>
            <article className="news-item">
              <img
                src="https://apadeschoolrw.org/wp-content/uploads/2021/11/news2.jpg"
                alt="News 2"
              />
              <div className="news-item-content">
                <h3>Sports Day Highlights</h3>
                <p>Our students showed remarkable talents and team spirit during the annual sports day.</p>
              </div>
            </article>
            <article className="news-item">
              <img
                src="https://apadeschoolrw.org/wp-content/uploads/2021/11/news3.jpg"
                alt="News 3"
              />
              <div className="news-item-content">
                <h3>Admissions Now Open</h3>
                <p>Apply now for the upcoming academic year. We are accepting applications for all grades.</p>
              </div>
            </article>
          </div>
        </section>

        <section className="contact">
          <h2>Contact Us</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea rows="5" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </section>
      </main>

      <footer>
        &copy; 2025 APADE School | All Rights Reserved
      </footer>
    </>
  );
};

export default HomePage;
