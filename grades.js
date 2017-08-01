function assignGrade(x){
  if(x<=100 && x>=90){
    return "A";
  }
  if(x<90 && x>=80){
    return "B";
  }
  if(x<80 && x>=70){
    return "C";
  }
  if(x<70 && x>=60){
    return "D";
  }
  if(x<60){
    return "F";
  }
}
