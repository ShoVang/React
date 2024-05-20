import { ReactNode } from "react";


export class Report {
    // class vars 
    balance: number;
    income: number;
    expense: number;
    historys: History[];

    // shit to pass things 
    static balance: ReactNode;
    static income: ReactNode;
    static expense: ReactNode;
    static historys: ReactNode;



    constructor() {
        this.balance = 100;
        this.income = 50;
        this.expense = 20;
        this.historys = [];
    }

    // Method to add a new history entry
    addHistory(description: string, amount: number) {
        const newEntry = new History(description, amount);
        newEntry.description = description;
        newEntry.amount= amount; 
        this.historys.push(newEntry);
        console.log(newEntry);
    }
}

export class History {
    //vars
    description: string;
    amount: number;
     // shit to pass things 
    static description: ReactNode;
    static amount: ReactNode;
    constructor() {
        this.description = "";
         this.amount = 50 ;
    }

}

//export default History;
//export default Report;

