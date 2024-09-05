import React, { useState, useRef } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid'; // Import icons
// React
import { AnimatePresence, motion } from "framer-motion"
// React Server Components
// import * as motion from "framer-motion/client"

const CollapsibleMenu = () => {
  const [openCategory, setOpenCategory] = useState([]);
  const categoryRefs = useRef({});

  const toggleCategory = (category) => {
    if (openCategory.includes(category)) {
      // If the category is already open, remove it from the openCategories array
      setOpenCategory(openCategory.filter((cat) => cat !== category));
    } else {
      // If the category is not open, add it to the array
      setOpenCategory([...openCategory, category]);

      // Scroll the clicked category into view
      setTimeout(() => {
        if (categoryRefs.current[category]) {
          categoryRefs.current[category].scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }, 100); // Slight delay to ensure it opens first
    }
  };

  const dishes = [
    {
      category: 'mainCourse',
      items: [
        { image: 'https://via.placeholder.com/150', title: 'Steak', description: 'Juicy grilled steak with veggies.', rating: 4.5, price: '$25.99' },
        { image: 'https://via.placeholder.com/150', title: 'Grilled Chicken', description: 'Succulent grilled chicken.', rating: 4.3, price: '$19.99' },
        { image: 'https://via.placeholder.com/150', title: 'Pasta', description: 'Creamy Alfredo pasta.', rating: 4.7, price: '$15.99' },
        { image: 'https://via.placeholder.com/150', title: 'Salmon', description: 'Freshly grilled salmon.', rating: 4.6, price: '$22.99' },
        { image: 'https://via.placeholder.com/150', title: 'Lamb Chops', description: 'Tender lamb chops.', rating: 4.8, price: '$29.99' },
        { image: 'https://via.placeholder.com/150', title: 'Risotto', description: 'Creamy mushroom risotto.', rating: 4.7, price: '$17.99' },
        { image: 'https://via.placeholder.com/150', title: 'BBQ Ribs', description: 'Finger-licking BBQ ribs.', rating: 4.9, price: '$26.99' },
        { image: 'https://via.placeholder.com/150', title: 'Lasagna', description: 'Classic Italian lasagna.', rating: 4.4, price: '$16.99' },
        { image: 'https://via.placeholder.com/150', title: 'Duck Confit', description: 'French-style duck confit.', rating: 4.6, price: '$28.99' },
      ],
    },
    {
      category: 'sandwiches',
      items: [
        { image: 'https://via.placeholder.com/150', title: 'Club Sandwich', description: 'Classic club sandwich.', rating: 4.5, price: '$8.99' },
        { image: 'https://via.placeholder.com/150', title: 'BLT', description: 'Bacon, lettuce, and tomato.', rating: 4.4, price: '$7.99' },
        { image: 'https://via.placeholder.com/150', title: 'Chicken Sandwich', description: 'Crispy chicken sandwich.', rating: 4.6, price: '$9.99' },
        { image: 'https://via.placeholder.com/150', title: 'Veggie Sandwich', description: 'Fresh veggie sandwich.', rating: 4.3, price: '$6.99' },
        { image: 'https://via.placeholder.com/150', title: 'Turkey Sandwich', description: 'Sliced turkey sandwich.', rating: 4.5, price: '$8.99' },
        { image: 'https://via.placeholder.com/150', title: 'Ham Sandwich', description: 'Classic ham sandwich.', rating: 4.4, price: '$7.99' },
        { image: 'https://via.placeholder.com/150', title: 'Tuna Sandwich', description: 'Tuna salad sandwich.', rating: 4.6, price: '$9.49' },
        { image: 'https://via.placeholder.com/150', title: 'Egg Salad Sandwich', description: 'Creamy egg salad sandwich.', rating: 4.2, price: '$5.99' },
      ],
    },
    {
      category: 'pizza',
      items: [
        { image: 'https://via.placeholder.com/150', title: 'Margherita', description: 'Classic Margherita pizza.', rating: 4.7, price: '$12.99' },
        { image: 'https://via.placeholder.com/150', title: 'Pepperoni', description: 'Pepperoni pizza with extra cheese.', rating: 4.6, price: '$14.99' },
        { image: 'https://via.placeholder.com/150', title: 'BBQ Chicken', description: 'BBQ chicken pizza.', rating: 4.8, price: '$15.99' },
        { image: 'https://via.placeholder.com/150', title: 'Hawaiian', description: 'Pineapple and ham pizza.', rating: 4.4, price: '$13.99' },
        { image: 'https://via.placeholder.com/150', title: 'Veggie Delight', description: 'Fresh vegetable pizza.', rating: 4.5, price: '$11.99' },
        { image: 'https://via.placeholder.com/150', title: 'Meat Lover’s', description: 'Loaded with meats.', rating: 4.9, price: '$16.99' },
        { image: 'https://via.placeholder.com/150', title: 'Four Cheese', description: 'Cheesy delight with four cheeses.', rating: 4.8, price: '$14.99' },
        { image: 'https://via.placeholder.com/150', title: 'Supreme', description: 'Loaded with toppings.', rating: 4.6, price: '$17.99' },
        { image: 'https://via.placeholder.com/150', title: 'Truffle Pizza', description: 'Pizza with truffle oil.', rating: 4.9, price: '$19.99' },
      ],
    },
    {
      category: 'appetizers',
      items: [
        { image: 'https://via.placeholder.com/150', title: 'Spring Rolls', description: 'Crispy vegetable spring rolls.', rating: 4.5, price: '$6.99' },
        { image: 'https://via.placeholder.com/150', title: 'Mozzarella Sticks', description: 'Fried mozzarella cheese sticks.', rating: 4.6, price: '$7.99' },
        { image: 'https://via.placeholder.com/150', title: 'Nachos', description: 'Topped nachos with cheese.', rating: 4.7, price: '$8.99' },
        { image: 'https://via.placeholder.com/150', title: 'Stuffed Mushrooms', description: 'Stuffed mushrooms with cheese.', rating: 4.8, price: '$9.49' },
        { image: 'https://via.placeholder.com/150', title: 'Bruschetta', description: 'Italian-style bruschetta.', rating: 4.4, price: '$5.99' },
        { image: 'https://via.placeholder.com/150', title: 'Garlic Bread', description: 'Toasted garlic bread.', rating: 4.5, price: '$4.99' },
        { image: 'https://via.placeholder.com/150', title: 'Chicken Wings', description: 'Spicy chicken wings.', rating: 4.8, price: '$10.99' },
        { image: 'https://via.placeholder.com/150', title: 'Onion Rings', description: 'Crispy onion rings.', rating: 4.6, price: '$6.49' },
        { image: 'https://via.placeholder.com/150', title: 'Potato Skins', description: 'Loaded potato skins.', rating: 4.7, price: '$7.49' },
      ],
    },
  ];


  // Variants for motion
  const containerVariants = {
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        staggerChildren: 0.1, // Delay between each dish item
      },
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        when: "afterChildren", // Animation timing to start after children collapse
      },
    },
  };

  const dishVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -20 },
  };
  

  return (
    <div className="w-full max-w-lg mx-auto my-4 text-[#593616]">
      {dishes.map(({ category, items }) => (
        <div key={category} className="mb-2">
          <button
            onClick={() => toggleCategory(category)}
            className="w-full bg-transparent text-black p-4 flex justify-between items-center border text-[#593616] border-gray-300 rounded-lg focus:outline-none"
            ref={(el) => (categoryRefs.current[category] = el)} // Store the ref
          >
            <span>{category.charAt(0).toUpperCase() + category.slice(1)}</span>
            {openCategory.includes(category) ? (
              <ChevronUpIcon className="w-5 h-5" />
            ) : (
              <ChevronDownIcon className="w-5 h-5" />
            )}
          </button>

          {/* Collapsible content */}
          <AnimatePresence initial={false}>
            {openCategory.includes(category) && (
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={containerVariants}
                className="overflow-hidden"
              >
                {items.map((dish, index) => (
                  <motion.div
                    key={index}
                    variants={dishVariants}
                    className="p-4 flex items-start gap-4 border-b"
                  >
                    <img
                      src={dish.image}
                      alt={dish.title}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div>
                      <h4 className="font-semibold">{dish.title}</h4>
                      <p className="text-sm text-gray-600">{dish.description}</p>
                      <div className="flex items-center">
                        <span className="text-yellow-500">★ {dish.rating}</span>
                        <span className="ml-2">{dish.price}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};


export default CollapsibleMenu;
