document.getElementById('Selector').addEventListener('change', function() {
    var selectedImage = this.value;
    document.getElementById('displayImage').src = selectedImage;
});


document.getElementById('SelectMeal').addEventListener('change', function() {
    var selectedMeal = document.getElementById("SelectMeal");
    var meal = selectedMeal.options[selectedMeal.selectedIndex].text;
    if (meal != "Dessert")
    {
        document.getElementById('Selector').style.visibility='hidden';
    }
    else if (meal == "Dessert")
        {
            document.getElementById('Selector').style.visibility='visible';
        }
});

document.getElementById('Selector').addEventListener('change',function() {
    var select = document.getElementById("Selector");
    var text = select.options[select.selectedIndex].text;
   
    if (text == "Dragonfruit Smoothie")
    {
    document.getElementById('displayText').innerText = "Dragonfruit Smoothie";
    document.getElementById('displayDesc').innerText = "Dragon fruit aka pitaya, pitahaya or strawberry pear, is high in nutrients, fiber and antioxidants. This superfood smoothie is creamy, refreshing and tastes like a treat. Enjoy smoothies in moderation as they are full of natural sugars.";
    }
    else if (text == "Shamrock Smoothie")
        {
        document.getElementById('displayText').innerText = "Shamrock Smoothie";
        document.getElementById('displayDesc').innerText = "A green smoothie made with mangoes, banana, spinach and coconut water. An easy way to get more fruit and veggies in your diet, and it tastes delicious too! While healthy, smoothies should still be enjoyed in moderation due to its high natural sugar content.";
        }
    else if (text == "Vegan Matcha")
        {
            document.getElementById('displayText').innerText = "Vegan Matcha";
            document.getElementById('displayDesc').innerText = "The best creamy, clump-free vegan matcha latte that you can make at home! Don't be intimidated - this recipe is super easy and requires just 4 ingredients and 5 minutes. Never pay for overpriced matcha latte at cafes again!";
        }
    else if (text == "Tiramisu")
        {
            document.getElementById('displayText').innerText = "Tiramisu";
            document.getElementById('displayDesc').innerText = "Tiramisù, one of Italy's most recognizable sweets and frequently appears at the top of internet searches for the country’s best Italian desserts.";
        }
    else if (text == "Panna Cotta")
        {
            document.getElementById('displayText').innerText = "Panna Cotta";
            document.getElementById('displayDesc').innerText = "One of the most beloved Italian desserts, panna cotta is rich and silky with pure dairy flavor.";
        }
    else
    {
        document.getElementById('displayText').innerText = "";
        document.getElementById('displayDesc').innerText = "";
    }
});

document.getElementById('Selector').addEventListener('change',function() {
    var select = document.getElementById("Selector");
    var text = select.options[select.selectedIndex].text;
    if (text == "Dragonfruit Smoothie")
        {
        document.getElementById('displayIng').innerText = "1 banana, chopped and frozen\n 5 strawberries, frozen\n 1/2 pink dragon fruit, chopped\n 40ml almond milk";
        }
        else if (text == "Shamrock Smoothie")
            {
                document.getElementById('displayIng').innerText = "1 small mango, chopped and frozen\n 1/2 banana, chopped and frozen\n 50g baby spinach\n 6 ice cubes\n - Splash of coconut water";
            }
        else if (text == "Vegan Matcha")
            {
                document.getElementById('displayIng').innerText = "1.5 tsp matcha powder\n 1 tbsp hot water\n 1 tbsp maple syrup (optional)\n 240ml oat milk\n 4-5 ice cubes";
            }
        else if (text == "Tiramisu")
            {
                document.getElementById('displayIng').innerText = "Ladyfingers\nMascarpone\nCoffee\nHeavy Whipped Cream\nGranulated Sugar\nVanilla extract\nCocoa powder";
            }
        else if (text == "Panna Cotta")
            {
                document.getElementById('displayIng').innerText = "Whipping cream\nUnflavored gelatin\nSugar\nGreek yogurt (or sour cream)\nVanilla. ";
            }
        else
        {
            document.getElementById('displayIng').innerText = "";
        }
    });


    document.getElementById('Selector').addEventListener('change',function() {
        var select = document.getElementById("Selector");
        var text = select.options[select.selectedIndex].text;
       
        if (text == "Dragonfruit Smoothie")
        {
        document.getElementById('displaySteps').innerText = "Put all ingredients in a high speed blender and blend until smooth.";

        }
        else if (text == "Shamrock Smoothie")
            {
            document.getElementById('displaySteps').innerText = "Place all ingredients in a high speed blender and blend until smooth and creamy.";

            }
        else if (text == "Vegan Matcha")
            {
                document.getElementById('displaySteps').innerText = "Sift matcha powder into a small bowl.\n Add maple syrup and hot water to the bowl. Using a bamboo whisk, whisk vigorously until matcha is completely dissolved and mixture is frothy.\n In your serving cup, add ice cubes, oat milk and matcha mixture. Stir until combined.";

            }
        else if (text == "Tiramisu")
            {
                document.getElementById('displaySteps').innerText = "Mix creamy filling.Beat the mascarpone, cream, sugar, and vanilla together until stiff peaks.\nDip lady fingers.Add the espresso and liqueur (if using) to a shallow bowl and dip the lady fingers on both sides (don't let them soak-just a quick dip!)\nLayer mascarpone. Smooth a layer of the mascarpone/whipped cream mixture on top of the lady fingers.\nRepeat.Add another layer of lady fingers (dipped in coffee and liqueur) and another layer of cheese mixture. Dust with cocoa powder.";
    
            }
        else if (text == "Panna Cotta")
        {
                document.getElementById('displaySteps').innerText = "Dissolve Gelatin: ½ cup of cream to a bowl, sprinkle gelatin over the top. Let stand for 10 minutes.\nHeat: Pour remaining 1 ½ cups cream and ½ cup of sugar into a 2-quart saucepan and cook on medium heat until sugar is dissolved and mixture is hot, but not boiling. Remove from heat.\nWhisk softened gelatin into mixture. Stir in yogurt and vanilla.\nDivide Italian panna cotta between cups, or baking molds sprayed with nonstick cooking spray if you plan to invert the panna cotta onto a plate for serving. Refrigerate for at least 5 hours or overnight.\nServe the best panna cotta recipe in dessert cups, ramekins, or for a more traditional Italian panna cotta, invert it onto a plate. Add toppings just before serving.";
        
        }
        else
        {
            document.getElementById('displaySteps').innerText = "";

        }
    });