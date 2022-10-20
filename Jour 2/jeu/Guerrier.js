import { Personnage } from "./Personnage.js";
import { Spell } from "./Spell.js";

export class Guerrier extends Personnage {
	attaques = [
		new Spell("Hache tournoyante", 40, 10, () => {
			console.log("*** FOIIUUUUU ***");
		}),
		new Spell("Hache Fracassante", 20, 5, () => {
			console.log("*** FRACAS ***");
		}),
		new Spell("Execution", 100, 40, () => {
			console.log("*** WAW QUELLE FORCE !!!! ***");
		}),
	];
	constructor(name, id) {
		super(name, id);
		this.hp = 1000;
		this.stamina = 100;
		this.strength = 15;
	}
}
