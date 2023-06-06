const copyInput = document.getElementById('copyInput'),
    copyBTN = document.getElementById('copyBTN');

copyBTN.addEventListener("click", (e) => {
    copyInput.select()
    copyInput.setSelectionRange(0, 99)
    navigator.clipboard.writeText(copyInput.value)
    copyBTN.textContent = 'คัดลอกแล้ว'
    
    setTimeout(() => {
        copyBTN.textContent = 'คัดลอก'
    },10000);
})