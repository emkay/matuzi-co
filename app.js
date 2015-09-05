var domready = require('domready')
var text3dParticles = require('text-3d-particles')

var opts = 
    { width: 800
    , height: 400
    , fontSize: 100
    , density: 4
    , text: 'Matuzi Co'
    , foreground: '#111'
    , background: '#fff'
    , duration: 6000
}

var textGraph = text3dParticles(opts, function() {})

domready(function () {
    var n = document.querySelector('.logo')
    n.appendChild(textGraph.el)
})
