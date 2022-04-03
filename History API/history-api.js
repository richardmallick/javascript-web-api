function back() {
    window.history.back();
}

function forward() {
    window.history.forward();
}

function backTo(a) {
    window.history.go(a);
}

function getHistory() {
    alert(window.history.length)
}