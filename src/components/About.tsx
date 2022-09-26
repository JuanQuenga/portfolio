import Image from "next/image";
import SectionHeader from "./SectionHeader";

const About = () => {
  return (
    <section className="h-screen container mx-auto">
      <SectionHeader title="What To Know About Me" />
      <p className="font-thin text-3xl">
        I&apos;m a self-taught developer who&apos;s love of video games has
        always pushed me further into the world of programming. From creating
        small programs in visual basicgit for early flash games on the web to
        full on websites and tools for the comumunities I&apos;ve been a part
        of.
      </p>
    </section>
  );
};

export default About;
