import React from "react";
import classes from "./Home.module.css";
import { Container } from "../../components/layouts";
import { Card } from "../../components/ui";
import { Upload } from "../../components/home";

const Home = () => {
  return (
    <div className={classes.home}>
      <Container>
        <div className={classes["home__content"]}>
          <Upload className={classes.upload} />
          <section className={classes.student}>
            <Card
              title="For Students"
              description={
                <>
                  <p>
                    Enhance your learning experience with ChatPDF. Comprehend
                    textbooks, handouts, and presentations effortlessly. Don't
                    spend hours flipping through research papers and academic
                    articles.
                  </p>
                  <p>
                    Support your academic growth and succeed in your studies
                    effectively and responsibly.
                  </p>
                </>
              }
              icon="&#129300;"
            />
          </section>
          <section className={classes.work}>
            <Card
              title="For Work"
              description={
                <>
                  <p>
                    Efficiently analyze your documents. From financial and sales
                    reports to project and business proposals, training manuals,
                    and legal contracts, ChatPDF can quickly provide you with
                    the information you need.
                  </p>
                  <p>
                    Your data is kept confidential in a secure cloud storage and
                    can be deleted at any time.
                  </p>
                </>
              }
              icon="&#129300;"
            />
          </section>
          <section className={classes["curious-mind"]}>
            <Card
              title="For Curious Minds"
              description={
                <>
                  <p>
                    Unlock a wealth of knowledge with ChatPDF. Discover new
                    insights and answers from historical documents, poetry, and
                    literature, effortlessly.
                  </p>
                  <p>
                    ChatPDF can understand any language and reply in your
                    preferred one. Satisfy your curiosity and expand your
                    horizons with the tool that can answer any question from any
                    PDF.
                  </p>
                </>
              }
              icon="&#129300;"
            />
          </section>
        </div>
      </Container>
    </div>
  );
};

export default Home;
