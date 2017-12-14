function Meal() {
	var vegetable = [ "Artichoke", "Arugula", "Asparagus", "Bamboo Shoots", "Bean Sprouts", "Beet", "Bell Pepper",
	"Bok Choy", "Broccoli", "Brussels Sprouts", "Cabbage", "Capers", "Carrot", "Cauliflower", "Celery", "Celery Root", "Celtuce", 
	"Chinese Broccoli (kai-lan)", "Cherry Tomatos", "Baby Corn", "Cucumber", "Radish", "Eggplant", "Endive", "Fennel", "Grape Leaves", "Beet Greens", 
	"Collard Greens", "Kale", "Kohlrabi Greens", "Swiss Chard", "Turnip Greens", "Hearts of Palm", "Jerusalem Artichoke", "Kohlrabi",
	"Leeks", "Lettuce", "Butterhead Lettuce", "Iceberg Lettuce", "Romaine Lettuce", "Mushrooms", "Olive", "Onion", "Red Onion", "Green Onions",
	"Parsley", "Parsley Root", "Parsnip", "Radicchio", "Radish", "Shallots", "Spinach", "Tomato", "Turnip", "Watercress", "Zucchini",
	"Potato", "Sweet Potato", "Okra", "Butternut Squash", "Acorn Squash" ];
	
	var fruit = [ "Apple", "Apricot", "Banana", "Blackberries", "Blueberries", "Cherries", "Cherimoya", "Coconut", "Cranberries", "Dates",
	"Dragonfruit", "Durian", "Feijoa", "Figs", "Goji berries", "Grapes", "Raisins", "Grapefruit", "Guava", "Jackfruit", "Jujube", "Kiwano",
	"Kiwifruit","Kumquat", "Loquat", "Lychee", "Mango", "Melon", "Cantaloupe", "Honeydew", "Watermelon", "Miracle fruit", "Mulberries",
	"Nectarine", "Orange", "Blood orange", "Clementine", "Mandarine", "Tangerine", "Papaya", "Passionfruit", "Peach", "Pear", "Persimmon",
	"Plum", "Prune", "Pineapple", "Pomegranate", "Pomelo", "Quince", "Raspberries", "Redcurrant", "Star fruit", "Strawberry", "Chestnut" ];


	var grain = [ "Amaranth", "Barley", "Brown Rice", "Buckwheat", "Bulgur (Cracked Wheat)", "Corn", "Millet", "Oats", "Quinoa", "Spelt",
	"Wheat", "Wild Rice" ];

	var legume = ["Aduke Beans", "Alfalfa", "Anasazi Beans", "Azuki Beans", "Bean Sprouts", "Black Beans (Black Turtle)",
 	"Black-Eyed Peas", "Broad Beans", "Calypso (Yin Yang) Beans", "Cannellini Beans", "Copper Beans", "Edamame", "Fava Beans",
	"Garbanzo Beans (Chickpeas)", "Green Beans", "Jicama", "Kidney Beans", "Green Lentils", "Yellow Lentils", "Lima Beans", "Mung Beans",
	"Navy Beans", "Northern Beans", "Pea Pods", "Green Peas", "Pinto Beans", "Red Beans", "Soy Beans", "Black Soy Beans", "Red Soy Beans", 
	"Speckled Cranberry Beans", "Tamarind Beans", "Wax Beans", "White Beans"];

	var fat = ["Avocado", "Peanuts", "Chia seeds", "Flaxseeds", "Hemp seeds", "Poppy seeds", "Pumpkin seeds", "Sesame seeds", "Sunflower seeds",
	"Almonds", "Brazil Nuts", "Cashew Nuts", "Hazelnuts", "Macadamia Nuts", "Pecans", "Pine Nuts", "Pistachio Nuts", "Tiger Nuts", "Walnuts"];

	var carb = grain[Math.round(Math.random()*(grain.length-1))];
	var protein = legume[Math.round(Math.random()*(legume.length-1))];
	var healthyFat = fat[Math.round(Math.random()*(fat.length-1))];
	var veg = vegetable[Math.round(Math.random()*(vegetable.length-1))];
	var dessert = fruit[Math.round(Math.random()*(fruit.length-1))];
	
	document.getElementById("meal").innerHTML = "<div>Cook yourself some " + carb + " and " + protein + "<br> with " + veg + " and " + healthyFat +
	"<br> and " + dessert + " for dessert.</div>"
}

function Salad() {
	var greens = ["Arugula", "Bok Choy", "Cabbage", "Celtuce", "Endive", "Fennel", "Grape Leaves", "Beet Greens", 
	"Collard Greens", "Kale", "Kohlrabi Greens", "Swiss Chard", "Turnip Greens", "Lettuce", "Butterhead Lettuce", "Iceberg Lettuce",
	 "Romaine Lettuce", "Radicchio", "Spinach" ];

	var vegetable = ["Artichoke", "Asparagus", "Bamboo Shoots", "Bean Sprouts", "Beet", "Bell Pepper", "Broccoli", "Brussels Sprouts",
	 "Capers", "Carrot", "Cauliflower", "Celery", "Celery Root", "Chinese Broccoli (kai-lan)", "Cherry Tomatos", "Baby Corn", "Cucumber", "Radish", 
	 "Eggplant", "Hearts of Palm", "Jerusalem Artichoke", "Kohlrabi", "Leeks", "Mushrooms", "Olive", "Onion", "Red Onion", "Green Onions",
	 "Parsley Root", "Parsnip", "Radish", "Shallots", "Tomato", "Turnip", "Zucchini", "Okra" ];

	var dressing = ["Olive Oil", "Apple Cider Vinegar", "Mustard", "Vegan Mayonnaise", "Lemon Juice", "Soy Sauce", "Balsamic Vinegar",
	 "Dijon Mustard", "Lime Juice", "Red Wine Vinegar", "Rice Vinegar", "Flaxseed Oil", "Hazelnut Oil", "Walnut Oil", "Pumpkin Seed Oil",
	 "Coconut Oil", "Sesame Oil", "Vinaigrette", "Non-Dairy Yogurt", "Tahini", "Hummus", "Cashew Butter", "Almond Butter", "Sriracha",
	 "Tabasco","Green Tabasco", "Tabasco Habanero", "Pesto" ];

	var herbs = ["Basil", "Chevril", "Chives", "Coriander", "Dill", "Lovage", "Mint", "Oregano", "Marjoram", "Tarragon",
	"Tyme", "Parsley", "Watercress" ];

	var side = ["Avocado", "Peanuts", "Chia seeds", "Flaxseeds", "Hemp seeds", "Poppy seeds", "Pumpkin seeds", "Sesame seeds", "Sunflower seeds",
	"Almonds", "Brazil Nuts", "Cashew Nuts", "Hazelnuts", "Macadamia Nuts", "Pecans", "Pine Nuts", "Pistachio Nuts", "Tiger Nuts", "Walnuts",
	"Potato", "Sweet Potato", "Corn", "Amaranth", "Barley", "Brown Rice", "Buckwheat", "Bulgur (Cracked Wheat)", "Millet", "Oats", "Quinoa", 
	"Spelt", "Wheat", "Wild Rice", "Tofu", "Butternut Squash", "Cranberries", "Raisins", "Aduke Beans", "Alfalfa", "Anasazi Beans", 
	"Azuki Beans", "Bean Sprouts", "Black Beans (Black Turtle)", "Black-Eyed Peas", "Broad Beans", "Calypso (Yin Yang) Beans", 
	"Cannellini Beans", "Copper Beans", "Edamame", "Fava Beans", "Garbanzo Beans (Chickpeas)", "Green Beans", "Jicama", "Kidney Beans",
	"Green Lentils", "Yellow Lentils", "Lima Beans", "Mung Beans", "Navy Beans", "Northern Beans", "Pea Pods", "Green Peas", "Pinto Beans",
	"Red Beans", "Soy Beans", "Black Soy Beans", "Red Soy Beans", "Speckled Cranberry Beans", "Tamarind Beans", "Wax Beans", "White Beans",
	"Acorn Squash" ];
	
	var green = greens[Math.round(Math.random()*(greens.length-1))];
	var veg1 = vegetable[Math.round(Math.random()*(vegetable.length-1))];
	var veg2 = vegetable[Math.round(Math.random()*(vegetable.length-1))];
	var veg3 = vegetable[Math.round(Math.random()*(vegetable.length-1))];
	var dress = dressing[Math.round(Math.random()*(dressing.length-1))];
	var herb = herbs[Math.round(Math.random()*(herbs.length-1))];
	var onTop = side[Math.round(Math.random()*(side.length-1))];
	
	document.getElementById("meal").innerHTML = "<div>Mix some " + green + " with " + veg1 + ", " + veg2 + " and " + veg3 +
	"<br> add " + herb + " and " + onTop + "<br>and dress with " + dress + ".</div>"
	
}

function Shake() {
	var fruit = ["Avocado", "Apple", "Apricot", "Banana", "Blackberries", "Blueberries", "Cherries", "Cherimoya", "Coconut", "Cranberries", "Dates",
	"Dragonfruit", "Durian", "Feijoa", "Figs", "Goji berries", "Grapes", "Raisins", "Grapefruit", "Guava", "Jackfruit", "Jujube", "Kiwano",
	"Kiwifruit","Kumquat", "Loquat", "Lychee", "Mango", "Melon", "Cantaloupe", "Honeydew", "Watermelon", "Miracle fruit", "Mulberries",
	"Nectarine", "Orange", "Blood orange", "Clementine", "Mandarine", "Tangerine", "Papaya", "Passionfruit", "Peach", "Pear", "Persimmon",
	"Plum", "Prune", "Pineapple", "Pomegranate", "Pomelo", "Quince", "Raspberries", "Redcurrant", "Star fruit", "Strawberry", "Chestnut",
	"Broccoli", "Cauliflower", "Celery", "Cucumber", "Carrot"];	
	var liquid = ["Soy Milk", "Almond Milk", "Oat Milk", "Rice Milk", "Coconut Milk", "Orange Juice", "Vegan Yogurt", "Green Tea",
	"Apple Juice", "Sparkling Water" ];
	var sweetener = ["Agave Nectar", "Date Honey", "Stevia", "Sugar", "Brown Sugar", "Coconut Sugar", "Blackstrap Molasses", "Maple Syrup", 
	"Brown Rice Syrup", "Real Fruit Jam"];
	var optional = ["Mint", "Arugula", "Kale", "Lettuce", "Butterhead Lettuce", "Iceberg Lettuce", "Romaine Lettuce", "Spinach",
	"Peanuts", "Chia seeds", "Flaxseeds", "Hemp seeds", "Poppy seeds", "Pumpkin seeds", "Sesame seeds", "Sunflower seeds",
	"Almonds", "Brazil Nuts", "Cashew Nuts", "Hazelnuts", "Macadamia Nuts", "Pecans", "Pine Nuts", "Pistachio Nuts", "Tiger Nuts", "Walnuts",
	"Ginger", "Lemon Juice", "Oats", "Almond Butter", "Cashew Butter", "Peanut Butter", "Tahini", "Cacao Powder", "Vanilla Extract", "Cinnamon" ];
//ice cubes
}

var i = 0;
var img = [];
var time = 2000;

img[0] = "img/avocado.jpg"
img[1] = "img/banana.jpeg"
img[2] = "img/celery.jpg"
img[3] = "img/coconut.jpg"
img[4] = "img/Dates.png"
img[5] = "img/mango.jpg"
img[6] = "img/mushrooms.jpg"
img[7] = "img/potato.png"
img[8] = "img/Raspberry.jpg"
img[9] = "img/rice.png"


function changeImg() {
	document.slide.src = img[i];
	if(i<img.length-1) {
		i++;
	} else {
		i=0;
	}
	setTimeout("changeImg()", time);
}
window.onload = changeImg;

var myForm = document.forms.myForm;

var message = document.getElementById("message");
myForm.onsubmit = function() {
if (myForm.name.value == "") {
		message.innerHTML = "Please enter your name";
		myForm.name.focus();
		return false;
	} else {
		message.innerHTML = "";
		return true;
	}
	
};

	


