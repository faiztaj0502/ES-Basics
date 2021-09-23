const NumberOfTiles = (L, B, tl, tb, ntb, nf)=> {
    const NumberOfTilesPerFloor = (L*B)/(tl*tb);
    const NumberOfTiles = NumberOfTilesPerFloor * nf;
    const NumberOfBoxes= NumberOfTiles / ntb;
    return NumberOfBoxes;
};
console.log(Math.ceil(NumberOfTiles(40, 30, 2, 2, 20, 4)));