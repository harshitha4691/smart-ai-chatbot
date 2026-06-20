import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import SignupPopup from "../components/SignupPopup";
import CallPopup from "../components/CallPopup";
import AboutSection  from "../components/CallPopup";
import AchievementsSection from "../components/CallPopup";
import CounselorCTA from "../components/CallPopup";
import CoursesSection from "../components/CallPopup";
import EventsGallery from "../components/CallPopup";
import Footer from "../components/CallPopup";
import HeroSection from "../components/CallPopup";
import HiringStatsSection from "../components/CallPopup";
import MentorsSection from "../components/CallPopup";
import QuotesSection from "../components/CallPopup";
import StudentLifeSection from "../components/CallPopup";







export default function HomePage() {
  const { user } = useAuth();
  const [showSignupPopup, setShowSignupPopup] = useState(false);
  const [showCallPopup, setShowCallPopup] = useState(false);

  // Scroll trigger — show signup popup when visitor reaches Mentors section
  const handleReachMentors = () => {
    if (!user && !sessionStorage.getItem("popupShown")) {
      setShowSignupPopup(true);
      sessionStorage.setItem("popupShown", "true");
    }
  };

  return (
    <div>
      {/* Visible to everyone */}
      <HeroSection />
      <AboutSection />
      <AchievementsSection />
      <CoursesSection />
      <QuotesSection />
      <MentorsSection onReachMentors={handleReachMentors} />

      {/* Content below Mentors — GATED */}
      {user ? (
        <>
          <StudentLifeSection />
          <EventsGallery />
          <CounselorCTA onOpenCall={() => setShowCallPopup(true)} />
          <HiringStatsSection />
          <Footer />
        </>
      ) : (
        <section className="py-0 bg-cream text-center">
          <h2 className="text-3xl font-bold mb-4">Want to See More?</h2>
          <p className="text-gray-500 mb-8">
            Sign up to explore campus life, events, placement statistics,
            and talk to our AI counselor.
          </p>
          <button onClick={() => setShowSignupPopup(true)}
            className="bg-maroon text-white px-8 py-3 rounded-lg font-semibold">
            Sign Up to Unlock
          </button>
          <Footer />
        </section>
      )}

      <SignupPopup show={showSignupPopup} onClose={() => setShowSignupPopup(false)} />
      <CallPopup open={showCallPopup} onClose={() => setShowCallPopup(false)} />
    </div>
  );
}