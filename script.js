let laserButton = document.querySelector('.price-button_laser'),
    carbonButton = document.querySelector('.price-button_carbon'),
    cavitButton = document.querySelector('.price-button_cavitation'),
    deleteTatooButton = document.querySelector('.price-button_delete-tatoo'),
    saleButton = document.querySelector('.price-button_sale');

let laserBlock = document.querySelector('.price-block_laser'),
    carbonBlock = document.querySelector('.price-block_carbon'),
    cavitBlock = document.querySelector('.price-block_cavitation'),
    deleteTatooBlock = document.querySelector('.price-block_delete-tatoo'),
    saleBlock = document.querySelector('.price-block_sale');


showInfo = function(infoBlock){
   infoBlock.classList.toggle('hidden')
};

laserButton.addEventListener('click', function(){showInfo(laserBlock)});

carbonButton.addEventListener('click', function(){showInfo(carbonBlock)});

cavitButton.addEventListener('click', function(){showInfo(cavitBlock)});

deleteTatooButton.addEventListener('click', function(){showInfo(deleteTatooBlock)});

saleButton.addEventListener('click', function(){showInfo(saleBlock)});