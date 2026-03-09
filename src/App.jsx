
import "./styles.css";
import logo from "./assets/logo.png";
import indoorSlide from "./assets/indoor_slide.jpg";
import indoorFrame from "./assets/indoor_frame.jpg";
import indoorFrame2 from "./assets/indoor_frame_2.jpg";
import outdoor1 from "./assets/outdoor_group.jpg";
import outdoor2 from "./assets/outdoor_group_2.jpg";
import outdoor3 from "./assets/outdoor_group_3.jpg";

const standardSessionExamples = [
  { dogs: "1–2 dogs", price: "£20" },
  { dogs: "3 dogs", price: "£25" },
  { dogs: "4 dogs", price: "£30" },
  { dogs: "5 dogs", price: "£35" },
];

const weekdaySlots = ["18:15", "18:45", "19:15", "19:45"];
const weekendPreview = ["08:00", "08:30", "09:00", "09:30", "10:00", "10:30"];

const gallery = [
  { image: outdoor3, title: "Outdoor play area", text: "Open-air fun space with room to run, climb and explore." },
  { image: indoorFrame, title: "Indoor soft play", text: "Private indoor play equipment for fun in all weather." },
  { image: indoorSlide, title: "Slide and climbing zone", text: "Colourful soft play features for energetic dogs." },
  { image: outdoor1, title: "Private group sessions", text: "One booking per slot so your dogs can enjoy the space privately." },
  { image: indoorFrame2, title: "Indoor play frame", text: "A secure and playful indoor area for exercise and enrichment." },
  { image: outdoor2, title: "Happy dogs at play", text: "A lively outdoor area alongside the indoor zone." },
];

export default function App() {
  return (
    <div className="site">
      <header className="topbar">
        <div className="container topbar-inner">
          <a className="brand" href="#top">
            <img src={logo} alt="Zoomeze Dog Play Zone logo" className="brand-logo" />
            <div>
              <div className="brand-title">Zoomeze Dog Play Zone</div>
              <div className="brand-subtitle">Private indoor & outdoor dog play sessions</div>
            </div>
          </a>
          <nav className="nav">
            <a href="#about">About</a>
            <a href="#pricing">Pricing</a>
            <a href="#hours">Hours</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
            <a className="button button-small" href="#book">Book now</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Private hire dog play sessions in Stockport</p>
              <h1>Indoor and outdoor play space for dogs to run, explore and have fun.</h1>
              <p className="lead">
                Zoomeze Dog Play Zone offers private bookable sessions with access to both an indoor soft play area and an
                outdoor play zone. Each slot is for one group only, helping keep sessions simple, safe and stress-free.
              </p>
              <div className="hero-actions">
                <a className="button" href="#book">Book a session</a>
                <a className="button button-secondary" href="#gallery">View photos</a>
              </div>
              <div className="stats">
                <div className="stat-card">
                  <strong>Private</strong>
                  <span>One group per slot</span>
                </div>
                <div className="stat-card">
                  <strong>30 mins</strong>
                  <span>Standard play session</span>
                </div>
                <div className="stat-card">
                  <strong>£20</strong>
                  <span>Up to 2 dogs</span>
                </div>
              </div>
            </div>
            <div className="hero-image-wrap">
              <img src={outdoor3} alt="Dogs enjoying the outdoor play area" className="hero-image" />
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container two-col">
            <div className="card card-soft">
              <img src={indoorFrame} alt="Indoor dog soft play area" className="feature-image" />
            </div>
            <div className="stack">
              <p className="eyebrow" id="about">About Zoomeze</p>
              <h2>Private sessions with indoor and outdoor play.</h2>
              <p>
                Zoomeze Dog Play Zone is designed for owners who want a secure, private space where dogs can burn energy,
                play, explore and enjoy something different. Sessions are booked by time slot, with one group per slot,
                making it ideal for friendship groups, energetic dogs, nervous dogs and birthday sessions.
              </p>
              <p>
                The play zone includes an indoor soft play area and an outdoor area, giving dogs a fun mix of spaces in all
                seasons.
              </p>
              <ul className="check-list">
                <li>Private booking only — no shared sessions</li>
                <li>Indoor soft play plus outdoor play area</li>
                <li>Prepaid online booking to secure your slot</li>
                <li>Birthday session option available</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section alt" id="pricing">
          <div className="container">
            <p className="eyebrow">Sessions & pricing</p>
            <h2>Simple prices for private bookings.</h2>
            <div className="pricing-grid">
              <article className="price-card featured">
                <h3>30 Minute Play Session</h3>
                <div className="price">£20</div>
                <p>Private 30 minute session for up to 2 dogs.</p>
                <ul>
                  <li>+ £5 per extra dog</li>
                  <li>Up to 10 dogs total</li>
                  <li>Indoor and outdoor access</li>
                  <li>One group per slot</li>
                </ul>
              </article>

              <article className="price-card">
                <h3>Birthday Session</h3>
                <div className="price">£100</div>
                <p>Private 1 hour birthday booking for up to 10 dogs.</p>
                <ul>
                  <li>Exclusive use of the play zone</li>
                  <li>Indoor and outdoor access</li>
                  <li>Great for celebrations and meet-ups</li>
                </ul>
              </article>
            </div>

            <div className="mini-table">
              {standardSessionExamples.map((row) => (
                <div key={row.dogs} className="mini-table-row">
                  <span>{row.dogs}</span>
                  <strong>{row.price}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="hours">
          <div className="container two-col">
            <div>
              <p className="eyebrow">Opening hours</p>
              <h2>Weekday evenings and weekend daytime slots.</h2>
              <div className="hours-grid">
                <div className="hours-card">
                  <h3>Monday to Friday</h3>
                  <p>Open from 6:15pm until 8:15pm.</p>
                  <div className="slot-list">
                    {weekdaySlots.map((slot) => (
                      <span key={slot} className="slot-pill">{slot}</span>
                    ))}
                  </div>
                </div>
                <div className="hours-card">
                  <h3>Saturday & Sunday</h3>
                  <p>Open from 8:00am until 8:00pm with 30 minute slots.</p>
                  <div className="slot-list">
                    {weekendPreview.map((slot) => (
                      <span key={slot} className="slot-pill">{slot}</span>
                    ))}
                    <span className="slot-pill">…</span>
                    <span className="slot-pill">19:30</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="booking-panel" id="book">
              <p className="eyebrow">Booking</p>
              <h2>Draft booking layout</h2>
              <p>
                This page design is ready to connect to a live booking system so customers can choose a slot, pay instantly
                and stop double bookings.
              </p>
              <form className="booking-form">
                <label>
                  Session type
                  <select>
                    <option>30 Minute Play Session</option>
                    <option>Birthday Session (1 hour)</option>
                  </select>
                </label>
                <label>
                  Date
                  <input type="date" />
                </label>
                <label>
                  Time
                  <select>
                    <option>18:15</option>
                    <option>18:45</option>
                    <option>19:15</option>
                    <option>19:45</option>
                    <option>08:00</option>
                    <option>08:30</option>
                    <option>09:00</option>
                  </select>
                </label>
                <label>
                  Number of dogs
                  <select>
                    {Array.from({ length: 10 }).map((_, index) => (
                      <option key={index + 1}>{index + 1}</option>
                    ))}
                  </select>
                </label>
                <button type="button" className="button">Continue to payment</button>
              </form>
              <p className="fine-print">
                This is a demo booking section for the website package. The live version should be connected to a booking and
                payment provider such as SimplyBook.me, Bookeo or Stripe-backed checkout.
              </p>
            </div>
          </div>
        </section>

        <section className="section alt" id="gallery">
          <div className="container">
            <p className="eyebrow">Gallery</p>
            <h2>Photos of the Zoomeze play spaces.</h2>
            <div className="gallery-grid">
              {gallery.map((item) => (
                <article key={item.title} className="gallery-card">
                  <img src={item.image} alt={item.title} />
                  <div className="gallery-copy">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container info-banner">
            <div>
              <p className="eyebrow">Need-to-know</p>
              <h2>How the live booking system should work.</h2>
            </div>
            <ul className="check-list">
              <li>Customers choose a slot and pay straight away</li>
              <li>Booked slots become unavailable automatically</li>
              <li>Standard sessions are 30 minutes</li>
              <li>Birthday sessions are 1 hour</li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="footer" id="contact">
        <div className="container footer-grid">
          <div>
            <img src={logo} alt="Zoomeze Dog Play Zone logo" className="footer-logo" />
            <p className="footer-copy">Private indoor and outdoor dog play sessions in Hazel Grove, Stockport.</p>
          </div>
          <div>
            <h3>Contact</h3>
            <p>Unit 2, Watchgate, Newby Road<br />Hazel Grove Industrial Estate<br />Stockport, SK7 5RB</p>
            <p>07799 641022<br />zoomezedogplayzone@gmail.com</p>
          </div>
          <div>
            <h3>Website notes</h3>
            <p>
              This starter website package is ready for GitHub and Vercel. The booking button is still a draft until it is
              connected to a live booking and payment system.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
