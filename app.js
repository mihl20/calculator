var mainHeading = document.getElementsByClassName('main-header');
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
});

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
        screenOneToTwo();
        secondImg.src = 'C:/Users/mihl/OneDrive/Documents/Projects/FenceCalc/calculator/images/horizontal.jpg';
        picketLabel.innerHTML = 'Board Spacing'
    });

}

const verticalButton = () => {
    $('#vertical').on('click', () => {
        screenOneToTwo();
        secondImg.src = 'C:/Users/mihl/OneDrive/Documents/Projects/FenceCalc/calculator/images/vertical.jpg';
    });
}

const panelWoodButton = () => {
    $('#panel-wood').on('click', () => {
        screenOneToTwo();
        secondImg.src = 'C:/Users/mihl/OneDrive/Documents/Projects/FenceCalc/calculator/images/panelwood.jpg';
    });
}

const panelConcreteButton = () => {
    $('#panel-concrete').on('click', () => {
        screenOneToTwo();
        secondImg.src = 'C:/Users/mihl/OneDrive/Documents/Projects/FenceCalc/calculator/images/panelconcrete.jpg';
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


const picketChoice = () => {
    mainHeading.innerHTML = "Picket Fencing"
}

const screenOneToTwo = () => {
    $('#first-screen').hide();
    $('#second-screen').show();
}