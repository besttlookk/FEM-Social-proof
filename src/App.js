import React from "react";
import Footer from "./components/Footer";
import RatingCard from "./components/RatingCard";
import ReviewCard from "./components/ReviewCard";
import data from "./data/data.json";

function App() {
  return (
    <div class=" min-h-screen flex items-center justify-center flex-col">
      <main className="max-w-6xl mx-auto mt-12 text-center md:text-left md:p-6 w-90w md:mt-0">
        {/*  */}
        <section className="md:flex md:items-center md:justify-between">
          <div>
            <h1 className="text-4xl font-bold text-primary-dark md:text-5xl">
              10,000+ of our <span className="block">users love our</span>{" "}
              <span className="block">products.</span>
            </h1>
            <p className="mt-6 font-medium text-gray-600 md:w-100">
              We only provide great products combined with excellent customer
              service. See what our satisfied customers are saying about our
              services.
            </p>
          </div>
          <div className="mt-12">
            <RatingCard>Rated 5 Starts in Reviews </RatingCard>
            <RatingCard>Rated 5 Starts in Report Guru </RatingCard>
            <RatingCard>Rated 5 Starts in BestTech </RatingCard>
          </div>
        </section>

        <section className="mt-12 md:flex md:items-center md:gap-8 md:mt-14">
          {data.map((detail) => (
            <ReviewCard detail={detail} key={detail.image} />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
