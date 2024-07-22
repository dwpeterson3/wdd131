const outputElement = document.querySelector(".menu");

const menuItems = [
    {
        item: "Huck n Blue",
        price: "$14",
        description: "Huckleberry pepper sauce with blue cheese and lettuce",
        imgSrc: "images/coming-soon.webp",
        imgAlt: "This picture is coming soon",
        type: "smashburger"
    },
    {
        item: "Da Juan",
        price: "$15",
        description: "Chorizo mixed burger with a nopales slaw and tomatillo aioli",
        imgSrc: "images/dajuan.webp",
        imgAlt: "Da Juan Burger",
        type: "smashburger"
    },
    {
        item: "Porkzilla",
        price: "$15",
        description: "1/2 burger 1/2 pulled pork with cheese, BBQ sauce, and onion straws",
        imgSrc: "images/porkzilla.webp",
        imgAlt: "Porkzilla Burger",
        type: "smashburger"
    },
    {
        item: "Mozz Be Cheezy",
        price: "$15",
        description: "Pesto toasted bun with mozzarella cheese, tomato and lettuce",
        imgSrc: "images/pestoburger.webp",
        imgAlt: "Mozz Be Cheezy Burger",
        type: "smashburger"
    },
    {
        item: "Basic B",
        price: "$13",
        description: "Lettuce, tomato, onion and cheese",
        imgSrc: "images/basicb.webp",
        imgAlt: "Basic B Burger",
        type: "smashburger"
    },
    {
        item: "Oklahoma Melt",
        price: "$14",
        description: "Onion, jalapeno pepper smashed in the patty with chipotle aioli and lettuce on texas toast",
        imgSrc: "images/coming-soon.webp",
        imgAlt: "This menu item picture is coming soon",
        type: "smashburger"
    },
    {
        item: "O.G. (classic)",
        price: "$9",
        description: "Cheddar cheese",
        imgSrc: "images/og-macandcheese.webp",
        imgAlt: "The O.G. Mac and Cheese",
        type: "macandcheese"
    },
    {
        item: "Piggy Smalls",
        price: "$12",
        description: "Pulled pork, BBQ sauce, onion straws, cheddar cheese",
        imgSrc: "images/piggysmalls.webp",
        imgAlt: "Piggy Smalls Mac and Cheese",
        type: "macandcheese"
    },
    {
        item: "Stop PESTO-ing Me",
        price: "$11",
        description: "Pesto sauce with cherry tomato",
        imgSrc: "images/pestomac.webp",
        imgAlt: "Stop PESTO-ing Me Mac and Cheese",
        type: "macandcheese"
    },
    {
        item: "Mr. Chester",
        price: "$10",
        description: "Jalapeno mac topped with hot lime Cheetos and fresh lime",
        imgSrc: "images/mrcheeto.webp",
        imgAlt: "Mr. Chester Mac and Cheese",
        type: "macandcheese"
    },
    {
        item: "Classic",
        price: "$5",
        description: "Bun and 1/4 pound all beef dog",
        imgSrc: "images/coming-soon.webp",
        imgAlt: "This menu item picture is coming soon",
        type: "glizzy"
    },
    {
        item: "Outlaw",
        price: "$7",
        description: "Sauteed onion and jalepeno peppers with chipotle aioli",
        imgSrc: "images/coming-soon.webp",
        imgAlt: "This menu item picture is coming soon",
        type: "glizzy"
    },
    {
        item: "Rocky Mountain",
        price: "$8",
        description: "Huckleberry pepper sauce drizzle over BBQ pulled pork and onion straws",
        imgSrc: "images/rockymountain.webp",
        imgAlt: "Rocky Mountain Hot Dog",
        type: "glizzy"
    },
    {
        item: "Pesto-ing Frank",
        price: "$7",
        description: "Pesto toasted bun with mozzarella and cherry tomato",
        imgSrc: "images/pestoingfrank.webp",
        imgAlt: "Pesto-ing Frank Hot Dog",
        type: "glizzy"
    }
]
export default menuItems;