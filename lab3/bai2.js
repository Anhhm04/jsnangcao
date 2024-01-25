const checkDogs = function (dogsJulia, dogsKate) {
    const dogsJuliaCorrected = dogsJulia.slice();
    dogsJuliaCorrected.splice(0, 1);
    dogsJuliaCorrected.splice(-2);
    // dogsJulia.slice(1,3);
    const dogs = dogsJuliaCorrected.concat(dogsKate);
    console.log(dogs);

    //"Chó số 1 là người lớn và 5 tuổi" hay chó con "Chó số 2 vẫn là chó con �"
    dogs.forEach(function (dog, i) {
        if (dog >= 3) {
            console.log(`Chó số ${i + 1} là người lớn và ${dog} tuổi`)
        } else {
            console.log(`Chó số ${i + 1} vẫn là chó con`)
        }
    })
}
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3])
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4])