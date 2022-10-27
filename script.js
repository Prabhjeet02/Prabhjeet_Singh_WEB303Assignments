/*
    Assignment 05
    student number-0791155
*/

$(document).ready(function () {
    // your code here
    class ContentItem {
        constructor(id, title, description, categoryGenre) {
            this.id = id;
            this.title = title;
            this.description = description;
            this.categoryGenre = categoryGenre;
        };
        updateContentItem(id,title, description, categoryGenre) {
            if(id==this.id){
            if((title || description || categoryGenre) == !null) {
                ContentItem.title = this.title;
                ContentItem.description = this.description;
                ContentItem.categoryGenre = this.categoryGenre;
            }else{
                return;
            }
        }
        };
        toString() {
            return `<div class='content-item-wrapper' id='content-item-${this.id}'>
            <h2>${this.title}</h2>
            <p>${this.description}</p>
            <div>${this.categoryGenre}</div>
            </div>`
        } 
    }
    const Movies = [ new ContentItem(1, "The Rock", "Michael Bay wasn't always the guy who made the world's loudest films. Before Pearl Harbor and Transformers, there was The Rock. When a gang of heavily armed, heavily piss-ed off and heavily disillusioned Marines decide to take the island of Alcatraz hostage along with 81 tourists, there's only one guy who can get the FBI into the place they need to be: the only guy who managed to break out, Sean Connery's SAS Captain John Mason. It all goes horribly wrong, and Mason is left with just Nicolas Cage's Dr Stanley Goodspeed for back-up. ", "Action"),
                    new ContentItem(2, "Dumb and Dumber", "In the '90s, the comedy genre saw a seismic shift in its side-splitting landscape with the emergence of a certain over-the-top, zany comic by the name of Jim Carrey. He had Ace Ventura, Fletcher Reede, the Cable Guy, but more beloved than all is Lloyd Christmas—for us, anyway. Paired with comedy Farrelly gold behind the camera and Jeff Daniels's equally dim-witted sidekick in front of it, Dumb and Dumber became the lowbrow comedy everyone from the playground to the country club was quoting.", "Comedy"),
                    new ContentItem(3, "The Place Beyond the Pines", "This film is one of the best crime movies because it brings many new ideas to a crime genre. It works well as a crime thriller, crime drama, and crime action movie at various points.", "Crime"),
                    new ContentItem(4, "The Burning", "If Halloween codified many of the slasher conventions in 1978, then Friday the 13th opened the floodgates wide with its unexpected success and profitability in 1980. A slew of imitators and low-rent slashers poured into drive-ins and grindhouses in the decade that followed, but The Burning is one of the few to rise above the scrum. ", "Horror"),
                    new ContentItem(5, "Contact", "Contact seems almost calculated as the sort of cerebral sci-fi to frustrate multiplex audiences with its philosophical, open-ended conclusion about “first contact,” questioning whether any of what Jodie Foster’s character experienced really happened at all. Still, Contact is a beautiful film about the struggle between the tangible and the ephemeral, between faith, intellect and ambition", "Science-Fiction"),
                  ];
    
    Movies.forEach(ContentItem => {
        $("#content-item-list").append(ContentItem.toString());
    });
   
    $("div.content-item-wrapper").css(
                {
                    "border":"solid gray 1px",
                    "width":"85%",    
                    "padding":"20px",
                    "margin":"auto",
                    "margin-top":"13px",
                    "margin-bottom":"15px",
                      
                });

});