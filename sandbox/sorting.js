const hikes = [
    {
        "name": "Bechler Falls",
        "imgSrc": "//byui-cit.github.io/cit261/examples/falls.jpg",
        "imgAlt": "Image of Bechler Falls",
        "distance": "3 miles",
        "difficulty": "Easy",
        "description":
            "Beautiful short hike along the Bechler river to Bechler Falls",
        "directions":
            "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road. Drive to the end of the Cave Falls road. There is a parking area at the trailhead."
    },
    {
        "name": "Teton Canyon",
        "imgSrc": "//byui-cit.github.io/cit261/examples/falls.jpg",
        "imgAlt": "Image of Teton Canyon",
        "distance": "3 miles",
        "difficulty": "Easy",
        "description": "Beautiful short (or long) hike through Teton Canyon.",
        "directions":
            "Take Highway 33 East to Driggs. Turn left onto Teton Canyon Road. Follow that road for a few miles then turn right onto Staline Road for a short distance, then left onto Alta Road. Veer right after Alta back onto Teton Canyon Road. There is a parking area at the trailhead."
    },
    {
        "name": "Alaska Basin",
        "imgSrc": "//byui-cit.github.io/cit261/examples/falls.jpg",
        "imgAlt": "Image of Alaska Basin",
        "distance": "17 miles",
        "difficulty": "Difficult",
        "description":
            "Beautiful hike through Teton Canyon, up the Devils Staircase, to Alaska Basin",
        "directions":
            "Take Highway 33 East to Driggs. Turn left onto Teton Canyon Road. Follow that road for a few miles then turn right onto Staline Road for a short distance, then left onto Alta Road. Veer right after Alta back onto Teton Canyon Road. There is a parking area at the trailhead."
    },
    {
        "name": "North Menan Butte",
        "imgSrc": "//byui-cit.github.io/cit261/examples/falls.jpg",
        "imgAlt": "Image of Menan Butte",
        "distance": "3.4 miles",
        "difficulty": "Moderate",
        "description":
            "Beautiful hike up and around the Menan Butte, an extinct volcano cone",
        "directions":
            "Take Main Street West out of Rexburg. Continue onto Highway 33. Travel west for about 8 miles until you see E Butte Rd on the South. Turn left and travel about 1 mile, turn left at your first opportunity onto Twin Butte Road. Follow that road for about 2 miles. The trailhead parking lot will be on the left"
    },
    {
        "name": "Denanda Falls",
        "imgSrc": "//byui-cit.github.io/cit261/examples/falls.jpg",
        "imgAlt": "Image of Bechler Falls",
        "distance": "7 miles",
        "difficulty": "Moderate",
        "description":
            "Beautiful hike through Bechler meadows river to Denanda Falls",
        "directions":
            "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road. Drive to until you see the sign for Bechler Meadows on the left. Turn there. There is a parking area at the trailhead."
    }

];
const simpleList = ["oranges", "grapes", "lemons", "apples", "Bananas", "watermelons", "coconuts", "broccoli", "mango"];

simpleSort = simpleList.sort();

function compareFunction(a, b) {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    }
    // a must be equal to b
    return 0;
}
  const anotherSort = simpleList.sort(compareFunction)
// const anotherSort = simpleList.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));

function searchList(list, query) {
    function stringContains(item) {
        // if query is found inside the item return true

        return (
            item.name.toLowerCase().includes(query.toLowerCase()) ||
            item.description.toLowerCase().includes(query.toLowerCase()) ||
            item.tags.find((tag)=> tag.toLowerCase().includes(query.toLowerCase()))
        
        );
    
    }
    return list.filter(stringContains);
}

const result = searchList(hikes, 'al'); 
console.log(result);
console.log(searchList(hikes, "moderate")); 
