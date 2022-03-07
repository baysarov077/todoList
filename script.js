const input = document.createElement('input')
const body = document.body
input.type = 'text'
input.className = 'addCase'
document.getElementById('todo-list').before(input)
const addBtn = document.createElement('button')
addBtn.textContent = 'Add'
addBtn.className = 'addBtn'
input.after(addBtn)
input.style.fontFamily = 'Montserrat'
addBtn.addEventListener('click', () => {
    const item = document.createElement('div')
    item.className = 'list__item'
    const text = document.querySelector('.addCase')
    const val = text.value
    item.textContent = val
    item.style.fontFamily = 'Montserrat'
    document.getElementById('todo-list').prepend(item)
    const touch = document.createElement('input')
    touch.className = 'mark'
    touch.type = 'checkbox'
    item.prepend(touch)
    const delBtn = document.createElement('button')
    delBtn.textContent = 'X'
    delBtn.className = 'deleteBtn'
    item.append(delBtn)
    text.value = ' '
    let line = document.createElement('hr')
    item.after(line)
    delBtn.addEventListener('click', (e) => {
        item.remove(e.target)
        line.remove(e.target)
        
    })
    item.style.display = 'flex'
    item.style.justifyContent = 'space-between'
    touch.addEventListener('click', (e) => {
        if(touch.checked){
            e.target.parentElement.style.opacity = '0.5'
            line.style.opacity = '0.5'
        } else {
            e.target.parentElement.style.opacity = '1'
            line.style.opacity = '1'
        }
    })


})
