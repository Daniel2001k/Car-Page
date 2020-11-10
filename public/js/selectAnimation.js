class FirstSelector {
    constructor (models) {
        this.models = models;
    }

    fillOptions(){
        let secondSelect = document.getElementById('secondSelect');
        let size = secondSelect.children.length;
        let options;

        if (this.models.length > 0) {
            secondSelect.disabled = false;

            for (let i = 0; i < size ; i++) {
                options = secondSelect.children[0];
                secondSelect.removeChild(options);
            }

            size = this.models.length;

            options = document.createElement('option');
            options.value = '';
            options.innerHTML = '';
            secondSelect.appendChild(options);

            for (let i = 0; i < this.models.length ; i++) {
                options = document.createElement('option');
                options.value = this.models[i];
                options.innerHTML = this.models[i];
                secondSelect.appendChild(options);
            }
        } else {
            options = secondSelect.children[0];
            secondSelect.removeChild(options);

            options = document.createElement('option');
            options.value = '';
            options.innerHTML = '';
            secondSelect.appendChild(options);

            secondSelect.disabled = true;
        }
    }
}

class SecondSelector {
    constructor (models) {
        this.models = models;
    }

    fillOptions(){
        let thirdSelect = document.getElementById('thirdSelect');
        let size = thirdSelect.children.length;
        let options;

        if (this.models.length > 0) {
            thirdSelect.disabled = false;

            for (let i = 0; i < size ; i++) {
                options = thirdSelect.children[0];
                thirdSelect.removeChild(options);
            }

            size = this.models.length;

            options = document.createElement('option');
            options.value = '';
            options.innerHTML = '';
            thirdSelect.appendChild(options);

            for (let i = 0; i < this.models.length ; i++) {
                options = document.createElement('option');
                options.value = this.models[i];
                options.innerHTML = this.models[i];
                thirdSelect.appendChild(options);
            }
        } else {
            options = thirdSelect.children[0];
            thirdSelect.removeChild(options);

            options = document.createElement('option');
            options.value = '';
            options.innerHTML = '';
            thirdSelect.appendChild(options);

            thirdSelect.disabled = true;
        }
    }
}

function f2() {
    let select = document.getElementById('secondSelect').value;
    if (select === 'Audi') {
        const variable = new SecondSelector(['A3', 'A6']);
        variable.fillOptions();
    } else if (select === 'BMW') {
        const variable = new SecondSelector(['M8']);
        variable.fillOptions();
    } else if (select === 'Mercedes-Benz') {
        const variable = new SecondSelector(['G63 AMG', 'E63 AMG']);
        variable.fillOptions();
    } else if (select === 'Nissan') {
        const variable = new SecondSelector(['R34']);
        variable.fillOptions();
    } else if (select === 'Toyota') {
        const variable = new SecondSelector(['Supra']);
        variable.fillOptions();
    } else if (select === 'Mazda') {
        const variable = new SecondSelector(['Rx-7']);
        variable.fillOptions();
    } else if (select === 'Subaru') {
        const variable = new SecondSelector(['Impreza']);
        variable.fillOptions();
    } else if (select === 'Mitsubishi') {
        const variable = new SecondSelector([]);
        variable.fillOptions();
    } else if (select === 'Dodge') {
        const variable = new SecondSelector(['Challenger Demon']);
        variable.fillOptions();
    } else if (select === 'Ford') {
        const variable = new SecondSelector(['Mustang Shelby']);
        variable.fillOptions();
    } else if (select === 'Chevrolet') {
        const variable = new SecondSelector(['Camaro ZL1']);
        variable.fillOptions();
    }
}

function f1() {
    let select = document.getElementById('firstSelect').value;
    if (select === 'Germany') {
        const variable = new FirstSelector(['Audi', 'BMW', 'Mercedes-Benz']);
        variable.fillOptions();
    } else if (select === 'Japan') {
        const variable = new FirstSelector(['Nissan', 'Toyota', 'Mazda', 'Subaru', 'Mitsubishi']);
        variable.fillOptions();
    } else if (select === 'USA') {
        const variable = new FirstSelector(['Dodge', 'Ford', 'Chevrolet']);
        variable.fillOptions();
    }
    f2();
}

window.onload = function() {
    f1();
    f2();
}