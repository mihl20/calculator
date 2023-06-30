var mainHeading = document.getElementsByClassName('main-header');

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
    });
}

const horizontalButton = () => {
    $('#horizontal').on('click', () => {
        screenOneToTwo();
    });
}

const verticalButton = () => {
    $('#vertical').on('click', () => {
        screenOneToTwo();
    });
}

const panelWoodButton = () => {
    $('#panel-wood').on('click', () => {
        screenOneToTwo();
    });
}

const panelConcreteButton = () => {
    $('#panel-concrete').on('click', () => {
        screenOneToTwo();
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