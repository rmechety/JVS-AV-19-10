export class Spell {
	constructor(nom, damage, staminacost, castcallback) {
		this.nom = nom;
		this.damage = damage;
		this.staminacost = staminacost;
		this.castcallback = castcallback;
	}
	cast(caster, target) {
		caster.stamina -= staminacost;
		target.subirDommage(this.damage);
		this.castcallback(caster, target);
	}
}
