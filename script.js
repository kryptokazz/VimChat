document.getElementById('monokai').addEventListener('click', function() {
    document.documentElement.style.setProperty('--background-color', '#272822');
    document.documentElement.style.setProperty('--text-color', '#F8F8F2');
    document.documentElement.style.setProperty('--button-background', '#66D9EF');
    document.documentElement.style.setProperty('--button-text', '#272822');
});

document.getElementById('solarized').addEventListener('click', function() {
    document.documentElement.style.setProperty('--background-color', '#fdf6e3');
    document.documentElement.style.setProperty('--text-color', '#002b36');
    document.documentElement.style.setProperty('--button-background', '#268bd2');
    document.documentElement.style.setProperty('--button-text', '#fdf6e3');
});

document.getElementById('gruvbox').addEventListener('click', function() {
    document.documentElement.style.setProperty('--background-color', '#282828');
    document.documentElement.style.setProperty('--text-color', '#ebdbb2');
    document.documentElement.style.setProperty('--button-background', '#83a598');
    document.documentElement.style.setProperty('--button-text', '#282828');
});

