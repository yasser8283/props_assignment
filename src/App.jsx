import React from 'react'
import Card from './Card'
const App = () => {
  const properties = [
    {
      id: 1,
      title: "Mountain Retreat",
      price: "$299/night",
      description: "Experience breathtaking views and serene mountain air in this exclusive retreat.",
      tags: ["🏔️ Mountain", "🌿 Nature", "⭐ 4.9"],
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
      rating: 4.9,
      location: "Colorado, USA",
      reviews: 128
    },
    {
      id: 2,
      title: "Ocean Villa",
      price: "$450/night",
      description: "Wake up to the sound of waves in this stunning beachfront villa with panoramic views.",
      tags: ["🌊 Beach", "🐚 Coastal", "⭐ 5.0"],
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80",
      rating: 5.0,
      location: "Malibu, USA",
      reviews: 245
    },
    {
      id: 3,
      title: "Forest Cabin",
      price: "$180/night",
      description: "A cozy wooden cabin nestled deep in the forest, perfect for a digital detox.",
      tags: ["🌲 Forest", "🔥 Fireplace", "⭐ 4.7"],
      image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=600&q=80",
      rating: 4.7,
      location: "Oregon, USA",
      reviews: 89
    },
    {
      id: 4,
      title: "Desert Oasis",
      price: "$220/night",
      description: "A luxurious escape in the heart of the desert with a private pool and stargazing deck.",
      tags: ["🏜️ Desert", "🏊 Pool", "⭐ 4.8"],
      image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=600&q=80",
      rating: 4.8,
      location: "Arizona, USA",
      reviews: 167
    },
    {
      id: 5,
      title: "Lakeside Cottage",
      price: "$195/night",
      description: "A charming cottage right on the lakefront with a private dock and kayaks included.",
      tags: ["🏞️ Lake", "🚣 Kayak", "⭐ 4.6"],
      image: "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?w=600&q=80",
      rating: 4.6,
      location: "Vermont, USA",
      reviews: 73
    },
    {
      id: 6,
      title: "City Penthouse",
      price: "$520/night",
      description: "A sleek modern penthouse in the heart of downtown with skyline views and rooftop access.",
      tags: ["🌆 City", "🏙️ Skyline", "⭐ 4.9"],
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80",
      rating: 4.9,
      location: "New York, USA",
      reviews: 312
    },
    {
      id: 7,
      title: "Tropical Bungalow",
      price: "$340/night",
      description: "An overwater bungalow surrounded by turquoise lagoon waters and tropical greenery.",
      tags: ["🌴 Tropical", "🐠 Snorkel", "⭐ 5.0"],
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80",
      rating: 5.0,
      location: "Maldives",
      reviews: 198
    },
    {
      id: 8,
      title: "Sunset Estate",
      price: "$410/night",
      description: "Luxury Estate with hilltop sunsets",
      tags: ["Sunset", "🌄 Scenic", "⭐ 4.8"],
      image: "https://images.unsplash.com/photo-1504279577054-acfeccf8fc52?w=600&q=80",
      rating: 4.8,
      location: "Tuscany, Italy",
      reviews: 154
    },
    {
      id: 9,
      title: "Arctic Igloo",
      price: "$670/night",
      description: "Sleep under the Northern Lights in a glass-roofed igloo with heated floors and luxury bedding.",
      tags: ["❄️ Arctic", "🌌 Aurora", "⭐ 4.9"],
      image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600&q=80",
      rating: 4.9,
      location: "Lapland, Finland",
      reviews: 91
    },
    {
      id: 10,
      title: "Cliffside Villa",
      price: "$580/night",
      description: "A breathtaking white-washed villa perched on a cliff overlooking the Aegean Sea.",
      tags: ["🏛️ Historic", "🌅 Sunset", "⭐ 5.0"],
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&q=80",
      rating: 5.0,
      location: "Santorini, Greece",
      reviews: 287
    },
    {
    id: 11,
    title: "Bamboo Treehouse",
    price: "$260/night",
    description: "A magical treehouse built entirely from bamboo, surrounded by lush rainforest and exotic wildlife.",
    tags: ["🌿 Rainforest", "🦜 Wildlife", "⭐ 4.8"],
    image: "https://images.unsplash.com/photo-1439130490301-25e322d88054?w=600&q=80",
    rating: 4.8,
    location: "Bali, Indonesia",
    reviews: 143
},
{
    id: 12,
    title: "Scottish Castle",
    price: "$750/night",
    description: "Live like royalty in a fully restored 14th century castle with grand halls and castle grounds.",
    tags: ["🏰 Castle", "👑 Luxury", "⭐ 4.9"],
    image: "https://images.unsplash.com/photo-1558005137-d9619a5c539f?w=600&q=80",
    rating: 4.9,
    location: "Edinburgh, Scotland",
    reviews: 67
}
  ];
  return (
    <div className='container'>
        {properties.map(function (property){
          return <Card key = {property.id} property={property} />         
        })}
    </div>
  )
}

export default App