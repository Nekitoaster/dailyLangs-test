import CardsBlock from "./CardsBlock";

function CoursesSection() {
  return (
    <section className="course-section">
      <div className="course-section__header">
        <h1 className="section-header__title">Курсы</h1>

        <span className="course-section__header_bordered">
          <h1 className="section-header__title course-section__header_bordered-title">
            английского языка
          </h1>
        </span>
      </div>
      <CardsBlock />
    </section>
  );
}

export default CoursesSection;
