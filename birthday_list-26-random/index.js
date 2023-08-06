const closeBtn = document.getElementById('btn-close')
const openBtn = document.getElementById('btn-open')
const hiddenRecords = document.querySelectorAll('li.list-record-full')

openBtn.addEventListener('click', (e) => {
     openBtn.classList.add('button-close')
     closeBtn.classList.remove('button-close')
     hiddenRecords.forEach(record => {
          record.classList.toggle('list-record-full')
     })
})

closeBtn.addEventListener('click', (e) => {
     closeBtn.classList.add('button-close')
     openBtn.classList.remove('button-close')
     hiddenRecords.forEach(record => {
          record.classList.toggle('list-record-full')
     })
})