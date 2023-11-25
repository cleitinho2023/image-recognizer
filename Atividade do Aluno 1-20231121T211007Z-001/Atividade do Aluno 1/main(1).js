function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier=ml5.imageClassifier('MobileNet',modelLoaded);

}
function modelLoaded (){
console.log("model loaded")
} 
function draw () {
image (video,0,0, 300,300)
classifier.classify(video,gotResult)

}
var resultadoAnterior='';

function gotResult (error,results){
  if (error){
    console.log("erro")
    
    
  }
  else{
    if((results[0].confidence>0.5)&&(resultadoAnterior!=results[0].label)){
      console.log(results);
      resultadoAnterior=results[0].label
      document.getElementById(" result_object_name").innerHTML=results[0].label;
      document.getElementById(" result_object_confidence").innerHTML=results[0].confidence;

    }
  }
}

