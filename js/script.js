// FSJS - Random Quote Generator

/*
    • The declaration of the 'quotes' array with a number of different objects 
    
    • 'quotes' array has been declared in 'global scope' for accessibility thoughout code
    
    
        • quote     -   a string containing the text of the quote that will be displayed on the page.
    
        • source    -   a string containing the creator of the quote. For example: "Mark Twain" or 
                        "Traditional Irish proverb” or "Anonymous".
    
        • citation  -   optional - a string identifying where the quote comes from, like a speech, 
                        publication or a movie. If there is no known publication, 
                        do not include this property on the object.
    
        • year      -   optional - a number identifying the year of the quote. If there is no known year, 
                        then do not include this property on the object.
*/

var quotes = [
    {
        quote:"Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
               
        source: "Mark Twain",
               
        citation: "Twitter"
    },
    {
        quote:"I know of no more encouraging fact than the unquestionable ability of man to elevate his life by conscious endeavor.",
               
        source: "Henry David Thoreau",
               
        citation: "BrainyQuote",
        
        year: 1858
    },
    {
        quote:"So instead of investing your time in a passion, you’ve sold your life to work for an uncaring machine that doesn’t understand you.  That’s the problem with our society.  And what’s the reward?  Go home and get a big TV.",
               
        source: "Joe Rogan",
               
        citation: "Addicted2Success"

    },
    {
        quote:"Be the change that you wish to see in the world.",
               
        source: "Mahatma Gandhi",
               
        citation: "BrainyQuote"
    
    },
    {
        quote:"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
               
        source: "Ralph Waldo Emerson",
               
        citation: "BrainyQuote"
    },
    {
        quote:"I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
               
        source: "Maya Angelou",
               
        citation: "BrainyQuote"
        
    },
    {
        quote:"Be here now.",
               
        source: "Ram Dass",
               
        citation: "goodreads",
        
        year: 1978
    },
    {
        quote:"As long as you have certain desires about how it ought to be you can't see how it is.",
               
        source: "Ram Dass"
    },
    {
        quote:"The goal is not to be better than the other man, but your previous self.",
               
        source: "Dalai Lama",
               
        citation: "Goalcast"
        
    },
    {
        quote:"A disciplined mind leads to happiness, and an undisciplined mind leads to suffering.",
               
        source: "Dalai Lama"
               
    },
    {
        quote:"Live your life like you’re the hero in your own movie.",
               
        source: "Joe Rogan"
    }
];


/*  
    Function: 
    
        Declaration: getRandomQuote(array)
        
        Parameter: array 
        
        returns: object
    
    
    Variables: 
        
        quote_index_in_array: stores a random number 
    
    
    Description:
    
        Step 1.     Create the 'getRandomQuote' function with parameter 'array'
            
        Step 2.     'quote_index_in_array' stores a random number 
        
        Step 3.     for loop iterates through "array"
        
        Step 4.     conditional statement checking for a match between the index value
                    and the random number generated for random selection
            
        Step 5.     if index value within array that being 'i' matches random number 'quote_index_in_array' then function will 
                    return object at specific index value
      
*/

function getRandomQuote(array) {                                            // Step 1
    
    var quote_index_in_array = Math.floor(Math.random() * array.length);    // Step 2
   
    for(var i = 0; i < array.length; i += 1) {                              // Step 3
        
        if (quote_index_in_array === i) {                                   // Step 4
            
            return array[i];                                                // Step 5
            
        }
        
    }
    
}


/*  
    Function: 
    
        Declaration: printQuote()
        
        Parameter: None 
        
        returns: None
    
    Variables: 
    
        get_quote: stores the object returned by the function call - getRandomQuote(quotes);
        
        node: is an element/object representing the node within the HTML file that will have it's content replaced
        
        html: stores html content along with the object property/values
    
    Description: 
        
        Step 1.     Create the 'printQuote' function with no parameter
        
        Step 2.     'get_quote' stores the object returned by the function call - getRandomQuote(quotes);
        
        Step 3.     Conditional statement checking whether both 'get_quote.year' && 'get_quote.citation' are 
                    true so html content stores both property.values 
        
        Step 4.     Conditional statement checking for 'get_quote.year' to be true and 'get_quote.citation' to be
                    false in order to exclude 'get_quote.citation' content from html content
    
        Step 5.     Conditional statement checking for 'get_quote.year' to be false and 'get_quote.citation' to be
                    true in order to exclude 'get_quote.year' content from html content
    
        Step 6.     Will only store the objects quote and source within the html content
    
        Step 7.     'node' is an object with properties. The innerHTML property is one of them and it allows us to store the new 
                    'html' content generated into the existing HTML tag within our html file.'node' is an element/object representing the node within the HTML file that will have it's content replaced
*/

 
function printQuote() {                                                         // Step 1
    
    var get_quote = getRandomQuote(quotes);                             
    
    var node = document.getElementById("quote-box");                            // Step 2
    
    if (get_quote.year && get_quote.citation) {                                 // Step 3

        var html = "<p class=\"quote\">" + get_quote.quote + "</p>";
        html += "<p class=\"source\">" + get_quote.source;
        html += "<span class=\"citation\">" + get_quote.citation + "</span>";
        html += "<span class=\"year\">" + get_quote.year + "</span>";
        html += "</p>";
        
    }
    
    else if (get_quote.year && !(get_quote.citation)) {                         // Step 4
        
        var html = "<p class=\"quote\">" + get_quote.quote + "</p>";
        html += "<p class=\"source\">" + get_quote.source;
        html += "<span class=\"year\">" + get_quote.year + "</span>";
        html += "</p>";
        
    }
    
    else if (!(get_quote.year) && get_quote.citation) {                         // Step 5
        
        var html = "<p class=\"quote\">" + get_quote.quote + "</p>";
        html += "<p class=\"source\">" + get_quote.source;
        html += "<span class=\"citation\">" + get_quote.citation + "</span>";
        html += "</p>";
        
    }
 
    else {                                                                      // Step 6

        var html = "<p class=\"quote\">" + get_quote.quote + "</p>";
        html += "<p class=\"source\">" + get_quote.source;
        html += "</p>";
        
    }
    
    node.innerHTML = html;                                                      // Step 7
}



// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);




