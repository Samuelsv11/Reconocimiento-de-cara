Webcam.set({
    width: 350,
    heigth: 300,
    image_format: 'png',
    png_quality: 90
});

camara = document.getElementById("camara");

Webcam.attach('#camara');

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>'

    })
}

console.log('Ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/DNxj5aH5w/', modelLoaded);

function modelLoaded() {
    console.log('¡Modelo cargado!');
}

function check() {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    // Mostrar error en la consola.
    if (error) { console.error(error); } else {
        // Los resultados están en una matriz ordenados por la confianza.
        console.log(results); document.getElementById("result_object_name").innerHTML = results[0].label; 
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}