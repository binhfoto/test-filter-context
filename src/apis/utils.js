export function debounce(func, wait = 350) {
    let timeout;
    return function (...args) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    }
}

export function registerMessage(func) {
    window.addEventListener("message", function (e) {
        try {
            let message = JSON.parse(e.data);
            if (message.gdc) {
                message = message.gdc;
                switch (message.type) {
                    case 'app.ok':
                        if (message.name === 'filter.value.changed') {
                            func(message.data);
                            //console.log(message.data.map(({label, value, from, to}) => ({label, value, from, to})));
                        }
                    default:
                        break;
                }
            }
        } catch (e) {
        }
    }, false);
}

export function sendMessage(messages) {
    try {
        const win = getWindow();
        if (win) {
            win.postMessage(JSON.stringify({
                gdc: messages
            }), '*');
        }
    } catch (e) {
    }
}

function isParent() {
    return window.self === window.top;
}

function getWindow() {
    const _isParent = isParent();
    if (_isParent) {
        return document.getElementById('web-content').contentWindow;
    } else {
        return window.parent;
    }
}