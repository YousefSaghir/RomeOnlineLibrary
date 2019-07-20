var myBook = document.querySelector("#contact1");
myBook.addEventListener("click", butoon1);
function butoon1() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => {
      return res.json();
    })
    .then(data => {
      console.log(data);
      var outpot = "<h2 class='titleBook'> Books </h2>";
      data.forEach(function(data2) {
        outpot += `
            <ul class='ulbook'>
            <li class ="booksL"><strong>Body:</strong> ${data2.body}</li>
            <li class ="booksL"><strong>ID:</strong> ${data2.id}</li>
            <li class ="booksL"><strong>Title:</strong> ${data2.title}</li>
            <li class ="booksL"><strong>UserId:</strong> ${data2.userId}</li>
            </ul>
            `;
      });
      document.querySelector(".books2").innerHTML = outpot;
    });
}
