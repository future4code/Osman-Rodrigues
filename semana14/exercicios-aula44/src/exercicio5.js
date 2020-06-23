//Pré-história,  Idade Antiga, Idade Média, Idade Moderna,  Idade Contemporânea
//< 4000 AC, 476 DC, 1453 DC, 1789 DC, 
var Age;
(function (Age) {
    Age["PREHISTORIC"] = "Pr\u00E9-hist\u00F3ria";
    Age["OLD"] = "Idade Antiga";
    Age["MIDDLE"] = "Idade M\u00E9dia";
    Age["MODERN"] = "Idade Moderna";
    Age["CONTEMPORARY"] = "Idade Contempor\u00E2nea";
})(Age || (Age = {}));
;
var getHistoricAge = function (year, initials) {
    var setInitials = initials ? initials.toUpperCase() : 'DC';
    if (setInitials === 'AC') {
        if (year > 4000 && year < 100000) {
            return Age.PREHISTORIC;
        }
        else if (year <= 4000) {
            return Age.OLD;
        }
    }
    else if (setInitials === 'DC') {
        if (year < 476) {
            return Age.OLD;
        }
        else if (year >= 476 && year < 1453) {
            return Age.MIDDLE;
        }
        else if (year >= 1453 && year < 1789) {
            return Age.MODERN;
        }
        else if (year >= 1789) {
            return Age.CONTEMPORARY;
        }
    }
    else {
        console.log('Ano não reconhecido na história humana.');
    }
    ;
};
var getAge = getHistoricAge(15000, 'AC');
console.log(getAge);
