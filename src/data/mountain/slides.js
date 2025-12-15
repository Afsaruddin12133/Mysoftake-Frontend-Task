import mounten1 from '../../assets/Mountain/mounten-1.jpg';
import mounten2 from '../../assets/Mountain/mounten-2.jpg';
import mounten3 from '../../assets/Mountain/mounten-3.jpg';
import mounten4 from '../../assets/Mountain/mounten-4.jpg';
import mounten5 from '../../assets/Mountain/mounten-5.jpg';
import mounten6 from '../../assets/Mountain/mounten-6.jpg';
import bg1 from '../../assets/Mountain/bg-1.png';
import bg2 from '../../assets/Mountain/bg-2.png';
import bg3 from '../../assets/Mountain/bg-3.png';
import bg4 from '../../assets/Mountain/bg-4.png';
import bg5 from '../../assets/Mountain/bg-5.png';
import bg6 from '../../assets/Mountain/bg-6.png';

export const slides = [
  {
    id: 1,
    title: "Take Your Snow Days to the Next Level",
    description: "Unlock a wealth of detailed stats (and bragging rights) about your days skiing and snowboarding. Know what to expect with condition reports and trail maps for resorts around the world.",
    background: mounten1,  // Use imported variable
    images: [bg1, bg2],    // Use imported variables
  },
  {
    id: 2,
    title: "Make Every Run on the Mountain Count",
    description: "Every day on the mountain tells a story—capture yours with detailed run tracking, performance stats, and global resort insights.",
    background: mounten2,
    images: [bg3, bg4],
  },
  {
    id: 3,
    title: "Turn Ordinary Ski Days Into Epic Adventures",
    description: "Turn every ski or snowboard session into a memorable adventure with rich analytics, real-time conditions, and worldwide trail maps designed to help you explore confidently and ride your best.",
    background: mounten3,
    images: [bg5, bg6],
  },
  {
    id: 4,
    title: "Elevate Every Moment You Spend on the Slopes",
    description: "From your very first turn to your final descent, unlock a full picture of your day with advanced tracking, in-depth stats, and up-to-date mountain reports from resorts across the globe.",
    background: mounten4,
    images: [bg1, bg2],
  },
  {
    id: 5,
    title: "Bring More Thrill and Precision to Your Ride",
    description: "Ride smarter, push harder, and celebrate every milestone with powerful performance insights, live condition updates, and detailed trail maps that bring every resort within reach.",
    background: mounten5,
    images: [bg3, bg4],
  },
  {
    id: 6,
    title: "Transform Your Time in the Snow Into Something Extraordinary",
    description: "Whether you’re chasing powder or perfecting technique, elevate your time on the mountain with comprehensive activity tracking, global resort information, and real-time snow conditions built to keep you ahead of the day.",
    background: mounten6,
    images: [bg5, bg6],
  }
];
