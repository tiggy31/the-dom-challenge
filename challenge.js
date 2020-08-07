let counter = document.getElementById('counter')

let interval = setInterval(function(){
    counter.innerText++
}, 1000)

//elements
let plusButton = document.getElementById('+')
let minusButton = document.getElementById('-')
let likeButton = document.getElementById('<3')
let submitButton = document.getElementById('submit')
let likeList = document.querySelector('.likes')
let pause = document.getElementById('pause')
let commentForm = document.getElementById('comment-form')
let commentList = document.getElementById('list')

document.addEventListener('click', function(e){
    if(e.target.id==='+'){
        counter.innerText++
    } else if(e.target.id === '-'){
        counter.innerText--
    } else if(e.target.id === '<3'){
        let li = document.getElementById(`${counter.innerText}`)
        if (li){
            li.dataset.count ++ 
            li.innerText = `liked ${li.id} ${li.dataset.count} number of times`
        } else {
            let li = document.createElement('li')
            li.id = counter.innerText
            li.dataset.count = 1
            li.innerText = `liked ${li.id} ${li.dataset.count} number of times`
            likeList.append(li)
        }
    } else if(e.target.id === 'pause'){
        if(pause.innerText === 'pause'){
            clearInterval(interval)
            plusButton.disabled = true
            minusButton.disabled = true
            likeButton.disabled = true
            submitButton.disabled = true
            pause.innerText = 'resume'
        } else {
            interval = setInterval(function(){
                counter.innerText++
            }, 1000)
            plusButton.disabled = false
            minusButton.disabled = false
            likeButton.disabled = false
            submitButton.disabled = false
            pause.innerText = 'pause' 
        }
    }
})

commentForm.addEventListener('submit', function(e){
    e.preventDefault()
    let comment = document.createElement('div')
    comment.innerText = e.target[0].value
    list.append(comment)
    e.target[0].value = ''
})