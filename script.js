document.addEventListener('DOMContentLoaded', () => {
    const icons = document.querySelectorAll('.icon');
    const desktop = document.querySelector('.desktop');

    document.addEventListener('click', (e) => {
        const startMenu = document.getElementById('start-menu');
        const startButton = document.querySelector('.task.start');
        
        if (startMenu && startMenu.style.display === 'flex' && 
            !startMenu.contains(e.target) && 
            !startButton.contains(e.target)) {
            startMenu.style.display = 'none';
        }
    });

    icons.forEach(icon => {
        icon.addEventListener('click', () => {
            const app = icon.getAttribute('data-app');
            
            if (app && desktopData[app]) {
                openWindow(app, desktopData[app]);
            } else if (app === 'paint' || app === 'browser') {

                 
                 if (app === 'paint') {
                     openWindow('paint', {
                         title: 'Paint',
                         content: '<iframe src="https://viliusle.github.io/miniPaint/"></iframe>'
                     });
                 } else if (app === 'browser') {
                     openWindow('browser', {
                         title: 'Google Chrome',
                         content: '<iframe src="https://www.google.com/webhp?igu=1"></iframe>'
                     });
                 }
            }
        });
    });
});

function toggleStartMenu() {
    const startMenu = document.getElementById('start-menu');
    if (startMenu.style.display === 'flex') {
        startMenu.style.display = 'none';
    } else {
        startMenu.style.display = 'flex';
    }
}

let zIndexCounter = 100;

function openWindow(id, data) {
    const existingWindow = document.getElementById(`window-${id}`);
    if (existingWindow) {
        existingWindow.style.zIndex = ++zIndexCounter;
        existingWindow.style.display = 'flex';
        return;
    }

    const win = document.createElement('div');
    win.id = `window-${id}`;
    win.className = 'window';
    win.style.top = '100px';
    win.style.left = '100px';
    win.style.zIndex = ++zIndexCounter;

    win.innerHTML = `
        <div class="title-bar">
            <div class="title-bar-text">${data.title}</div>
            <div class="title-bar-controls">
                <button aria-label="Minimize" onclick="minimizeWindow('window-${id}')"></button>
                <button aria-label="Maximize" onclick="maximizeWindow('window-${id}')"></button>
                <button aria-label="Close" onclick="closeWindow('window-${id}')"></button>
            </div>
        </div>
        <div class="window-body">
            ${data.content}
        </div>
    `;

    makeDraggable(win);
    
    win.addEventListener('mousedown', () => {
        win.style.zIndex = ++zIndexCounter;
    });

    document.querySelector('.desktop').appendChild(win);
    
    document.getElementById('start-menu').style.display = 'none';
}

function closeWindow(id) {
    const win = document.getElementById(id);
    if (win) {
        win.remove();
    }
}

function minimizeWindow(id) {
    const win = document.getElementById(id);
    if (win) {
        win.style.display = 'none';

    }
}

function maximizeWindow(id) {
    const win = document.getElementById(id);
    if (win) {
        if (win.style.width === '100%' && win.style.height === 'calc(100vh - 48px)') {
            win.style.width = '600px';
            win.style.height = '400px';
            win.style.top = '100px';
            win.style.left = '100px';
        } else {
            win.style.width = '100%';
            win.style.height = 'calc(100vh - 48px)';
            win.style.top = '0';
            win.style.left = '0';
        }
    }
}

function makeDraggable(elmnt) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    const header = elmnt.querySelector('.title-bar');
    
    if (header) {
        header.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
