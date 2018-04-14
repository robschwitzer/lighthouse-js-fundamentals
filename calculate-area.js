let calculateRectangleArea = (length, width) => {
//calculate rec area = length * width
  if (length > 0, width > 0) {
    return length * width;
  } else {
    return undefined;
  }
};

let calculateTriangleArea = (base, height) => {
//calculate triangle area = base * height / 2
  if (base > 0, height > 0) {
    return (base * height)/2;
  } else {
    return undefined;
  }
};

let calculateCircleArea = (radius) => {
//calculate circle area = Pi * radius squared
if (radius > 0) {
  return Math.PI * (radius * radius);
  } else {
  return undefined;
  }
};