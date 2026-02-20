import { Link } from "react-router-dom"
import HomeSearch from "../components/HomeSearch"
import FeatureCard from "../components/FeatureCard"
import DestinationSlider from "../components/DestinationSlider"

export default function Home() {
  return (
    <div className="bg-secondary min-h-screen">

      {/* HERO */}
      <section className="bg-primary text-white px-6 sm:px-10 py-20">
        <h1 className="text-4xl sm:text-5xl font-extrabold max-w-3xl">
          Explore Jharkhand Digitally 🌿
        </h1>

        <p className="mt-6 max-w-2xl text-lg">
          Smart Tourism platform powered by GIS, AI and immersive AR/VR
          experiences.
        </p>

        <HomeSearch />

        <div className="mt-8 flex gap-4 flex-wrap">
          <Link to="/destinations" className="bg-accent px-6 py-3 rounded-lg">
            Explore Destinations
          </Link>
          <Link to="/map" className="border border-white px-6 py-3 rounded-lg">
            GIS Map
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-6 sm:px-10 py-16">
        <h2 className="text-3xl font-bold text-primary text-center">
          Smart Tourism Features
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          <FeatureCard icon="🗺️" title="GIS Navigation" desc="Smart routes & eco alerts" />
          <FeatureCard icon="🤖" title="AI Recommendation" desc="Personalized trips" />
          <FeatureCard icon="🕶️" title="AR / VR" desc="Virtual exploration" />
          <FeatureCard icon="🏡" title="Community Tourism" desc="Homestays & artisans" />
        </div>
      </section>

      {/* DESTINATION SLIDER */}
      <section className="px-6 sm:px-10 py-16 bg-white">
        <h2 className="text-3xl font-bold text-primary mb-8">
          Popular Destinations
        </h2>
        <DestinationSlider />
      </section>

      {/* CTA */}
      <section className="px-6 sm:px-10 py-20 text-center">
        <h2 className="text-3xl font-bold text-primary">
          Plan Your Smart Journey Today
        </h2>
        <p className="mt-4 max-w-xl mx-auto">
          Discover culture, nature and technology-driven tourism in one place.
        </p>
        <Link
          to="/homestays"
          className="inline-block mt-8 bg-accent text-white px-8 py-3 rounded-lg"
        >
          Book Homestay
        </Link>
      </section>

    </div>
  )
}
