

export const BankData = [
    {
        id: 1,
        name: 'First bank',
        count: 12,
    },

    {
        id: 2,
        name: 'UBA bank',
        count: 10
    },

    {
        id: 3,
        name: 'Wema bank',
        count: 4
    },


    {
        id: 4,
        name: 'FCMB bank',
        count: 8
    },

    {
        id: 5,
        name: 'Polarise bank',
        count: 6
    },

    {
        id: 6,
        name: 'Access',
        count: 6
    },

    {
        id: 7,
        name: 'Polarise',
        count: 6
    },

    {
        id: 8,
        name: 'Unity',
        count: 6
    },


    {
        id: 9,
        name: 'Stanbic',
        count: 6
    },

    {
        id: 10,
        name: 'Sterling',
        count: 6
    },


    {
        id: 11,
        name: 'FCMB',
        count: 6
    },

    {
        id: 12,
        name: 'ABMFB',
        count: 6
    },

    {
        id: 13,
        name: 'Heritage',
        count: 6
    },

    {
        id: 14,
        name: 'JAIZ',
        count: 6
    },

    {
        id: 15,
        name: 'GTB',
        count: 6
    },

    {
        id: 16,
        name: 'NIBBS_NIP',
        count: 6
    },

    {
        id: 17,
        name: 'Zenith',
        count: 6
    },

    {
        id: 18,
        name: 'Ecobank',
        count: 6
    },


    {
        id: 19,
        name: 'Union Advise',
        count: 6
    },

    {
        id: 20,
        name: 'Keyston',
        count: 6
    },

    {
        id: 21,
        name: 'Fidelity',
        count: 6
    },

    {
        id: 22,
        name: 'CMXCHANGE',
        count: 6
    },

    {
        id: 23,
        name: 'PMXCHANGE',
        count: 6
    },




]



export const BankOnNIP = [
    {
        id: 1,
        name: 'First bank',
        count: 6
       
    },

    {
        id: 2,
        name: 'UBA bank',
        count: 6
  
    },

    {
        id: 3,
        name: 'Wema bank',
        count: 4
    },


    {
        id: 4,
        name: 'FCMB bank',
        count: 8
    },

    {
        id: 5,
        name: 'Polarise bank',
        count: 6
    },

    {
        id: 6,
        name: 'Polarise bank',
        count: 6
    },

    {
        id: 7,
        name: 'Polarise bank',
        count: 6
    },

    {
        id: 8,
        name: 'Polarise bank',
        count: 6
    },

]


export const generateRandom = (total)=>{
   
    
    let lotteryNumbers = [];
    for (let i = 1; i <total; i++) {
        lotteryNumbers.push(i);
    }
    console.log(lotteryNumbers)
    return lotteryNumbers;
   
       
   
}