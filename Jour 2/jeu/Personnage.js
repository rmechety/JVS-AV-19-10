import { changevaluewithid } from "./Ui.js";

export class Personnage {
	// Declaration attribut en dehors du constructeur
	_hp = 100;
	_strength = 10;
	_stamina = 25;
	opponent = null;
	attaques = [];
	id = 1;
	constructor(name, id) {
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
}
