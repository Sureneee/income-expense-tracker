
import _ from "lodash";

const mockData = [
    {
        balance: 10000,
        userId: "user-3"
    },
    {
        balance: 20000,
        userId: "user-2"
    },{
        balance: 30000,
        userId: "user-1"
    },{
        balance: 40000,
        userId: "user-3"
    },{
        balance: 50000,
        userId: "user-2"
    },{
        balance: 60000,
        userId: "user-1"
    },
] 

const groupedData = _.groupBy(mockData, "userId");
console.log (groupedData)

const averageBalance = groupedData.balance.reduce()
cosn
console.log (averageBalance)