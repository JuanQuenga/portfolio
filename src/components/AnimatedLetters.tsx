interface IAnimatedLettersProps {
  letters: string;
}

const AnimatedLetters = ({ letters }: IAnimatedLettersProps) => {
  return (
    <div>
      {letters.split("").map((letter, index) => {
        return (
          <span key={index} className="animated-letter">
            {letter}
          </span>
        );
      })}
    </div>
  );
};

export default AnimatedLetters;
