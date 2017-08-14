function myFunction() {

    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementsByTagName('ul');
    li = document.getElementsByTagName('li');


    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {


        a = li[i].getElementsByTagName("p")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";

        } else {
            li[i].style.display = "none";
        }
    }
}

// Calling the function for the Search Box
input.addEventListener("keyup", myFunction());