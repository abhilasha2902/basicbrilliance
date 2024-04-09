const magicButton = document.getElementById('mb');

magicButton.addEventListener('click', () => {
   
    alert('Magic is happening!'); 
});
const form = document.getElementById('uploadForm');
const output = document.getElementById('output');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    try {
        const response = await fetch('/upload', {
            method: 'POST',
            body: formData
        });
        output.innerHTML = `<img src="${response.url}" alt="Edited Photo">`;
    } catch (error) {
        console.error('Error:', error);
    }
});
