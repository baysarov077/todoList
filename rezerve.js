const input = document.createElement('input')
const body = document.body
input.type = 'text'
input.className = 'addCase'
document.getElementById('todo-list').before(input)

const addBtn = document.createElement('button')
addBtn.textContent = 'Add'
addBtn.className = 'addBtn'

input.after(addBtn)
const line = document.createElement('hr')
addBtn.addEventListener('click', () => {
    const item = document.createElement('div')
    item.style.textDecoration
    item.className = 'list__item'
    const text = document.querySelector('.addCase')
    const val = text.value
    item.textContent = val
    document.getElementById('todo-list').prepend(item)
    const touch = document.createElement('input')
    touch.type = 'checkbox'
    item.prepend(touch)
    const delBtn = document.createElement('button')
    delBtn.textContent = 'x'
    delBtn.className = 'deleteBtn'
    item.append(delBtn)
    text.value = ' '
    delBtn.addEventListener('click', (e) => {
        item.remove(e.target)
        
    })
})