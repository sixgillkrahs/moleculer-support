import crypto from "crypto";
import _ from "lodash";
const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY || "12345678901234567890123456789012"; // 32 bytes
const IV_KEY = process.env.IV_KEY || "0123456789012345"; // 16 bytes
export default class EncryptHelper {
    encrypt(text) {
        const cipher = crypto.createCipheriv("aes-256-cbc", Buffer.from(ENCRYPTION_KEY), Buffer.from(IV_KEY));
        let crypt = cipher.update(text, "utf8", "hex");
        crypt += cipher.final("hex");
        return crypt;
    }
    decrypt(text) {
        if (text === null || typeof text === "undefined")
            return text;
        const decipher = crypto.createDecipheriv("aes-256-cbc", Buffer.from(ENCRYPTION_KEY), Buffer.from(IV_KEY));
        let dec = decipher.update(text, "hex", "utf8");
        dec += decipher.final("utf8");
        return dec;
    }
    encryptIv(text) {
        const iv = Buffer.from(IV_KEY, "utf8");
        const cipher = crypto.createCipheriv("aes-256-cbc", Buffer.from(ENCRYPTION_KEY), iv);
        let encrypted = cipher.update(text);
        encrypted = Buffer.concat([encrypted, cipher.final()]);
        return iv.toString("hex") + ":" + encrypted.toString("hex");
    }
    decryptIv(text) {
        if (!text)
            return null;
        const textParts = text.split(":");
        const iv = Buffer.from(textParts.shift() || "", "hex");
        const encryptedText = Buffer.from(textParts.join(":"), "hex");
        const decipher = crypto.createDecipheriv("aes-256-cbc", Buffer.from(ENCRYPTION_KEY), iv);
        let decrypted = decipher.update(encryptedText);
        decrypted = Buffer.concat([decrypted, decipher.final()]);
        return decrypted.toString();
    }
    encryptBase64(text) {
        if (_.isEmpty(text))
            return null;
        return Buffer.from(text).toString("base64");
    }
    decryptBase64(text) {
        if (_.isEmpty(text))
            return null;
        return Buffer.from(text, "base64");
    }
    encryptBase64Object(obj) {
        if (_.isEmpty(obj))
            return null;
        const objJsonStr = JSON.stringify(obj);
        return Buffer.from(objJsonStr).toString("base64");
    }
    decryptBase64Object(text) {
        if (_.isEmpty(text))
            return null;
        try {
            const buffer = Buffer.from(text, "base64").toString("utf8");
            return JSON.parse(buffer);
        }
        catch (e) {
            console.log("invalid object decryptBase64Object");
            return null;
        }
    }
    desEcbEncrypt(plaintext, key) {
        const realKey = Buffer.from(key.substr(0, 8), "utf8");
        const cipher = crypto.createCipheriv("des-ecb", realKey, null);
        cipher.setAutoPadding(true);
        let encrypted = cipher.update(plaintext, "utf8", "base64");
        encrypted += cipher.final("base64");
        return encrypted;
    }
    desEcbDecrypt(cipherText, key) {
        try {
            const realKey = Buffer.from(key.substr(0, 8), "utf8");
            const decipher = crypto.createDecipheriv("des-ecb", realKey, null);
            decipher.setAutoPadding(true);
            let decrypted = decipher.update(cipherText, "base64", "utf8");
            decrypted += decipher.final("utf8");
            return decrypted;
        }
        catch (e) {
            return false;
        }
    }
    hashMD5(plaintext) {
        return crypto.createHash("md5").update(plaintext).digest("hex");
    }
    hashSHA256(plaintext) {
        return crypto.createHash("sha256").update(plaintext).digest("hex");
    }
}
