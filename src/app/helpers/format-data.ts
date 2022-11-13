//map data to correct format
export const formatData = (inputArray: string[]) => {
    return inputArray.map((line: any) => {
        const filedsArray = line.split(',');
        const [reference, accountNumber, description, startBalance, mutation, endBalance] = filedsArray;
        return {
            reference, accountNumber, description, startBalance, mutation, endBalance
        }
    });
};

//convert string file to array
export const convertTextToArray = (textFile: string) => {
    const arrayDatalines = textFile.split('\n').filter((item: any, i: number) => {
        //first lines are headers so we have to ignore
        if (i > 0) {
            return item;
        }
    });

    return formatData(arrayDatalines);

}

export const parseXML = (textFile: string) => {
    const parser = new DOMParser();

    //convert text to a DOM so later we can make a query
    const xmlDoc = parser.parseFromString(textFile, "text/xml");

    //get all repeated tags
    const listItems = xmlDoc.querySelectorAll('Details > Detail');

    let parsedData: any = [];

    //read values from each inner tags
    listItems.forEach((element: Element) => {
        const reference = element.querySelector('Reference')?.innerHTML;
        const accountNumber = element.querySelector('AccountNumber')?.innerHTML;
        const description = element.querySelector('Description')?.innerHTML;
        const startBalance = element.querySelector('StartBalance')?.innerHTML;
        const mutation = element.querySelector('Mutation')?.innerHTML;
        const endBalance = element.querySelector('EndBalance')?.innerHTML;
        parsedData.push({ reference, accountNumber, description, startBalance, mutation, endBalance });
    });

    return parsedData;
}