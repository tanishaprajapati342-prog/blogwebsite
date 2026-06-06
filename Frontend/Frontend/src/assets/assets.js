import blog1 from "./blog1.png";
import blog2 from "./blog2.png";
import blog3 from "./blog3.png";
import blog4 from "./blog4.png";
import blog5 from "./blog5.png";
import blog6 from "./blog6.png";
import blog7 from "./blog7.png";
import blog8 from "./blog8.png";
import blog9 from "./blog9.png";
import author from "./author.png";
import hero from "./hero.png";
import logo from "./logo.png";

import contact_us from "./contact-us.jpg";
import contact from "./contact.jpg";

// FIX: Saare imported assets ko is object ke andar add kar diya hai
export const assets = {
  hero,
  
  logo,
  author,
  contact_us,
  contact,
  blog1,
  blog2,
  blog3,
  blog4,
  blog5,
  blog6,
  blog7,
  blog8,
  blog9,
};

export const DEFAULT_POSTS = [
 { 
    id: 1, 
    title: 'Wedding Couples', 
    description: 'Beautiful couples celebrating their special day with love and joy.',
    imageUrl: 'https://www.k4fashion.com/wp-content/uploads/2019/07/Powder-pink-and-blush-pink-bridal-and-groom-wedding-dress-combination.jpg',
    category: 'Couples',
    slug: 'wedding-couples-gallery',
    tags: ['Wedding', 'Couple', 'Bridal'],
    readingTime: '2 min read',
    views: 120,
    status: 'published',
    date: 'June 4, 2026'
  },
  { 
    id: 2, 
    title: 'Ring Ceremony', 
    description: 'Exchanging rings - a promise of forever and eternal love.',
    imageUrl: 'https://thumbs.dreamstime.com/b/couple-exchanging-rings-hindu-engagement-wedding-ceremony-hands-bride-groom-indian-ring-exchange-puts-381885827.jpg',
    category: 'Ceremony',
    slug: 'ring-ceremony-moments',
    tags: ['Engagement', 'Rings', 'Rituals'],
    readingTime: '3 min read',
    views: 85,
    status: 'published',
    date: 'June 3, 2026'
  },
  { 
    id: 3, 
    title: 'Family Pictures', 
    description: 'Capturing precious moments with loved ones and family.',
    imageUrl: 'https://www.k4fashion.com/wp-content/uploads/2022/09/The-Picture-Perfect-Family-Portrait-wedding-photos.jpg',
    category: 'Family',
    slug: 'family-wedding-portraits',
    tags: ['Family', 'Portraits', 'Candid'],
    readingTime: '4 min read',
    views: 200,
    status: 'published',
    date: 'June 1, 2026'
  },
  { 
    id: 4, 
    title: 'Couple Dance', 
    description: 'Romantic first dance moments filled with grace and elegance.',
    imageUrl: 'https://i.ytimg.com/vi/UbFIZsi1z0c/maxresdefault.jpg',
    category: 'Entertainment',
    slug: 'romantic-couple-dance',
    tags: ['Dance', 'Couple', 'Celebration'],
    readingTime: '2 min read',
    views: 350,
    status: 'published',
    date: 'May 30, 2026'
  },
  { 
    id: 5, 
    title: 'Wedding Reception', 
    description: 'Grand celebrations with friends, family, and festive vibes.',
    imageUrl: 'https://i.pinimg.com/736x/78/f8/f8/78f8f88ec1263a1c9e4e9f24a0107da2.jpg',
    category: 'Reception',
    slug: 'grand-wedding-reception',
    tags: ['Party', 'Reception', 'Luxury'],
    readingTime: '5 min read',
    views: 500,
    status: 'published',
    date: 'May 28, 2026'
  },
  { 
    id: 6, 
    title: 'Traditional Dance', 
    description: 'Energetic dance performances celebrating culture and joy.',
    imageUrl: 'https://i.ytimg.com/vi/iZfrmZH5GJg/maxresdefault.jpg',
    category: 'Culture',
    slug: 'traditional-dance-performance',
    tags: ['Culture', 'Dance', 'Festive'],
    readingTime: '3 min read',
    views: 420,
    status: 'published',
    date: 'May 25, 2026'
  }
];