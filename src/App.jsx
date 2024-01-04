import image1 from './assets/images/image-1.png';
import image2 from './assets/images/image-2.png';
import image3 from './assets/images/image-3.png';
import Card from './components/Card';

const cardData = [
  {
    title: 'Galaxy Swirls',
    img: {
      src: image1,
      alt: 'galaxy swirl'
    },
    description: 'Galaxy swirls refer to the patterns of stars and gas within galaxies that appear as spiral arms. These arms are formed by the gravitational forces between stars and the rotation of the galaxy.',
    cta: 'Let’s Gooooooo!'
  },
  {
    title: 'Rad Beaches',
    img: {
      src: image2,
      alt: 'beach at sunset'
    },
    description: "Beaches at sunset offer a picturesque view of the sun setting over the ocean, with warm hues of orange, pink, and purple painting the sky. It's a serene and romantic experience.",
    cta: 'Take me surfing!'
  },
  {
    title: 'Killer Mountains',
    img: {
      src: image3,
      alt: 'jagged mountains'
    },
    description: 'Mountains are majestic landforms characterized by steep slopes and high elevations. They are often associated with natural beauty, adventure, and challenge, and are home to diverse ecosystems and unique cultures.',
    cta: 'Pack My Bags'
  }
];

function App() {
  return (
    <div className="bg-backgroundColor text-contentColor isolate overflow-hidden p-4 sm:p-8 grid place-items-center">
      <div className="grid relative min-h-screen items-center justify-center gap-16">
        <h1 className="text-6xl font-bold text-center">
          <span className="underline">Dark</span> or <span className="underline">Light</span>?
        </h1>
        <section className="container grid sm:grid-cols-2 md:grid-cols-3 gap-6 items-start" aria-label="card container">
          {cardData.map(card => (
            <Card {...card} key={card.title} />
          ))}
        </section>
      </div>
    </div>
  );
}

export default App;
