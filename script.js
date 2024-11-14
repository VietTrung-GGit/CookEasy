document.getElementById('Selector').addEventListener('change', function() {
    var selectedImage = this.value;
    document.getElementById('displayImage').src = selectedImage;
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
        else
        {
            document.getElementById('displaySteps').innerText = "";

        }
    });