// Sample file links (replace with your own)
const fileLinks = [
    { name: 'Curriculum.pdf', url: 'CV - Davi Mogrovejo Brasil.pdf' },
    { name: 'Projects', url: 'https://github.com/davi-mogrovejo' },
    { name: 'Profile Picture.jpg', url: 'apagar.jpg' }
];

const fileList = document.getElementById('file-list');

// Function to create a list item for each file link
function createFileListItem(file) {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.textContent = file.name;
    link.href = file.url;
    link.setAttribute('download', file.name); // Add 'download' attribute for download support
    listItem.appendChild(link);
    return listItem;
}

// Populate the file list
fileLinks.forEach(file => {
    const listItem = createFileListItem(file);
    fileList.appendChild(listItem);
});
