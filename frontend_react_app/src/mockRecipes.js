const recipes = [
  {
    id: 1,
    name: 'Caprese Salad',
    cuisine: 'Italian',
    mealType: 'Salad',
    description: 'Fresh mozzarella, tomatoes, and basil. A classic Italian starter.',
    ingredients: [
      '2 ripe tomatoes',
      '125g mozzarella cheese',
      'Fresh basil leaves',
      'Extra virgin olive oil',
      'Salt and pepper'
    ],
    instructions: [
      'Slice the tomatoes and mozzarella.',
      'Layer them with basil leaves on a plate.',
      'Drizzle with olive oil, sprinkle salt and pepper, and serve.'
    ],
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 2,
    name: 'Vegetarian Pad Thai',
    cuisine: 'Thai',
    mealType: 'Main',
    description: 'Rice noodles stir-fried with tofu, vegetables and peanuts.',
    ingredients: [
      '200g rice noodles',
      '100g tofu',
      '1 cup mixed vegetables',
      '2 tbsp soy sauce',
      '1 tbsp lime juice',
      'Peanuts',
      'Spring onions'
    ],
    instructions: [
      'Soak noodles in hot water until soft.',
      'Stir-fry tofu until browned, add vegetables.',
      'Add noodles, soy sauce, and lime juice.',
      'Serve with peanuts and spring onions.'
    ],
    image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 3,
    name: 'Shakshuka',
    cuisine: 'Middle Eastern',
    mealType: 'Breakfast',
    description: 'Eggs poached in a spicy tomato and pepper sauce.',
    ingredients: [
      '4 eggs',
      '1 onion',
      '2 bell peppers',
      '400g canned tomatoes',
      '1 tsp cumin',
      'Chili flakes',
      'Parsley'
    ],
    instructions: [
      'Fry onions and peppers in a pan.',
      'Add tomatoes, cumin, and chili. Simmer for 10 mins.',
      'Make wells, crack eggs, cover and cook till set.',
      'Garnish with parsley.'
    ],
    image: 'https://images.unsplash.com/photo-1519864600045-16e6b3b0fa5c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 4,
    name: 'Chicken Enchiladas',
    cuisine: 'Mexican',
    mealType: 'Main',
    description: 'Rolled tortillas stuffed with chicken, cheese and topped with sauce.',
    ingredients: [
      '4 corn tortillas',
      '1 cup shredded chicken',
      '1 cup cheddar cheese',
      '1 cup enchilada sauce',
      'Cilantro'
    ],
    instructions: [
      'Fill tortillas with chicken and cheese, roll up.',
      'Place in dish, pour sauce over, top with more cheese.',
      'Bake at 180°C for 20 min. Garnish with cilantro.'
    ],
    image: 'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 5,
    name: 'Miso Soup',
    cuisine: 'Japanese',
    mealType: 'Soup',
    description: 'A delicate broth with tofu, seaweed, and miso paste.',
    ingredients: [
      '2 cups dashi stock',
      '2 tbsp miso paste',
      '50g tofu',
      'Chopped spring onions',
      'Seaweed'
    ],
    instructions: [
      'Heat dashi, dissolve miso paste.',
      'Add diced tofu and seaweed.',
      'Simmer 2-3 mins, then sprinkle onions.'
    ],
    image: 'https://images.unsplash.com/photo-1504674900247-ec7d99772630?auto=format&fit=crop&w=600&q=80'
  }
];

export default recipes;
