# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Ritual.build(
  {
    name: "Winter Night Time Routine",
    description: "I make sure to tone my skin every night with SK-II's facial toner. Gently pat onto skin after washing. Then, before I sleep I apply the Egg Cream Mask for 15 minutes. Keeps my skin hydrated for harsh winters.",
    category: "Dry Skin",
    items: [Item.create(
      {
        name: 'Facial Treatment Clear Lotion Toner',
        brand: 'SK-II',
        price: 76,
        description: "A hydrating toner to complete your cleansing ritual.",
        image: "https://www.sk-ii.com/dw/image/v2/BCBT_PRD/on/demandware.static/-/Sites-NA_MASTER/default/dw1b9a3184/images/productimages/large/00730870159408.jpg?sw=640&sh=640"
      },
      {
        name: 'Egg Cream Mask Hydration',
        brand: 'TOO COOL FOR SCHOOL',
        price: 6,
        description: "A version of the popular original Egg Cream Mask with added hydrating and brightening benefits.",
        image: "https://cdn.shopify.com/s/files/1/1794/7961/products/too_cooleggcream_1800x.jpg?v=1502724392"
      }
    )]
  },
  {
    name: "For Acne & Oily Days",
    description: "A routine for people with oily and acne prone skin to help regulate oil control in T-Zone.",
    category: "Acne Prone Skin",
    items: [Item.create(
      {
        name: 'Lapis Oil Balancing Facial Oil',
        brand: 'HERBIVORE',
        price: 72,
        description: "A hydrating face oil to balance skin while improving visible redness and blemishes.",
        image: "https://cdn.shopify.com/s/files/1/0203/8454/products/1320-03B_HBV_HIR_LAPIS_17OZ.jpg?v=1510185639"
      },
      {
        name: 'Blue Tansy AHA + BHA Resurfacing Clarity Mask',
        brand: 'HERBIVORE',
        price: 48,
        description: "A truly natural clarifying and cooling gel face mask, features white willow bark (natural BHA), fruit enzymes (natural AHA), and blue tansy to gently exfoliate, smooth, and resurface the skin.",
        image: "https://cdn.shopify.com/s/files/1/0203/8454/products/1320-32B_HBV_HIR_BLUETANSY_MASK.jpg?v=1505162778"
      },
      {
        name: 'Pure Clean Daily Facial Cleanser',
        brand: 'JACK BLACK',
        price: 19,
        description: "An exfoliating paste with a delicious blend of almond butter, almond oil, crushed almond shells, and sugar crystals to soften and smooth the skin.",
        image: "http://www.sephora.com/productimages/sku/s973628-main-grid.jpg"
      }
    )]
  },
  {
    name: "Enlarged Pores Help",
    description: "A good exfoliater and charcoal mask can considerably help clean out the gunk in pores to keep them from clogging.",
    category: "Pore Minimizing",
    items: [Item.create(
      {
        name: 'Almond Exfoliating And Smoothing Delicious Paste',
        brand: "L'OCCITANE",
        price: 42,
        description: "An exfoliating paste with a delicious blend of almond butter, almond oil, crushed almond shells, and sugar crystals to soften and smooth the skin.",
        image: "http://www.sephora.com/productimages/sku/s1690262-main-grid.jpg"
      },
      {
        name: 'Clear Improvement® Active Charcoal Mask to Clear Pores',
        brand: 'ORIGINS',
        price: 27,
        description: 'An ultra-purifying mask to deep clean and visibly reduce pores.',
        image: "https://www.origins.com/media/export/cms/products/500x625/origins_sku_767G02_500x625_0.png"
      }
    )]
  },
  {
    name: "A Quick Routine for the Busy Bees",
    description: "I follow the K-Beauty routine of applying 7 layers. I apply 7 layers of this toner back to back and that's it! Keeps my skin hydrated all day!",
    category: "Light Hydration",
    items: [Item.create(
      {
        name: 'Rose Deep Hydration Facial Toner',
        brand: "FRESH",
        price: 44,
        description: "An alcohol-free cleansing toner infused with real rose petals to remove residual impurities, refine the appearance of pores, and soften skin for a healthy-looking complexion.",
        image: "https://images-na.ssl-images-amazon.com/images/I/51d1QeIhfbL._SY355_.jpg"
      }
    )]
  }
)
