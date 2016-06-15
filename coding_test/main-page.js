var source = $("#main-page").html(); 
var template = Handlebars.compile(source); 

var data = { 
    users: [ { 
        person: {
            firstName: "Kenneth", 
            
        },
        tasks: "fight", "eat", "sleep", "code"
        
    }, {
        person: {
            firstName: "Samir", 
            
        }, 
        tasks: "eat", "drive", "shop"
    } ]
}; 

Handlebars.registerHelper('firstName', function(person) {
  return person.firstName + " ";
});

$('body').append(template(data));