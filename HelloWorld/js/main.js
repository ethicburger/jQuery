$(
    () => console.log('Document is ready to use')
);

function onClick() {
    const displayValue = document.querySelector('h1').style.display;

    if(displayValue === 'none') {
        $('h1').show();
    } else {
        $('h1').hide();
    }
}