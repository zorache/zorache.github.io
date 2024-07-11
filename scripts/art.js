document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.art-title').forEach(title => {
        title.addEventListener('click', function() {
            const pieceNumber = this.getAttribute('data-piece');
            document.querySelector('.right-panel').style.display = 'block';
            document.querySelectorAll('.art-piece').forEach(piece => {
                piece.style.display = 'none';
            });
            document.getElementById(`${pieceNumber}`).style.display = 'block';
        });
    });

    // Load and render markdown
    // document.querySelectorAll('.markdown-text').forEach(desc => {
    //     const markdownFile = desc.getAttribute('data-markdown-file');
    //     console.log('Attempting to load:', markdownFile);  // Add this line
    //     fetch(markdownFile)
    //         .then(response => {
    //             if (!response.ok) {
    //                 throw new Error(`HTTP error! status: ${response.status}`);
    //             }
    //             return response.text();
    //         })
    //         .then(markdown => {
    //             console.log('Markdown loaded:', markdown.substring(0, 50) + '...');  // Add this line
    //             desc.innerHTML = marked.parse(markdown);
    //         })
    //         .catch(error => {
    //             console.error('Error loading markdown file:', error);
    //             desc.innerHTML = 'Error loading description.';
    //         });
    // });

    document.querySelectorAll('.markdown-text').forEach(desc => {
        const markdown = desc.getAttribute('data-markdown');
        desc.innerHTML = marked.parse(markdown);
    });
});