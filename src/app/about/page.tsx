import TeamCarousel from "../components/TeamCarousel";
import Image from "next/image";
import TeamImage from "../components/TeamImage";

export default function About() {
  const team = [
    {
      name: "Sikemi Omotosho",
      role: "Lead Servant",
      imageUrl: "/assets/Sikemi.JPG",
    },

    {
      name: "Crystal Oparaji",
      role: "Executive Assistant",
      imageUrl: "/assets/Crystal.jpeg",
    },
    {
      name: "Tope Pecku",
      role: "Event Experience Coordinator",
      imageUrl: "/assets/Tope.jpg",
    },
    {
      name: "Abiodun Adejumobi",
      role: "Ministerial Care Coordinator",
      imageUrl: "/assets/Abi.jpg",
    },
    {
      name: "Emmanuel Doku",
      role: "Media & Design Coordinator",
      imageUrl: "/assets/Doku.jpg",
    },
    {
      name: "Temi Omotayo",
      role: "Media & Design Coordinator",
      imageUrl: "/assets/Temi.jpg",
    },
    {
      name: "Angel Oyeniya",
      role: "Marketing Coordinator",
      imageUrl: "/assets/Angel.jpg",
    },
    {
      name: "Michael Arthur",
      role: "Merchandise & Branding Coordinator",
      imageUrl: "/assets/Michael.jpg",
    },
    {
      name: "Ayomide Ifanse",
      role: "Live stream & Broadcast Coordinator",
      imageUrl: "/assets/AyoIfanse.JPG",
    },
    {
      name: "Subomi Borishade",
      role: "Streamline Coordinator",
      imageUrl: "/assets/Subomi.jpg",
    },
    {
      name: "Joshua Fakuade",
      role: "Worship Production Coordinator",
      imageUrl: "/assets/Joshua.jpg",
    },
  ];

  return (
    <div className="bg-[#081211] text-textColor">
      <main>
        <section className="text-center p-4 mb-8">
          <h1 className="text-4xl font-semibold mb-8 mt-24">Meet our team</h1>
          <TeamCarousel team={team} />
        </section>
        <section className="text-center mb-16 px-8 flex flex-col items-center">
          <h2 id="vision" className="text-3xl font-normal mb-4">
            Our Vision
          </h2>
          <div className="space-y-4 mb-8 ">
            <p className="text-lg">
              Our vision is to see a generation pursuing Jesus, living as His
              dwelling place, boldly sharing the gospel, and carrying His love
              to the world.
            </p>
            <p className="text-lg">
              To inspire intimacy with Jesus by fostering worship, prayer, and
              obedience, helping people find purpose and fulfillment in Him. A
              Space to experience Gods undiluted presence.
            </p>
          </div>
          <div className="relative w-[350px] h-[500px]">
            <Image
              src="/assets/coi-img.jpg"
              alt="image of people worshiping"
              className="object-cover"
              fill
            />
          </div>
        </section>
        <section className="text-center px-8 ">
          <h2 id="mission" className="text-3xl font-normal mb-4">
            Our Mission
          </h2>
          <div className="space-y-4  text-lg flex flex-col items-center">
            <p className="">
              Circle of Intimacy exists to facilitate life-changing encounters
              with God by creating sacred spaces where His presence can dwell.
            </p>
            <p>
              Through worship, prayer, and intentional gatherings, we seek to
              cultivate an atmosphere where individuals can experience spiritual
              revival and personal transformation.
            </p>
            <p className="">
              Our mission is to inspire and empower a generation to fully
              embrace their identity as devoted sons and daughters of Christ.
            </p>
            <p>
              We envision a movement of humble, fearless men and women who find
              their worth in Him and carry the message of hope and faith to
              every corner of the earth, impacting lives and communities for the
              glory of God.
            </p>
            <TeamImage />
          </div>
        </section>
      </main>
    </div>
  );
}
