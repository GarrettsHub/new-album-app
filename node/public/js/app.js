const colorSwitch = ()=> {
    const colorModeBtn = document.getElementById('btnSwitch')

    colorModeBtn.addEventListener('click', ()=> {
        const html = document.getElementsByTagName('html')[0];

        const theme = html.getAttribute('data-bs-theme')

        if (theme === 'light') {
            html.setAttribute('data-bs-theme', 'dark')
        } else {
            html.setAttribute('data-bs-theme', 'light')
        }
    })
}

// module.import = colorSwitch