var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('powerful web presence')
    .pauseFor(2500)
    .deleteAll()
    .typeString('dynamic design')
    .pauseFor(2500)
    .deleteAll()
    .typeString('great website')
    .pauseFor(2500)
    .start();