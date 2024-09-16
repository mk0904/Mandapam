import photographersImg from '../images/3.jpeg';
import catererImg from '../images/catering.webp';
import plannersanddecorators from '../images/plannersadnddecorators.webp';
import mehendiartists from '../images/mehendi artists.jpeg';
import bridalGrooming from '../images/bridal grooming.jpeg';
import performanceartists from '../images/performance artists.avif';
import panditimg from '../images/pandits.avif';

const basicPackage = {
     packageName: "Lāvaṇya (लावण्य)",
     shortDesc: "This is the basic package",
     price: "25,00,000 *",
     inclusions: [
          "Accomodation for 200 guests at premium hotel for 2 nights",
          "Premium catering included",
          "Entire wedding shoot",
          "Banquet Usage for Functions",
          "On field experts for coordination",
     ],
     exclusions: [
          "Alcohols",
          "Stays and Meals for additinal guests",
          "Shuttle Services",
     ],
};

const standardPackage = {
     packageName: "Shriṅgār (श्रृंगार)",
     shortDesc: "This is the standard package",
     price: "50,00,000 *",
     inclusions: [
          "Accomodation for 300 guests at premium hotel for 2 nights",
          "Premium catering included",
          "Entire wedding, pre-wedding shoot, post-wedding shoot",
          "Banquet Usage for Functions",
          "Shuttle Service for guests",
          "Alcohol included",
          "On field experts for coordination"
     ],
     exclusions: ["Stays and Meals for additinal guests"],
};

const premiumPackage = {
     packageName: "Bāndhaṅ (बंधन)",
     shortDesc: "This is the premium package",
     price: "80,00,000 *",
     inclusions: [
          "Accomodation for 500 guests at premium hotel for 2 nights",
          "Premium catering included",
          "Entire wedding, pre-wedding shoot, post-wedding shoot",
          "Banquet Usage for Functions",
          "Shuttle Service for guests",
          "Alcohol included",
          "On field experts for coordination",
          "Special Events for guests",
          "DJ and Music",
          "Pool and Barbeque Party",
     ],
     exclusions: ["Stays and Meals for additinal guests"],
};

// const vendorData = {
//      photographers:{},
//      caterers:{},
//      planninganddecorators:{},
//      mehendiartists:{},
//      bridalgrooming:{},
//      performanceartists:{},
//      pandits:{},
// }


const vendorCategories = [
  { categoryName: 'Photographers', categoryDescription: 'Shot your bests', paramVar: 'photographers', image: photographersImg },
  { categoryName: 'Caterers', categoryDescription: 'Get your guests the best servings', paramVar: 'caterers', image: catererImg },
  { categoryName: 'Planners & Decorators', categoryDescription: 'Decorate your dream mandap', paramVar: 'planninganddecorators', image: plannersanddecorators },
  { categoryName: 'Mehendi Artists', categoryDescription: 'Let your hand craft your love with henna', paramVar: 'mehendiartists', image: mehendiartists },
  { categoryName: 'Bridal Grooming', categoryDescription: 'Brighten up Miss Bride', paramVar: 'bridalgrooming', image: bridalGrooming },
  { categoryName: 'DJs & Performance Artists', categoryDescription: 'The party beginsss!', paramVar: 'performanceartists', image: performanceartists },
  { categoryName: 'Pandits', categoryDescription: 'Traditions meets devotion in every ritual...', paramVar: 'pandits', image: panditimg },
]

const vendorData = {
     photographers: {
          Goa: {
            id: 1,
            name: 'Sunset Weddings Goa',
            contact: '9876543210',
            price: [75000, 150000],
            pics: ['sunset_goa_1.jpg', 'sunset_goa_2.jpg', 'sunset_goa_3.jpg'],
            datesoccupied: ['2024-10-01', '2024-12-10', '2025-01-05'],
            rating: 4.6,
          },
          JimCorbett: {
            id: 2,
            name: 'Corbett Memories Photography',
            contact: '9876543221',
            price: [85000, 160000],
            pics: ['corbett_memories_1.jpg', 'corbett_memories_2.jpg', 'corbett_memories_3.jpg'],
            datesoccupied: ['2024-11-05', '2024-12-20', '2025-02-14'],
            rating: 4.7,
          },
          Udaipur: {
            id: 3,
            name: 'Udaipur Royal Weddings',
            contact: '9876543232',
            price: [120000, 250000],
            pics: ['royal_udaipur_1.jpg', 'royal_udaipur_2.jpg', 'royal_udaipur_3.jpg'],
            datesoccupied: ['2024-10-12', '2024-11-28', '2025-01-18'],
            rating: 4.8,
          },
          Jaipur: {
            id: 4,
            name: 'Jaipur Wedding Frames',
            contact: '9876543243',
            price: [100000, 220000],
            pics: ['wedding_jaipur_1.jpg', 'wedding_jaipur_2.jpg', 'wedding_jaipur_3.jpg'],
            datesoccupied: ['2024-09-25', '2024-12-05', '2025-01-20'],
            rating: 4.5,
          },
          Pune: {
            id: 5,
            name: 'Dreamcatcher Weddings Pune',
            contact: '9876543254',
            price: [150000, 250000],
            pics: ['dreamcatcher_pune_1.jpg', 'dreamcatcher_pune_2.jpg', 'dreamcatcher_pune_3.jpg'],
            datesoccupied: ['2024-10-20', '2024-12-18', '2025-01-25'],
            rating: 4.7,
          },
          Mumbai: {
            id: 6,
            name: 'Mumbai Wedding Diaries',
            contact: '9876543265',
            price: [200000, 380000],
            pics: ['wedding_mumbai_1.jpg', 'wedding_mumbai_2.jpg', 'wedding_mumbai_3.jpg'],
            datesoccupied: ['2024-09-30', '2024-11-15', '2025-01-05'],
            rating: 4.9,
          },
          Delhi: {
            id: 7,
            name: 'Capital Wedding Moments',
            contact: '9876543276',
            price: [140000, 260000],
            pics: ['capital_wedding_1.jpg', 'capital_wedding_2.jpg', 'capital_wedding_3.jpg'],
            datesoccupied: ['2024-10-05', '2024-12-10', '2025-01-20'],
            rating: 4.7,
          },
          Bangalore: {
            id: 8,
            name: 'Heritage Weddings Bangalore',
            contact: '9876543287',
            price: [60000, 120000],
            pics: ['heritage_bangalore_1.jpg', 'heritage_bangalore_2.jpg', 'heritage_bangalore_3.jpg'],
            datesoccupied: ['2024-09-20', '2024-11-15', '2024-12-28'],
            rating: 4.3,
          },
          Hyderabad: {
            id: 9,
            name: 'Deccan Wedding Dreams',
            contact: '9876543298',
            price: [195000, 330000],
            pics: ['deccan_dreams_1.jpg', 'deccan_dreams_2.jpg', 'deccan_dreams_3.jpg'],
            datesoccupied: ['2024-11-01', '2024-12-25', '2025-01-20'],
            rating: 4.8,
          },
          Lucknow: {
            id: 10,
            name: 'Royal Nawabi Weddings',
            contact: '9876543309',
            price: [180000, 350000],
            pics: ['nawabi_weddings_1.jpg', 'nawabi_weddings_2.jpg', 'nawabi_weddings_3.jpg'],
            datesoccupied: ['2024-09-30', '2024-12-15', '2025-02-20'],
            rating: 4.8,
          },
        },
     caterers: {
          Goa: {
            id: 1,
            name: 'Goa Feast Caterers',
            contact: '9876544310',
            price: [150000, 300000],
            pics: ['goa_feast_1.jpg', 'goa_feast_2.jpg', 'goa_feast_3.jpg'],
            datesoccupied: ['2024-10-10', '2024-11-20', '2024-12-30'],
            rating: 4.5,
          },
          Jaipur: {
            id: 2,
            name: 'Jaipur Royal Cuisine',
            contact: '9988776655',
            price: [200000, 400000],
            pics: ['jaipur_royal_1.jpg', 'jaipur_royal_2.jpg', 'jaipur_royal_3.jpg'],
            datesoccupied: ['2024-10-05', '2024-12-01', '2024-12-18'],
            rating: 4.7,
          },
          Udaipur: {
            id: 3,
            name: 'Udaipur Food Paradise',
            contact: '9876541234',
            price: [180000, 350000],
            pics: ['udaipur_food_1.jpg', 'udaipur_food_2.jpg', 'udaipur_food_3.jpg'],
            datesoccupied: ['2024-11-02', '2024-12-15', '2024-12-25'],
            rating: 4.6,
          },
          Pune: {
            id: 4,
            name: 'Pune Flavor Caterers',
            contact: '9898981234',
            price: [160000, 320000],
            pics: ['pune_flavor_1.jpg', 'pune_flavor_2.jpg', 'pune_flavor_3.jpg'],
            datesoccupied: ['2024-09-12', '2024-11-25', '2024-12-20'],
            rating: 4.4,
          },
          Delhi: {
            id: 5,
            name: 'Delhi Grand Feasts',
            contact: '9998887777',
            price: [250000, 500000],
            pics: ['delhi_grand_1.jpg', 'delhi_grand_2.jpg', 'delhi_grand_3.jpg'],
            datesoccupied: ['2024-10-15', '2024-11-22', '2024-12-30'],
            rating: 4.8,
          },
          Hyderabad: {
            id: 6,
            name: 'Hyderabad Nawabi Treats',
            contact: '9123456789',
            price: [230000, 450000],
            pics: ['hyderabad_nawabi_1.jpg', 'hyderabad_nawabi_2.jpg', 'hyderabad_nawabi_3.jpg'],
            datesoccupied: ['2024-10-25', '2024-11-10', '2024-12-18'],
            rating: 4.9,
          },
          Bangalore: {
            id: 7,
            name: 'Bangalore Wedding Caterers',
            contact: '9101112131',
            price: [190000, 380000],
            pics: ['bangalore_caterers_1.jpg', 'bangalore_caterers_2.jpg', 'bangalore_caterers_3.jpg'],
            datesoccupied: ['2024-10-08', '2024-11-17', '2024-12-29'],
            rating: 4.7,
          },
          Lucknow: {
            id: 8,
            name: 'Lucknow Shahi Caterers',
            contact: '9234567890',
            price: [170000, 340000],
            pics: ['lucknow_shahi_1.jpg', 'lucknow_shahi_2.jpg', 'lucknow_shahi_3.jpg'],
            datesoccupied: ['2024-09-30', '2024-10-20', '2024-12-05'],
            rating: 4.6,
          },
        },
     planninganddecorators: {
          Goa: {
            id: 1,
            name: 'Goa Wedding Planners',
            contact: '9876543201',
            price: [400000, 800000],
            pics: ['goa_planner_1.jpg', 'goa_planner_2.jpg', 'goa_planner_3.jpg'],
            datesoccupied: ['2024-09-18', '2024-10-29', '2024-12-14'],
            rating: 4.8,
          },
          Jaipur: {
            id: 2,
            name: 'Jaipur Royal Decorations',
            contact: '9988665544',
            price: [500000, 1000000],
            pics: ['jaipur_decor_1.jpg', 'jaipur_decor_2.jpg', 'jaipur_decor_3.jpg'],
            datesoccupied: ['2024-10-05', '2024-11-22', '2024-12-18'],
            rating: 4.9,
          },
          Udaipur: {
            id: 3,
            name: 'Udaipur Wedding Stylists',
            contact: '8765432109',
            price: [450000, 900000],
            pics: ['udaipur_planner_1.jpg', 'udaipur_planner_2.jpg', 'udaipur_planner_3.jpg'],
            datesoccupied: ['2024-09-25', '2024-11-10', '2024-12-22'],
            rating: 4.7,
          },
          Pune: {
            id: 4,
            name: 'Pune Grand Decorations',
            contact: '9123451234',
            price: [350000, 700000],
            pics: ['pune_planner_1.jpg', 'pune_planner_2.jpg', 'pune_planner_3.jpg'],
            datesoccupied: ['2024-09-30', '2024-11-15', '2024-12-25'],
            rating: 4.5,
          },
          Delhi: {
            id: 5,
            name: 'Delhi Wedding Experts',
            contact: '9998886666',
            price: [600000, 1200000],
            pics: ['delhi_decor_1.jpg', 'delhi_decor_2.jpg', 'delhi_decor_3.jpg'],
            datesoccupied: ['2024-10-15', '2024-11-18', '2024-12-30'],
            rating: 5.0,
          },
          Hyderabad: {
            id: 6,
            name: 'Hyderabad Regal Events',
            contact: '9876501234',
            price: [550000, 1100000],
            pics: ['hyderabad_planner_1.jpg', 'hyderabad_planner_2.jpg', 'hyderabad_planner_3.jpg'],
            datesoccupied: ['2024-10-22', '2024-11-12', '2024-12-20'],
            rating: 4.8,
          },
          Bangalore: {
            id: 7,
            name: 'Bangalore Dream Weddings',
            contact: '9101234567',
            price: [500000, 950000],
            pics: ['bangalore_decor_1.jpg', 'bangalore_decor_2.jpg', 'bangalore_decor_3.jpg'],
            datesoccupied: ['2024-09-29', '2024-11-11', '2024-12-29'],
            rating: 4.9,
          },
          Lucknow: {
            id: 8,
            name: 'Lucknow Heritage Decorators',
            contact: '9234561234',
            price: [400000, 850000],
            pics: ['lucknow_planner_1.jpg', 'lucknow_planner_2.jpg', 'lucknow_planner_3.jpg'],
            datesoccupied: ['2024-10-08', '2024-11-28', '2024-12-15'],
            rating: 4.7,
          },
        },
     mehendiartists: {
          Goa: {
            id: 1,
            name: 'Goa Mehendi Artistry',
            contact: '9898989898',
            price: [25000, 60000],
            pics: ['goa_mehendi_1.jpg', 'goa_mehendi_2.jpg', 'goa_mehendi_3.jpg'],
            datesoccupied: ['2024-09-21', '2024-10-16', '2024-12-05'],
            rating: 4.5,
          },
          Jaipur: {
            id: 2,
            name: 'Jaipur Mehendi Experts',
            contact: '9809809809',
            price: [30000, 70000],
            pics: ['jaipur_mehendi_1.jpg', 'jaipur_mehendi_2.jpg', 'jaipur_mehendi_3.jpg'],
            datesoccupied: ['2024-10-10', '2024-11-05', '2024-12-20'],
            rating: 4.6,
          },
          Udaipur: {
            id: 3,
            name: 'Udaipur Mehendi Creations',
            contact: '9709709709',
            price: [20000, 50000],
            pics: ['udaipur_mehendi_1.jpg', 'udaipur_mehendi_2.jpg', 'udaipur_mehendi_3.jpg'],
            datesoccupied: ['2024-09-30', '2024-10-25', '2024-12-15'],
            rating: 4.7,
          },
          Pune: {
            id: 4,
            name: 'Pune Mehendi Artists',
            contact: '9609609609',
            price: [35000, 80000],
            pics: ['pune_mehendi_1.jpg', 'pune_mehendi_2.jpg', 'pune_mehendi_3.jpg'],
            datesoccupied: ['2024-10-15', '2024-11-22', '2024-12-12'],
            rating: 4.4,
          },
          Delhi: {
            id: 5,
            name: 'Delhi Mehendi Designers',
            contact: '9119119119',
            price: [40000, 90000],
            pics: ['delhi_mehendi_1.jpg', 'delhi_mehendi_2.jpg', 'delhi_mehendi_3.jpg'],
            datesoccupied: ['2024-10-20', '2024-11-10', '2024-12-25'],
            rating: 4.8,
          },
          Hyderabad: {
            id: 6,
            name: 'Hyderabad Mehendi Art',
            contact: '9209209209',
            price: [30000, 60000],
            pics: ['hyderabad_mehendi_1.jpg', 'hyderabad_mehendi_2.jpg', 'hyderabad_mehendi_3.jpg'],
            datesoccupied: ['2024-10-05', '2024-11-15', '2024-12-18'],
            rating: 4.6,
          },
          Bangalore: {
            id: 7,
            name: 'Bangalore Mehendi Experts',
            contact: '9309309309',
            price: [25000, 70000],
            pics: ['bangalore_mehendi_1.jpg', 'bangalore_mehendi_2.jpg', 'bangalore_mehendi_3.jpg'],
            datesoccupied: ['2024-09-28', '2024-11-02', '2024-12-10'],
            rating: 4.7,
          },
          Lucknow: {
            id: 8,
            name: 'Lucknow Mehendi Artisans',
            contact: '9409409409',
            price: [20000, 50000],
            pics: ['lucknow_mehendi_1.jpg', 'lucknow_mehendi_2.jpg', 'lucknow_mehendi_3.jpg'],
            datesoccupied: ['2024-09-15', '2024-10-30', '2024-12-07'],
            rating: 4.5,
          },
        },
     bridalgrooming: {
          Goa: {
            id: 1,
            name: 'Goa Bridal Elegance',
            contact: '9912345678',
            price: [30000, 80000],
            pics: ['goa_bridal_1.jpg', 'goa_bridal_2.jpg', 'goa_bridal_3.jpg'],
            datesoccupied: ['2024-10-01', '2024-11-12', '2024-12-20'],
            rating: 4.5,
          },
          Jaipur: {
            id: 2,
            name: 'Jaipur Bridal Beauty',
            contact: '9923456789',
            price: [35000, 90000],
            pics: ['jaipur_bridal_1.jpg', 'jaipur_bridal_2.jpg', 'jaipur_bridal_3.jpg'],
            datesoccupied: ['2024-09-15', '2024-10-25', '2024-12-15'],
            rating: 4.6,
          },
          Udaipur: {
            id: 3,
            name: 'Udaipur Bridal Artistry',
            contact: '9934567890',
            price: [25000, 70000],
            pics: ['udaipur_bridal_1.jpg', 'udaipur_bridal_2.jpg', 'udaipur_bridal_3.jpg'],
            datesoccupied: ['2024-09-25', '2024-11-05', '2024-12-10'],
            rating: 4.7,
          },
          Pune: {
            id: 4,
            name: 'Pune Bridal Glamour',
            contact: '9945678901',
            price: [28000, 75000],
            pics: ['pune_bridal_1.jpg', 'pune_bridal_2.jpg', 'pune_bridal_3.jpg'],
            datesoccupied: ['2024-10-10', '2024-11-20', '2024-12-15'],
            rating: 4.4,
          },
          Delhi: {
            id: 5,
            name: 'Delhi Bridal Studio',
            contact: '9956789012',
            price: [35000, 90000],
            pics: ['delhi_bridal_1.jpg', 'delhi_bridal_2.jpg', 'delhi_bridal_3.jpg'],
            datesoccupied: ['2024-09-30', '2024-10-15', '2024-12-25'],
            rating: 4.8,
          },
          Hyderabad: {
            id: 6,
            name: 'Hyderabad Bridal Experts',
            contact: '9967890123',
            price: [27000, 70000],
            pics: ['hyderabad_bridal_1.jpg', 'hyderabad_bridal_2.jpg', 'hyderabad_bridal_3.jpg'],
            datesoccupied: ['2024-10-05', '2024-11-10', '2024-12-12'],
            rating: 4.6,
          },
          Bangalore: {
            id: 7,
            name: 'Bangalore Bridal Magic',
            contact: '9978901234',
            price: [32000, 80000],
            pics: ['bangalore_bridal_1.jpg', 'bangalore_bridal_2.jpg', 'bangalore_bridal_3.jpg'],
            datesoccupied: ['2024-09-18', '2024-10-22', '2024-12-05'],
            rating: 4.7,
          },
          Lucknow: {
            id: 8,
            name: 'Lucknow Bridal Charm',
            contact: '9989012345',
            price: [29000, 75000],
            pics: ['lucknow_bridal_1.jpg', 'lucknow_bridal_2.jpg', 'lucknow_bridal_3.jpg'],
            datesoccupied: ['2024-10-01', '2024-11-05', '2024-12-18'],
            rating: 4.5,
          },
        },
     performanceartists: {
          Goa: {
            id: 1,
            name: 'Goa Dance Ensemble',
            contact: '9912345678',
            price: [250000, 350000],
            pics: ['goa_performance_1.jpg', 'goa_performance_2.jpg', 'goa_performance_3.jpg'],
            datesoccupied: ['2024-10-05', '2024-11-12', '2024-12-20'],
            rating: 4.6,
          },
          Jaipur: {
            id: 2,
            name: 'Jaipur Royal Performers',
            contact: '9923456789',
            price: [280000, 370000],
            pics: ['jaipur_performance_1.jpg', 'jaipur_performance_2.jpg', 'jaipur_performance_3.jpg'],
            datesoccupied: ['2024-09-18', '2024-11-01', '2024-12-15'],
            rating: 4.7,
          },
          Udaipur: {
            id: 3,
            name: 'Udaipur Cultural Arts',
            contact: '9934567890',
            price: [220000, 340000],
            pics: ['udaipur_performance_1.jpg', 'udaipur_performance_2.jpg', 'udaipur_performance_3.jpg'],
            datesoccupied: ['2024-10-10', '2024-11-20', '2024-12-25'],
            rating: 4.5,
          },
          Pune: {
            id: 4,
            name: 'Pune Artistic Wonders',
            contact: '9945678901',
            price: [240000, 360000],
            pics: ['pune_performance_1.jpg', 'pune_performance_2.jpg', 'pune_performance_3.jpg'],
            datesoccupied: ['2024-09-25', '2024-11-05', '2024-12-15'],
            rating: 4.4,
          },
          Delhi: {
            id: 5,
            name: 'Delhi Performance Group',
            contact: '9956789012',
            price: [260000, 380000],
            pics: ['delhi_performance_1.jpg', 'delhi_performance_2.jpg', 'delhi_performance_3.jpg'],
            datesoccupied: ['2024-09-30', '2024-11-15', '2024-12-20'],
            rating: 4.8,
          },
          Hyderabad: {
            id: 6,
            name: 'Hyderabad Stage Magic',
            contact: '9967890123',
            price: [230000, 340000],
            pics: ['hyderabad_performance_1.jpg', 'hyderabad_performance_2.jpg', 'hyderabad_performance_3.jpg'],
            datesoccupied: ['2024-10-05', '2024-11-10', '2024-12-12'],
            rating: 4.6,
          },
          Bangalore: {
            id: 7,
            name: 'Bangalore Talent Showcase',
            contact: '9978901234',
            price: [250000, 370000],
            pics: ['bangalore_performance_1.jpg', 'bangalore_performance_2.jpg', 'bangalore_performance_3.jpg'],
            datesoccupied: ['2024-09-20', '2024-10-25', '2024-12-05'],
            rating: 4.7,
          },
          Lucknow: {
            id: 8,
            name: 'Lucknow Performance Art',
            contact: '9989012345',
            price: [240000, 350000],
            pics: ['lucknow_performance_1.jpg', 'lucknow_performance_2.jpg', 'lucknow_performance_3.jpg'],
            datesoccupied: ['2024-10-01', '2024-11-10', '2024-12-18'],
            rating: 4.5,
          },
        },
     pandits: {
          Goa: {
            id: 1,
            name: 'Pandit Ravi Sharma',
            contact: '9812345678',
            price: [25000, 50000],
            pics: ['goa_pandit_1.jpg', 'goa_pandit_2.jpg'],
            datesoccupied: ['2024-10-10', '2024-11-25', '2024-12-15'],
            rating: 4.5,
          },
          Jaipur: {
            id: 2,
            name: 'Pandit Ramesh Kumar',
            contact: '9823456789',
            price: [30000, 60000],
            pics: ['jaipur_pandit_1.jpg', 'jaipur_pandit_2.jpg'],
            datesoccupied: ['2024-09-20', '2024-11-10', '2024-12-05'],
            rating: 4.7,
          },
          Udaipur: {
            id: 3,
            name: 'Pandit Anil Joshi',
            contact: '9834567890',
            price: [40000, 70000],
            pics: ['udaipur_pandit_1.jpg', 'udaipur_pandit_2.jpg'],
            datesoccupied: ['2024-10-15', '2024-11-20', '2024-12-12'],
            rating: 4.6,
          },
          Pune: {
            id: 4,
            name: 'Pandit Sanjay Deshmukh',
            contact: '9845678901',
            price: [35000, 65000],
            pics: ['pune_pandit_1.jpg', 'pune_pandit_2.jpg'],
            datesoccupied: ['2024-10-01', '2024-11-05', '2024-12-18'],
            rating: 4.4,
          },
          Delhi: {
            id: 5,
            name: 'Pandit Ajay Sharma',
            contact: '9856789012',
            price: [30000, 80000],
            pics: ['delhi_pandit_1.jpg', 'delhi_pandit_2.jpg'],
            datesoccupied: ['2024-09-25', '2024-11-15', '2024-12-20'],
            rating: 4.8,
          },
          Hyderabad: {
            id: 6,
            name: 'Pandit Krishna Rao',
            contact: '9867890123',
            price: [20000, 55000],
            pics: ['hyderabad_pandit_1.jpg', 'hyderabad_pandit_2.jpg'],
            datesoccupied: ['2024-10-10', '2024-11-30', '2024-12-15'],
            rating: 4.5,
          },
          Bangalore: {
            id: 7,
            name: 'Pandit Gopal Hegde',
            contact: '9878901234',
            price: [40000, 75000],
            pics: ['bangalore_pandit_1.jpg', 'bangalore_pandit_2.jpg'],
            datesoccupied: ['2024-10-05', '2024-11-12', '2024-12-10'],
            rating: 4.6,
          },
          Lucknow: {
            id: 8,
            name: 'Pandit Sunil Agarwal',
            contact: '9889012345',
            price: [35000, 70000],
            pics: ['lucknow_pandit_1.jpg', 'lucknow_pandit_2.jpg'],
            datesoccupied: ['2024-10-20', '2024-11-05', '2024-12-25'],
            rating: 4.4,
          },
        }
   };
   
export { basicPackage, standardPackage, premiumPackage, vendorData, vendorCategories }