window.onload = function() {

    let main = document.getElementById('main');
    main.addEventListener('mouseover',f2);

}

function f2() {

    let main = document.getElementById('main');
    main.removeEventListener('mouseover', f2, false);

    let carPrice = document.getElementById('carPrice');
    let carPower = document.getElementById('carPower');
    let carMileage = document.getElementById('carMileage');

    let e1 = parseInt(carPrice.innerHTML);
    let e2 = parseInt(carPower.innerHTML);
    let e3 = parseInt(carMileage.innerHTML);

    let pom = 0;
    let pom1 = 0;
    let pom2 = 0;

    let s1 = setInterval(() => {
        pom+=2222;
        carPrice.innerHTML = pom;
        if(pom >= e1)  {
            carPrice.innerHTML = e1;
            clearInterval(s1);
        }
    }, 1);

    let s2 = setInterval(() => {
        pom1+=3;
        carPower.innerHTML = pom1;
        if(pom1 >= e2)  {
            carPower.innerHTML = e2;
            clearInterval(s2);
        }
    }, 10);

    let s3 = setInterval(() => {
        pom2+=555;
        carMileage.innerHTML = pom2;
        if(pom2 >= e3)  {
            carMileage.innerHTML = e3;
            clearInterval(s3);
        }
    }, 1);
}