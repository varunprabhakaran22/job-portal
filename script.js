let jsonData
let skill
let locationn
let experience
let userSearch

//main method which call other methods
init()

function init(){
    $(document).ready(function(){
        $.ajax({
            url:'http://localhost:8100/api',
            type:'GET',
            success: function (data) {
                jsonData=data
                console.log(jsonData)
                getUserInput()
            }
        });
    });
}

function getUserInput(){
    document.getElementsByClassName("search-button")[0].addEventListener("click", function() {
        skill = $("#skills").val().toLowerCase();
        displayResult()
    })
}

function displayResult(){
    if(skill ===""){
        alert("Enter the valued input")
    }
    else{
        userSearch=jsonData.data.filter( (value) => (value.skills.toLowerCase().includes(skill)) || 
                                                    (value.location.toLowerCase().includes(skill)) ||
                                                    (value.experience.toLowerCase().includes(skill)))
                                                
        
    }
    let n=userSearch.length
    if(n === 0){
        alert("Enter the valued input")
    }
    else{
        $(".display-job").show();
        userSearch.forEach(userSearch =>{
            $('.display-job').append(`<div class="header">
            <span class="title"> Title: ${userSearch.title}</span>
            <span class="skill"> Skills: ${userSearch.skills}</span>
        <div class="company-name">Company :${userSearch.companyname}</div>
        <span class="experience"> ${userSearch.experience}</span>
        <span class="location">${userSearch.location}</span>
        </div>`)
        })
    }

    filterOption()
}


function filterOption(){
    $(" .filter-area").show();
    let filterLocations = new Array()
    // taking only the location values from data
    userSearch.forEach((value) => filterLocations.push(value.location));
    console.log(filterLocations)

    console.log("heyy")

    let uniqueValues = new Set(filterLocations)
    let uniq = [...uniqueValues]
    console.log(uniq)

    // spiliting the string to array  
    let filterLocationsArray =new Array()
    for(let i=0; i<uniq.length; i++){
       filterLocationsArray.push( uniq[i].split(","))
    }
     filterLocationsArray = filterLocationsArray.flat()
    console.log(filterLocationsArray)

    // x = [' aa ', ' bb '];
    // x.map(s => s.trim());
     
    let x= filterLocationsArray.map(value => value.trim())

    console.log(x)

    // filterLocationsArray=filterLocationsArray.flat(Infinity)
    // console.log(filterLocationsArray.flat())
    // console.log(typeof(filterLocationsArray))

    // spiliting the string to array  
    // let filterLocationsArray =new Array()
    // for(let i=0; i<filterLocations.length; i++){
    //    filterLocationsArray.push( filterLocations[i].split(","))
    // }
    // console.log(" after using the split " + filterLocationsArray)
    
    // console.log(filterLocationsArray)
    // filterLocationsArray=(filterLocationsArray.flat(Infinity))
    // console.log("After using flat " + filterLocationsArray)

    // let uniqueValues= new Set(filterLocations)
    // console.log("After using the set" + uniqueValues)

    // let uniq= [...uniqueValues]

    // console.log("hey "+ uniq + "\n")
    // console.log(uniq.length)
    // console.log(typeof(uniq))


    // for(let i=0; i<filterLocations.length; i++){
    
    //     console.log(filterLocationsArray[i].split(","))
    // }
    // console.log(typeof(filterLocationsArray))
}