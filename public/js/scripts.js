const app = document.getElementById('root')
const list = document.getElementById('list')
const count = document.getElementsByClassName('count')[0];

console.log("count: ", count)

var request = new XMLHttpRequest()

request.open('GET', 'http://localhost:3000/api/todos', true)
request.onload = function() {

  var data = JSON.parse(this.response)

  count.append(data.length);

  if (request.status >= 200 && request.status < 400) {
    data.slice().reverse().forEach(todo => {
      const li = document.createElement('li')
      li.setAttribute('class', 'todo')

      const title = todo.title

      li.append(title)
      list.appendChild(li)

    })
  } else {
      console.log('error')
  }
}

request.send()