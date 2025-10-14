const places = [
    {
        id: 1,
        title: "Cozy Beachfront Cottage",
        country: "United States",
        category: "Beach",
        rating: 4,
        comments: 132,
        author: "Sophia Adams",
        image:
            "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=800&q=60",
        description:
            "Escape to this charming beachfront cottage for a relaxing getaway with stunning ocean views.",
    },
    {
        id: 2,
        title: "Modern Loft in Downtown",
        country: "United States",
        category: "Spiritual",
        rating: 4.7,
        comments: 205,
        author: "Ethan Clarke",
        image:
            "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60",
        description:
            "Stay in the heart of New York City in this modern loft apartment, perfect for urban explorers.",
    },
    {
        id: 3,
        title: "Mountain Retreat",
        country: "United States",
        category: "Mountains",
        rating: 4.8,
        comments: 189,
        author: "Ava Mitchell",
        image:
            "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=60",
        description:
            "Unplug and unwind in this peaceful mountain cabin surrounded by nature.",
    },
    {
        id: 4,
        title: "Historic Villa in Tuscany",
        country: "Italy",
        category: "Spiritual",
        rating: 4.9,
        comments: 211,
        author: "Luca Romano",
        image:
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60",
        description:
            "Experience the charm of Tuscany in this beautifully restored historic villa.",
    },
    {
        id: 5,
        title: "Secluded Treehouse Getaway",
        country: "United States",
        category: "Parks",
        rating: 4.5,
        comments: 97,
        author: "Olivia Carter",
        image:
            "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=60",
        description:
            "Live among the treetops in this nature-inspired, secluded treehouse retreat.",
    },
    {
        id: 6,
        title: "Beachfront Paradise",
        country: "Mexico",
        category: "Beach",
        rating: 4.7,
        comments: 178,
        author: "Carlos Martinez",
        image:
            "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=60",
        description:
            "Step out onto the sandy beach from this relaxing beachfront condo in Cancun.",
    },
    {
        id: 7,
        title: "Rustic Cabin by the Lake",
        country: "United States",
        category: "Parks",
        rating: 4.6,
        comments: 121,
        author: "Henry Foster",
        image:
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=60",
        description:
            "Spend peaceful days fishing and kayaking from this rustic lakeside cabin.",
    },
    {
        id: 8,
        title: "Luxury Penthouse with City Views",
        country: "United States",
        category: "Spiritual",
        rating: 4.9,
        comments: 243,
        author: "Emily Davis",
        image:
            "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?auto=format&fit=crop&w=800&q=60",
        description:
            "Indulge in luxury living with panoramic city views from this elegant penthouse.",
    },
    {
        id: 9,
        title: "Ski-In/Ski-Out Chalet",
        country: "Switzerland",
        category: "Mountains",
        rating: 4.8,
        comments: 165,
        author: "Jonas Keller",
        image:
            "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=60",
        description:
            "Enjoy ski-in/ski-out convenience and Alpine charm in this Swiss chalet.",
    },
    {
        id: 10,
        title: "Safari Lodge in the Serengeti",
        country: "Tanzania",
        category: "Jungle Safari",
        rating: 4.9,
        comments: 199,
        author: "Amara Ndlovu",
        image:
            "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=800&q=60",
        description:
            "Experience the thrill of the wild in a comfortable safari lodge near the Great Migration.",
    },
    {
        id: 11,
        title: "Historic Canal House",
        country: "Netherlands",
        category: "Spiritual",
        rating: 4.6,
        comments: 154,
        author: "Lars de Vries",
        image:
            "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=60",
        description:
            "Stay in a beautifully preserved canal house in Amsterdam’s historic district.",
    },
    {
        id: 12,
        title: "Private Island Retreat",
        country: "Fiji",
        category: "Spiritual",
        rating: 5.0,
        comments: 284,
        author: "Isabella Reed",
        image:
            "https://images.unsplash.com/photo-1618140052121-39fc6db33972?auto=format&fit=crop&w=800&q=60",
        description:
            "Have an entire island to yourself for a truly exclusive and unforgettable experience.",
    },
    {
        id: 13,
        title: "Charming Cottage in the Cotswolds",
        country: "United Kingdom",
        category: "Parks",
        rating: 4.7,
        comments: 142,
        author: "Charlotte Bennett",
        image:
            "https://images.unsplash.com/photo-1602088113235-229c19758e9f?auto=format&fit=crop&w=800&q=60",
        description:
            "Escape to the picturesque Cotswolds in this quaint and charming cottage.",
    },
    {
        id: 14,
        title: "Historic Brownstone in Boston",
        country: "United States",
        category: "Spiritual",
        rating: 4.8,
        comments: 178,
        author: "Nathan Roberts",
        image:
            "https://images.unsplash.com/photo-1533619239233-6280475a633a?auto=format&fit=crop&w=800&q=60",
        description:
            "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    },
    {
        id: 15,
        title: "Beachfront Bungalow in Bali",
        country: "Indonesia",
        category: "Beach",
        rating: 4.9,
        comments: 239,
        author: "Nyoman Putri",
        image:
            "https://images.unsplash.com/photo-1602391833977-358a52198938?auto=format&fit=crop&w=800&q=60",
        description:
            "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    },
    {
        id: 16,
        title: "Mountain View Cabin in Banff",
        country: "India",
        category: "Mountains",
        rating: 4.8,
        comments: 163,
        author: "Ethan Walker",
        image:
            "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?auto=format&fit=crop&w=800&q=60",
        description:
            "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    },
    {
        id: 17,
        title: "Art Deco Apartment in Miami",
        country: "United States",
        category: "Spiritual",
        rating: 4.6,
        comments: 156,
        author: "Mia Gonzalez",
        image:
            "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?auto=format&fit=crop&w=800&q=60",
        description:
            "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    },
    {
        id: 18,
        title: "Tropical Villa in Phuket",
        country: "Thailand",
        category: "Beach",
        rating: 4.9,
        comments: 214,
        author: "Ananya Singh",
        image:
            "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?auto=format&fit=crop&w=800&q=60",
        description:
            "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    },
    {
        id: 19,
        title: "Historic Castle in Scotland",
        country: "United Kingdom",
        category: "Spiritual",
        rating: 5.0,
        comments: 251,
        author: "William Fraser",
        image:
            "https://images.unsplash.com/photo-1585543805890-6051f7829f98?auto=format&fit=crop&w=800&q=60",
        description:
            "Live like  Text refers to the words or written content of a work, such as a book or article, and can also mean a short electronic message, a sequence of characters in computing, or any object that can be read and interpreted, like a work of literature, a street sign, or even clothing. The meaning of depends on the context, ranging from traditional written material to broader, communicative forms. Text refers to the words or written content of a work, such as a book or article, and can also mean a short electronic message, a sequence of characters in computing, or any object that can be  and interpreted, like a work of literature, a street sign, or even clothing. The meaning of  depends on the context, ranging from traditional written material to broader, communicative forms. royalty in this historic castle in the Scottish Highlands.",
    },
    {
        id: 20,
        title: "Desert Oasis in Dubai",
        country: "United Arab Emirates",
        category: "Parks",
        rating: 4.7,
        comments: 189,
        author: "Omar Al Farsi",
        image:
            "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=60",
        description:
            "Experience luxury in the middle of the desert in this opulent Dubai oasis.",
    },
];

export default places;
