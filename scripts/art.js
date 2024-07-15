document.addEventListener('DOMContentLoaded', function() {
    function displayArtwork(pieceId) {
        document.querySelector('.right-panel').style.display = 'block';
        document.querySelectorAll('.art-piece').forEach(piece => {
            piece.style.display = 'none';
        });
        const artPiece = document.getElementById(pieceId);
        if (artPiece) {
            artPiece.style.display = 'block';
        }
    }

    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }

    // Check for piece in URL and display it
    const urlPiece = getUrlParameter('piece');
    if (urlPiece) {
        displayArtwork(urlPiece);
    }

    document.querySelectorAll('.art-title').forEach(title => {
        title.addEventListener('click', function() {
            const pieceId = this.getAttribute('data-piece');
            displayArtwork(pieceId);
            // Update URL without reloading the page
            history.pushState(null, '', `?piece=${encodeURIComponent(pieceId)}`);
        });
    });

    // Load and render markdown
    document.querySelectorAll('.markdown-text').forEach(desc => {
        const markdownFile = desc.getAttribute('data-markdown-file');
        fetch(markdownFile)
            .then(response => response.text())
            .then(markdown => {
                desc.innerHTML = marked.parse(markdown);
            })
            .catch(error => {
                console.error('Error loading markdown file:', error);
                desc.innerHTML = 'Error loading description.';
            });
    });
});





// document.addEventListener('DOMContentLoaded', function() {
//     document.querySelectorAll('.art-title').forEach(title => {
//         title.addEventListener('click', function() {
//             const pieceNumber = this.getAttribute('data-piece');
//             document.querySelector('.right-panel').style.display = 'block';
//             document.querySelectorAll('.art-piece').forEach(piece => {
//                 piece.style.display = 'none';
//             });
//             document.getElementById(`${pieceNumber}`).style.display = 'block';
//         });
//     });

//     // Load and render markdown
//     // document.querySelectorAll('.markdown-text').forEach(desc => {
//     //     const markdownFile = desc.getAttribute('data-markdown-file');
//     //     console.log('Attempting to load:', markdownFile);  // Add this line
//     //     fetch(markdownFile)
//     //         .then(response => {
//     //             if (!response.ok) {
//     //                 throw new Error(`HTTP error! status: ${response.status}`);
//     //             }
//     //             return response.text();
//     //         })
//     //         .then(markdown => {
//     //             console.log('Markdown loaded:', markdown.substring(0, 50) + '...');  // Add this line
//     //             desc.innerHTML = marked.parse(markdown);
//     //         })
//     //         .catch(error => {
//     //             console.error('Error loading markdown file:', error);
//     //             desc.innerHTML = 'Error loading description.';
//     //         });
//     // });

//     document.querySelectorAll('.markdown-text').forEach(desc => {
//         const markdown = desc.getAttribute('data-markdown');
//         desc.innerHTML = marked.parse(markdown);
//     });
// });