var listItems = document.querySelectorAll('.circle-rank'); // Use '.circle-rank-line' to select elements by class
listItems.forEach(function(item) {
  item.addEventListener('click', selectItem);
  
});

function selectItem() {
    var btn5 = document.getElementById('circle5')
    this.style.backgroundColor = 'hsl(217, 12%, 63%)';
     if(this === btn5){
        this.style.backgroundColor = 'hsl(25, 97%, 53%)';
     }
}