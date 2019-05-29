const app = document.getElementById('root')
const list = document.getElementById('list')

var request = new XMLHttpRequest()

request.open('GET', 'http://localhost:3000/api/todos', true)
request.onload = function() {

  var data = JSON.parse(this.response)

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