class NetworkElement {
    constructor(name) {
        this.name = name;
    }

    getGeneration(daytime) {
        return 0;
    }

    getConsumption(daytime) {
        return 0;
    }

    getNetBalance(daytime) {
        return this.getGeneration(daytime) - this.getConsumption(daytime);
    }
}

class PowerPlant extends NetworkElement {
    constructor(name, powerMW) {
        super(name);
        this.powerMW = Math.min(100, Math.max(1, powerMW)); 
    }

    getGeneration(daytime) {
        return this.powerMW; 
    }
}

class SolarPanel extends NetworkElement {
    constructor(name, powerMW) {
        super(name);
        this.powerMW = Math.min(5, Math.max(1, powerMW)); 
    }

    getGeneration(daytime) {
        return daytime === "day" ? this.powerMW : 0;
    }
}

class ResidentialBuilding extends NetworkElement {
    constructor(name, apartments) {
        super(name);
        this.apartments = Math.min(400, Math.max(1, apartments));
    }

    getConsumption(daytime) {
        const kWperApartment = daytime === "day" ? 4 : 1;
        return (this.apartments * kWperApartment) / 1000;
    }
}

class PowerLine extends NetworkElement {
    constructor(name, capacityMW, pricePerMW) {
        super(name);
        this.capacityMW = capacityMW;
        this.pricePerMW = pricePerMW; 
    }

    getCapacity() {
        return this.capacityMW;
    }

    getPrice() {
        return this.pricePerMW;
    }
}

class ElectricalGrid {
    constructor() {
        this.elements = [];    
        this.powerLines = [];   
    }

    addElement(element) {
        this.elements.push(element);
        if (element instanceof PowerLine) {
            this.powerLines.push(element);
        }
    }

    calculateNetBalance(daytime) {
        let totalGeneration = 0;
        let totalConsumption = 0;

        for (let element of this.elements) {
            if (!(element instanceof PowerLine)) {
                totalGeneration += element.getGeneration(daytime);
                totalConsumption += element.getConsumption(daytime);
            }
        }

        return {
            generation: totalGeneration,
            consumption: totalConsumption,
            net: totalGeneration - totalConsumption
        };
    }

    calculateTrade(daytime) {
        const balance = this.calculateNetBalance(daytime);
        let remainingMW = balance.net; 

        let sortedLines = [...this.powerLines];
        
        let totalIncome = 0;
        let totalCost = 0;
        let exportedMW = 0;
        let importedMW = 0;

        if (remainingMW > 0) {
            sortedLines.sort((a, b) => b.pricePerMW - a.pricePerMW); 
            
            for (let line of sortedLines) {
                if (remainingMW <= 0) break;
                
                const possibleExport = Math.min(remainingMW, line.capacityMW);
                if (possibleExport > 0 && line.pricePerMW > 0) {
                    totalIncome += possibleExport * line.pricePerMW;
                    exportedMW += possibleExport;
                    remainingMW -= possibleExport;
                }
            }

            const wastedMW = remainingMW > 0 ? remainingMW : 0;
            remainingMW = 0;
            
            return {
                daytime: daytime,
                netBalance: balance.net,
                exportMW: exportedMW,
                importMW: 0,
                totalIncome: totalIncome,
                totalCost: 0,
                netProfit: totalIncome,
                wastedMW: wastedMW,
                needToBuy: false,
                hasExcess: true
            };
            
        } else if (remainingMW < 0) {
            remainingMW = -remainingMW; 
            sortedLines.sort((a, b) => a.pricePerMW - b.pricePerMW); 
            
            for (let line of sortedLines) {
                if (remainingMW <= 0) break;
                
                const possibleImport = Math.min(remainingMW, line.capacityMW);
                if (possibleImport > 0 && line.pricePerMW > 0) {
                    totalCost += possibleImport * line.pricePerMW;
                    importedMW += possibleImport;
                    remainingMW -= possibleImport;
                }
            }

            const deficitMW = remainingMW > 0 ? remainingMW : 0;
            remainingMW = 0;
            
            return {
                daytime: daytime,
                netBalance: balance.net,
                exportMW: 0,
                importMW: importedMW,
                totalIncome: 0,
                totalCost: totalCost,
                netProfit: -totalCost,
                deficitMW: deficitMW,
                needToBuy: true,
                hasExcess: false
            };
            
        } else {с
            return {
                daytime: daytime,
                netBalance: 0,
                exportMW: 0,
                importMW: 0,
                totalIncome: 0,
                totalCost: 0,
                netProfit: 0,
                needToBuy: false,
                hasExcess: false,
                perfectBalance: true
            };
        }
    }

    calculateFullDay() {
        console.log("=".repeat(60));
        console.log("РОЗРАХУНОК ЕЛЕКТРИЧНОЇ МЕРЕЖІ");
        console.log("=".repeat(60));
        
        const dayResult = this.calculateTrade("day");
        const nightResult = this.calculateTrade("night");
        
        this.printResults(dayResult, nightResult);
        
        return { day: dayResult, night: nightResult };
    }
    
    printResults(day, night) {
        console.log("\n📊 РЕЗУЛЬТАТИ РОЗРАХУНКІВ:");
        console.log("-".repeat(50));

        console.log(`\n ДЕНЬ:`);
        console.log(`   Чистий баланс мережі: ${day.netBalance.toFixed(2)} МВт`);
        if (day.hasExcess && day.exportMW > 0) {
            console.log(`    Продано: ${day.exportMW.toFixed(2)} МВт`);
            console.log(`    Дохід: ${day.totalIncome.toFixed(2)} тис. грн`);
            if (day.wastedMW > 0) console.log(`    Не продано (немає ліній): ${day.wastedMW.toFixed(2)} МВт`);
        } else if (day.needToBuy && day.importMW > 0) {
            console.log(`    Куплено: ${day.importMW.toFixed(2)} МВт`);
            console.log(`    Витрати: ${day.totalCost.toFixed(2)} тис. грн`);
            if (day.deficitMW > 0) console.log(`    Дефіцит (немає ліній): ${day.deficitMW.toFixed(2)} МВт`);
        } else if (day.perfectBalance) {
            console.log(`    Ідеальний баланс (купівля/продаж не потрібні)`);
        }

        console.log(`\nНІЧ:`);
        console.log(`   Чистий баланс мережі: ${night.netBalance.toFixed(2)} МВт`);
        if (night.hasExcess && night.exportMW > 0) {
            console.log(`    Продано: ${night.exportMW.toFixed(2)} МВт`);
            console.log(`    Дохід: ${night.totalIncome.toFixed(2)} тис. грн`);
            if (night.wastedMW > 0) console.log(`    Не продано (немає ліній): ${night.wastedMW.toFixed(2)} МВт`);
        } else if (night.needToBuy && night.importMW > 0) {
            console.log(`    Куплено: ${night.importMW.toFixed(2)} МВт`);
            console.log(`    Витрати: ${night.totalCost.toFixed(2)} тис. грн`);
            if (night.deficitMW > 0) console.log(`    Дефіцит (немає ліній): ${night.deficitMW.toFixed(2)} МВт`);
        } else if (night.perfectBalance) {
            console.log(`    Ідеальний баланс (купівля/продаж не потрібні)`);
        }
   
        const totalProfit = day.netProfit + night.netProfit;
        console.log(`\nПІДСУМОК ЗА ДОБУ:`);
        console.log(`   Загальний прибуток: ${totalProfit.toFixed(2)} тис. грн`);
        if (totalProfit > 0) {
            console.log(`    Електромережа отримала прибуток!`);
        } else if (totalProfit < 0) {
            console.log(`    Електромережа спрацювала у збиток.`);
        } else {
            console.log(`    Електромережа спрацювала у нуль.`);
        }
        console.log("-".repeat(50));
    }
}


function createExampleGrid() {
    const grid = new ElectricalGrid();

    grid.addElement(new PowerPlant("ТЕС-1", 45));
    grid.addElement(new PowerPlant("АЕС-2", 80));
    grid.addElement(new PowerPlant("ТЕЦ-3", 30));

    grid.addElement(new SolarPanel("Сонячна ферма Південь", 4));
    grid.addElement(new SolarPanel("Сонячний парк Схід", 3));
    grid.addElement(new SolarPanel("Сонячні панелі Дах", 1.5));

    grid.addElement(new ResidentialBuilding("ЖК Сонячний", 320));
    grid.addElement(new ResidentialBuilding("ЖК Затишний", 180));
    grid.addElement(new ResidentialBuilding("ЖК Центральний", 450)); 
    grid.addElement(new ResidentialBuilding("Малий будинок", 45));

    grid.addElement(new PowerLine("Лінія Польща", 25, 2.8));  
    grid.addElement(new PowerLine("Лінія Угорщина", 15, 2.5));
    grid.addElement(new PowerLine("Лінія Словаччина", 20, 2.2));
    grid.addElement(new PowerLine("Лінія Румунія", 10, 1.9));
    
    return grid;
}

const myGrid = createExampleGrid();
const results = myGrid.calculateFullDay();


console.log("\n\n");
console.log("ДОДАТКОВИЙ ПРИКЛАД 2: Дефіцит вдень, надлишок вночі");

const grid2 = new ElectricalGrid();

grid2.addElement(new ResidentialBuilding("Місто N", 800)); 
grid2.addElement(new ResidentialBuilding("Місто M", 350));
grid2.addElement(new SolarPanel("Маленька ферма", 2));
grid2.addElement(new PowerPlant("Дизель-генератор", 10));
grid2.addElement(new PowerLine("Лінія Імпорт-1", 30, 3.0));
grid2.addElement(new PowerLine("Лінія Імпорт-2", 20, 2.4));

console.log("\n--- Сценарій дефіциту ---");
grid2.calculateFullDay();

console.log("\n\n");
console.log(" ДОДАТКОВИЙ ПРИКЛАД 3: Великий надлишок енергії");

const grid3 = new ElectricalGrid();

grid3.addElement(new PowerPlant("Мега ТЕС", 95));
grid3.addElement(new PowerPlant("ГЕС-1", 60));
grid3.addElement(new SolarPanel("Гігантське поле", 5));
grid3.addElement(new SolarPanel("Поле-2", 4));
grid3.addElement(new ResidentialBuilding("Невелике село", 50));
grid3.addElement(new PowerLine("Експорт-захід", 40, 2.9));
grid3.addElement(new PowerLine("Експорт-північ", 35, 3.2));

console.log("\n--- Сценарій надлишку ---");
grid3.calculateFullDay();