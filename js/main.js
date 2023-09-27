document.querySelectorAll('.links a').forEach(link => {
    link.addEventListener('mousedown', ()=>{
        navigator.clipboard.writeText(link.getAttribute('copy'))
    })
})