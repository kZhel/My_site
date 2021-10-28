function WhatTriangle() {
    console.log("aaa");
    let s1=Number(side1.value);
    let s2=Number(side2.value);
    let s3=Number(side3.value);

    if (s1 + s2 > s3 && s2 + s3 > s1 && s1 + s3 > s2) {
        if(s1==s2&&s2==s3){
            result.innerHTML = "Равносторонний треугольник";
            tr_img.src="assets/images/tr-3.jpg"
        }
        else if(s1 == s2 || s2 == s3 || s1 == s3){
            result.innerHTML = "Равнобедренный треугольник";
            tr_img.src="assets/images/tr-2.jpg"
        }
        else{
            result.innerHTML = "Треугольник есть";
            tr_img.src="assets/images/tr-1.jpg"
        }
    }
    else{
        result.innerHTML = "Треугольника не существует";
        tr_img.src="assets/images/tr-4.jpg"
    }
};

side1.oninput = WhatTriangle;
side2.oninput=WhatTriangle;
side3.oninput=WhatTriangle;