import Image from "next/image";
import SectionHeader from "./SectionHeader";

const About = () => {
  return (
    <section className="h-screen container mx-auto">
      <SectionHeader title="What To Know About Me" />
      <Image
        src="/images/juan.png"
        alt="Juan Quenga"
        width="200px"
        height="200px"
        className="rounded-3xl object-cover "
      />
      <p className="font-thin text-3xl">
        I'm a self-taught developer who's love of video games has always pushed
        me further into the world of programming. From creating small programs
        in visual basic for early flash games on the web to full on websites and
        tools for the comumunities I've been a part of.
      </p>
    </section>
  );
};

export default About;
