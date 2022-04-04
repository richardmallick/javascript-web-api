function setLocalStorageUsername() {
    localStorage.setItem('username', 'Richard');
}

function getLocalStorageUsername() {
   const userName = localStorage.getItem('username');
   document.getElementById('output').innerHTML = userName;
}

function removeLocalStorageUsername() {
    localStorage.removeItem('username');
}

function clearLocalStorageUsername() {
    localStorage.clear();
}