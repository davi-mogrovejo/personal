// Sample file links (replace with your own)
const fileLinks = [
    { name: 'Curriculum.pdf', url: 'CV - Davi Mogrovejo Brasil.html' },
    { name: 'Project Report.docx', url: 'files/project_report.docx' },
    { name: 'Profile Picture.jpg', url: 'files/profile_picture.jpg' }
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
