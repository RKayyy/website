import { TypeAnimation } from 'react-type-animation';
import CustomFont from '../fonts/RobotoMonoLight.ttf';

const Type = () => {

  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'I am Reitika Kumar',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'I am a coder',
        1000,
        'I am a student',
        1000,
        'I am a developer',
        1000
      ]}
      wrapper="span"
      speed={30}
      style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '6em', display: 'inline-block', color: "white"}}
      repeat={Infinity}
    />
  );
};

export default Type;