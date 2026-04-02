import * as alt from 'alt';
import * as natives from 'natives';

const interiorSetList = {
	meth_basic: ['light_stock', 'meth_app', 'meth_staff_01', 'meth_staff_02', 'meth_basic_lab_01', 'meth_basic_lab_02', 'meth_basic_lab_01_2', 'meth_basic_lab_02_2', 'meth_stock'],
	meth_update: ['light_stock', 'meth_app', 'meth_staff_01', 'meth_staff_02', 'meth_update_lab_01', 'meth_update_lab_02', 'meth_update_lab_01_2', 'meth_update_lab_02_2', 'meth_stock'],
	weed_basic: ['weed_app', 'weed_staff_01', 'weed_staff_02', 'weed_basic_lamp', 'weed_fan_basick', 'weed_stock'],
	weed_update: ['weed_app', 'weed_staff_01', 'weed_staff_02', 'weed_update_lamp', 'weed_fan_update', 'weed_stock'],
	weed_v1: ['weed_plant_v1'],
	weed_v2: ['weed_plant_v2'],
	weed_v3: ['weed_plant_v3'],
	weed_v4: ['weed_plant_v4'],
	weed_v5: ['weed_plant_v5'],
	weed_v6: ['weed_plant_v6'],
	weed_v7: ['weed_plant_v7'],
	weed_v8: ['weed_plant_v8'],
	weed_v9: ['weed_plant_v9'],
	coke: ['coke_app', 'coke_staff_01', 'coke_staff_02', 'coke_stock'],
	money: ['light_stock', 'money_app', 'money_staff_01', 'money_stock'],
	money_pr: ['money_staff_01', 'money_staff_02'],
	weapon: ['light_stock', 'weapon_app', 'weapon_staff_01', 'weapon_stock'],
	empty: [],
};

const labs = [
	{
		name: 'Cave 4001 Alta Street',
		pos: { x: -326.7500, y: -1356.434, z: 31.295 },
		interiorType: 'int_stock',
		interiorSet: interiorSetList.money,
	},
	{
		name: 'Cave 4008 Carson Av',
		pos: { x: 146.71100, y: -1701.907, z: 29.291 },
		interiorType: 'int_stock',
		interiorSet: interiorSetList.empty,
	},
	{
		name: 'Cave 5023 Magellan Av',
		pos: { x: -1262.992, y: -1123.942, z: 7.6170 },
		interiorType: 'int_stock',
		interiorSet: interiorSetList.empty,
	},
	{
		name: 'Cave 7000 Popular Street',
		pos: { x: 578.09400, y: -423.0649, z: 24.730 },
		interiorType: 'int_stock',
		interiorSet: interiorSetList.coke,
	},
	{
		name: 'Cave 6012 bis Capital Boulevard',
		pos: { x: 939.84500, y: -1492.575, z: 30.085 },
		interiorType: 'int_stock',
		interiorSet: interiorSetList.empty,
	},
	{
		name: 'Cave 5171 W.Eclipse Blvd',
		pos: { x: -1982.979, y: -242.9831, z: 34.911 },
		interiorType: 'int_stock',
		interiorSet: interiorSetList.money,
	},
	{
		name: 'Cave 4012 Innocence Blvd',
		pos: { x: -42.68900, y: -1289.172, z: 29.065 },
		interiorType: 'int_stock',
		interiorSet: interiorSetList.empty,
	},
	{
		name: 'Cave 6045 Mirror Park Blvd',
		pos: { x: 793.67700, y: -103.9858, z: 82.031 },
		interiorType: 'int_stock',
		interiorSet: interiorSetList.weed_update,
	},
	{
		name: 'Cave 913 Pyrite Ave',
		pos: { x: -156.2820, y: 6291.4487, z: 31.609 },
		interiorType: 'int_stock',
		interiorSet: interiorSetList.money,
	},
	{
		name: 'Cave 909 Paleto Blvd',
		pos: { x: -28.33600, y: 6471.3950, z: 31.601 },
		interiorType: 'int_stock',
		interiorSet: interiorSetList.meth_update,
	},
	{
		name: 'Cave P862',
		pos: { x: 1381.2700, y: -2076.611, z: 51.998 },
		interiorType: 'int_stock',
		interiorSet: interiorSetList.weapon,
	},
	{
		name: 'Cave 887 East Joshua Road',
		pos: { x: 2846.7390, y: 4449.7680, z: 48.516 },
		interiorType: 'int_stock',
		interiorSet: interiorSetList.empty,
	},
	{
		name: 'Cave 710 route 68',
		pos: { x: 557.59100, y: 2663.4711, z: 42.182 },
		interiorType: 'int_stock',
		interiorSet: interiorSetList.empty,
	},
	{
		name: 'Cave 854 bis Marina Drive',
		pos: { x: 964.56800, y: 3612.4609, z: 32.757 },
		interiorType: 'int_stock',
		interiorSet: interiorSetList.empty,
	},
	{
		name: 'Cave 882 East Joshua Road',
		pos: { x: 2520.8650, y: 4125.2719, z: 38.630 },
		interiorType: 'int_stock',
		interiorSet: interiorSetList.empty,
	},
	{
		name: 'Cave 4036 Carson Ave',
		pos: { x: 452.56200, y: -1981.740, z: 23.185 },
		interiorType: 'int_stock',
		interiorSet: interiorSetList.empty,
	},
];

if (alt.hasResource('map_labs')) {
	alt.on('connectionComplete', initLabs);
}
function initLabs() {
	console.log("DEBUG - INIT LABS");
	labs.forEach((lab) => {
		lab.interiorHash = natives.getInteriorAtCoordsWithType(lab.pos.x, lab.pos.y, lab.pos.z, lab.interiorType);
		if (lab.interiorHash !== 0) {
			natives.refreshInterior(lab.interiorHash);
			lab.interiorSet.forEach((set) => {
				natives.activateInteriorEntitySet(lab.interiorHash, set);
			});
		}
	});
}

// const interiorListKeys = Object.keys(interiorList);
// let currentInteriorID = 0;
// let lastInteriorID = interiorListKeys.length - 1;

// alt.on('keydown', () => {
// 	const interiorHash = natives.getInteriorFromEntity(alt.Player.local.scriptID);
// 	if (interiorHash === 0) return ;
// 	const contextPressed = natives.isControlPressed(0, 51); // context E
// 	const reloadPressed = natives.isControlPressed(0, 45); // reload R
// 	if (contextPressed || reloadPressed) {
// 		natives.refreshInterior(interiorHash);
// 		lastInteriorID = currentInteriorID;
// 		if (contextPressed) {
// 			currentInteriorID++;
// 		} else if (reloadPressed) {
// 			currentInteriorID--;
// 		}
// 		if (currentInteriorID >= interiorListKeys.length) {
// 			currentInteriorID = 0;
// 		}
// 		if (currentInteriorID < 0) {
// 			currentInteriorID = interiorListKeys.length - 1;
// 		}
// 		const lastInterior = interiorList[interiorListKeys[lastInteriorID]];
// 		lastInterior.forEach((set) => {
// 			natives.deactivateInteriorEntitySet(interiorHash, set);
// 		});
// 		const interior = interiorList[interiorListKeys[currentInteriorID]];
// 		interior.forEach((set) => {
// 			natives.activateInteriorEntitySet(interiorHash, set);
// 		});
// 		console.log(`${interiorListKeys[lastInteriorID]} unloaded !`);
// 		console.log(`${interiorListKeys[currentInteriorID]} loaded !`);
// 	}
// });
