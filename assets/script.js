// ---------- Icon library (inline SVG, theme-colored via currentColor) ----------
const ICONS = {
    sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>',
    moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"/></svg>',
    cooking: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"/><line x1="6" y1="17" x2="18" y2="17"/></svg>',
    crafting: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/></svg>',
    fishing: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12s3-6 9-6 9 6 9 6-3 6-9 6-9-6-9-6Z"/><path d="M21 12l2-3v6l-2-3Z" fill="currentColor" stroke="none"/><circle cx="9" cy="10.6" r="0.9" fill="currentColor" stroke="none"/></svg>',
    back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
    info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>',
    star: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.9 5.8L20 9.5l-5 3.8 1.6 6.2L12 16l-4.6 3.5L9 13.3 4 9.5l6.1-1.7L12 2Z"/></svg>',
    checklist: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m3 7 2 2 4-4"/><path d="M11 7h10"/><path d="m3 15 2 2 4-4"/><path d="M11 15h10"/></svg>'
};
function icon(name) { return ICONS[name] || ''; }

const CATEGORY_META = {
    cooking:  { title: 'Cooking',  icon: 'cooking',  desc: 'Track every recipe, its ingredients, buffs, and where to learn it.' },
    crafting: { title: 'Crafting', icon: 'crafting', desc: 'Manage craftable equipment, structures, bombs, and fences.' },
    fishing:  { title: 'Fishing',  icon: 'fishing',  desc: "Complete the fish collection, from common catches to legendary lore." }
};

// ---------- Master data collections ----------
const appData = {
  cooking: [
      { category: "Meals & Dishes", items: [
          { name: "Fried Egg", desc: "Sunny-side up.", ingredients: "Egg (1)", details: "Energy: 50 | Health: 22 | Source: Starter", source: "Starter" },
          { name: "Omelet", desc: "It's super fluffy.", ingredients: "Egg (1), Milk (1)", details: "Energy: 100 | Health: 45 | Source: The Queen of Sauce, Stardrop Saloon", source: "The Queen of Sauce" },
          { name: "Salad", desc: "A healthy garden salad.", ingredients: "Leek (1), Dandelion (1), Vinegar (1)", details: "Energy: 113 | Health: 50 | Source: Emily (Mail)", source: "Emily (Mail)" },
          { name: "Cheese Cauliflower", desc: "It smells great!", ingredients: "Cauliflower (1), Cheese (1)", details: "Energy: 138 | Health: 62 | Source: Pam (Mail)", source: "Pam (Mail)" },
          { name: "Baked Fish", desc: "Baked fish on a bed of herbs.", ingredients: "Sunfish (1), Bream (1), Wheat Flour (1)", details: "Energy: 75 | Health: 33 | Source: Queen of Sauce", source: "The Queen of Sauce" },
          { name: "Parsnip Soup", desc: "It's fresh and hearty.", ingredients: "Parsnip (1), Milk (1), Vinegar (1)", details: "Energy: 85 | Health: 38 | Source: Caroline (Mail)", source: "Caroline (Mail)" },
          { name: "Vegetable Medley", desc: "This is very nutritious.", ingredients: "Tomato (1), Beet (1)", details: "Energy: 165 | Health: 74 | Source: Caroline (Mail)", source: "Caroline (Mail)" },
          { name: "Complete Breakfast", desc: "You'll feel ready to take on the world!", ingredients: "Fried Egg (1), Milk (1), Hashbrowns (1), Pancakes (1)", details: "Energy: 200 | Health: 90 | Buffs: Farming (+2), Max Energy (+50)", source: "The Queen of Sauce" },
          { name: "Fried Calamari", desc: "It's so chewy.", ingredients: "Squid (1), Wheat Flour (1), Oil (1)", details: "Energy: 80 | Health: 36 | Source: Jodi (Mail)", source: "Jodi (Mail)" },
          { name: "Strange Bun", desc: "What's inside?", ingredients: "Wheat Flour (1), Periwinkle (1), Void Mayonnaise (1)", details: "Energy: 100 | Health: 45 | Source: Shane (Mail)", source: "Shane (Mail)" },
          { name: "Lucky Lunch", desc: "A special little meal.", ingredients: "Sea Cucumber (1), Tortilla (1), Blue Jazz (1)", details: "Energy: 100 | Health: 45 | Buffs: Luck (+3)", source: "The Queen of Sauce" },
          { name: "Fried Mushroom", desc: "Earthy and aromatic.", ingredients: "Common Mushroom (1), Morel (1), Oil (1)", details: "Energy: 135 | Health: 60 | Buffs: Attack (+2)", source: "Demetrius (Mail)" },
          { name: "Pizza", desc: "It's popular for all the right reasons.", ingredients: "Wheat Flour (1), Tomato (1), Cheese (1)", details: "Energy: 150 | Health: 67 | Source: Queen of Sauce, Saloon", source: "The Queen of Sauce" },
          { name: "Bean Hotpot", desc: "It sure is healthy.", ingredients: "Green Bean (2)", details: "Energy: 125 | Health: 56 | Buffs: Max Energy (+30), Magnetism (+32)", source: "Clint (Mail)" },
          { name: "Glazed Yams", desc: "Sweet and satisfying...", ingredients: "Yam (1), Sugar (1)", details: "Energy: 200 | Health: 90 | Source: Queen of Sauce", source: "The Queen of Sauce" },
          { name: "Carp Surprise", desc: "It's bland and oily.", ingredients: "Carp (4)", details: "Energy: 90 | Health: 40 | Source: Queen of Sauce", source: "The Queen of Sauce" },
          { name: "Hashbrowns", desc: "Crispy and golden-brown!", ingredients: "Potato (1), Oil (1)", details: "Energy: 90 | Health: 40 | Buffs: Farming (+1)", source: "Queen of Sauce / Saloon" },
          { name: "Pancakes", desc: "A double stack of fluffy pancakes.", ingredients: "Wheat Flour (1), Egg (1)", details: "Energy: 90 | Health: 40 | Buffs: Foraging (+2)", source: "Queen of Sauce / Saloon" },
          { name: "Salmon Dinner", desc: "The lemon spritz makes it special.", ingredients: "Salmon (1), Amaranth (1), Kale (1)", details: "Energy: 125 | Health: 56 | Source: Gus (Mail)", source: "Gus (Mail)" },
          { name: "Fish Taco", desc: "It smells delicious.", ingredients: "Tuna (1), Tortilla (1), Red Cabbage (1), Mayonnaise (1)", details: "Energy: 165 | Health: 74 | Buffs: Fishing (+2)", source: "Linus (Mail)" },
          { name: "Crispy Bass", desc: "Wow, the breading is perfect.", ingredients: "Largemouth Bass (1), Wheat Flour (1), Oil (1)", details: "Energy: 90 | Health: 40 | Buffs: Magnetism (+64)", source: "Kent (Mail)" },
          { name: "Pepper Poppers", desc: "Spicy breaded peppers filled with cheese.", ingredients: "Hot Pepper (1), Cheese (1)", details: "Energy: 130 | Health: 58 | Buffs: Farming (+2), Speed (+1)", source: "Shane (Mail)" },
          { name: "Bread", desc: "A crusty baguette.", ingredients: "Wheat Flour (1)", details: "Energy: 50 | Health: 22 | Source: Queen of Sauce, Saloon", source: "The Queen of Sauce" },
          { name: "Tom Kha Soup", desc: "These flavors are incredible!", ingredients: "Coconut (1), Shrimp (1), Common Mushroom (1)", details: "Energy: 175 | Health: 78 | Buffs: Farming (+2), Max Energy (+30)", source: "Sandy (Mail)" },
          { name: "Trout Soup", desc: "Pretty salty.", ingredients: "Rainbow Trout (1), Green Algae (1)", details: "Energy: 100 | Health: 45 | Buffs: Fishing (+1)", source: "The Queen of Sauce" },
          { name: "Chocolate Cake", desc: "Rich and moist with fudge icing.", ingredients: "Wheat Flour (1), Sugar (1), Egg (1)", details: "Energy: 150 | Health: 67 | Source: Queen of Sauce", source: "The Queen of Sauce" },
          { name: "Pink Cake", desc: "There's little heart candies on top.", ingredients: "Melon (1), Wheat Flour (1), Sugar (1), Egg (1)", details: "Energy: 250 | Health: 112 | Source: Queen of Sauce", source: "The Queen of Sauce" },
          { name: "Rhubarb Pie", desc: "Mmm, tangy and sweet!", ingredients: "Rhubarb (1), Wheat Flour (1), Sugar (1)", details: "Energy: 215 | Health: 96 | Source: Marnie (Mail)", source: "Marnie (Mail)" },
          { name: "Cookie", desc: "Very chewy.", ingredients: "Wheat Flour (1), Sugar (1), Egg (1)", details: "Energy: 90 | Health: 40 | Source: Evelyn (4-heart)", source: "Evelyn (Event)" },
          { name: "Spaghetti", desc: "An old favorite.", ingredients: "Wheat Flour (1), Tomato (1)", details: "Energy: 75 | Health: 33 | Source: Lewis (Mail)", source: "Lewis (Mail)" },
          { name: "Fried Eel", desc: "Greasy but flavorful.", ingredients: "Eel (1), Oil (1)", details: "Energy: 75 | Health: 33 | Buffs: Luck (+1)", source: "George (Mail)" },
          { name: "Spicy Eel", desc: "It's really spicy! Be careful.", ingredients: "Eel (1), Hot Pepper (1)", details: "Energy: 115 | Health: 51 | Buffs: Luck (+1), Speed (+1)", source: "George (Mail)" },
          { name: "Sashimi", desc: "Raw fish sliced into thin pieces.", ingredients: "Any Fish (1)", details: "Energy: 75 | Health: 33 | Source: Linus (Mail)", source: "Linus (Mail)" },
          { name: "Maki Roll", desc: "Fish and rice wrapped in seaweed.", ingredients: "Any Fish (1), Seaweed (1), Rice (1)", details: "Energy: 100 | Health: 45 | Source: Queen of Sauce, Saloon", source: "The Queen of Sauce" },
          { name: "Tortilla", desc: "Can be used as a vessel or eaten by itself.", ingredients: "Corn (1)", details: "Energy: 50 | Health: 22 | Source: Queen of Sauce, Saloon", source: "The Queen of Sauce" },
          { name: "Red Plate", desc: "Full of antioxidants.", ingredients: "Red Cabbage (1), Radish (1)", details: "Energy: 240 | Health: 108 | Buffs: Max Energy (+50)", source: "Emily (Mail)" },
          { name: "Eggplant Parmesan", desc: "Tangy, cheesy, and wonderful.", ingredients: "Eggplant (1), Tomato (1)", details: "Energy: 175 | Health: 78 | Buffs: Mining (+1), Defense (+3)", source: "Lewis (Mail)" },
          { name: "Rice Pudding", desc: "It's creamy, sweet, and fun to eat.", ingredients: "Milk (1), Sugar (1), Rice (1)", details: "Energy: 115 | Health: 51 | Source: Evelyn (Mail)", source: "Evelyn (Mail)" },
          { name: "Ice Cream", desc: "It's hard to find someone who doesn't like this.", ingredients: "Milk (1), Sugar (1)", details: "Energy: 100 | Health: 45 | Source: Jodi (Mail)", source: "Jodi (Mail)" },
          { name: "Blueberry Tart", desc: "It's subtle and refreshing.", ingredients: "Blueberry (1), Wheat Flour (1), Sugar (1), Egg (1)", details: "Energy: 125 | Health: 56 | Source: Pierre (Mail)", source: "Pierre (Mail)" },
          { name: "Autumn's Bounty", desc: "A taste of the season.", ingredients: "Yam (1), Pumpkin (1)", details: "Energy: 220 | Health: 99 | Buffs: Foraging (+2), Defense (+2)", source: "Demetrius (Mail)" },
          { name: "Pumpkin Soup", desc: "A seasonal favorite.", ingredients: "Pumpkin (1), Milk (1)", details: "Energy: 200 | Health: 90 | Buffs: Defense (+2), Luck (+2)", source: "Robin (Mail)" },
          { name: "Super Meal", desc: "It's a really energizing meal.", ingredients: "Bok Choy (1), Cranberries (1), Artichoke (1)", details: "Energy: 160 | Health: 72 | Buffs: Max Energy (+40), Speed (+1)", source: "Kent (Mail)" },
          { name: "Cranberry Sauce", desc: "A festive treat.", ingredients: "Cranberries (1), Sugar (1)", details: "Energy: 125 | Health: 56 | Buffs: Mining (+2)", source: "Gus (Mail)" },
          { name: "Stuffing", desc: "Ahh... the smell of warm bread and sage.", ingredients: "Bread (1), Cranberries (1), Hazelnut (1)", details: "Energy: 170 | Health: 76 | Buffs: Defense (+2)", source: "Pam (Mail)" },
          { name: "Farmer's Lunch", desc: "This'll keep you going.", ingredients: "Omelet (1), Parsnip (1)", details: "Energy: 200 | Health: 90 | Buffs: Farming (+3)", source: "Farming Level 3" },
          { name: "Survival Burger", desc: "A convenient snack for the explorer.", ingredients: "Bread (1), Cave Carrot (1), Eggplant (1)", details: "Energy: 125 | Health: 56 | Buffs: Foraging (+3)", source: "Foraging Level 8" },
          { name: "Dish O' The Sea", desc: "This'll keep you warm in the cold sea air.", ingredients: "Sardine (2), Hashbrowns (1)", details: "Energy: 150 | Health: 67 | Buffs: Fishing (+3)", source: "Fishing Level 3" },
          { name: "Miner's Treat", desc: "This should keep your energy up.", ingredients: "Cave Carrot (2), Sugar (1), Milk (1)", details: "Energy: 125 | Health: 56 | Buffs: Mining (+3), Magnetism (+32)", source: "Mining Level 3" },
          { name: "Roots Platter", desc: "This'll get you digging for more.", ingredients: "Cave Carrot (1), Winter Root (1)", details: "Energy: 125 | Health: 56 | Buffs: Attack (+3)", source: "Combat Level 3" },
          { name: "Triple Shot Espresso", desc: "It's more potent than regular coffee!", ingredients: "Coffee (3)", details: "Energy: 8 | Health: 3 | Buffs: Speed (+1)", source: "Stardrop Saloon" },
          { name: "Seafoam Pudding", desc: "This briny pudding gets you into the maritime mindset!", ingredients: "Flounder (1), Midnight Carp (1), Squid Ink (1)", details: "Energy: 175 | Health: 78 | Buffs: Fishing (+4)", source: "Fishing Level 9" },
          { name: "Algae Soup", desc: "It's a little slimy.", ingredients: "Green Algae (4)", details: "Energy: 75 | Health: 33 | Source: Clint (Mail)", source: "Clint (Mail)" },
          { name: "Pale Broth", desc: "A delicate broth with a hint of sulfur.", ingredients: "White Algae (2)", details: "Energy: 125 | Health: 56 | Source: Marnie (Mail)", source: "Marnie (Mail)" },
          { name: "Plum Pudding", desc: "A traditional holiday treat.", ingredients: "Wild Plum (2), Wheat Flour (1), Sugar (1)", details: "Energy: 175 | Health: 78 | Source: Queen of Sauce", source: "The Queen of Sauce" },
          { name: "Artichoke Dip", desc: "It's cool and refreshing.", ingredients: "Artichoke (1), Milk (1)", details: "Energy: 100 | Health: 45 | Source: Queen of Sauce", source: "The Queen of Sauce" },
          { name: "Stir Fry", desc: "Julienned vegetables on a bed of rice.", ingredients: "Cave Carrot (1), Common Mushroom (1), Kale (1), Oil (1)", details: "Energy: 200 | Health: 90 | Source: Queen of Sauce", source: "The Queen of Sauce" },
          { name: "Roasted Hazelnuts", desc: "The roasting process creates a rich forest flavor.", ingredients: "Hazelnut (3)", details: "Energy: 175 | Health: 78 | Source: Queen of Sauce", source: "The Queen of Sauce" },
          { name: "Pumpkin Pie", desc: "Silky pumpkin cream in a flaky crust.", ingredients: "Pumpkin (1), Wheat Flour (1), Milk (1), Sugar (1)", details: "Energy: 225 | Health: 101 | Source: Queen of Sauce", source: "The Queen of Sauce" },
          { name: "Radish Salad", desc: "The radishes are so crisp!", ingredients: "Oil (1), Vinegar (1), Radish (1)", details: "Energy: 200 | Health: 90 | Source: Queen of Sauce", source: "The Queen of Sauce" },
          { name: "Fruit Salad", desc: "A delicious combination of summer fruits.", ingredients: "Blueberry (1), Melon (1), Apricot (1)", details: "Energy: 263 | Health: 118 | Source: Queen of Sauce", source: "The Queen of Sauce" },
          { name: "Blackberry Cobbler", desc: "There's nothing quite like it.", ingredients: "Blackberry (2), Sugar (1), Wheat Flour (1)", details: "Energy: 175 | Health: 78 | Source: Queen of Sauce", source: "The Queen of Sauce" },
          { name: "Cranberry Candy", desc: "It's sweet enough to mask the bitter fruit.", ingredients: "Cranberries (1), Apple (1), Sugar (1)", details: "Energy: 125 | Health: 56 | Source: Queen of Sauce", source: "The Queen of Sauce" },
          { name: "Bruschetta", desc: "Roasted tomatoes on crisp white bread.", ingredients: "Bread (1), Oil (1), Tomato (1)", details: "Energy: 113 | Health: 50 | Source: Queen of Sauce", source: "The Queen of Sauce" },
          { name: "Coleslaw", desc: "It's light, fresh and very healthy.", ingredients: "Red Cabbage (1), Vinegar (1), Mayonnaise (1)", details: "Energy: 213 | Health: 95 | Source: Queen of Sauce", source: "The Queen of Sauce" },
          { name: "Fiddlehead Risotto", desc: "A creamy rice dish served with sauteed fern heads.", ingredients: "Oil (1), Fiddlehead Fern (1), Garlic (1)", details: "Energy: 225 | Health: 101 | Source: Queen of Sauce", source: "The Queen of Sauce" },
          { name: "Poppyseed Muffin", desc: "It has a soothing effect.", ingredients: "Poppy (1), Wheat Flour (1), Sugar (1)", details: "Energy: 150 | Health: 67 | Source: Queen of Sauce", source: "The Queen of Sauce" },
          { name: "Chowder", desc: "A perfect way to warm yourself after a cold night at sea.", ingredients: "Clam (1), Milk (1)", details: "Energy: 225 | Health: 101 | Buffs: Fishing (+1)", source: "Willy (Mail)" },
          { name: "Fish Stew", desc: "It smells a lot like the sea.", ingredients: "Crayfish (1), Mussel (1), Periwinkle (1), Tomato (1)", details: "Energy: 225 | Health: 101 | Buffs: Fishing (+3)", source: "Willy (Mail)" },
          { name: "Escargot", desc: "Butter-soaked snails cooked to perfection.", ingredients: "Snail (1), Garlic (1)", details: "Energy: 225 | Health: 101 | Buffs: Fishing (+2)", source: "Willy (Mail)" },
          { name: "Lobster Bisque", desc: "This delicate soup is a secret family recipe.", ingredients: "Lobster (1), Milk (1)", details: "Energy: 225 | Health: 101 | Buffs: Fishing (+3), Max Energy (+50)", source: "Willy (Mail)" },
          { name: "Maple Bar", desc: "A sweet doughnut topped with a rich maple glaze.", ingredients: "Maple Syrup (1), Sugar (1), Wheat Flour (1)", details: "Energy: 225 | Health: 101 | Buffs: Farming (+1), Fishing (+1), Mining (+1)", source: "Queen of Sauce" },
          { name: "Crab Cakes", desc: "Crab, bread crumbs, and egg formed into patties.", ingredients: "Crab (1), Wheat Flour (1), Egg (1), Oil (1)", details: "Energy: 225 | Health: 101 | Buffs: Speed (+1), Defense (+1)", source: "Queen of Sauce" },
          { name: "Shrimp Cocktail", desc: "A sumptuous appetizer made with fresh shrimp.", ingredients: "Tomato (1), Shrimp (1), Wild Horseradish (1)", details: "Energy: 225 | Health: 101 | Buffs: Fishing (+1), Luck (+1)", source: "Queen of Sauce" },
          { name: "Ginger Ale", desc: "A zesty soda known for soothing the stomach.", ingredients: "Ginger (3), Sugar (1)", details: "Energy: 63 | Health: 28 | Buffs: Luck (+1)", source: "Volcano Dwarf Shop" },
          { name: "Banana Pudding", desc: "A creamy dessert with a wonderful tropical flavor.", ingredients: "Banana (1), Milk (1), Sugar (1)", details: "Energy: 125 | Health: 56 | Buffs: Mining (+1), Luck (+1), Defense (+1)", source: "Island Trader" },
          { name: "Mango Sticky Rice", desc: "Sweet mango and coconut transforms rice.", ingredients: "Mango (1), Coconut (1), Rice (1)", details: "Energy: 113 | Health: 50 | Buffs: Defense (+3)", source: "Leo (Mail)" },
          { name: "Poi", desc: "A traditional food with a delicate, sweet flavor.", ingredients: "Taro Root (4)", details: "Energy: 75 | Health: 33 | Source: Leo (Mail)", source: "Leo (Mail)" },
          { name: "Tropical Curry", desc: "An exotic, fragrant curry served in a pineapple bowl.", ingredients: "Coconut (1), Pineapple (1), Hot Pepper (1)", details: "Energy: 150 | Health: 67 | Buffs: Foraging (+4)", source: "Ginger Island Resort" },
          { name: "Squid Ink Ravioli", desc: "Temporarily protects from debuffs.", ingredients: "Squid Ink (1), Wheat Flour (1), Tomato (1)", details: "Energy: 125 | Health: 56 | Buffs: Mining (+1), Debuff Protection", source: "Combat Level 9" },
          { name: "Moss Soup", desc: "It's thick and slimy, but edible.", ingredients: "Moss (20)", details: "Energy: 70 | Health: 31 | Source: Foraging Level 3", source: "Foraging Level 3" }
      ]}
  ],
  crafting: [
      { category: "Bombs", items: [
          { name: "Cherry Bomb", desc: "Generates a small explosion. Stand back!", ingredients: "Copper Ore (4), Coal (1)", source: "Mining Level 1" },
          { name: "Bomb", desc: "Generates an explosion. Watch out!", ingredients: "Iron Ore (4), Coal (1)", source: "Mining Level 2" },
          { name: "Mega Bomb", desc: "Generates a powerful explosion.", ingredients: "Gold Ore (4), Solar Essence (1), Void Essence (1)", source: "Mining Level 6" }
      ]},
      { category: "Fences", items: [
          { name: "Gate", desc: "Allows you to pass through a fence.", ingredients: "Wood (10)", source: "Starter" },
          { name: "Wood Fence", desc: "Keeps grass and animals contained!", ingredients: "Wood (2)", source: "Starter" },
          { name: "Stone Fence", desc: "Lasts longer than a wood fence.", ingredients: "Stone (2)", source: "Farming Level 2" },
          { name: "Iron Fence", desc: "Lasts longer than a stone fence.", ingredients: "Iron Bar (1)", source: "Farming Level 4" },
          { name: "Hardwood Fence", desc: "The most durable type of fence.", ingredients: "Hardwood (1)", source: "Farming Level 6" }
      ]},
      { category: "Sprinklers", items: [
          { name: "Sprinkler", desc: "Waters the 4 adjacent tiles every morning.", ingredients: "Copper Bar (1), Iron Bar (1)", source: "Farming Level 2" },
          { name: "Quality Sprinkler", desc: "Waters the 8 adjacent tiles every morning.", ingredients: "Iron Bar (1), Gold Bar (1), Refined Quartz (1)", source: "Farming Level 6" },
          { name: "Iridium Sprinkler", desc: "Waters the 24 adjacent tiles every morning.", ingredients: "Gold Bar (1), Iridium Bar (1), Battery Pack (1)", source: "Farming Level 9" }
      ]},
      { category: "Artisan Equipment", items: [
          { name: "Mayonnaise Machine", desc: "Turns eggs into mayonnaise.", ingredients: "Wood (15), Stone (15), Earth Crystal (1), Copper Bar (1)", source: "Farming Level 2" },
          { name: "Bee House", desc: "Place outside and wait for delicious honey! (Except in Winter).", ingredients: "Wood (40), Coal (8), Iron Bar (1), Maple Syrup (1)", source: "Farming Level 3" },
          { name: "Preserves Jar", desc: "Turns vegetables into pickles and fruit into jam.", ingredients: "Wood (50), Stone (40), Coal (8)", source: "Farming Level 4" },
          { name: "Cheese Press", desc: "Turns milk into cheese.", ingredients: "Wood (45), Stone (45), Hardwood (10), Copper Bar (1)", source: "Farming Level 6" },
          { name: "Loom", desc: "Turns raw wool into fine cloth.", ingredients: "Wood (60), Fiber (30), Pine Tar (1)", source: "Farming Level 7" },
          { name: "Keg", desc: "Place a fruit or vegetable in here. Eventually it will turn into a beverage.", ingredients: "Wood (30), Copper Bar (1), Iron Bar (1), Oak Resin (1)", source: "Farming Level 8" },
          { name: "Oil Maker", desc: "Makes gourmet truffle oil.", ingredients: "Slime (50), Hardwood (20), Gold Bar (1)", source: "Farming Level 8" },
          { name: "Cask", desc: "Use in the cellar to age products like wine and cheese.", ingredients: "Wood (20), Hardwood (1)", source: "Farmhouse cellar upgrade" },
          { name: "Fish Smoker", desc: "Place fish inside with a piece of coal to create smoked fish, which is worth double. The quality of the fish is preserved.", ingredients: "Hardwood (10), Sea Jelly (1), River Jelly (1), Cave Jelly (1)", source: "Fish Shop for 10,000g" },
          { name: "Dehydrator", desc: "Place 5 pieces of fruit or edible mushrooms inside to dry them.", ingredients: "Wood (30), Clay (2), Fire Quartz (1)", source: "Pierre's for 10,000g" }
      ]},
      { category: "Fertilizer", items: [
          { name: "Basic Fertilizer", desc: "Improves soil quality a little, increasing your chance to grow quality crops. Mix into tilled soil.", ingredients: "Sap (2)", source: "Farming Level 1" },
          { name: "Quality Fertilizer", desc: "Improves soil quality, increasing your chance to grow quality crops. Mix into tilled soil.", ingredients: "Sap (4), Any Fish (1)", source: "Farming Level 9" },
          { name: "Deluxe Fertilizer", desc: "Greatly improves soil quality, increasing your chance to grow quality crops. Mix into tilled soil.", ingredients: "Iridium Bar (1), Sap (40)", source: "Purchase from Mr Qi" },
          { name: "Speed-Gro", desc: "Stimulates leaf production. Guaranteed to increase growth rate by at least 10%. Mix into tilled soil.", ingredients: "Pine Tar (1), Moss (5)", source: "Farming Level 3" },
          { name: "Deluxe Speed-Gro", desc: "Stimulates leaf production. Guaranteed to increase growth rate by at least 25%. Mix into tilled soil.", ingredients: "Oak Resin (1), Bone Fragment (5)", source: "Farming Level 8" },
          { name: "Hyper Speed-Gro", desc: "Greatly stimulates leaf production. Guaranteed to increase growth rate by at least 33%. Mix into tilled soil.", ingredients: "Radioactive Ore (1), Bone Fragment (3), Solar Essence (1)", source: "Purchase from Mr Qi" },
          { name: "Basic Retaining Soil", desc: "This soil has a chance of staying watered overnight. Mix into tilled soil.", ingredients: "Stone (2)", source: "Farming Level 4" },
          { name: "Quality Retaining Soil", desc: "This soil has a good chance of staying watered overnight. Mix into tilled soil.", ingredients: "Stone (3), Clay (1)", source: "Farming Level 7" },
          { name: "Deluxe Retaining Soil", desc: "This soil has a 100% chance of staying watered overnight. Mix into tilled soil.", ingredients: "Stone (5), Fiber (3), Clay (1)", source: "Purchase from Island Trader" },
          { name: "Tree Fertilizer", desc: "Sprinkle on a wild tree to ensure rapid growth, even in winter. Doesn't work on fruit trees.", ingredients: "Fiber (5), Stone (5)", source: "Foraging Level 7" }
      ]},
      { category: "Seeds", items: [
          { name: "Spring Seeds", desc: "An assortment of wild spring seeds.", ingredients: "Wild Horseradish (1), Daffodil (1), Leek (1), Dandelion (1)", source: "Foraging Level 1" },
          { name: "Summer Seeds", desc: "An assortment of wild summer seeds.", ingredients: "Spice Berry (1), Grape (1), Sweet Pea (1)", source: "Foraging Level 4" },
          { name: "Fall Seeds", desc: "An assortment of wild fall seeds.", ingredients: "Common Mushroom (1), Wild Plum (1), Hazelnut (1), Blackberry (1)", source: "Foraging Level 6" },
          { name: "Winter Seeds", desc: "An assortment of wild winter seeds.", ingredients: "Winter Root (1), Crystal Fruit (1), Snow Yam (1), Crocus (1)", source: "Foraging Level 7" },
          { name: "Ancient Seeds", desc: "Could these still grow?", ingredients: "Ancient Seed (1)", source: "Donating Ancient Seed to museum" },
          { name: "Grass Starter", desc: "Place this on your farm to start a new patch of grass.", ingredients: "Fiber (10)", source: "Purchase from Pierre's" },
          { name: "Blue Grass Starter", desc: "Place this on your farm to plant a clump of blue grass.", ingredients: "Fiber (25), Moss (10), Mystic Syrup (1)", source: "Qi's Walnut Room" },
          { name: "Tea Sapling", desc: "Takes 20 days to mature. Produces tea leaves during the final week of each season, except winter. No watering necessary!", ingredients: "Wild Seeds (Any) (2), Fiber (5), Wood (5)", source: "Caroline 2-heart event" },
          { name: "Fiber Seeds", desc: "Plant these in any season. Does not require watering. Harvest with the scythe. Takes 7 days to grow.", ingredients: "Mixed Seeds (1), Sap (5), Clay (1)", source: "Linus (Special Order)" },
          { name: "Mystic Tree Seed", desc: "This can be planted to grow a special tree.", ingredients: "Acorn (5), Maple Seed (5), Pine Cone (5), Mahogany Seed (5)", source: "Foraging Mastery" }
      ]},
      { category: "Decor", items: [
          { name: "Wood Floor", desc: "Place on the ground to create paths or to decorate your floors.", ingredients: "Wood (1)", source: "Carpenter's Shop" },
          { name: "Rustic Plank Floor", desc: "Place on the ground to create paths or to decorate your floors.", ingredients: "Wood (1)", source: "Carpenter's Shop" },
          { name: "Straw Floor", desc: "Place on the ground to create paths or to spruce up your floors.", ingredients: "Wood (1), Fiber (1)", source: "Carpenter's Shop" },
          { name: "Weathered Floor", desc: "Place on the ground to create paths or to spruce up your floors.", ingredients: "Wood (1)", source: "Dwarf" },
          { name: "Crystal Floor", desc: "Place on the ground to create paths or to spruce up your floors.", ingredients: "Refined Quartz (1)", source: "Krobus" },
          { name: "Stone Floor", desc: "Place on the ground to create paths or to spruce up your floors.", ingredients: "Stone (1)", source: "Carpenter's Shop" },
          { name: "Stone Walkway Floor", desc: "Place on the ground to create paths or to decorate your floors.", ingredients: "Stone (1)", source: "Carpenter's Shop" },
          { name: "Brick Floor", desc: "Place on the ground to create paths or to decorate your floors.", ingredients: "Clay (2), Stone (5)", source: "Carpenter's Shop" },
          { name: "Wood Path", desc: "Place on the ground to create paths or to spruce up your floors.", ingredients: "Wood (1)", source: "Starter" },
          { name: "Gravel Path", desc: "Place on the ground to create paths or to spruce up your floors.", ingredients: "Stone (1)", source: "Starter" },
          { name: "Cobblestone Path", desc: "Place on the ground to create paths or to spruce up your floors.", ingredients: "Stone (1)", source: "Starter" },
          { name: "Stepping Stone Path", desc: "Place on the ground to create paths or to spruce up your floors.", ingredients: "Stone (1)", source: "Carpenter's Shop" },
          { name: "Crystal Path", desc: "Place on the ground to create paths or to spruce up your floors.", ingredients: "Refined Quartz (1)", source: "Carpenter's Shop" }
      ]},
      { category: "Fishing Tackle & Bait", items: [
          { name: "Spinner", desc: "The shape makes it spin around in the water. Slightly increases the bite-rate when fishing.", ingredients: "Iron Bar (2)", source: "Fishing Level 6" },
          { name: "Trap Bobber", desc: "Causes fish to escape slower when you aren't reeling them in.", ingredients: "Copper Bar (1), Sap (10)", source: "Fishing Level 6" },
          { name: "Sonar Bobber", desc: "Shows what fish is on the line before it's caught.", ingredients: "Iron Bar (1), Refined Quartz (2)", source: "Fishing Level 6" },
          { name: "Cork Bobber", desc: "Slightly increases the size of your 'fishing bar'.", ingredients: "Wood (10), Hardwood (5), Slime (10)", source: "Fishing Level 7" },
          { name: "Quality Bobber", desc: "Boosts the quality of fish that you catch.", ingredients: "Copper Bar (1), Sap (20), Solar Essence (5)", source: "Willy (Special Order)" },
          { name: "Treasure Hunter", desc: "Fish don't escape while collecting treasures. Also slightly increases the chance to find treasures.", ingredients: "Gold Bar (2)", source: "Fishing Level 7" },
          { name: "Dressed Spinner", desc: "The metal tab and colorful streamers create an enticing spectacle for fish. Increases the bite-rate when fishing.", ingredients: "Iron Bar (2), Cloth (1)", source: "Fishing Level 8" },
          { name: "Barbed Hook", desc: "Makes your catch more secure, causing the 'fishing bar' to cling to your catch. Works best on slow, weak fish.", ingredients: "Copper Bar (1), Iron Bar (1), Gold Bar (1)", source: "Fishing Level 8" },
          { name: "Magnet", desc: "Increases the chance of finding treasures when fishing. However, fish aren't crazy about the taste.", ingredients: "Iron Bar (1)", source: "Fishing Level 9" },
          { name: "Bait", desc: "Causes fish to bite faster. Must first be attached to a fishing rod.", ingredients: "Bug Meat (1)", source: "Fishing Level 2" },
          { name: "Deluxe Bait", desc: "Causes fish to bite even faster and increases size of the 'fishing bar'.", ingredients: "Bait (5), Moss (2)", source: "Fishing Level 4" },
          { name: "Wild Bait", desc: "A unique recipe from Linus that gives you a chance to catch two fish at once.", ingredients: "Fiber (10), Bug Meat (5), Slime (5)", source: "Linus 4-heart event" },
          { name: "Magic Bait", desc: "Allows you to catch fish from any season, time, or weather, from whichever type of water you cast into.", ingredients: "Radioactive Ore (1), Bug Meat (3)", source: "Purchase from Mr Qi" },
          { name: "Challenge Bait", desc: "A 'perfect' catch yields triple the fish. However, each time a fish escapes the 'fishing bar', the catch is reduced.", ingredients: "Bone Fragment (5), Moss (2)", source: "Fishing Mastery" },
          { name: "Crab Pot", desc: "Place it in the water, load it with bait, and check the next day to see if you've caught anything.", ingredients: "Wood (40), Iron Bar (3)", source: "Fishing Level 3" }
      ]},
      { category: "Rings", items: [
          { name: "Sturdy Ring", desc: "Cuts the duration of negative status effects in half.", ingredients: "Copper Bar (2), Bug Meat (25), Slime (25)", source: "Combat Level 1" },
          { name: "Warrior Ring", desc: "Occasionally infuses the wearer with 'warrior energy' after slaying a monster.", ingredients: "Iron Bar (10), Coal (25), Frozen Tear (10)", source: "Combat Level 4" },
          { name: "Ring of Yoba", desc: "Occasionally shields the wearer from damage.", ingredients: "Gold Bar (5), Iron Bar (5), Diamond (1)", source: "Combat Level 7" },
          { name: "Thorns Ring", desc: "When enemies damage you, they will take damage themselves.", ingredients: "Bone Fragment (50), Stone (50), Gold Bar (1)", source: "Combat Level 7" },
          { name: "Glowstone Ring", desc: "Emits a constant light, and also increases your radius for collecting items.", ingredients: "Solar Essence (5), Iron Bar (5)", source: "Mining Level 4" },
          { name: "Iridium Band", desc: "Glows, attracts items, and increases attack damage by 10%.", ingredients: "Iridium Bar (5), Solar Essence (50), Void Essence (50)", source: "Combat Level 9" },
          { name: "Wedding Ring (not necessary for achievement/perfection)", desc: "An old Zuzu City tradition... It's used to ask for another farmer's hand in marriage.", ingredients: "Iridium Bar (5), Prismatic Shard (1)", source: "Traveling Cart" }
      ]},
      { category: "Edible Items", items: [
          { name: "Field Snack", desc: "A quick snack to fuel the hungry forager.", ingredients: "Acorn (1), Maple Seed (1), Pine Cone (1)", source: "Foraging Level 1" },
          { name: "Bug Steak", desc: "The last resort of the hungry cave diver.", ingredients: "Bug Meat (10)", source: "Combat Level 1" },
          { name: "Life Elixir", desc: "Restores health to full.", ingredients: "Red Mushroom (1), Purple Mushroom (1), Morel (1), Chanterelle (1)", source: "Combat Level 2" },
          { name: "Oil of Garlic", desc: "Drink this and weaker monsters will avoid you.", ingredients: "Garlic (10), Oil (1)", source: "Combat Level 6" }
      ]},
      { category: "Consumables", items: [
          { name: "Monster Musk", desc: "Spray this on to draw more monsters out of hiding.", ingredients: "Bat Wing (30), Slime (30)", source: "Wizard (Special Order)" },
          { name: "Fairy Dust", desc: "Sprinkle on kegs, furnaces, and other refining equipment to instantly receive their product.", ingredients: "Diamond (1), Fairy Rose (1)", source: "The Pirate's Wife Quest" },
          { name: "Warp Totem: Beach", desc: "Warp directly to the beach. Consumed on use.", ingredients: "Hardwood (1), Coral (2), Fiber (10)", source: "Foraging Level 6" },
          { name: "Warp Totem: Mountains", desc: "Warp directly to the mountains. Consumed on use.", ingredients: "Hardwood (1), Iron Bar (1), Stone (25)", source: "Foraging Level 7" },
          { name: "Warp Totem: Farm", desc: "Warp directly to your house. Consumed on use.", ingredients: "Hardwood (1), Honey (1), Fiber (20)", source: "Foraging Level 8" },
          { name: "Warp Totem: Desert", desc: "Warp directly to Calico Desert. Consumed on use.", ingredients: "Hardwood (2), Coconut (1), Iridium Ore (4)", source: "Desert Trader" },
          { name: "Warp Totem: Island", desc: "Warp directly to Ginger Island. Consumed on use.", ingredients: "Hardwood (5), Dragon Tooth (1), Ginger (1)", source: "Volcano Dwarf shop" },
          { name: "Rain Totem", desc: "Activate to greatly increase the chance for rain tomorrow. Consumed on use.", ingredients: "Hardwood (1), Truffle Oil (1), Pine Tar (5)", source: "Foraging Level 9" },
          { name: "Treasure Totem", desc: "Use on diggable terrain to summon a ring of treasure spots.", ingredients: "Hardwood (5), Mystic Syrup (1), Moss (10)", source: "Foraging Mastery" }
      ]},
      { category: "Lighting", items: [
          { name: "Torch", desc: "Provides a modest amount of light.", ingredients: "Wood (1), Sap (2)", source: "Starter" },
          { name: "Campfire", desc: "Provides a moderate amount of light.", ingredients: "Stone (10), Wood (10), Fiber (10)", source: "Starter" },
          { name: "Wooden Brazier", desc: "Provides a moderate amount of light.", ingredients: "Wood (10), Coal (1), Fiber (5)", source: "Carpenter's Shop" },
          { name: "Stone Brazier", desc: "Provides a moderate amount of light.", ingredients: "Stone (10), Coal (1), Fiber (5)", source: "Carpenter's Shop" },
          { name: "Gold Brazier", desc: "Provides a moderate amount of light.", ingredients: "Gold Bar (1), Coal (1), Fiber (5)", source: "Carpenter's Shop" },
          { name: "Carved Brazier", desc: "Provides a moderate amount of light.", ingredients: "Hardwood (10), Coal (1)", source: "Carpenter's Shop" },
          { name: "Stump Brazier", desc: "Provides a moderate amount of light.", ingredients: "Hardwood (5), Coal (1)", source: "Carpenter's Shop" },
          { name: "Barrel Brazier", desc: "Provides a moderate amount of light.", ingredients: "Wood (50), Solar Essence (1), Coal (1)", source: "Carpenter's Shop" },
          { name: "Skull Brazier", desc: "Provides a moderate amount of light.", ingredients: "Bone Fragment (10)", source: "Carpenter's Shop" },
          { name: "Marble Brazier", desc: "Provides a moderate amount of light.", ingredients: "Marble (1), Aquamarine (1), Stone (100)", source: "Carpenter's Shop" },
          { name: "Wood Lamp-post", desc: "Provides a good amount of light.", ingredients: "Wood (50), Battery Pack (1)", source: "Carpenter's Shop" },
          { name: "Iron Lamp-post", desc: "Provides a good amount of light.", ingredients: "Iron Bar (1), Battery Pack (1)", source: "Carpenter's Shop" },
          { name: "Jack-O-Lantern", desc: "A whimsical fall decoration.", ingredients: "Pumpkin (1), Torch (1)", source: "Pierre's stand at Spirit's Eve festival" }
      ]},
      { category: "Refining Equipment", items: [
          { name: "Charcoal Kiln", desc: "Turns 10 pieces of wood into one piece of coal.", ingredients: "Wood (20), Copper Bar (2)", source: "Foraging Level 2" },
          { name: "Crystalarium", desc: "Insert a gem of your choice and it will grow copies.", ingredients: "Stone (99), Gold Bar (5), Iridium Bar (2), Battery Pack (1)", source: "Mining Level 9" },
          { name: "Furnace", desc: "Turns ore and coal into metal bars.", ingredients: "Copper Ore (20), Stone (25)", source: "Clint" },
          { name: "Heavy Furnace", desc: "It's more efficient than a regular furnace.", ingredients: "Furnace (2), Iron Bar (3), Stone (50)", source: "Mining Mastery" },
          { name: "Lightning Rod", desc: "Collects energy from lightning storms and turns it into battery packs.", ingredients: "Iron Bar (1), Refined Quartz (1), Bat Wing (5)", source: "Foraging Level 6" },
          { name: "Solar Panel", desc: "Slowly generates batteries when left in the sun.", ingredients: "Refined Quartz (10), Iron Bar (5), Gold Bar (5)", source: "Caroline (Special Order)" },
          { name: "Recycling Machine", desc: "Turns fishing trash into resources.", ingredients: "Wood (25), Stone (25), Iron Bar (1)", source: "Fishing Level 4" },
          { name: "Seed Maker", desc: "Place crops inside to produce a varying amount of seeds.", ingredients: "Wood (25), Coal (10), Gold Bar (1)", source: "Farming Level 9" },
          { name: "Slime Incubator", desc: "Hatches slimes eggs into slimes. Allows you to raise slimes outdoors.", ingredients: "Iridium Bar (2), Slime (100)", source: "Combat Level 8" },
          { name: "Ostrich Incubator", desc: "Hatches ostrich eggs into baby ostriches. Place in a barn.", ingredients: "Bone Fragment (50), Hardwood (50), Cinder Shard (20)", source: "Complete the Island Field Office Collection" },
          { name: "Slime Egg-Press", desc: "Compresses 100 pieces of slime into a slime egg.", ingredients: "Coal (25), Fire Quartz (1), Battery Pack (1)", source: "Combat Level 6" },
          { name: "Tapper", desc: "Place on a maple, oak, or pine tree and wait for the reservoir to fill with product!", ingredients: "Wood (40), Copper Bar (2)", source: "Foraging Level 4" },
          { name: "Heavy Tapper", desc: "Works twice as fast as a normal tapper.", ingredients: "Hardwood (30), Radioactive Bar (1)", source: "Purchase from Mr Qi" },
          { name: "Worm Bin", desc: "Produces bait on a regular basis.", ingredients: "Hardwood (15), Gold Bar (1), Iron Bar (1), Fiber (50)", source: "Fishing Level 4" },
          { name: "Deluxe Worm Bin", desc: "Produces Deluxe Bait on a regular basis.", ingredients: "Worm Bin (1), Moss (30)", source: "Fishing Level 8" },
          { name: "Bone Mill", desc: "Turns bone items into fertilizers.", ingredients: "Bone Fragment (10), Clay (3), Stone (20)", source: "Gunther (Special Order)" },
          { name: "Geode Crusher", desc: "Breaks geodes open automatically.", ingredients: "Gold Bar (2), Stone (50), Diamond (1)", source: "Clint (Special Order)" },
          { name: "Mushroom Log", desc: "Grows mushrooms every so often.", ingredients: "Hardwood (10), Moss (10)", source: "Foraging Level 4" },
          { name: "Bait Maker", desc: "Place a fish inside to create targeted bait.", ingredients: "Iron Bar (3), Coral (3), Sea Urchin (1)", source: "Fishing Level 6" }
      ]},
      { category: "Furniture & Storage", items: [
          { name: "Tub o' Flowers", desc: "Flowers planted in an oak barrel. Blooms in spring and summer.", ingredients: "Wood (15), Tulip Bulb (1), Jazz Seeds (1), Poppy Seeds (1), Spangle Seeds (1)", source: "Pierre's stand at Flower Dance" },
          { name: "Wicked Statue", desc: "There's something unsettling about the looks of this statue.", ingredients: "Stone (25), Coal (5)", source: "Krobus' Shop" },
          { name: "Flute Block", desc: "Plays a flute sound when you walk past.", ingredients: "Wood (10), Copper Ore (2), Fiber (20)", source: "Robin 6-heart event" },
          { name: "Drum Block", desc: "Plays a drum sound when you walk past.", ingredients: "Stone (10), Copper Ore (2), Fiber (20)", source: "Robin 6-heart event" },
          { name: "Chest", desc: "A place to store your items.", ingredients: "Wood (50)", source: "Starter" },
          { name: "Stone Chest", desc: "A place to store your items.", ingredients: "Stone (50)", source: "Robin special order" },
          { name: "Big Chest", desc: "It can store almost twice as much as a regular chest.", ingredients: "Wood (120), Copper Bar (2)", source: "Carpenter's Shop" },
          { name: "Big Stone Chest", desc: "It can store almost twice as much as a regular chest.", ingredients: "Stone (250)", source: "Dwarf" }
      ]},
      { category: "Signs & Misc", items: [
          { name: "Wood Sign", desc: "Use an item on this to change what's displayed.", ingredients: "Wood (25)", source: "Starter" },
          { name: "Stone Sign", desc: "Use an item on this to change what's displayed.", ingredients: "Stone (25)", source: "Starter" },
          { name: "Dark Sign", desc: "Use an item on this to change what's displayed.", ingredients: "Bat Wing (5), Bone Fragment (5)", source: "Krobus" },
          { name: "Text Sign", desc: "You can write a custom message on this sign.", ingredients: "Wood (25)", source: "Starter" },
          { name: "Garden Pot", desc: "Grows crops from any season when indoors.", ingredients: "Clay (1), Stone (10), Refined Quartz (1)", source: "Evelyn cutscene" },
          { name: "Scarecrow", desc: "Prevents crows from attacking your crops.", ingredients: "Wood (50), Coal (1), Fiber (20)", source: "Farming Level 1" },
          { name: "Deluxe Scarecrow", desc: "Prevents crows from attacking your crops. Has a large radius.", ingredients: "Wood (50), Fiber (40), Iridium Ore (1)", source: "Mail after all rarecrows" },
          { name: "Staircase", desc: "Use this to move down a level in the mines.", ingredients: "Stone (99)", source: "Mining Level 2" },
          { name: "Explosive Ammo", desc: "Fire this with the slingshot.", ingredients: "Iron Bar (1), Coal (2)", source: "Combat Level 8" },
          { name: "Transmute (Fe)", desc: "A bar of pure iron.", ingredients: "Copper Bar (3)", source: "Mining Level 4" },
          { name: "Transmute (Au)", desc: "A bar of pure gold.", ingredients: "Iron Bar (2)", source: "Mining Level 7" },
          { name: "Mini-Jukebox", desc: "Allows you to play your favorite tunes.", ingredients: "Iron Bar (2), Battery Pack (1)", source: "Gus 5-Heart Event" },
          { name: "Mini-Obelisk", desc: "Place two on the farm to warp between them.", ingredients: "Hardwood (30), Solar Essence (20), Gold Bar (3)", source: "Wizard special order" },
          { name: "Farm Computer", desc: "Scans the farm and displays useful information.", ingredients: "Dwarf Gadget (1), Battery Pack (1), Refined Quartz (10)", source: "Demetrius special order" },
          { name: "Hopper", desc: "Items placed inside will automatically be loaded into the machine in front of it.", ingredients: "Hardwood (10), Iridium Bar (1), Radioactive Bar (1)", source: "Purchase from Mr Qi" },
          { name: "Cookout Kit", desc: "Use this to create a cooking campfire, allowing you to cook on-the-go!", ingredients: "Wood (15), Fiber (10), Coal (3)", source: "Foraging Level 3" },
          { name: "Tent Kit", desc: "Use this to deploy a one-time-use tent for sleeping. Can only be used outdoors.", ingredients: "Hardwood (10), Fiber (25), Cloth (1)", source: "Foraging Level 8" },
          { name: "Statue Of The Dwarf King", desc: "Choose from two mining-related powers each day.", ingredients: "Iridium Bar (20)", source: "Mining Mastery" },
          { name: "Statue Of Blessings", desc: "Touching the statue gives a unique blessing every day.", ingredients: "Sap (999), Fiber (999), Stone (999), Moss (333)", source: "Farming Mastery" },
          { name: "Anvil", desc: "Allows you to re-forge trinkets, randomizing their stats. Costs 3 iridium bars per use.", ingredients: "Iron Bar (50)", source: "Combat Mastery" },
          { name: "Mini-Forge", desc: "Now, you can use a dwarvish forge from the convenience of your home.", ingredients: "Dragon Tooth (5), Iron Bar (10), Gold Bar (10), Iridium Bar (5)", source: "Combat Mastery" }
      ]}
  ],
  fishing: [
    {
      category: "Standard Fish",
      items: [
        { name: "Pufferfish", desc: "Inflates when threatened.", ingredients: "Ocean, Ginger Island Oceans", source: "Summer (All Seasons on Ginger Island)" },
        { name: "Anchovy", desc: "A small silver fish found in the ocean.", ingredients: "Ocean", source: "Spring, Fall" },
        { name: "Tuna", desc: "A large fish that lives in the ocean.", ingredients: "Ocean, Ginger Island Oceans", source: "Summer, Winter (All Seasons on Ginger Island)" },
        { name: "Sardine", desc: "A common ocean fish.", ingredients: "Ocean", source: "Spring, Fall, Winter" },
        { name: "Bream", desc: "A fairly common river fish that becomes active at night.", ingredients: "Town River, Forest River", source: "All Seasons" },
        { name: "Largemouth Bass", desc: "A popular fish that lives in lakes.", ingredients: "Mountain Lake", source: "All Seasons" },
        { name: "Smallmouth Bass", desc: "A freshwater fish that is very sensitive to pollution.", ingredients: "Town River, Forest Pond", source: "Spring, Fall" },
        { name: "Rainbow Trout", desc: "A freshwater trout with colorful markings.", ingredients: "Town River, Forest River, Mountain Lake", source: "Summer" },
        { name: "Salmon", desc: "Swims upstream to lay its eggs.", ingredients: "Town River, Forest River, Forest Waterfalls", source: "Fall" },
        { name: "Walleye", desc: "A freshwater fish caught at night.", ingredients: "Town River, Forest River, Forest Pond, Mountain Lake", source: "Fall, Winter with Rain Totem" },
        { name: "Perch", desc: "A freshwater fish of the winter.", ingredients: "Town River, Forest River, Forest Pond, Mountain Lake", source: "Winter" },
        { name: "Carp", desc: "A common pond fish.", ingredients: "Mountain Lake, Secret Woods, Sewers, Mutant Bug Lair", source: "All Seasons" },
        { name: "Catfish", desc: "An uncommon fish found in streams.", ingredients: "Town River, Forest River, Secret Woods, Witch's Swamp", source: "Spring, Fall (Spring & Summer in Secret Woods Pond), Winter with Rain Totem" },
        { name: "Pike", desc: "A freshwater fish that's difficult to catch.", ingredients: "Town River, Forest River, Forest Pond", source: "Summer, Winter" },
        { name: "Sunfish", desc: "A common river fish.", ingredients: "Town River, Forest River", source: "Spring, Summer" },
        { name: "Red Mullet", desc: "Long ago these were kept as pets.", ingredients: "Ocean", source: "Summer, Winter" },
        { name: "Herring", desc: "A common ocean fish.", ingredients: "Ocean", source: "Spring, Winter" },
        { name: "Eel", desc: "A long, slippery little fish.", ingredients: "Ocean", source: "Spring, Fall" },
        { name: "Octopus", desc: "A mysterious and intelligent creature.", ingredients: "Ocean, Ginger Island Oceans", source: "Summer (All Seasons on Ginger Island)" },
        { name: "Red Snapper", desc: "A popular fish with a nice red color.", ingredients: "Ocean", source: "Summer, Fall, Winter with Rain Totem" },
        { name: "Squid", desc: "A deep sea creature that can grow to enormous size.", ingredients: "Ocean", source: "Winter" },
        { name: "Sea Cucumber", desc: "A slippery, slimy creature found on the ocean floor.", ingredients: "Ocean", source: "Fall, Winter" },
        { name: "Super Cucumber", desc: "A rare, purple variety of sea cucumber.", ingredients: "Ocean, Ginger Island Oceans", source: "Summer, Fall (All Seasons on Ginger Island)" },
        { name: "Ghostfish", desc: "A pale, blind fish found in underground lakes.", ingredients: "Mines (Floors 20 & 60), Ghost Drops", source: "All Seasons" },
        { name: "Stonefish", desc: "A bizarre fish that's shaped like a brick.", ingredients: "Mines (Floor 20)", source: "All Seasons" },
        { name: "Ice Pip", desc: "A rare fish that thrives in extremely cold conditions.", ingredients: "Mines (Floor 60)", source: "All Seasons" },
        { name: "Lava Eel", desc: "It can somehow survive in pools of red-hot lava.", ingredients: "Mines (Floor 100), Volcano Caldera", source: "All Seasons" },
        { name: "Sandfish", desc: "It tries to hide using camouflage.", ingredients: "Desert", source: "All Seasons" },
        { name: "Scorpion Carp", desc: "It's like a regular carp but with a sharp stinger.", ingredients: "Desert", source: "All Seasons" },
        { name: "Flounder", desc: "It lives on the bottom, so both eyes are on top of its head.", ingredients: "Ocean, Ginger Island Oceans", source: "Spring, Summer (All Seasons on Ginger Island)" },
        { name: "Midnight Carp", desc: "This shy fish only feels comfortable at night.", ingredients: "Forest Pond, Mountain Lake, Ginger Island Rivers", source: "Fall, Winter (All Seasons on Ginger Island)" },
        { name: "Sturgeon", desc: "An ancient bottom-feeder with a dwindling population. Females can live up to 150 years.", ingredients: "Mountain Lake", source: "Summer, Winter" },
        { name: "Tiger Trout", desc: "A rare hybrid trout that cannot bear offspring of its own.", ingredients: "Town River, Forest River", source: "Fall, Winter" },
        { name: "Bullhead", desc: "A relative of the catfish that eats a variety of foods off the lake bottom.", ingredients: "Mountain Lake", source: "All Seasons" },
        { name: "Tilapia", desc: "A primarily vegetarian fish that prefers warm water.", ingredients: "Ocean, Ginger Island Rivers", source: "Summer, Fall (All Seasons on Ginger Island)" },
        { name: "Chub", desc: "A common freshwater fish known for its voracious appetite.", ingredients: "Forest River, Mountain Lake", source: "All Seasons" },
        { name: "Dorado", desc: "A fierce carnivore with brilliant orange scales.", ingredients: "Forest River", source: "Summer" },
        { name: "Albacore", desc: "Prefers temperature \"edges\" where cool and warm water meet.", ingredients: "Ocean", source: "Fall, Winter" },
        { name: "Shad", desc: "Lives in a school at sea, but returns to the rivers to spawn.", ingredients: "Town River, Forest River", source: "Spring, Summer, Fall" },
        { name: "Lingcod", desc: "A fearsome predator that will eat almost anything it can cram into its mouth.", ingredients: "Town River, Forest River, Mountain Lake", source: "Winter" },
        { name: "Halibut", desc: "A flat fish that lives on the ocean floor.", ingredients: "Ocean", source: "Spring, Summer, Winter" },
        { name: "Woodskip", desc: "A very sensitive fish that can only live in pools deep in the forest.", ingredients: "Secret Woods, Forest Farm", source: "All Seasons" },
        { name: "Void Salmon", desc: "A salmon, twisted by void energy. The fresh meat is jet black, but rapidly turns pink when exposed to air.", ingredients: "Witch's Swamp", source: "All Seasons" },
        { name: "Slimejack", desc: "He's coated in a very thick layer of slime. He keeps slipping out of your hands!", ingredients: "Mutant Bug Lair", source: "All Seasons" },
        { name: "Stingray", desc: "Despite having a toxic stinger, these fish are shy and prefer to avoid humans.", ingredients: "Pirate Cove (Ginger Island)", source: "All Seasons" },
        { name: "Lionfish", "desc": "An aggressive, predatory fish with venomous spines.", ingredients: "Ginger Island Oceans", source: "All Seasons" },
        { name: "Blue Discus", desc: "A brightly colored tropical fish that is popular in aquariums.", ingredients: "Ginger Island Rivers", source: "All Seasons" },
        { name: "Goby", desc: "Some types of Gobies can climb up waterfalls.", ingredients: "Forest Waterfalls", source: "All Seasons" }
      ]
    },
    {
      category: "Night Market Fish",
      items: [
        { name: "Midnight Squid", desc: "A strange and mysterious denizen of the ocean's twilight depths.", ingredients: "Submarine Ride (Night Market)", source: "Winter 15-17" },
        { name: "Spook Fish", desc: "The huge eyes can detect the faint silhouettes of prey.", ingredients: "Submarine Ride (Night Market)", source: "Winter 15-17" },
        { name: "Blobfish", desc: "This odd creature floats above the ocean floor, consuming any edible material in its path.", ingredients: "Submarine Ride (Night Market)", source: "Winter 15-17" }
      ]
    },
    {
      category: "Crab Pot Fish",
      items: [
        { name: "Clam", desc: "There's a chewy little guy in there...", ingredients: "Ocean Crab Pot / Foraging", source: "Beach" },
        { name: "Lobster", desc: "A large ocean-dwelling crustacean with a strong tail.", ingredients: "Ocean Crab Pot", source: "Ocean" },
        { name: "Crayfish", desc: "A small freshwater relative of the lobster.", ingredients: "Freshwater Crab Pot", source: "Freshwater" },
        { name: "Crab", desc: "A marine crustacean with two powerful pincers.", ingredients: "Ocean Crab Pot / Drops", source: "Ocean" },
        { name: "Cockle", desc: "A common saltwater clam.", ingredients: "Ocean Crab Pot / Foraging", source: "Beach" },
        { name: "Mussel", desc: "A common bivalve that often lives in clusters.", ingredients: "Ocean Crab Pot / Foraging", source: "Beach" },
        { name: "Shrimp", desc: "A scavenger that feeds off the ocean floor. Widely prized for its meat.", ingredients: "Ocean Crab Pot", source: "Ocean" },
        { name: "Snail", desc: "A wide-ranging mollusc that lives in a spiral shell.", ingredients: "Freshwater Crab Pot", source: "Freshwater" },
        { name: "Periwinkle", desc: "A tiny freshwater snail that lives in a blue shell.", ingredients: "Freshwater Crab Pot", source: "Freshwater" },
        { name: "Oyster", desc: "Constantly filters water to find food. In the process, it removes dangerous toxins from the environment.", ingredients: "Ocean Crab Pot / Foraging", source: "Beach" }
      ]
    },
    {
      category: "Other Catchables",
      items: [
        { name: "Seaweed", desc: "It can be used in cooking.", ingredients: "Ocean / Beach", source: "All Seasons" },
        { name: "Green Algae", desc: "It's really slimy.", ingredients: "Everywhere but the Farm Pond and Ocean", source: "All Seasons" },
        { name: "White Algae", desc: "It's super slimy.", ingredients: "Mines, Sewers, Mutant Bug Lair, Witch's Swamp", source: "All Seasons" },
        { name: "Sea Jelly", desc: "A rare jelly found in the ocean.", ingredients: "Saltwater locations", source: "All Seasons" },
        { name: "River Jelly", desc: "A rare jelly found in freshwater.", ingredients: "Freshwater locations", source: "All Seasons" },
        { name: "Cave Jelly", desc: "A rare jelly found in underground lakes.", ingredients: "Mines (Levels 20, 60, 100)", source: "All Seasons" }
      ]
    },
    {
      category: "Legendary Fish",
      items: [
        { name: "Crimsonfish", desc: "Lives deep in the ocean but likes to lay its eggs in the warm summer water.", ingredients: "East Pier on The Beach", source: "Summer" },
        { name: "Angler", desc: "Uses a bioluminescent dangler to attract prey.", ingredients: "Near the waterfall north of JojaMart", source: "Fall" },
        { name: "Legend", desc: "The king of all fish! They said he'd never be caught.", ingredients: "The Mountain Lake near the log", source: "Spring" },
        { name: "Glacierfish", desc: "Builds a nest on the underside of glaciers.", ingredients: "South end of Arrowhead Island in Cindersap Forest", source: "Winter" },
        { name: "Mutant Carp", desc: "The strange waters of the sewer turned this carp into a monstrosity.", ingredients: "The Sewers", source: "All Seasons" }
      ]
    },
    {
      category: "Legendary Fish II (not necessary for achievement/perfection)",
      items: [
        { name: "Son of Crimsonfish", desc: "He hatched in the warm summer water, and followed in the footsteps of his father.", ingredients: "East Pier on The Beach", source: "All Seasons" },
        { name: "Ms. Angler", desc: "Uses a bioluminescent dangler to attract prey.", ingredients: "Near the waterfall north of JojaMart", source: "All Seasons" },
        { name: "Legend II", desc: "The successor to the original Legend.", ingredients: "The Mountain Lake near the log", source: "All Seasons" },
        { name: "Glacierfish Jr.", desc: "The original Glacierfish had a son...", ingredients: "South end of Arrowhead Island in Cindersap Forest", source: "All Seasons" },
        { name: "Radioactive Carp", desc: "A carp that spent one too many years in toxic sludge.", ingredients: "The Sewers", source: "All Seasons" }
      ]
    },
  ]
};

// ---------- State ----------
const STORAGE_KEY = 'stardew_checklist_progress_v2';
const THEME_KEY = 'stardew_checklist_theme';
const LEGACY_KEY = 'stardew_completed'; // from the old version, migrated below

let completedItems = new Set(); // holds keys like "cooking::Fried Egg"
let currentCategory = null;
let currentModalItem = null;
let currentModalCategory = null;

function loadProgress() {
    try {
        const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
        if (saved && typeof saved === 'object') {
            Object.keys(saved).forEach(cat => {
                (saved[cat] || []).forEach(name => completedItems.add(cat + '::' + name));
            });
            return;
        }
    } catch (e) { /* ignore corrupt data */ }

    // One-time migration from the old flat single-list format
    try {
        const legacy = JSON.parse(localStorage.getItem(LEGACY_KEY) || '[]');
        if (Array.isArray(legacy) && legacy.length) {
            legacy.forEach(name => {
                Object.keys(appData).forEach(cat => {
                    const exists = appData[cat].some(g => g.items.some(it => it.name === name));
                    if (exists) completedItems.add(cat + '::' + name);
                });
            });
            saveProgress();
        }
    } catch (e) { /* ignore */ }
}

function saveProgress() {
    const out = { cooking: [], crafting: [], fishing: [] };
    completedItems.forEach(key => {
        const idx = key.indexOf('::');
        const cat = key.slice(0, idx);
        const name = key.slice(idx + 2);
        if (out[cat]) out[cat].push(name);
    });
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(out));
    } catch (e) { /* storage unavailable */ }
}

// ---------- Theme ----------
function applyThemeIcon() {
    const theme = document.documentElement.getAttribute('data-theme');
    document.getElementById('themeIcon').innerHTML = theme === 'dark' ? icon('sun') : icon('moon');
}
function toggleTheme() {
    const html = document.documentElement;
    const newTheme = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    try { localStorage.setItem(THEME_KEY, newTheme); } catch (e) {}
    applyThemeIcon();
}
(function initTheme() {
    try {
        const saved = localStorage.getItem(THEME_KEY);
        if (saved) document.documentElement.setAttribute('data-theme', saved);
    } catch (e) {}
})();

// ---------- Static icon slots ----------
function fillStaticIcons() {
    document.getElementById('brandIcon').innerHTML = icon('checklist');
    document.getElementById('backIcon').innerHTML = icon('back');
    document.getElementById('closeIcon').innerHTML = icon('close');
    applyThemeIcon();
}

// ---------- Helpers ----------
function categoryTotal(cat) {
  const total = appData[cat].reduce((sum, g) => sum + g.items.length, 0);
  if (cat === 'crafting') return total - 1;
  if (cat === 'fishing') return total - 5;
  return total;
}
function categoryCompletedCount(cat) {
  let n = 0;
  const excluded = new Set([
    'crafting::Wedding Ring (not necessary for achievement/perfection)',
    'fishing::Son of Crimsonfish', 'fishing::Ms. Angler', 'fishing::Legend II',
    'fishing::Glacierfish Jr.', 'fishing::Radioactive Carp'
  ]);
  completedItems.forEach(k => {
    if (k.startsWith(cat + '::')) {
      if (k.startsWith(cat + '::') && !excluded.has(k)) n++;
    }
  });
  return n;
}

// ---------- Home view ----------
function renderHome() {
    const grid = document.getElementById('home-grid');
    grid.innerHTML = '';
    Object.keys(CATEGORY_META).forEach(cat => {
        const meta = CATEGORY_META[cat];
        const total = categoryTotal(cat);
        const done = categoryCompletedCount(cat);
        const pct = total ? Math.round((done / total) * 100) : 0;

        const card = document.createElement('div');
        card.className = 'home-card';
        card.onclick = () => switchView(cat);
        card.innerHTML = `
            <div class="home-card-icon"><span class="icon">${icon(meta.icon)}</span></div>
            <h2>${meta.title}</h2>
            <p>${meta.desc}</p>
            <div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>
            <div class="progress-label"><span>${done} / ${total} collected</span><span>${pct}%</span></div>
        `;
        grid.appendChild(card);
    });
}

// ---------- Navigation ----------
function switchView(viewName) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    if (viewName === 'home') {
        renderHome();
        document.getElementById('home-view').classList.add('active');
    } else {
        currentCategory = viewName;
        document.getElementById('checklist-view').classList.add('active');
        const meta = CATEGORY_META[viewName];
        document.getElementById('checklist-heading').innerHTML =
            `<span class="icon">${icon(meta.icon)}</span> ${meta.title} Checklist`;
        renderChecklist();
    }
}

function renderChecklist() {
    const container = document.getElementById('checklist-container');
    container.innerHTML = '';
    const data = appData[currentCategory];
    if (!data) return;

    data.forEach(group => {
        const sectionTitle = document.createElement('h2');
        sectionTitle.className = 'section-title';
        sectionTitle.innerHTML = `<span class="icon">${icon('checklist')}</span>${group.category}`;
        container.appendChild(sectionTitle);

        const grid = document.createElement('div');
        grid.className = 'grid';

        // Show completed items last within this same list (stable sort keeps
        // everything else in its original order).
        const sortedItems = [...group.items].sort((a, b) => {
            const aDone = completedItems.has(currentCategory + '::' + a.name) ? 1 : 0;
            const bDone = completedItems.has(currentCategory + '::' + b.name) ? 1 : 0;
            return aDone - bDone;
        });

        sortedItems.forEach(item => {
            const key = currentCategory + '::' + item.name;
            const isCompleted = completedItems.has(key);
            const tile = document.createElement('div');
            tile.className = `tile ${isCompleted ? 'completed' : ''}`;
            tile.onclick = (e) => {
                if (e.target.closest('button')) return;
                openModal(item);
            };

            tile.innerHTML = `
                <div>
                    <div class="tile-title-row">
                        <div class="tile-title">${item.name}</div>
                        <div class="tile-check"><span class="icon">${icon('check')}</span></div>
                    </div>
                    <div class="tile-source">${item.source || ''}</div>
                </div>
                <div class="tile-footer">
                    <span class="details-hint"><span class="icon">${icon('info')}</span>Details</span>
                    <button class="btn-complete" data-name="${item.name.replace(/"/g, '&quot;')}">
                        <span class="icon">${icon('check')}</span>${isCompleted ? 'Done' : 'Complete'}
                    </button>
                </div>
            `;
            tile.querySelector('.btn-complete').addEventListener('click', () => toggleComplete(item.name));
            grid.appendChild(tile);
        });
        container.appendChild(grid);
    });

    updateCompletedList();
}

function toggleComplete(itemName) {
    const key = currentCategory + '::' + itemName;
    if (completedItems.has(key)) {
        completedItems.delete(key);
    } else {
        completedItems.add(key);
    }
    saveProgress();
    renderChecklist();
    if (currentModalItem && currentModalItem.name === itemName) {
        updateModalButtonState();
    }
}

// ---------- Modal ----------
function openModal(item) {
    currentModalItem = item;
    currentModalCategory = currentCategory;
    document.getElementById('modalTitle').innerText = item.name;
    document.getElementById('modalBody').innerHTML = `
        <p><strong>Description:</strong> ${item.desc}</p>
        <p><strong>Ingredients / Location:</strong> ${item.ingredients || 'N/A'}</p>
        <p><strong>Additional Details:</strong> ${item.details || item.source || 'N/A'}</p>
    `;
    updateModalButtonState();
    document.getElementById('detailsModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('detailsModal').style.display = 'none';
    currentModalItem = null;
}

function updateModalButtonState() {
    if (!currentModalItem) return;
    const key = currentModalCategory + '::' + currentModalItem.name;
    const isCompleted = completedItems.has(key);
    const btn = document.getElementById('modalCompleteBtn');
    btn.classList.toggle('is-complete', isCompleted);
    btn.innerHTML = `<span class="icon">${icon('check')}</span>${isCompleted ? 'Mark as Incomplete' : 'Mark as Complete'}`;
}

function toggleCompleteFromModal() {
    if (currentModalItem) toggleComplete(currentModalItem.name);
}

window.onclick = function (event) {
    const modal = document.getElementById('detailsModal');
    if (event.target === modal) closeModal();
};

// ---------- Init ----------
fillStaticIcons();
loadProgress();
renderHome();
