export function flattenObject(obj: any){
    const flattenedObj: any = {};
    const parentKey = "";
    
    const generateFlattenedObject=(obj: any, parentKey: string)=>{
        for(let key in obj){
            const currentKey = parentKey + key;
            const value = obj[key];
            if(typeof value=== "object"){
                generateFlattenedObject(value, currentKey + ".");
            }else{
                flattenedObj[currentKey] = value;

            }
        }
    }
    generateFlattenedObject(obj, parentKey);
    return flattenedObj;
}