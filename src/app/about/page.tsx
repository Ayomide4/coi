import TeamCarousel from "../components/TeamCarousel";
import Image from "next/image";
import TeamImage from "../components/TeamImage";

export default function About() {
  const team = [
    {
      name: "Sikemi Omotosho",
      role: "Lead Servant",
      imageUrl: "/Sikemi.JPG",
      born: "Lagos, Nigeria",
      raised: "Grand Prairie, Texas",
      description:
        "Sikemi Omotosho has a passion for leading with purpose and dedication to God’s mission. As the Lead Servant at Circle of Intimacy, Sikemi casts vision, leads the nonprofit, and ensures every action aligns with the program’s mission. Working closely with the leadership team, Sikemi sets strategic goals, inspires and equips the team, and fosters a culture of servant leadership.",
      phone: "972 992 8271",
      email: "sikeomotosho@gmail.com",
      imagePosition: "center 35%",
    },
    {
      name: "Crystal Oparaji",
      role: "Executive Assistant",
      imageUrl: "/Crystal.jpeg",
      born: "Dallas, Texas",
      raised: "Rowlett, Texas",
      description:
        "Crystal Oparaji has a passion for serving God by supporting others through efficient organization and thoughtful coordination. As the Executive Assistant at Circle of Intimacy, Crystal provides administrative support to the leadership team, managing schedules, facilitating communication, and assisting with event planning.",
      phone: "682 408 3761",
      email: "Crystaloparaji@gmail.com",
    },
    {
      name: "Temi Taiwo",
      role: "Financial Coordinator",
      imageUrl: "/TemiTaiwo.jpg", // Add the correct image URL
      born: "Lagos, Nigeria",
      raised: "Garland, Texas",
      description:
        "Temi Taiwo has a passion for promoting financial stewardship and accountability. As the Financial Coordinator for the Circle of Intimacy (COI), Temi manages budgeting, oversees financial operations, and ensures accurate reporting to support the program's goals.",
      phone: "(214) 604 0708",
      email: "Temit@gmail.com",
    },
    {
      name: "Dewa Salau",
      role: "Prayer Lead",
      imageUrl: "/DewaSalau.jpg", // Add the correct image URL
      born: "Laurel, Maryland",
      raised: "Upper Marlboro, Maryland",
      description:
        "Dewa Salau has a passion for fostering a deep connection with God through prayer and intercession. As the Prayer Lead for the Circle of Intimacy (COI) program, Dewa ensures every aspect of the event is covered in prayer, creating a spiritually enriching atmosphere for participants.",
      email: "dewasalau@gmail.com",
    },
    {
      name: "Ayomide Ifanse",
      role: "Live Stream & Broadcast Coordinator",
      imageUrl: "/AyoIfanse.JPG",
      born: "New Orleans, Louisiana",
      raised: "New Orleans, Louisiana and Houston, Texas",
      description:
        "Ayomide Ifanse has a passion for creating seamless and high-quality live streaming experiences. As the Live Stream and Broadcast Coordinator for the Circle of Intimacy, Ayomide is responsible for managing the technical, planning, and creative aspects of the broadcast.",
      phone: "(832) 812-6479",
      email: "aifanse17@gmail.com",
      imagePosition: "center 20%",
    },
    {
      name: "Subomi Borishade",
      role: "Streamline Coordinator",
      imageUrl: "/Subomi.jpg",
      born: "Abuja, Nigeria",
      raised: "Abuja, Nigeria",
      description:
        "Subomi Borishade has a passion for fostering collaboration and creating cohesive event experiences. As the Streamline Coordinator for the Circle of Intimacy, Subomi serves as a vital link between the Production Coordinator and the Live Stream Coordinator.",
      phone: "(972) 989-0628",
      email: "Sborishade@gmail.com",
    },
    {
      name: "Tope Pecku",
      role: "Event Experience Coordinator",
      imageUrl: "/Tope.jpg",
      born: "San Jose, California",
      raised: "Lagos, Nigeria",
      description:
        "Tope Pecku has a passion for creating spiritually uplifting and engaging experiences. As the Event Experience Coordinator for the Circle of Intimacy, Tope ensures that every aspect of the event—from the atmosphere to attendee interactions—is thoughtfully designed to foster a meaningful and seamless experience.",
      phone: "+1 (281) 902-7059",
      email: "timmypecku@live.com",
      imagePosition: "center 20%",
    },
    {
      name: "Abiodun Adejumobi",
      role: "Ministerial Care Coordinator",
      imageUrl: "/Abi.jpg",
      born: "Houston, Texas",
      raised: "Houston, Texas",
      description:
        "Abiodun Adejumobi has a passion for serving others with excellence and care. As the Ministerial Care Coordinator for the Circle of Intimacy, Abiodun ensures that visiting ministers, guest speakers, and event facilitators receive exceptional hospitality and logistical support.",
      phone: "(832) 955-5648",
      email: "Abiodun.adejumobi08@gmail.com",
    },
    {
      name: "Emmanuel Doku",
      role: "Media & Design Coordinator",
      imageUrl: "/Doku.jpg",
      born: "Houston, Texas",
      raised: "Houston, Texas",
      description:
        "Emmanuel Doku has a passion for bringing stories to life through creative visuals and media. As the Media & Design Coordinator for the Circle of Intimacy, Emmanuel oversees videography, photography, branding, and promotional materials, ensuring that every piece aligns with the event’s theme.",
      phone: "(832) 608-3977",
      email: "Doku43@gmail.com",
      imagePosition: "center 10%",
    },
    {
      name: "Temi Omotayo",
      role: "Media & Design Coordinator",
      imageUrl: "/Temi.jpg",
      born: "Lagos, Nigeria",
      raised: "Lagos, Nigeria",
      description:
        "Temi Omotayo has a passion for creating captivating visuals and impactful media. As a Media & Design Coordinator for the Circle of Intimacy, Temi oversees videography, photography, branding, and promotional content, ensuring all media aligns with the event’s theme.",
      phone: "(726) 999-7577",
      email: "Temiloluwa236@gmail.com",
    },
    {
      name: "Angel Oyeniya",
      role: "Marketing Coordinator",
      imageUrl: "/Angel.jpg",
      born: "Mansfield, Texas",
      raised: "Mansfield, Texas",
      description:
        "Angel Oyeniya has a passion for connecting people to meaningful experiences through strategic promotion. As the Marketing Coordinator for the Circle of Intimacy, Angel develops creative marketing plans, engages target audiences, and ensures a consistent, compelling brand presence across all platforms.",
      phone: "+1 (682) 582-5587",
      email: "AOyeniya@gmail.com",
    },
    {
      name: "Michael Arthur",
      role: "Merchandise & Branding Coordinator",
      imageUrl: "/Michael.jpg",
      born: "Tema, Ghana",
      raised: "Tema, Ghana",
      description:
        "Michael Arthur has a passion for creating impactful and high-quality merchandise that resonates with others. As the Merchandise and Branding Coordinator for the Circle of Intimacy, Michael oversees the design, production, and promotion of COI merchandise while managing the program’s branding to ensure consistency and visual impact.",
      phone: "(214) 960-8202",
      email: "micarthur9@gmail.com",
    },
    {
      name: "Joshua Fakuade",
      role: "Worship Production Coordinator",
      imageUrl: "/Joshua.jpg",
      born: "", // Add born information if available
      raised: "", // Add raised information if available
      description:
        "Joshua Fakuade has a passion for leading others into a deep, Christ-centered worship experience. As the Worship Production Coordinator for the Circle of Intimacy, Joshua coordinates vocalists, band members, and rehearsals, while fostering spiritual unity through prayer.",
      phone: "(469) 471-7625",
      email: "J.Taiwoz@gmail.com",
      imagePosition: "center 30%",
    },

    {
      name: "Julia Ukattah",
      role: "Worship Production Coordinator",
      imageUrl: "/JuliaUkattah.jpg", // Add the correct image URL
      born: "", // Add born information if available
      raised: "", // Add raised information if available
      description:
        "Julia Ukattah has a deep passion for leading others into powerful, Christ-centered worship. As the Worship Production Coordinator for Circle of Intimacy (COI), Julia passionately organizes and directs vocalists, curates setlists, and ensures every vocalist is spiritually and musically prepared.",
      phone: "(469) 571 8721",
      email: "Juliaukattah@gmail.com",
      imagePosition: "center 25%",
    },
  ];
  return (
    <div className="bg-[#081211] text-textColor">
      <main>
        <section className="text-center p-4 mb-4 md:mb-10">
          <h1 className="text-4xl md:text-5xl font-semibold mb-8 mt-24">
            Meet our team
          </h1>
          <TeamCarousel team={team} />
        </section>
        <section className="text-center mb-10 md:mb-10 px-8 flex flex-col items-center">
          <h2 id="vision" className="text-3xl font-normal mb-4 md:text-4xl">
            Our Vision
          </h2>
          <div className="space-y-4 mb-8 ">
            <p className="text-lg md:text-xl">
              Our vision is to see a generation pursuing Jesus, living as His
              dwelling place, boldly sharing the gospel, and carrying His love
              to the world.
            </p>
            <p className="text-lg md:text-xl">
              To inspire intimacy with Jesus by fostering worship, prayer, and
              obedience, helping people find purpose and fulfillment in Him. A
              Space to experience Gods undiluted presence.
            </p>
          </div>
          <div className="relative w-full h-[500px] md:mt-10">
            <Image
              src="/coi-img.jpg"
              alt="image of people worshiping"
              className="object-cover"
              fill
            />
          </div>
        </section>
        <section className="text-center px-8 md:mb-10">
          <h2 id="mission" className="text-3xl font-normal mb-4  md:text-4xl">
            Our Mission
          </h2>
          <div className="space-y-4  text-lg flex flex-col items-center">
            <p className="text-lg md:text-xl">
              Circle of Intimacy is a nonprofit organization that exists to
              facilitate life-changing encounters with God by creating sacred
              spaces where His presence can dwell.
            </p>
            <p className="text-lg md:text-xl">
              Through worship, prayer, and intentional gatherings, we seek to
              cultivate an atmosphere where individuals can experience spiritual
              revival and personal transformation.
            </p>

            <p className="text-lg md:text-xl">
              Our mission is to inspire and empower a generation to fully
              embrace their identity as devoted sons and daughters of Christ.
            </p>
            <p className="text-lg md:text-xl">
              We envision a movement of humble, fearless men and women who find
              their worth in Him and carry the message of hope and faith to
              every corner of the earth, impacting lives and communities for the
              glory of God.
            </p>
            <div className="w-full md:hidden">
              <TeamImage />
            </div>
          </div>
          <div className="relative w-full h-[500px] md:mt-10 hidden md:block">
            <Image
              src="/coi-team1.jpg"
              alt="image of people worshiping"
              className="object-cover"
              fill
            />
          </div>
        </section>
      </main>
    </div>
  );
}
