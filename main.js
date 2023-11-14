// code to show when website was last updated

document.addEventListener("DOMContentLoaded", function () {
    var lastModifiedDate = new Date(document.lastModified);
    var formattedDate = lastModifiedDate.toLocaleString('en-US', { timeZoneName: 'short' });
    document.getElementById("lastUpdated").textContent = "Last Updated: " + formattedDate;
});