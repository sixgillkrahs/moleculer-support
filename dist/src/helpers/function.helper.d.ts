import mongoose from 'mongoose';
export default class FunctionHelper {
    /** Convert string to unicode
     * @param str string value
     * @output string result
     */
    convertUnicode(str: string): string;
    /** Generate random a string with number format
     * @param length numbers characters
     * @param startString character start
     * @param endString character end
     * @param delimiter character delimiter
     * @output string result
     */
    generateRandomNumber(length: number, startString?: string, endString?: string, delimiter?: string): string;
    /** Generate random a upper string
     * @param length numbers characters
     * @param startString character start
     * @param endString character end
     * @param delimiter character delimiter
     * @output string result
     */
    generateRandomUpperString(length: number, startString?: string, endString?: string, delimiter?: string): string;
    /** Generate random a string with a patter
     * @param pattern characters
     * @param length numbers characters
     * @param option numbers characters
     * @param startString character start
     * @param endString character end
     * @param delimiter character delimiter
     * @output string result
     */
    generateRandomStringCustom(pattern: string, length: number, option?: Record<string, any>, startString?: string, endString?: string, delimiter?: string): string;
    /** Remove all space and special characters of a string
     * @param text string value input
     * @output string result
     */
    removeAllSpaceAndSpecialChars(text: string): string;
    /** Convert string to key code
     * @param text string value input
     * @output string result
     */
    convertToKeyCode(text: string): string;
    /** Compare 2 json
     * @param jsonObj object json need to compare
     * @param compareJsonObj object json use to compare
     * @output boolean value
     */
    jsonCompare(jsonObj: any, compareJsonObj: any): boolean;
    /** Find a character in a string
     * @param str string value input
     * @param charToCount character need to find
     * @output number value
     */
    findOccurrences(str: string, charToCount: string): number;
    /** Replace string with specific
     * @param str string value input
     * @param strRep value need to replace
     * @param repStr value use to replace
     * @output string replaced
     */
    replaceString(str: string, strRep: string, repStr: string): string;
    getFirstCharsOfString(str: string): string;
    trimDynamic(obj: any): any;
    getCurrentDateByFormat(date?: number, dateFm?: string): Promise<string>;
    convertToDate(inputParams: string | number): Date | null;
    convertStringToDate(strDate: string, typeFrm?: string): Date | null;
    convertStringToNumber(strNum: string): number | null;
    convertDateTimeToStringISO(dateTime: string | number, numberDayAgo?: number, isOnlyGetDate?: boolean): string;
    validateEmailAddress(email: string): boolean;
    validPhoneNumber(strPhone: string): boolean;
    convertStringToPhone(strPhone: string): string;
    getDateStringFormat(date?: number | Date | null): Promise<string>;
    translateContent(contentObj: any, languageCode?: string): any;
    convertToMongoId(params: string | string[]): mongoose.Types.ObjectId | mongoose.Types.ObjectId[];
    isEmpty(inputValue: any): boolean;
    randomStringNumber(length: number): string;
    isPhoneNumber(value: string): boolean;
    getFullTextAddress(province: any, district: any, ward: any, address: string): string;
}
