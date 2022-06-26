const init = () => {
    const inputForm = document.querySelector('form');
    inputForm,addEventListener('submit', e => {
        e.preventDefault();
        const input = document.querySelector('input#searchByID')
        
        fetch(`http://localhost:3000/movies/${input.value}`)
        .then (res => res.json())
        .then (movies => {
            const title = document.querySelector("section#movieDetails h4")
            const summary = document.querySelector("section#movieDetails p")

            title.textContent = movies.title;
            summary.textContent = movies.summary;
        })
        inputForm.reset();
    });
}

document.addEventListener('DOMContentLoaded', init);