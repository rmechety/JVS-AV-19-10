/* jshint esversion: 6 */

import { changevaluewithid } from "./Ui.js";
import { Spell } from "./Spell.js";

export class Personnage {
	// Declaration attribut en dehors du constructeur

	constructor(name, id) {
		this._hp = 100;
		this._strength = 10;
		this._stamina = 25;
		this.opponent = null;
		this.attaques = [];
		this.id = 1;
		this.name = name;
		if (id != undefined) {
			this.id = id;
		}
		changevaluewithid("name" + this.id, this.name);
	}

	subirDommage(montant_dommage) {
		this.hp -= montant_dommage;
	}

	attaquer(target) {
		if (this.stamina >= 2) {
			target.subirDommage(this.strength);
			this.stamina -= 2;
		}
	}

	annonce() {
		console.log(
			`Je m'appelle ${this.name} mes stats sont :\nhp : ${this.hp}\nstrength : ${this.strength}\nstamina : ${this.stamina}`
		);
	}

	jouertour(choix) {
		// choix est un nombre
		// [attaque1, attaque2, attaque3];
		if (this.attaques.length < choix - 1) {
			this.attaques[action - 1].cast(this, this.opponent);
		} else {
			this.attaquer(this.opponent);
		}
	}

	get hp() {
		return this._hp;
	}

	get stamina() {
		return this._stamina;
	}

	set hp(value) {
		this._hp = value;
		changevaluewithid("hp" + this.id, value);
	}

	set stamina(value) {
		this._stamina = value;
		changevaluewithid("stamina" + this.id, value);
	}

	afficherCoups() {
		let i = 1;
		for (let attaque of this.attaques) {
			changevaluewithid(i, attaque.nom);
			i++;
		}
		changevaluewithid(i, "Attaque");
	}

	multiattaque(...args) {
		// Nested functions
		const executerattaque = (attaque) => {
			if (attaque instanceof Spell) {
				attaque.cast(this, this.opponent);
			} else {
				this.attaquer(this.opponent);
			}
		};

		const executerarrayattaque = (arr) => {
			//
			arr.forEach((attaque) => {
				executerattaque(attaque);
			});
			//
		};
		// END Nested functions
		// regarde nombre de parametres qui ont ete place

		console.log(`${args}`);

		switch (args.length) {
			case 0:
				return;
			case 1:
				if (args[0] instanceof Array) {
					executerarrayattaque(args[0]);
				} else {
					executerattaque(args[0]);
				}
				return;
			default:
				executerarrayattaque(args);
				break;
		}
	}
	// multiattaque(Array attaquesaeffectuer)
	// multiattaque(Spell attaque)
	// multiattaque(Spell attaquesa,Spell attaquesb,...,Spell attaquesN)
}
