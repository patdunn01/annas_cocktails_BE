const { MongoClient } = require("mongodb");

const url = "mongodb+srv://patdunn01:Socket248@cluster0.yb5jr4m.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(url);

const dbName = "blogs";

async function run() {
    try {
         await client.connect();
         console.log("Connected correctly to server");
         const db = client.db(dbName);

         // Use the collection "people"
         const col = db.collection("people");

         // Construct a document                                                                                                                                                              
         const seedPosts = {
          posts: [
          { 
            author: 'Anna Kelly',
            date: 'August 14, 2022',
            title: "New Cocktail Bar in Shoreditch: Meet The Broken Shaker",
            body: "If you're looking for a unique cocktail experience in the heart of Shoreditch, then The Broken Shaker is the place to go. This new cocktail bar has just opened its doors, and it promises to be a game-changer in the London bar scene. The bar's interior is beautifully decorated, and the bartenders are highly skilled and passionate about their craft. The cocktail menu is creative and includes some unique drinks that you won't find anywhere else. The Broken Shaker is definitely worth checking out if you're in the area."
          },
          { 
            author: 'Patrick Dunn',
            date: 'September 7, 2022',
            title: "New Cocktail Drink Alert: The Blueberry Basil Margarita",
            body: "If you're a fan of margaritas, you have to try the new Blueberry Basil Margarita. This refreshing and unique cocktail is made with tequila, fresh blueberries, basil leaves, lime juice, and agave nectar. The flavors blend perfectly, creating a delicious and refreshing drink that you'll want to have over and over again. This cocktail is perfect for a hot summer day, and it's available at most cocktail bars in the London area."
          },
          { 
            author: 'Anna Kelly',
            date: 'October 3, 2022',
            title: "New Cocktail Bar in Covent Garden: Meet The Gibson",
            body: "Covent Garden has a new cocktail bar, and it's quickly becoming a popular spot for cocktail enthusiasts. The Gibson is a beautiful and elegant bar that serves unique and creative cocktails. The bartenders are highly skilled, and they can make just about any cocktail you can think of. The bar's interior is luxurious and sophisticated, making it the perfect place for a romantic night out or a fancy cocktail party."
          },
          { 
            author: 'Anna Kelly',
            date: 'November 17, 2022',
            title: "New Cocktail Drink Alert: The Spiced Apple Cider Margarita",
            body: "With the holidays approaching, there's no better time to try the new Spiced Apple Cider Margarita. This cocktail is made with tequila, fresh apple cider, cinnamon, and lime juice. It's the perfect blend of spicy and sweet, and it's sure to get you in the holiday spirit. This cocktail is available at most cocktail bars in the London area, so be sure to give it a try.            "
          },
          { 
            author: 'Anna Kelly',
            date: 'December 22, 2022',
            title: "New Cocktail Bar in Mayfair: Meet The Nightjar",
            body: "If you're looking for a unique and sophisticated cocktail experience in Mayfair, then The Nightjar is the place to be. This cocktail bar is known for its creative and innovative cocktails, which are made with high-quality ingredients and served in beautiful glassware. The Nightjar has a cozy and intimate atmosphere, making it the perfect place for a date or a night out with friends. The bar's interior is beautifully decorated, with a vintage and industrial feel that sets it apart from other bars in the area. Be sure to check out The Nightjar if you're in Mayfair."
          },

         ]}
            
          

         // Insert a single document, wait for promise so we can read it back
         const p = await col.insertOne(seedPosts);
         // Find one document
         const myDoc = await col.findOne();
         // Print to the console
         console.log(myDoc);

        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
    }
}

run().catch(console.dir);