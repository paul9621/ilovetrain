
    fetch('http://localhost:3000/trains')
    .then(response => response.json())
    .then(data => createTable(data));

  
function createTable(data) {
    var table = "<table border=1>";
    // add a row for name and marks
    table += `<tr>
                <th>Name</th>
                <th colspan="4">Marks</th>
              </tr>`;
    // now add another row to show subject
    table += `<tr>
                <th></th>
                <th>Math</th>
                <th>English</th>
                <th>Chemistry</th>
                <th>Physics</th>
              </tr>`;
    // now loop through students
    // show their name and marks
    var tr = "";
    for(let i = 0; i < data.result.length; i++) {
      tr += "<tr>";
      tr += `<td>${data.result[i].name}</td>`;
      for (var key in data.result[i].marks) {
        tr += `<td>${data.result[i].marks[key]}</td>`;
      }
      tr += "</tr>"
    }
    table += tr + "</table>";
    
      // append table to body
      document.body.innerHTML += table;
    }
    
    fetch('http://localhost:3000/destinations')
    .then(response => response.json())
    .then(data => createTable(data));

  
function createTable(data) {
    var table = "<table border=1>";
    // add a row for name and marks
    table += `<tr>
                <th>Name</th>
                <th colspan="4">Marks</th>
              </tr>`;
    // now add another row to show subject
    table += `<tr>
                <th></th>
                <th>Math</th>
                <th>English</th>
                <th>Chemistry</th>
                <th>Physics</th>
              </tr>`;
    // now loop through students
    // show their name and marks
    var tr = "";
    for(let i = 0; i < data.result.length; i++) {
      tr += "<tr>";
      tr += `<td>${data.result[i].name}</td>`;
      for (var key in data.result[i].marks) {
        tr += `<td>${data.result[i].marks[key]}</td>`;
      }
      tr += "</tr>"
    }
    table += tr + "</table>";
    
      // append table to body
      document.body.innerHTML += table;
    }
    <form method="POST" action="/submit-form">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">

  <label for="cdg">codedegare:</label>
  <input type="cdg" id="cdg" name="cdg">

  <label for="category">Message:</label>
  <textarea id="category" name="category"></textarea>

  <button type="submit">Submit</button>
</form>
<form method="DEL" action="/submit-form">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">

  <label for="cdg">codedegare:</label>
  <input type="cdg" id="cdg" name="cdg">

  <label for="category">Message:</label>
  <textarea id="category" name="category"></textarea>

  <button type="submit">Submit</button>
</form>