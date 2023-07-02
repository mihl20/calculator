var firstHeading = document.getElementById('first-header');
var secondHeading = document.getElementById('second-header');
var thirdHeading = document.getElementById('third-header');
var secondImg = document.getElementById('img-two');
var picketLabel = document.getElementById('picket-label');

$(document).ready(() => {
    picketButton();
    horizontalButton();
    backButton();
    calculateButton();
    backToStart();
    resetButton();
    verticalButton();
    panelWoodButton();
    panelConcreteButton();
    lengthEntry();
});

const picketChoice = () => {
    secondHeading.innerHTML = "Picket Fencing";
}

const picketButton = () => {
    $('#picket').on('click', () => {

        picketChoice();
        screenOneToTwo();
        secondImg.src = 'C:/Users/mihl/OneDrive/Documents/Projects/FenceCalc/calculator/images/picket.jpg';
        picketLabel.innerHTML = 'Picket Spacing'
    });
}

const horizontalButton = () => {
    $('#horizontal').on('click', () => {
        secondHeading.innerHTML = "Horizontal Hit and Miss Fencing";
        screenOneToTwo();
        secondImg.src = 'C:/Users/mihl/OneDrive/Documents/Projects/FenceCalc/calculator/images/horizontal.jpg';
        picketLabel.innerHTML = 'Board Spacing'
    });

}

const verticalButton = () => {
    $('#vertical').on('click', () => {
        secondHeading.innerHTML = "Vertical Hit and Miss Fencing";
        screenOneToTwo();
        secondImg.src = 'C:/Users/mihl/OneDrive/Documents/Projects/FenceCalc/calculator/images/vertical.jpg';
        picketLabel.innerHTML = 'Board Spacing'
    });
}

const panelWoodButton = () => {
    $('#panel-wood').on('click', () => {
        secondHeading.innerHTML = "Panel Fence with Wood Posts";
        screenOneToTwo();
        secondImg.src = 'C:/Users/mihl/OneDrive/Documents/Projects/FenceCalc/calculator/images/panelwood.jpg';
        picketLabel.innerHTML = 'Panel Clips Required'
    });
}

const panelConcreteButton = () => {
    $('#panel-concrete').on('click', () => {
        secondHeading.innerHTML = "Panel Fence with Concrete Posts";
        screenOneToTwo();
        secondImg.src = 'C:/Users/mihl/OneDrive/Documents/Projects/FenceCalc/calculator/images/panelconcrete.jpg';
        picketLabel.innerHTML = 'Number of Base Panels'
    });
}

const backButton = () => {
    $('#back-btn').on('click', () => {
        $('#second-screen').hide();
        $('#first-screen').show();
    });
}

const calculateButton = () => {
    $('#calculate').on('click', () => {
        $('#second-screen').hide();
        $('#third-screen').show();
    });
}

const backToStart = () => {
    $('#back-start').on('click', () => {
        $('#third-screen').hide();
        $('#first-screen').show();
    });
}

const resetButton = () => {
    $('#reset-btn').on('click', () => {
        $('#third-screen').hide();
        $('#second-screen').show();
    });
}




const screenOneToTwo = () => {
    $('#first-screen').hide();
    $('#second-screen').show();
}

const lengthEntry = () => {
    $('#meters').change(function () {
        var metersValue = ($('#meters').val() * 3.2808399).toFixed(2);
        $('#feet').val(metersValue);
    });
    $('#feet').change(function () {
        var feetValue = ($('#feet').val() * 0.3048).toFixed(2);
        $('#meters').val(feetValue);
    });
    $('#meters').click(function () {
        $(this).val('');
        $('#feet').val('');
    });
    $('#feet').click(function () {
        $(this).val('');
        $('#meters').val('');
    });
}