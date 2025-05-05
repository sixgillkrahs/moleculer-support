const locationResource = require("../defined/locations");

import randomize from 'randomatic';
import jsonDiff from 'json-diff';
import _ from 'lodash'
import mongoose from 'mongoose';
import dateFrm from 'dateformat'

class FunctionHelper {
    /** Convert string to unicode
     * @param str string value
     * @output string result
     */
    convertUnicode(str: string): string {
        try {
            return str
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .replace(/đ/g, 'd')
                .replace(/Đ/g, 'D');
        } catch (e) {
            return '';
        }
    }

    /** Generate random a string with number format
     * @param length numbers characters
     * @param startString character start
     * @param endString character end
     * @param delimiter character delimiter
     * @output string result
     */
    generateRandomNumber(
        length: number,
        startString: string = '',
        endString: string = '',
        delimiter: string = ''
    ): string {
        try {
            const numberGen = randomize('0', length, {});
            if (!endString) {
                return `${startString}${delimiter}${numberGen}`;
            }
            return `${startString}${delimiter}${numberGen}${delimiter}${endString}`;
        } catch (e) {
            return '';
        }
    }

    /** Generate random a upper string
     * @param length numbers characters
     * @param startString character start
     * @param endString character end
     * @param delimiter character delimiter
     * @output string result
     */
    generateRandomUpperString(
        length: number,
        startString: string = '',
        endString: string = '',
        delimiter: string = ''
    ): string {
        try {
            const stringGen = randomize('A', length, {});
            if (_.isEmpty(endString)) {
                return `${startString}${delimiter}${stringGen}`;
            }
            return `${startString}${delimiter}${stringGen}${delimiter}${endString}`;
        } catch (e) {
            return '';
        }
    }

    /** Generate random a string with a patter
     * @param pattern characters
     * @param length numbers characters
     * @param option numbers characters
     * @param startString character start
     * @param endString character end
     * @param delimiter character delimiter
     * @output string result
     */
    generateRandomStringCustom(
        pattern: string,
        length: number,
        option: Record<string, any> = {},
        startString: string = '',
        endString: string = '',
        delimiter: string = ''
    ): string {
        try {
            const stringGen = randomize(pattern, length, option);
            return `${startString}${delimiter}${stringGen}${delimiter}${endString}`;
        } catch (e) {
            return '';
        }
    }

    /** Remove all space and special characters of a string
     * @param text string value input
     * @output string result
     */
    removeAllSpaceAndSpecialChars(text: string): string {
        try {
            return text.replace(/[^A-Z0-9_]+/gi, '');
        } catch (e) {
            return '';
        }
    }

    /** Convert string to key code
     * @param text string value input
     * @output string result
     */
    convertToKeyCode(text: string): string {
        const str = this.convertUnicode(text);
        return this.removeAllSpaceAndSpecialChars(str);
    }

    /** Compare 2 json
     * @param jsonObj object json need to compare
     * @param compareJsonObj object json use to compare
     * @output boolean value
     */
    jsonCompare(jsonObj: any, compareJsonObj: any): boolean {
        const result = jsonDiff.diffString(jsonObj, compareJsonObj);
        return !result;
    }

    /** Find a character in a string
     * @param str string value input
     * @param charToCount character need to find
     * @output number value
     */
    findOccurrences(str: string, charToCount: string): number {
        return str.split(charToCount).length - 1;
    }

    /** Replace string with specific
     * @param str string value input
     * @param strRep value need to replace
     * @param repStr value use to replace
     * @output string replaced
     */
    replaceString(str: string, strRep: string, repStr: string): string {
        if (!str) {
            return '';
        }
        if (!strRep) {
            return str;
        }
        const newStr = str.replace(new RegExp(strRep, 'gi'), repStr);
        return newStr;
    }

    getFirstCharsOfString(str: string): string {
        if (!str) {
            return "";
        }
        const strArr = str.split(" ");
        if (!strArr || !Array.isArray(strArr) || strArr.length < 1) {
            return str;
        }
        let returnText = "";
        strArr.map((x) => {
            returnText += x.charAt(0);
            return x;
        });
        return returnText;
    }

    // Trim all fields of a object or array objects
    trimDynamic(obj: any): any {
        if (!Array.isArray(obj) && typeof obj !== "object") return obj;

        return Object.keys(obj).reduce(
            (acc: { [key: string]: any }, key: string) => {
                acc[key.trim()] =
                    typeof obj[key] === "string"
                        ? obj[key].trim()
                        : this.trimDynamic(obj[key]);
                return acc;
            },
            Array.isArray(obj) ? [] : {}
        );
    }

    // Get current date format from date timestamp value
    getCurrentDateByFormat(date: number = Date.now(), dateFm: string = "yyyymmdd-hhMMss"): string {
        try {
            return dateFrm(date, dateFm);
        } catch (e) {
            return "";
        }
    }

    // Convert value to date
    convertToDate(inputParams: string | number): Date | null {
        try {
            if (!inputParams) {
                return null;
            }
            const timeStamp = parseInt(inputParams as string, 10);
            if (_.isNumber(timeStamp)) {
                return new Date(timeStamp);
            }
            return new Date(inputParams);
        } catch (e) {
            return null;
        }
    }

    // Convert string value to date
    convertStringToDate(strDate: string, typeFrm: string = "yyyy-MM-dd"): Date | null {
        try {
            if (!strDate) {
                return null;
            }
            const date = new Date(strDate);
            return date;
        } catch (e) {
            return null;
        }
    }

    // Convert string value to number
    convertStringToNumber(strNum: string): number | null {
        if (!strNum || _.isEmpty(strNum)) {
            return null;
        }
        return Number(strNum.replace(/[^0-9\.]+/g, ""));
    }

    // Convert string value to number
    convertDateTimeToStringISO(dateTime: string | number, numberDayAgo: number = 0, isOnlyGetDate: boolean = true): string {
        let strDate = "";
        let dateObj: Date;

        if (_.isNumber(dateTime)) {
            dateObj = new Date(dateTime);
        } else {
            dateObj = new Date(dateTime);
        }

        if (numberDayAgo && _.isNumber(numberDayAgo)) {
            dateObj = new Date(dateObj.getTime() - numberDayAgo * 864e5); // trừ đi số ngày
        }

        if (isOnlyGetDate) {
            dateObj.setUTCHours(0, 0, 0, 0);
        }

        strDate = dateObj.toISOString();
        return strDate;
    }

    // Validate email address
    validateEmailAddress(email: string): boolean {
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return regex.test(email);
    }

    // Validate string is format phone number
    validPhoneNumber(strPhone: string): boolean {
        const regex = /^[0-9]{10}$/;
        return regex.test(strPhone);
    }

    // Convert a string to a phone number format
    convertStringToPhone(strPhone: string): string {
        if (strPhone.indexOf("/") > -1) {
            const strPhoneArr = strPhone.split("/");
            const strPhoneFirst = strPhoneArr[0];
            strPhone = strPhoneFirst;
        }
        let formatPhone = strPhone.replace(/ /g, "");
        formatPhone = formatPhone.replace(/^84/, "0");
        formatPhone = formatPhone.replace("+84", "0");
        formatPhone = formatPhone.replace("+84", "0");
        formatPhone = formatPhone.replace("+84(0)", "0");
        formatPhone = formatPhone.replace("(+84)", "0");
        formatPhone = formatPhone.replace("0(0)", "0");
        formatPhone = this.removeAllSpaceAndSpecialChars(formatPhone);
        return formatPhone;
    }

    // Get date string format
    getDateStringFormat(date: number | Date | null = null): string {
        if (date === null) {
            return "";
        }

        if (_.isNumber(date)) {
            return dateFrm(new Date(date), "yymdhMs");
        }

        if (_.isDate(date)) {
            return dateFrm(date, "yymdhMs");
        }

        return "";
    }

    // Set content child properties by language code
    translateContent(contentObj: any, languageCode: string = "vi"): any {
        if (!contentObj) {
            return contentObj;
        }
        const dataReturn: any = {};
        if (
            contentObj[languageCode] == null ||
            contentObj[languageCode] === undefined ||
            contentObj[languageCode] === "" ||
            Object.keys(contentObj).length < 1
        ) {
            dataReturn[languageCode] = contentObj;
            return dataReturn;
        }
        dataReturn[languageCode] = contentObj[languageCode];
        return dataReturn;
    }

    // Convert value to mongoId
    convertToMongoId(params: string | string[]): mongoose.Types.ObjectId | mongoose.Types.ObjectId[] {
        if (Array.isArray(params)) {
            return params.map((id) => new mongoose.Types.ObjectId(id));
        }
        if (typeof params === "string") {
            return new mongoose.Types.ObjectId(params);
        }
        return params;
    }

    // Check input param is empty
    isEmpty(inputValue: any): boolean {
        if (typeof inputValue === "number") {
            return false;
        }
        if (typeof inputValue === "boolean") {
            return false;
        }
        if (!inputValue) {
            return true;
        }
        if (typeof inputValue === "object" && Object.keys(inputValue).length < 1) {
            return true;
        }
        return Array.isArray(inputValue) && inputValue.length < 1;
    }

    // Random a string contains only number
    randomStringNumber(length: number): string {
        const result: string[] = [];
        const characters = "0123456789";
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result.push(
                characters.charAt(Math.floor(Math.random() * charactersLength))
            );
        }
        return result.join("");
    }

    // Check string is valid phone format
    isPhoneNumber(value: string): boolean {
        const vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
        return vnf_regex.test(value || "");
    }

    // Get full string address
    getFullTextAddress(
        province: any,
        district: any,
        ward: any,
        address: string
    ): string {
        let provinceText = province;
        let districtText = district;
        let wardText = ward;

        if (_.isNumber(province) && province > 0) {
            const provinceObj = locationResource.LIST_PROVINCE.find((x: any) => x.id === province);
            provinceText = provinceObj ? provinceObj.name : "";
        }

        if (_.isNumber(district) && district > 0) {
            const districtObj = locationResource.LIST_DISTRICT.find((x: any) => x.id === district);
            districtText = districtObj ? districtObj.name : "";
        }

        if (_.isNumber(ward) && ward > 0) {
            const wardObj = locationResource.LIST_WARD.find((x: any) => x.id === ward);
            wardText = wardObj ? wardObj.name : "";
        }

        const fullAddress = !address || address.length < 1
            ? `${wardText}, ${districtText}, ${provinceText}`
            : `${address}, ${wardText}, ${districtText}, ${provinceText}`;

        return fullAddress;
    }



}

export default FunctionHelper;