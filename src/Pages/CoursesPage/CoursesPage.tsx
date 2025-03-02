import CardList from "../Cards/Cards";

function CoursesPage() {
  return (
    <>
      <div className="NewSection">
        <div>
          <img
            src="/images/Hero Section - Illustration.png"
            alt="Learning"
            className="Hero Section - Illustration"
          />
        </div>
        <div className="new-section-text">
          <h3>Unlock your learning potential</h3>
          <p>
            Explore a wide range of beginner-friendly courses designed to build
            your skills and knowledge. Whether you're starting fresh or looking
            to strengthen your foundation, our expertly crafted lessons will
            guide you every step of the way. Start learning today!
          </p>
        </div>
      </div>
      <CardList />
    </>
  );
}

export default CoursesPage;
