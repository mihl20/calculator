var mainHeading = document.getElementsByClassName('main-header');

$(document).ready(() => {
    picketButton();
    backButton();
    calculateButton();
    backToStart();
    resetButton();
});

const picketButton = () => {
    $('#picket').on('click', () => {
        picketChoice();
        $('#first-screen').hide();
        $('#second-screen').show();
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