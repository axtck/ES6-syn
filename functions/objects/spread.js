const defaultPc = {
    cpu: "default",
    ram: "default",
    case: "NZXT H-510",
    motherboard: {
        brand: "ASUS",
        chipset: "default"
    }
};

const newRam = ["Hyper-Z", "Corsair"];
const newChipset = ["z590", "b450", "z490", "z390"];

const updatePcs = (templatePc, rams, chipsets) => {
    if (!templatePc || (!rams?.length && !chipsets?.length)) return;

    let longest = rams?.length < chipsets?.length ? chipsets : rams;

    return longest.map((x, i) => {
        return {
            ...templatePc,
            ram: rams?.[i] ? rams[i] : templatePc.ram,
            motherboard: {
                ...templatePc.motherboard,
                chipset: chipsets?.[i] ? chipsets[i] : templatePc.motherboard.chipset
            }
        }
    });
}

const updatedPcs = updatePcs(defaultPc, newRam, newChipset);

console.log("Updated pcs 1");
updatedPcs.forEach((pc) => console.log(pc));

const updatePc2 = (templatePc, rams, chipsets) => {
    if (!templatePc || (!rams?.length && !chipsets?.length)) return;

    let longest = rams?.length < chipsets?.length ? chipsets : rams;

    const updatedPcs = [];

    for (let i = 0; i < longest.length; i++) {
        const newPc = { ...templatePc }
        newPc.ram = rams?.[i] ? rams[i] : templatePc.ram;

        const newMotherboard = { ...templatePc.motherboard };
        newMotherboard.chipset = chipsets?.[i] ? chipsets[i] : templatePc.motherboard.chipset;
        newPc.motherboard = newMotherboard;

        updatedPcs.push(newPc);
    }

    return updatedPcs;
}

const updatedPcs2 = updatePc2(defaultPc, newRam, newChipset);

console.log("Updated pcs 2");
updatedPcs2.forEach((pc) => console.log(pc));
