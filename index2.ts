
let heroName: string = "Arion";
let heroAge: number = 30;
let isHeroReadyForBattle: boolean = true;

let gold: number = 5000;          
let foodSupply: number = 120;      
let soldiers: number = 200;        


let additionalGold: number = 1500;
let experiencePoints: number = 75;


function addGoldFromAdventure(currentGold: number, goldFromAdventure: number): number {
    return currentGold + goldFromAdventure;
}


gold = addGoldFromAdventure(gold, additionalGold);


function kurangiKesehatan(jumlahPrajurit: number, poinHilang: number): void {
    const healthPerSoldier: number = 100;
    let totalHealthLost: number = jumlahPrajurit * poinHilang;

    console.log(`Total poin kesehatan yang hilang: ${totalHealthLost}`);
    
    if (totalHealthLost >= jumlahPrajurit * healthPerSoldier) {
        console.log("Semua prajurit tidak bisa bertarung lagi.");
    } else {
        let remainingHealth: number = (jumlahPrajurit * healthPerSoldier) - totalHealthLost;
        console.log(`Sisa kesehatan prajurit: ${remainingHealth}`);
    }
}

function rangkumanMisiArion(heroName: string, goldCollected: number, xpGained: number): void {
    console.log("Rangkuman Misi Arion");
    console.log("--------------------");
    console.log(`Nama Pahlawan: ${heroName}`);
    console.log(`Emas yang dikumpulkan: ${goldCollected} keping emas`);
    console.log(`Poin pengalaman yang didapat: ${xpGained} XP`);
}

kurangiKesehatan(10, 5);  
rangkumanMisiArion(heroName, additionalGold, experiencePoints);  
