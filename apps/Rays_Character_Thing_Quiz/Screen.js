class Screen
{
  constructor(bgColor, topText, midText, bottomText, pict, pictText)
  {
    background(bgColor);
    text(topText, width/2, height/8);
    text(midText, width/2, 60);
    image(pict, width/2, height/2, 100, 100);
    text(pictText, width/2, height);
    text(bottomText, width/2, 470);
  }
  
  display()
  {
    
  }
}
